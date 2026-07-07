import portfolioData from './data.js';

// Render Navigation Bar
const navbar = document.getElementById('navbar');
navbar.innerHTML = `
    <div class="logo">${portfolioData.profile.name}</div>
    <nav>
        <a href="#projects">Projects</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#cv">CV</a>
        <a href="#contact">Contact</a>
    </nav>
`;

// Render Hero Section
const hero = document.getElementById('hero');
hero.innerHTML = `
    <div class="hero-overlay">
        <h1>Welcome To Samuel Shlyams Portfolio</h1>
    </div>
`;

// Render Projects Section (Expanded Case Study Content)
const projectsSection = document.getElementById('projects');
projectsSection.innerHTML = `
    <h2>Engineered Solutions</h2>
    <div class="projects-grid">
        <div class="project-card">
            <span class="project-number">01</span>
            <h3>Enterprise Retail Listing Scraper</h3>
            <p class="project-lead">A high-volume extraction engine designed to harvest e-commerce product listings, live pricing structures, and inventory levels across global retail domains.</p>
            <div class="project-details">
                <h4>The Mechanism</h4>
                <p>Built with stealth stealth-routing infrastructure to bypass IP rate limits and anti-bot walls, rendering dynamic marketplace listings smoothly.</p>
                <h4>Agency Value</h4>
                <p>Feeds clean, structured JSON data directly into client databases, enabling real-time competitive price monitoring and automated market analysis.</p>
            </div>
            <div class="project-tags">
                <span>Node.js</span><span>Puppeteer</span><span>Residential Proxies</span><span>JSON Output</span>
            </div>
        </div>

        <div class="project-card">
            <span class="project-number">02</span>
            <h3>High-Resolution Image Scraper & Pipeline</h3>
            <p class="project-lead">An automated bulk asset downloader programmed to isolate, extract, and optimize media files from dense visual databases.</p>
            <div class="project-details">
                <h4>The Mechanism</h4>
                <p>Scans target DOM trees to extract source image URLs, filters out tracking pixels, and downloads high-res files concurrently using asynchronous streams.</p>
                <h4>Agency Value</h4>
                <p>Automates asset gathering for mood boards, design systems, and machine-learning training models, cutting manual download times down to seconds.</p>
            </div>
            <div class="project-tags">
                <span>Python</span><span>BeautifulSoup</span><span>Asyncio</span><span>CDN Optimization</span>
            </div>
        </div>
    </div>
`;
// Render Hobbies Section
const hobbiesSection = document.getElementById('hobbies');
hobbiesSection.innerHTML = `
    <h2>Interests</h2>
    <p class="hobbies-subtitle">What fills the spaces between lines of code and technical design problems.</p>
    <div class="hobbies-grid">
        ${portfolioData.hobbies.map(hobby => `
            <div class="hobby-card">
                <img src="${hobby.image}" alt="${hobby.name}">
                <h3>${hobby.name.toUpperCase()}</h3>
            </div>
        `).join('')}
    </div>
`;
const cvSection = document.getElementById('cv');
cvSection.innerHTML = `
    <h2>Curriculum Vitae</h2>
    <div class="cv-container">
        <div class="cv-preview-wrapper">
            <iframe src="${portfolioData.profile.cvUrl}#toolbar=0&navpanes=0&view=FitH" width="100%" height="800"></iframe>
        </div>
        <a href="${portfolioData.profile.cvUrl}" download class="download-btn">Download Full PDF</a>
    </div>
`;
const contactSection = document.getElementById('contact');
contactSection.innerHTML = `
    <h2>Let's Connect</h2>
    <div style="text-align: center;">
        <a href="mailto:${portfolioData.profile.email}?subject=Showcase Project Inquiry" class="agency-contact-btn">
            Get In Touch
        </a>
        <p style="color: var(--text-muted); margin-top: 1.5rem; font-family: monospace; font-size: 0.9rem;">
            Or copy directly: ${portfolioData.profile.email}
        </p>
    </div>
`;
// Render Footer Section
const footer = document.getElementById('footer');
footer.innerHTML = `
    <div class="footer-content">
        <div>
            <strong>Identity</strong>
            <p>${portfolioData.profile.name}</p>
        </div>
        <div>
            <strong>Communication</strong>
            <p>${portfolioData.profile.email}</p>
        </div>
        <div>
            <strong>Network</strong>
            <p>${portfolioData.profile.phone}</p>
        </div>
        <div>
            <strong>Location</strong>
            <p>${portfolioData.profile.city}</p>
        </div>
    </div>
`;