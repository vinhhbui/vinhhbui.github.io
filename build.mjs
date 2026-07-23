import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const server = resolve(dist, "server");

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });

for (const file of ["index.html", "projects.html", "blog.html"]) {
  await cp(resolve(root, file), resolve(client, file));
}

await cp(resolve(root, "assets"), resolve(client, "assets"), { recursive: true });

const worker = `export default {
  async fetch(request, env) {
    if (env.ASSETS && typeof env.ASSETS.fetch === "function") {
      return env.ASSETS.fetch(request);
    }
    return new Response("Site assets are unavailable.", { status: 503 });
  }
};
`;

await writeFile(resolve(server, "index.js"), worker, "utf8");
