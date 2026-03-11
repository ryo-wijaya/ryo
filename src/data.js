export const profile = {
  name: "Ryo Wijaya",
  title: "Software Engineer",
  location: "Singapore",
  nationality: "Singapore Citizen",
  email: "mainryo@gmail.com",
  linkedin: "https://linkedin.com/in/ryowijaya",
  github: "https://github.com/ryo-wijaya",
  blog: "https://blog.ryo-wijaya.me",
  about:
    "Full stack software engineer in Singapore. Currently at Crédit Agricole Corporate & Investment Bank, where I mostly build backend services and data pipelines with Spring Boot, Spark Java, Kafka, Helm/Kubernetes/Docker, GitLab CI, and GCP. Outside of work, I play electric guitar, piano, drums, do some amateur music production, and bring my dog out to places.",
};

export const education = [
  {
    school: "National University of Singapore",
    location: "Singapore",
    degree: "Bachelor of Computing, Information Systems (Hons. with Distinction)",
    detail: "FinTech Specialisation",
    period: "Aug 2020 – June 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/NUS_coat_of_arms.svg/1200px-NUS_coat_of_arms.svg.png",
    linkedin: "https://www.linkedin.com/school/national-university-of-singapore/",
  },
  {
    school: "Heidelberg International School",
    location: "Germany",
    degree: "International Baccalaureate (IB) Diploma",
    period: "Aug 2016 – May 2018",
    logo: "/HIS.jpeg",
    linkedin: "https://www.linkedin.com/school/heidelberg-international-school/",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Crédit Agricole CIB",
    period: "July 2024 – Present",
    logo: "/cacib.png",
    linkedin: "https://www.linkedin.com/company/credit-agricole-cib/",
    bullets: [
      "Contributed to the design and development of a greenfield project to build modular ETL Treatment Chains using Spark Streaming, Spring Boot, and GCP; developed cloud-enabled Java drivers to ingest, enrich, and distribute Commercial Real Estate Loans and Capital Markets data.",
      "Developed an internal Spring Boot platform for automated JSON ↔ Avro conversion, Kafka topic management, PostgreSQL configuration validation and loading, and Apache Iceberg DDL generation from Avro schema; adopted by cross-functional teams in Singapore and Paris.",
      "Architected and implemented OpenID Connect (OIDC) and OAuth2 SSO authentication for the Angular application platform and developed UI features.",
      "Implemented schema validation across upstream sources and downstream destinations by utilizing Confluent Schema Registry and Kafka. Managed schema evolution across Avro schema version upgrades.",
      "Orchestrated deployments using Helm, Kubernetes, and created GitLab CI pipelines to ensure robust CI/CD.",
      "Contributed to application security by remediating Checkmarx and JFrog Xray vulnerabilities, and enforcing SonarQube quality gates.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "SP Group",
    period: "Jan 2023 – June 2023",
    logo: "/sp-group.png",
    linkedin: "https://www.linkedin.com/company/singapore-power-ltd/",
    bullets: [
      "Developed an OCPP 1.6/2.0.1 compliant electric vehicle charger simulator using FastAPI and WebSockets.",
      "Led load testing for over 2,000 simulated chargers to identify infrastructure scalability bottlenecks.",
      "Built a Next.js platform for real-time charger configuration, message triggering, and log monitoring.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Reluvate Technologies",
    period: "May 2022 – Aug 2022",
    logo: "/reluvate.jpg",
    linkedin: "https://www.linkedin.com/company/reluvate/",
    bullets: [
      "Developed a hiring web platform using Node and GCP Cloud Services to automate over 90% of company recruitment processes, including document exchange and technical assessments.",
      "Built a Python backend for an accounting platform product to handle payments and contracts.",
    ],
  },
];

export const projects = [
  {
    name: "PetHub",
    tech: "Express.js, Next.js, PostgreSQL, Prisma, AWS",
    url: "https://github.com/IS4103-PetHub/PetHub-FE",
    description:
      "E-commerce marketplace for pet-service providers and owners. Facilitates bookings, purchases, and admin management.",
  },
  {
    name: "Optimal-Travel-Plan",
    tech: "Jakarta EE, JSF, MySQL, Ionic",
    url: "https://github.com/ryo-wijaya/Optimal-Travel-Plan",
    description:
      "Web and hybrid mobile app that generates optimized travel itineraries based on available events and services.",
  },
  {
    name: "my-pi-board",
    tech: "Next.js, Raspberry Pi",
    url: "https://github.com/ryo-wijaya/my-pi-board",
    description:
      "Dashboard application for bus timings and stock market monitoring, running on a Raspberry Pi.",
  },
  {
    name: "RAG System",
    tech: "FastAPI, LangGraph, Qdrant",
    url: null,
    description:
      "FastAPI application using LangGraph and Qdrant to implement hybrid (vector + BM25) search over documents.",
  },
    {
    name: "ryo",
    tech: "React, Vite, Bootstrap",
    url: "https://github.com/ryo-wijaya/ryo",
    description:
      "This very site!",
  },
  {
    name: "blog",
    tech: "Jekyll, GitHub Actions",
    url: "https://blog.ryo-wijaya.me",
    description:
      "Personal Jekyll blog utilizing the open-source Chirpy Theme.",
  },
  {
    name: "HotelReservationProject",
    tech: "Jakarta EE, GlassFish, SOAP Web Services",
    url: "https://github.com/ryo-wijaya/HotelReservationProject",
    description:
      "Enterprise CLI application for hotel room inventory, rate management, reservations, and automated room allocation.",
  },
  {
    name: "sprout",
    tech: "Solidity, Truffle, Web3.js, Ganache",
    url: "https://github.com/ryo-wijaya/sprout",
    description:
      "Blockchain-based job marketplace with escrow services and a DAO for dispute resolution, built on Ethereum smart contracts.",
  },
  {
    name: "ibkr-tv-tradebot",
    tech: "FastAPI, IBKR TWS API, TradingView",
    url: "https://github.com/ryo-wijaya/ibkr-tv-tradebot",
    description:
      "FastAPI server utilizing the IBKR TWS API for order execution and TradingView webhook integration.",
  },
  {
    name: "trade-alerter",
    tech: "Python, FastAPI, Telegram Bot API, Docker",
    url: "https://github.com/ryo-wijaya/trade-alerter",
    description:
      "Lightweight service that receives TradingView webhook alerts and forwards buy/sell signals via a Telegram bot.",
  },
];

export const languages = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg" },
];

const d = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

export const skills = {
  Technologies: [
    { name: "Spring Boot", icon: d("spring", "original") },
    { name: "Apache Kafka", icon: d("apachekafka", "original") },
    { name: "Apache Spark", icon: d("apachespark", "original") },
    { name: "Apache Iceberg", icon: "https://iceberg.apache.org/assets/images/iceberg-logo-icon.png" },
    { name: "FastAPI", icon: d("fastapi", "original") },
    { name: "Next.js", icon: d("nextjs", "original") },
    { name: "React.js", icon: d("react", "original") },
    { name: "Node.js", icon: d("nodejs", "original") },
    { name: "Angular", icon: d("angular", "plain") },
    { name: "PostgreSQL", icon: d("postgresql", "original") },
    { name: "NoSQL Databases" },
    { name: "Liquibase", icon: d("liquibase", "original") },
  ],
  "Infrastructure & Tools": [
    { name: "Kubernetes", icon: d("kubernetes", "original") },
    { name: "Helm", icon: d("helm", "original") },
    { name: "Docker", icon: d("docker", "original") },
    { name: "GitLab CI/CD", icon: d("gitlab", "original") },
    { name: "Git", icon: d("git", "original") },
    { name: "GCP", icon: d("googlecloud", "original") },
    { name: "Azure", icon: d("azure", "original") },
  ],
  "AI Engineering": [
    { name: "RAG" },
    { name: "LangGraph" },
    { name: "LangChain" },
    { name: "Qdrant" },
    { name: "Ollama" },
  ],
};

export const certifications = [
  {
    name: "Certified Kubernetes Application Developer (CKAD) — 98/100",
    issuer: "Cloud Native Computing Foundation",
    year: "2025",
    url: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/11eb9f8b-d2de-46e0-82b0-4a2704349423-ryo-armando-wijaya-778fb699-4b16-4c9f-9c14-6e3d1fc78e51-certificate.pdf",
  },
  {
    name: "Confluent Apache Kafka Fundamentals Accreditation",
    issuer: "Confluent",
    year: "2026",
    url: "https://certificates.confluent.io/a29862ce-da30-4aba-b353-b97b38259964",
  },
  {
    name: "Financial Technology Specialisation (Distinction)",
    issuer: "National University of Singapore",
    year: "2024",
    url: "https://credentials.nus.edu.sg/b00bb0ae-8419-4336-b33e-afb88d5cc582",
  },
  {
    name: "IS Technology Knowledge Area (Distinction)",
    issuer: "National University of Singapore",
    year: "2024",
    url: "https://credentials.nus.edu.sg/af73a852-f403-4262-ba54-cb15b6a68ccd",
  },
];

const BLOG_MEDIA = "/music";

export const music = [
  {
    title: "悲剧信徒",
    credits: [{ label: "Lyrics and vocals by", name: "Neo Ee Leng", url: "https://www.instagram.com/soda.lyrics/" }],
    audio: `${BLOG_MEDIA}/悲剧信徒.mp3`,
    audioLead: `${BLOG_MEDIA}/悲剧信徒-lead.mp3`,
  },
  {
    title: "后天爱上你",
    credits: [{ label: "Lyrics and vocals by", name: "Neo Ee Leng", url: "https://www.instagram.com/soda.lyrics/" }],
    audio: `${BLOG_MEDIA}/后天爱上你.mp3`,
    audioLead: `${BLOG_MEDIA}/后天爱上你-lead.mp3`,
  },
  {
    title: "3 Button Face",
    credits: [{ label: "Vocals by", name: "Neo Ee Leng", url: "https://www.instagram.com/soda.lyrics/" }],
    audioLead: `${BLOG_MEDIA}/3buttonface-lead.mp3`,
    youtube: "https://www.youtube.com/embed/LUqzHqqEzqw",
  },
  {
    title: "Jellyfish",
    credits: [{ label: "Instrumental" }],
    youtube: "https://www.youtube.com/embed/JPUBdV_BBOM",
  },
  {
    title: "Set Your Heart Ablaze",
    credits: [{ label: "Guitar instrumental, solo by", name: "Tim Ng", url: "https://www.youtube.com/@legovidz1/videos" }],
    youtube: "https://www.youtube.com/embed/A8k_rz6UMhY",
  },
];
