<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BÙI QUANG VINH - Portfolio</title>
    <style>
        :root {
            --bg-color: #0d0d12;
            --text-main: #00ffcc;
            --text-accent: #ff00ff;
            --border-color: #00ffcc;
            --font-main: 'Courier New', Courier, monospace;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            font-family: var(--font-main);
            margin: 0;
            padding: 20px;
            line-height: 1.6;
            background-image: radial-gradient(circle, rgba(0, 255, 204, 0.05) 1px, transparent 1px);
            background-size: 20px 20px;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            border: 1px solid var(--border-color);
            padding: 30px;
            box-shadow: 0 0 20px rgba(0, 255, 204, 0.2);
            position: relative;
        }

        .container::before {
            content: "SYSTEM OP: ONLINE";
            position: absolute;
            top: -10px;
            left: 20px;
            background: var(--bg-color);
            padding: 0 10px;
            color: var(--text-accent);
            font-size: 0.8rem;
        }

        h1 {
            color: var(--text-accent);
            text-transform: uppercase;
            text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
            margin-bottom: 5px;
            font-size: 2.5em;
        }

        h2 {
            color: var(--text-main);
            border-bottom: 1px dashed var(--text-accent);
            padding-bottom: 5px;
            margin-top: 30px;
            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);
        }

        .contact-info, .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
            font-size: 0.9em;
        }

        .contact-item, .skill-tag {
            background: rgba(0, 255, 204, 0.1);
            border: 1px solid var(--text-main);
            padding: 5px 10px;
            border-radius: 3px;
        }

        .section {
            margin-bottom: 25px;
            border-left: 2px solid var(--text-accent);
            padding-left: 15px;
        }

        .item-title {
            font-weight: bold;
            color: var(--text-accent);
            margin-bottom: 5px;
        }

        .item-subtitle {
            font-size: 0.9em;
            color: #aaa;
            margin-bottom: 10px;
        }

        p, li {
            color: #d1d1d1;
        }

        ul {
            padding-left: 20px;
        }

        a {
            color: var(--text-accent);
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
            text-shadow: 0 0 5px var(--text-accent);
        }

        /* Glitch effect for header */
        .glitch {
            position: relative;
            display: inline-block;
        }
        
        .cursor {
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1 class="glitch">BÙI QUANG VINH [cite: 1]<span class="cursor">_</span></h1>
        <div class="item-title" style="font-size: 1.2em; margin-bottom: 15px;">> AI/ML ENGINEER [cite: 2]</div>
        
        <div class="contact-info">
            <div class="contact-item">DOB: 04/08/2005 [cite: 3]</div>
            <div class="contact-item">TEL: 0942713376 [cite: 3]</div>
            <div class="contact-item">LOC: Xom Chieu, Ho Chi Minh City [cite: 3]</div>
            <div class="contact-item">EMAIL: buiquangvinh.work@gmail.com [cite: 3]</div>
            <div class="contact-item">GITHUB: vinhhbui [cite: 3]</div>
            <div class="contact-item">LINKEDIN: Vinh Bui [cite: 3]</div>
        </div>
    </header>

    <section>
        <h2>> TARGET_</h2>
        <div class="section">
            <p>As a third-year Computer Science student and active Al researcher at TDTU's URLab specializing in drones and robotics[cite: 5]. I have a strong technical foundation and a deep passion for building interactive web applications and integrating Al with physical systems[cite: 6]. I aim to create an engaging learning environment that simplifies complex coding concepts and inspires the next generation of innovators to build their own creative digital projects[cite: 7].</p>
        </div>
    </section>

    <section>
        <h2>> EDUCATION_</h2>
        <div class="section">
            <div class="item-title">Ton Duc Thang University [cite: 9]</div>
            <div class="item-subtitle">Bachelor of Science in Computer Science | 2023 - Present (Graduate 2027) [cite: 9, 13]</div>
            <ul>
                <li>Current GPA 8.1/10 (3.24/4.0) [cite: 10]</li>
            </ul>
        </div>
        <div class="section">
            <div class="item-title">Chinese Culture University (Taipei City) [cite: 11]</div>
            <div class="item-subtitle">International Summer Camp 2025, Computer Vision | Jul 2025 - Aug 2025 [cite: 12, 14]</div>
            <ul>
                <li>Participate in course "Computer Vision" (36 hours)[cite: 15].</li>
                <li>Experience implementing 2D, 3D games and realtime AR book project with Unity and Vuforia[cite: 16].</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>> CORE_PROJECTS_</h2>
        <div class="section">
            <div class="item-title">RIP CURRENT DETECTION SYSTEM FOR COASTAL RESCUE OPERATIONS [cite: 33]</div>
            <ul>
                <li>Developed a real-time computer vision system using Python, PyTorch, YOLO, and OpenCV to automatically detect and localize hazardous rip currents from aerial drone footage[cite: 34].</li>
                <li>Built to tackle a critical coastal safety challenge by providing lifeguards with an automated, early-warning Al tool[cite: 35].</li>
                <li>Key Features: Trained and optimized deep learning models for high-speed edge inference (running directly on drone systems or local devices), overcoming complex environmental variables like water reflections and weather changes[cite: 36, 37].</li>
            </ul>
        </div>
        <div class="section">
            <div class="item-title">TRAFFIC SIGN DETECTION YOLO [cite: 29]</div>
            <ul>
                <li>Developed a real-time computer vision system using Python, YOLOv11, and OpenCV to automatically detect and classify road traffic signs from video and run real time with camera[cite: 30].</li>
                <li>Key Features: Trained lightweight Al models optimized for fast processing, demonstrating how complex machine learning algorithms can be applied to build practical, real-world applications[cite: 32].</li>
            </ul>
        </div>
        <div class="section">
            <div class="item-title">VINPEARL CAN GIO HOTEL MANAGEMENT WEB-BASED PLATFORM [cite: 24]</div>
            <div class="item-subtitle">Full-stack developer [cite: 25]</div>
            <ul>
                <li>Developed a full-stack web application using PHP, MySQL, HTML/CSS, and JavaScript to automate and digitize core hospitality workflows[cite: 26].</li>
                <li>Key Features: Implemented real-time database updates to prevent overbooking and strict role-based access control to ensure secure data management[cite: 28].</li>
            </ul>
        </div>
    </section>

    <section>
        <h2>> SKILLS_ & _SYSTEM_CAPABILITIES_</h2>
        <div class="skills-grid">
            <div class="skill-tag">HTML/CSS [cite: 40]</div>
            <div class="skill-tag">JavaScript [cite: 40]</div>
            <div class="skill-tag">PHP [cite: 40]</div>
            <div class="skill-tag">Next.js [cite: 40]</div>
            <div class="skill-tag">Firebase [cite: 40]</div>
            <div class="skill-tag">Python [cite: 41]</div>
            <div class="skill-tag">YOLO / CNN / LSTM / Transformer [cite: 41]</div>
            <div class="skill-tag">Edge AI Deployment [cite: 41]</div>
            <div class="skill-tag">Drone Integration [cite: 42]</div>
            <div class="skill-tag">Git/GitHub [cite: 43]</div>
            <div class="skill-tag">Ubuntu [cite: 43]</div>
        </div>
        <div class="section">
            <div class="item-subtitle">Languages: English (IELTS: 6.5) [cite: 45] | Chinese (HSK 2) [cite: 46]</div>
        </div>
    </section>

    <section>
        <h2>> ACHIEVEMENTS_</h2>
        <div class="section">
            <div class="item-title">THIRD PRIZE - TECH STARTUP CHALLENGER 2025 [cite: 18]</div>
            <div class="item-subtitle">Full-stack Developer, co-leader | May 2025 [cite: 19, 20]</div>
            <ul>
                <li>Built the MatesUp - Startup Connection Platform, designed to connect aspiring entrepreneurs[cite: 21].</li>
                <li>Conceptualized and pitched a web-based platform using HTML5/CSS as front end with PHP as back-end[cite: 22].</li>
            </ul>
        </div>
    </section>
    
    <div style="text-align: center; margin-top: 40px; color: #555; font-size: 0.8em;">
        EOF. RUNNING PROCESS ENDED.
    </div>
</div>

</body>
</html>
