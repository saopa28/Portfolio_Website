export const portfolioData = {
  profile: {
    name: "Anthony Saopa Phiri",
    handle: "@saopaphiri",
    title: "AI Systems Engineer & Software Developer",
    location: "Montreal, QC · Lusaka, Zambia",
    status: {
      text: "M.Eng AI Systems Engineering @ Concordia University",
      availableForWork: true,
      currentFocus: "Healthcare ML, Distributed Systems & Reactive Web"
    },
    bio: "Computer Science & AI graduate (Nottingham) and incoming AI Systems Engineering Master's student at Concordia University. Experienced in predictive machine learning models for healthcare, enterprise server systems, and responsive React applications. Inspired by Google's engineering rigour and Meta's product execution.",
    interests: [
      { name: "Artificial Intelligence & ML", icon: "Sparkles", description: "Predictive modeling, deep learning with PyTorch/TensorFlow, and health informatics" },
      { name: "Full-Stack Web Engineering", icon: "Layers", description: "Building responsive, reactive web applications with React, JavaScript, and MERN stack" },
      { name: "Systems & Cloud Infrastructure", icon: "Cpu", description: "Active Directory, Windows Server Manager, VM provisioning, and server room operations" },
      { name: "Data Science & Epidemiological Analytics", icon: "Cloud", description: "Data aggregation, statistical analysis with Python, Pandas, and disease outbreak prediction" },
      { name: "Technical Leadership & Community", icon: "Glasses", description: "Former President of The African Society (record 90 members) and cross-functional team coordinator" }
    ],
    socialLinks: {
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/anthony-saopa-phiri/",
      email: "saopaphiri@gmail.com",
      phone: "+1-263-558-7060"
    },
    stats: [
      { label: "Degree GPA", value: "3.77" },
      { label: "Government Ministries Served", value: "24" },
      { label: "Society Members Led", value: "90+" },
      { label: "Core Tech Stacks", value: "15+" }
    ],
    pictures: {
      photo1: {
        src: "/assets/photo1.jpg",
        caption: "Anthony Saopa Phiri · Professional Leadership",
        alt: "Anthony Saopa Phiri in formal suit and tie"
      },
      photo2: {
        src: "/assets/photo2.jpg",
        caption: "Anthony Saopa Phiri · Engineering & Tech Focus",
        alt: "Anthony Saopa Phiri in light blue shirt"
      }
    }
  },

  projects: [
    {
      id: "project-1",
      title: "Disease Outbreak Prediction & Analytics Dashboard",
      tagline: "Machine learning platform predicting cholera, malaria, and tuberculosis in Zambia",
      description: "Conducted literature reviews and engineered predictive machine learning models for national epidemiological surveillance. Collected and cleaned regional outbreak data for Zambia, evaluated classification algorithms, and developed an interactive analytics dashboard for monitoring outbreak trajectories.",
      tags: ["Python", "TensorFlow", "PyTorch", "Pandas", "Healthcare ML", "Data Analytics"],
      metrics: "Monitored 3 Key Pathogens · National Impact",
      category: "AI & Healthcare",
      featured: true,
      github: "https://github.com",
      liveDemo: "https://example.com",
      gradient: "from-blue-600/30 to-indigo-600/20"
    },
    {
      id: "project-2",
      title: "Interactive Mathematics Learning Application",
      tagline: "React-based educational web application built with Dr. Marina Ng",
      description: "Collaborated with Dr. Kher Hui (Marina) Ng at the University of Nottingham Malaysia to engineer an interactive math web platform. Led frontend development using React, designed intuitive UI workflows, integrated APIs and databases, and executed rigorous debugging and testing routines.",
      tags: ["React", "JavaScript", "REST APIs", "Figma", "UI/UX", "Educational Tech"],
      metrics: "Intuitive Student UX • Academic Research Project",
      category: "Frontend & Web",
      featured: true,
      github: "https://github.com",
      liveDemo: "https://example.com",
      gradient: "from-cyan-600/30 to-blue-600/20"
    },
    {
      id: "project-3",
      title: "Smart Zambia National Ministry Intranets & VM Lab",
      tagline: "Enterprise infrastructure deployment for 24 government ministries",
      description: "Architected and rolled out SharePoint intranet solutions for 24 ministries under the Electronic Government Division of Zambia. Configured server partitions, deployed test-environment virtual machines for the DevOps team, and administered user policies via Active Directory Domain Services.",
      tags: ["Windows Server", "Active Directory", "SharePoint", "DevOps VMs", "Power BI"],
      metrics: "24 Government Ministries Deployed",
      category: "Systems & Infrastructure",
      featured: true,
      github: "https://github.com",
      liveDemo: "https://example.com",
      gradient: "from-purple-600/30 to-blue-600/20"
    },
    {
      id: "project-4",
      title: "National Health Research Convention Digital Platform",
      tagline: "Virtual convention hub for 200+ medical researchers and sponsors",
      description: "Co-led technical execution for the 2020 National Health Research Association convention. Configured virtual expo booths on Accelevents, orchestrated sponsor showcase streams, and ran live helpdesk operations with 100% issue resolution.",
      tags: ["Accelevents", "Event Tech", "Technical Support", "Cross-Functional Leadership"],
      metrics: "200+ National Attendees Coordinated",
      category: "Systems & Infrastructure",
      featured: false,
      github: "https://github.com",
      liveDemo: "https://example.com",
      gradient: "from-emerald-600/30 to-cyan-600/20"
    }
  ],

  workExperience: [
    {
      role: "Research Intern (Disease Outbreak Prediction)",
      company: "University of Nottingham Malaysia",
      period: "June 2024 — November 2024",
      location: "Semenyih, Selangor, Malaysia",
      badge: "Healthcare AI",
      highlights: [
        "Conducted comprehensive literature reviews to evaluate existing research on epidemic and disease outbreak forecasting.",
        "Evaluated predictive machine learning architectures targeting cholera, malaria, and tuberculosis outbreaks.",
        "Collected, cleansed, and analyzed historical and environmental epidemiological datasets for Zambia.",
        "Applied classification models to assess geographical outbreak risks and built an analytics dashboard for public health monitoring."
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "Pandas", "Healthcare Analytics", "Google Colab"]
    },
    {
      role: "Smart Zambia Institute Intern",
      company: "Electronic Government Division of Zambia",
      period: "June 2024 — August 2024",
      location: "Lusaka, Zambia",
      badge: "GovTech & Infrastructure",
      highlights: [
        "Partitioned, configured, and maintained physical and virtual server infrastructure using Windows Server Manager.",
        "Deployed virtual machines as isolated testbeds for internal DevOps engineering teams.",
        "Administered enterprise user accounts, security roles, and domain policies via Active Directory Domain Services (AD DS).",
        "Engineered customized SharePoint intranet portals deployed across 24 national government ministries.",
        "Carried out critical server room maintenance, rack cable management, and hardware troubleshooting."
      ],
      skills: ["Windows Server", "Active Directory", "SharePoint", "Virtual Machines", "DevOps", "Power BI"]
    },
    {
      role: "Research Assistant (RA) - Web Development",
      company: "University of Nottingham Malaysia",
      period: "June 2023 — August 2023",
      location: "Semenyih, Selangor, Malaysia",
      badge: "React & EdTech",
      highlights: [
        "Partnered with Dr. Kher Hui (Marina) Ng to engineer an interactive math web application using React.",
        "Established technical project roadmaps, milestone timelines, and architectural documentation.",
        "Integrated dynamic REST APIs and backend databases to deliver smooth calculation and visualization workflows.",
        "Executed end-to-end testing, bug remediation, code refactoring, and presented iterative sprint demos."
      ],
      skills: ["React", "JavaScript", "HTML5/CSS3", "REST APIs", "Git", "Figma"]
    },
    {
      role: "IT Department Intern",
      company: "Ministry Of Health Zambia",
      period: "June 2020 — August 2020",
      location: "Lusaka, Zambia",
      highlights: [
        "Diagnosed and performed component-level hardware repairs on departmental computers and peripherals.",
        "Installed, provisioned, and secured enterprise operating systems and application software suites.",
        "Inspected and benchmarked newly procured enterprise computing systems prior to ministerial deployment."
      ],
      skills: ["Hardware Diagnostics", "OS Deployment", "System Maintenance", "IT Support"]
    },
    {
      role: "Project Co-Leader (National Convention)",
      company: "National Health Research Association of Zambia",
      period: "August 2020 — August 2020",
      location: "Lusaka, Zambia",
      highlights: [
        "Co-led orientation and technical onboarding for 200 participants at the 2020 National Health Convention.",
        "Designed and maintained virtual exhibit booths and interactive sponsor spaces on the Accelevents platform.",
        "Managed live event helpdesk operations, handling real-time technical troubleshooting and participant support."
      ],
      skills: ["Technical Operations", "Platform Management", "Accelevents", "Team Leadership"]
    }
  ],

  leadership: [
    {
      role: "President of The African Society",
      organization: "University of Nottingham Malaysia",
      period: "Sept 2024 — April 2025",
      location: "Semenyih, Selangor",
      highlights: [
        "Spearheaded executive strategy and established actionable initiatives to advance student welfare and cultural enrichment.",
        "Acted as chairperson, mediator, and arbitrator for student affairs and organizational grievances.",
        "Achieved all-time record membership of 90 registered members across diverse international faculties.",
        "Established the society's first-ever Junior Executive Committee to build a sustainable leadership pipeline.",
        "Cultivated an inspiring environment of mutual support, cultural openness, and academic empowerment."
      ]
    }
  ],

  cv: {
    name: "Anthony Saopa Phiri",
    contact: {
      phone: "+1-263-558-7060",
      email: "saopaphiri@gmail.com",
      location: "Montreal, QC / Lusaka, Zambia",
      linkedin: "https://www.linkedin.com/in/anthony-saopa-phiri/"
    },
    summary: "Incoming M.Eng AI Systems Engineering student at Concordia University and B.Sc (Hons) Computer Science with AI graduate from University of Nottingham (GPA 3.77/4.30). Proven hands-on track record across machine learning for epidemiological forecasting, full-stack React web engineering, and enterprise Windows Server / Active Directory deployments for 24 national ministries. Demonstrated leadership as President of The African Society.",
    education: [
      {
        degree: "Master of Engineering – Artificial Intelligence Systems Engineering (Co-op)",
        school: "Concordia University",
        location: "Montreal, QC, Canada",
        year: "2026 — 2028 (Expected)",
        details: "Focusing on large-scale AI system design, neural network architectures, distributed inference, and enterprise AI lifecycle engineering."
      },
      {
        degree: "Bachelor of Science with Honors – Computer Science with AI",
        school: "University of Nottingham",
        location: "Semenyih, Selangor, Malaysia",
        year: "2022 — 2025",
        details: "2:1 Second Class Upper Final Degree Classification · GPA: 3.77 / 4.30. Core coursework: Machine Learning, Artificial Intelligence, Distributed Architectures, Algorithms, Database Systems."
      }
    ],
    skillsCategories: [
      {
        category: "Programming Languages",
        items: ["Python", "JavaScript", "Java", "C", "SQL", "R", "PHP", "Haskell", "HTML5", "CSS3"]
      },
      {
        category: "AI, ML & Data Science",
        items: ["PyTorch", "TensorFlow", "Pandas", "MATLAB", "Google Colab", "Data Preprocessing", "Epidemiological ML"]
      },
      {
        category: "Frontend & Full-Stack",
        items: ["React", "MERN Stack", "Spring", "REST APIs", "Figma", "Canva", "Responsive UI"]
      },
      {
        category: "Systems, Cloud & Infrastructure",
        items: ["Windows Server Manager", "Active Directory DS", "Apache Zookeeper", "SharePoint", "Virtual Machines (DevOps)", "Git", "GitHub"]
      },
      {
        category: "Operating Systems & Enterprise Tools",
        items: ["Linux", "Windows 11", "MacOS", "Power BI", "Co-Pilot", "Excel / Access", "Six Sigma", "Lean Six Sigma"]
      }
    ],
    references: [
      {
        name: "Dr. Yasir Hafeez",
        title: "Assistant Professor",
        institution: "School of Computer Science, University of Nottingham Malaysia",
        email: "yasir.hafeez@nottingham.edu.my"
      },
      {
        name: "Dr. Kher Hui (Marina) Ng",
        title: "Associate Professor",
        institution: "School of Computer Science, University of Nottingham Malaysia",
        email: "Marina.Ng@nottingham.edu.my"
      },
      {
        name: "Davies Mumba Chisunka",
        title: "Server Engineer",
        institution: "Electronic Government Division of Zambia, Smart Zambia Institute",
        email: "Davies.Chisunka@szi.gov.zm"
      },
      {
        name: "Mrs. Sandra Sakala",
        title: "Deputy Director - Research Coordination",
        institution: "National Health Research Authority Pediatrics Centre of Excellence, UTH Lusaka",
        email: "sandra.sakala@nhra.org.zm"
      }
    ]
  },

  now: {
    lastUpdated: "October 2026",
    headline: "What I'm focused on right now",
    subheadline: "Advancing AI systems engineering, healthcare machine learning, and high-performance reactive web interfaces.",
    sections: [
      {
        title: "🎓 Academic & Research Focus",
        items: [
          "Preparing for Master of Engineering in AI Systems Engineering Co-op at Concordia University in Montreal.",
          "Investigating deep learning model optimization and data pipelines for infectious disease risk assessment."
        ]
      },
      {
        title: "💻 Active Engineering Projects",
        items: [
          "Refining the Zambia Disease Outbreak Dashboard with modern React charting and geospatial overlays.",
          "Building micro-interaction libraries and full-stack MERN utilities for low-latency web apps."
        ]
      },
      {
        title: "⚡ Core Tech Deep-Dives",
        items: [
          "PyTorch & TensorFlow model deployment, quantization, and GPU acceleration.",
          "Distributed infrastructure, containerization, and modern Linux kernel monitoring."
        ]
      },
      {
        title: "🌍 Leadership & Personal",
        items: [
          "Mentoring students in tech transition, building international developer connections in Montreal.",
          "Staying active, exploring Canadian and international tech communities, and writing technical reflections."
        ]
      }
    ]
  },

  blog: [
    {
      id: "post-1",
      title: "Predicting Disease Outbreaks: Applying Machine Learning to Public Health in Zambia",
      date: "Oct 2026",
      readTime: "6 min read",
      tags: ["Healthcare AI", "Python", "Data Science"],
      summary: "How statistical modeling and neural classifiers can forecast cholera, malaria, and tuberculosis outbreaks before hospitals reach capacity.",
      snippet: "Epidemiological datasets are notoriously noisy, subject to seasonal weather anomalies and reporting delays. In our research at Nottingham, we explored how temporal alignment and data normalization turn fragmented clinical logs into actionable risk indices..."
    },
    {
      id: "post-2",
      title: "Modernizing GovTech: Deploying Active Directory & Server Labs for 24 Ministries",
      date: "Sep 2026",
      readTime: "5 min read",
      tags: ["Infrastructure", "Windows Server", "DevOps"],
      summary: "Lessons from managing server rooms, configuring isolated DevOps virtual machines, and standardizing SharePoint portals at national scale.",
      snippet: "When you manage systems across 24 separate governmental divisions, consistency is the difference between seamless governance and operational paralysis. Automating group policies in Active Directory DS eliminated hours of manual drift..."
    },
    {
      id: "post-3",
      title: "From Equations to Interfaces: Engineering Interactive React Web Apps for Math",
      date: "Aug 2026",
      readTime: "7 min read",
      tags: ["React", "EdTech", "Web Development"],
      summary: "Architecting interactive educational platforms with Dr. Marina Ng: state synchronization, modular component design, and sub-second feedback loops.",
      snippet: "Educational software often suffers from clumsy interactions that distract from learning. By building with React and component-driven state architecture, we turned abstract mathematical formulas into tactile, responsive canvas visualizers..."
    }
  ]
};
