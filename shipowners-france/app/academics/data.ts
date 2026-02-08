
export const departments = {
    // --- SCHOOLS ---
    "school-of-engineering": {
        type: "school",
        title: "School of Engineering",
        subtitle: "Building the Future, Today",
        heroImage: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2670&auto=format&fit=crop",
        description: "The School of Engineering is the flagship division of CollegeGO, renowned for its rigorous academic curriculum and cutting-edge research. We offer a diverse range of undergraduate and postgraduate programs designed to foster innovation.",
        dean: {
            name: "Dr. Richard Feynman",
            role: "Dean of Engineering",
            image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop", // Professional Male
            message: "Engineering is not just about equations; it's about solving the world's most complex problems with creativity and precision."
        },
        stats: [
            { label: "Check Departments", value: "8+" },
            { label: "Total Students", value: "4000+" },
            { label: "Research Centers", value: "12" },
            { label: "Global Rankings", value: "Top 50" }
        ],
        // Schools list their departments
        childDepartments: [
            { name: "Computer Science (CSE)", link: "/academics/cse" },
            { name: "Electronics (ECE)", link: "/academics/ece" },
            { name: "Mechanical (ME)", link: "/academics/mech" },
            { name: "Civil Engineering", link: "/academics/civil" },
            { name: "Electrical (EEE)", link: "/academics/eee" },
            { name: "Information Technology", link: "/academics/it" }
        ],
        features: [
            { title: "Innovation Hub", description: "24/7 access to prototyping labs and maker spaces." },
            { title: "Industry Partners", description: "Curriculum co-designed with Tesla, Google, and L&T." },
            { title: "Global Exchange", description: "Semesters abroad at partner universities in US & UK." },
            { title: "Entrepreneurship", description: "Incubation support for student startups." }
        ]
    },
    "school-of-business": {
        type: "school",
        title: "School of Business",
        subtitle: "Leading with Vision",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        description: "Developing the next generation of global business leaders. Our programs emphasize strategic thinking, ethical leadership, and entrepreneurial spirit.",
        dean: {
            name: "Dr. Indra Nooyi",
            role: "Dean of Business",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            message: "Business is about value creation. We teach you to see opportunities where others see challenges."
        },
        stats: [
            { label: "MBA Ranking", value: "#5" },
            { label: "Avg Salary", value: "18 LPA" },
            { label: "Entrepreneurs", value: "500+" },
            { label: "Corporate Partners", value: "150+" }
        ],
        childDepartments: [
            { name: "MBA General", link: "/academics/school-of-business" },
            { name: "Executive MBA", link: "/academics/school-of-business" },
            { name: "Finance & Fintech", link: "/academics/school-of-business" },
            { name: "Marketing Strategy", link: "/academics/school-of-business" }
        ],
        features: [
            { title: "Case Study Method", description: "Harvard-style learning with real-world scenarios." },
            { title: "Leadership Lab", description: "Soft skills and negotiation workshops." },
            { title: "Fintech Center", description: "Bloomberg terminals and crypto-analytics." },
            { title: "Global Immersions", description: "International study tours and internships." }
        ]
    },
    "school-of-arts": {
        type: "school",
        title: "School of Arts & Humanities",
        subtitle: "Creativity Meets Critical Thinking",
        heroImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2670&auto=format&fit=crop", // Books/Arts
        description: "Fostering creativity, cultural understanding, and critical analysis. The School of Arts offers programs in literature, psychology, design, and history.",
        dean: {
            name: "Prof. Amartya Sen",
            role: "Dean of Arts",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
            message: "The arts teach us what it means to be human. They are the soul of civilization."
        },
        stats: [
            { label: "Publications", value: "100+" },
            { label: "Exhibitions", value: "Monthly" },
            { label: "Alumni Network", value: "Global" },
            { label: "Research Grants", value: "High" }
        ],
        childDepartments: [
            { name: "English Literature", link: "/academics/school-of-arts" },
            { name: "Psychology", link: "/academics/school-of-arts" },
            { name: "Digial Arts", link: "/academics/school-of-arts" },
            { name: "History", link: "/academics/school-of-arts" }
        ],
        features: [
            { title: "Digital Media Lab", description: "Editing suites and animation studios." },
            { title: "Psychology Clinic", description: "Community counseling and research center." },
            { title: "Literary Review", description: "Student-run annual journal." },
            { title: "Art Gallery", description: "Exhibiting student and faculty work." }
        ]
    },
    "school-of-sciences": {
        type: "school",
        title: "School of Sciences",
        subtitle: "Discovering the Unknown",
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop", // Lab
        description: "Dedicated to fundamental research and scientific discovery. From physics to biotechnology, we are pushing the boundaries of human knowledge.",
        dean: {
            name: "Dr. C.V. Raman",
            role: "Dean of Sciences",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
            message: "Science is the pursuit of truth. We encourage curiosity and rigorous inquiry in every student."
        },
        stats: [
            { label: "Nobel Laureates", value: "2" },
            { label: "Research funds", value: "$50M" },
            { label: "Patents", value: "300+" },
            { label: "Labs", value: "World Class" }
        ],
        childDepartments: [
            { name: "Physics", link: "/academics/school-of-sciences" },
            { name: "Chemistry", link: "/academics/school-of-sciences" },
            { name: "Biotechnology", link: "/academics/school-of-sciences" },
            { name: "Mathematics", link: "/academics/school-of-sciences" }
        ],
        features: [
            { title: "Advanced Optics", description: "Laser interferometry and photonics labs." },
            { title: "Genomics Center", description: "DNA sequencing and bioinformatics." },
            { title: "Chemical Synthesis", description: "Drug discovery and material science." },
            { title: "Observatory", description: "On-campus telescope and astronomy club." }
        ]
    },

    // --- PROGRAM LEVELS ---
    "undergraduate": {
        type: "program-level",
        title: "Undergraduate Programs",
        subtitle: "Your Future Starts Here",
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
        description: "Our undergraduate programs are designed to build a strong foundation in your chosen field while fostering critical thinking and innovation. Choose from a wide range of engineering, arts, and science degrees.",
        stats: [
            { label: "Programs", value: "20+" },
            { label: "Students", value: "3000+" },
            { label: "Placement", value: "95%" },
            { label: "Avg Salary", value: "12 LPA" }
        ],
        programsList: [
            { name: "B.Tech Computer Science", duration: "4 Years", tags: ["Engineering", "Top Choice"] },
            { name: "B.Tech Electronics & Comm.", duration: "4 Years", tags: ["Engineering", "Core"] },
            { name: "B.Tech Mechanical", duration: "4 Years", tags: ["Engineering"] },
            { name: "B.Sc Physics", duration: "3 Years", tags: ["Science"] },
            { name: "B.A. English Literature", duration: "3 Years", tags: ["Arts"] },
            { name: "B.B.A (Business Admin)", duration: "3 Years", tags: ["Business"] }
        ],
        features: [
            { title: "Holistic Curriculum", description: "A blend of theory, practicals, and humanities." },
            { title: "Internship Year", description: "One full semester dedicated to industry internship." },
            { title: "Global Exposure", description: "Opportunities for student exchange programs." },
            { title: "Campus Life", description: "Vibrant clubs, sports, and cultural events." }
        ]
    },
    "postgraduate": {
        type: "program-level",
        title: "Postgraduate Programs",
        subtitle: "Master Your Craft",
        heroImage: "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b7?q=80&w=2670&auto=format&fit=crop",
        description: "Take your expertise to the next level with our specialized Master's programs. Designed for working professionals and aspiring researchers.",
        stats: [
            { label: "Masters Degrees", value: "15+" },
            { label: "Research Focus", value: "High" },
            { label: "Industry Projects", value: "Mandatory" },
            { label: "Scholarships", value: "Available" }
        ],
        programsList: [
            { name: "M.Tech Artificial Intelligence", duration: "2 Years", tags: ["Tech", "Advanced"] },
            { name: "M.Tech VLSI Design", duration: "2 Years", tags: ["Electronics"] },
            { name: "MBA (Master of Business Admin)", duration: "2 Years", tags: ["Management"] },
            { name: "M.Sc Data Science", duration: "2 Years", tags: ["Science"] },
            { name: "M.A. Psychology", duration: "2 Years", tags: ["Arts"] }
        ],
        features: [
            { title: "Research Thesis", description: "In-depth research under expert faculty mentorship." },
            { title: "Teaching Assistantships", description: "Gain teaching experience while you learn." },
            { title: "Industry Mentors", description: "Guidance from leaders in top corporations." },
            { title: "Flexible Schedule", description: "Evening classes available for some programs." }
        ]
    },
    "phd-programs": {
        type: "program-level",
        title: "Doctoral Programs (PhD)",
        subtitle: "Redefining Knowledge",
        heroImage: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
        description: "Join a community of scholars dedicated to solving the world's most pressing problems. Our PhD programs offer full funding and access to world-class facilities.",
        stats: [
            { label: "Current Scholars", value: "150+" },
            { label: "Fully Funded", value: "100%" },
            { label: "Patents Filed", value: "50+" },
            { label: "Duration", value: "3-5 Years" }
        ],
        programsList: [
            { name: "PhD in Computer Science", duration: "3-5 Years", tags: ["Research"] },
            { name: "PhD in Engineering", duration: "3-5 Years", tags: ["Applied"] },
            { name: "PhD in Economics", duration: "3-5 Years", tags: ["Social Science"] },
            { name: "PhD in Biotechnology", duration: "3-5 Years", tags: ["Science"] }
        ],
        features: [
            { title: "Full Stipend", description: "Coveted monthly stipend for all qualified scholars." },
            { title: "Travel Grants", description: "Funding to present papers at international conferences." },
            { title: "Interdisciplinary", description: "Collaborate across departments and schools." },
            { title: "Publication Support", description: "Workshops on writing for high-impact journals." }
        ]
    },
    "online-courses": {
        type: "program-level",
        title: "Online & Distance Learning",
        subtitle: "Learn from Anywhere",
        heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
        description: "High-quality education delivered to your screen. Upskill with our professional certificates and executive programs without pausing your career.",
        stats: [
            { label: "Learners", value: "10k+" },
            { label: "Courses", value: "50+" },
            { label: "Flexibility", value: "100%" },
            { label: "Certificates", value: "Verified" }
        ],
        programsList: [
            { name: "Data Science Professional Cert", duration: "6 Months", tags: ["Tech"] },
            { name: "Digital Marketing Executive", duration: "3 Months", tags: ["Business"] },
            { name: "Cybersecurity Fundamentals", duration: "4 Months", tags: ["Tech"] },
            { name: "Leadership for Managers", duration: "2 Months", tags: ["Management"] }
        ],
        features: [
            { title: "Self-Paced", description: "Learn at your own speed, on your own time." },
            { title: "Live Sessions", description: "Weekly webinars with industry experts." },
            { title: "Peer Community", description: "Global network of professionals." },
            { title: "Career Support", description: "Resume review and interview prep." }
        ]
    },

    // --- DEPARTMENTS ---
    "cse": {
        type: "department",
        title: "Computer Science & Engineering",
        subtitle: "Innovating the Digital Future",
        heroImage: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2670&auto=format&fit=crop",
        description: "The Department of Computer Science and Engineering is at the forefront of digital innovation. We cultivate problem-solvers and creative thinkers who drive the technology of tomorrow, from AI to Cloud Computing. Our curriculum is designed to bridge the gap between academic theory and industry reality.",
        hod: {
            name: "Dr. P. Venkata Krishna",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            message: "We focus on hands-on coding, algorithm design, and system architecture to ensure our students are day-one ready for top tech firms."
        },
        stats: [
            { label: "Highest Package", value: "67 LPA" },
            { label: "Placement Rate", value: "98%" },
            { label: "Research Papers", value: "250+" },
            { label: "Patents Filed", value: "15+" }
        ],
        features: [
            { title: "AI & Deep Learning Lab", description: "State-of-the-art GPUs for training complex neural networks." },
            { title: "Cloud Computing Center", description: "Partnership with AWS and Azure for certification and training." },
            { title: "Cyber Security Cell", description: "Dedicated ethical hacking and network security workshops." },
            { title: "IoT Innovation Hub", description: "Building smart cities and connected devices." }
        ],
        highlights: [
            "Industry-Aligned Curriculum with focus on Full Stack Development",
            "100% Internship Support in Top Product Companies",
            "Regular Hackathons and Coding Competitions",
            "Access to Global Research Journals and Digital Libraries"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    "aiml": {
        type: "department",
        title: "Artificial Intelligence & ML",
        subtitle: "Defining Intelligence",
        heroImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        description: "Explore the frontiers of intelligence. Our AI & ML program combines mathematics, statistics, and computer science to build systems that learn, adapt, and make decisions.",
        hod: {
            name: "Dr. S. Sharma",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            message: "AI is reshaping every industry. We prepare our students not just to use AI tools, but to create the next generation of intelligent algorithms responsibly and ethically."
        },
        stats: [
            { label: "Highest Package", value: "45 LPA" },
            { label: "Avg Package", value: "12 LPA" },
            { label: "Projects", value: "120+" },
            { label: "Labs", value: "6" }
        ],
        features: [
            { title: "Neural Networks Lab", description: "Dedicated for deep learning research." },
            { title: "Robotics Integration", description: "Combining AI with physical systems." },
            { title: "Data Mining", description: "Extracting value from massive datasets." },
            { title: "NLP Workshop", description: "Teaching machines to understand human language." }
        ],
        highlights: [
            "Specialized courses in Deep Learning and Computer Vision",
            "Collaboration with Leading AI Research Institutes",
            "Hands-on projects with Real-world Datasets",
            "Ethics in AI and Responsible Computing modules"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2606&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    // ... [Other departments would follow similar pattern] ...
    "aids": {
        type: "department",
        title: "Artificial Intelligence & Data Science",
        subtitle: "Mastering the Data Revolution",
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        description: "Data is the new oil. The AIDS department equips students with the skills to analyze big data, visualize trends, and build predictive models that drive business decisions.",
        hod: {
            name: "Dr. A. Verma",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
            message: "Our program is a blend of rigorous statistics and cutting-edge machine learning. We empower students to find the signal in the noise."
        },
        stats: [
            { label: "Highest Package", value: "42 LPA" },
            { label: "Data Scientists", value: "200+" },
            { label: "Internships", value: "100%" },
            { label: "Industry Projects", value: "50+" }
        ],
        features: [
            { title: "Big Data Analytics", description: "Hadoop and Spark clusters for massive data processing." },
            { title: "Visualization Lab", description: "Tableau and PowerBI certification tracks." },
            { title: "Predictive Modeling", description: "Real-world forecasting for finance and healthcare." },
            { title: "Business Intelligence", description: "Turning data into actionable strategy." }
        ],
        highlights: [
            "Advanced Statistics and Probability coursework",
            "Tableau and PowerBI Certification Programs",
            "Partnerships with Analytics Firms for Internships",
            "Capstone Projects on Real-time Big Data"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2676&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    // Adding highlights and gallery to default/others for safety
    "it": {
        type: "department",
        title: "Information Technology",
        subtitle: "Connecting the World",
        heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop",
        description: "Focusing on the application of technology to solve business problems. Our IT program emphasizes software development, network administration, and enterprise information systems.",
        hod: {
            name: "Prof. K. Reddy",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
            message: "We empower students to become the architects of the information age, mastering the tools that keep the modern world connected and efficient."
        },
        stats: [
            { label: "Highest Package", value: "44 LPA" },
            { label: "Placement Rate", value: "95%" },
            { label: "Startups", value: "12" },
            { label: "Alumni", value: "1500+" }
        ],
        features: [
            { title: "Full Stack Dev", description: "Modern web and mobile application development." },
            { title: "Network Admin", description: "Cisco certified networking academy." },
            { title: "Database Mgmt", description: "Advanced SQL and NoSQL training." },
            { title: "DevOps Culture", description: "CI/CD pipelines and cloud deployment." }
        ],
        highlights: [
            "Cisco Certified Networking Academy",
            "Full Stack Development Bootcamps",
            "Cloud Deployment and DevOps Training",
            "Agile Methodology Workshops"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c54be3853247?q=80&w=2662&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    "ece": {
        type: "department",
        title: "Electronics & Communication",
        subtitle: "Powering the Connected World",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        description: "From microchips to satellite systems, ECE is the backbone of modern technology. We focus on embedded systems, VLSI design, and wireless communication.",
        hod: {
            name: "Dr. R. Gupta",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
            message: "We are entering the era of 5G and IoT. Our students are trained to design the hardware that makes software come to life."
        },
        stats: [
            { label: "Highest Package", value: "38 LPA" },
            { label: "Core Jobs", value: "85%" },
            { label: "Chip Designers", value: "120+" },
            { label: "Patents", value: "25+" }
        ],
        features: [
            { title: "VLSI Design Lab", description: "Cadence and Synopsys tools for chip design." },
            { title: "IoT & Embedded", description: "Arduino, Raspberry Pi, and FPGA programming." },
            { title: "Signal Processing", description: "Advanced DSP and Image Processing labs." },
            { title: "Antenna Design", description: "RF and Microwave engineering facilities." }
        ],
        highlights: [
            "Hands-on VLSI Design Chip Fabrication",
            "Embedded Systems & IoT Workshops",
            "Signal Processing for 5G Technology",
            "Robotics & Automation Seminars"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2669&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2642&auto=format&fit=crop"
        ]
    },
    "eee": {
        type: "department",
        title: "Electrical & Electronics",
        subtitle: "Energizing the Future",
        heroImage: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?q=80&w=2669&auto=format&fit=crop",
        description: "Sustainable energy and power systems are critical global challenges. EEE prepares students for careers in power generation, electric vehicles, and renewable energy.",
        hod: {
            name: "Dr. M. Singh",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
            message: "The world is shifting to green energy. We equip our students with the knowledge to lead the revolution in electric mobility and smart grids."
        },
        stats: [
            { label: "Highest Package", value: "35 LPA" },
            { label: "Govt Jobs", value: "40+" },
            { label: "EV Research", value: "Active" },
            { label: "Grid Projects", value: "10+" }
        ],
        features: [
            { title: "Power Systems Lab", description: "Simulation and control of high voltage systems." },
            { title: "Renewable Energy", description: "Solar and Wind energy integration testing." },
            { title: "Electric Vehicles", description: "Battery management and motor control research." },
            { title: "Smart Grid", description: "Modernizing power distribution infrastructure." }
        ],
        highlights: [
            "Focus on Renewable Energy Systems",
            "Electric Vehicle Technology Workshops",
            "Smart Grid & Power Systems Analysis",
            "Industrial Automation with PLC & SCADA"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1518105570919-e342af1a8275?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    "civil": {
        type: "department",
        title: "Civil Engineering",
        subtitle: "Building Foundation of Civilization",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop", // Construction/Bridge
        description: "Civil engineers shape our physical environment. Our program covers structural engineering, transportation, geotechnics, and sustainable infrastructure development.",
        hod: {
            name: "Prof. S. Patil",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop",
            message: "We don't just build structures; we build communities. Precision, sustainability, and longevity are the core principles we instill in our engineers."
        },
        stats: [
            { label: "Highest Package", value: "28 LPA" },
            { label: "Infra Projects", value: "50+" },
            { label: "Govt Roles", value: "100+" },
            { label: "Consultancy", value: "Active" }
        ],
        features: [
            { title: "CAD & BIM Lab", description: "AutoCAD and Revit for 3D modeling." },
            { title: "Surveying", description: "Total Station and GPS based land surveying." },
            { title: "Material Testing", description: "Concrete and Soil mechanics analysis." },
            { title: "Green Building", description: "Sustainable design and LEED certification." }
        ],
        highlights: [
            "Computer Aided Design (CAD) & BIM",
            "Advanced Surveying with Total Stations",
            "Sustainable Building Practices",
            "Geotechnical Engineering Field Trips"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2597&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2689&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    "mech": {
        type: "department",
        title: "Mechanical Engineering",
        subtitle: "Machines that Move the World",
        heroImage: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=2609&auto=format&fit=crop", // Mechanical/Gears
        description: "The broadest engineering discipline. Mechanical engineering covers robotics, automotive, thermodynamics, and manufacturing. We forge builders and innovators.",
        hod: {
            name: "Dr. V. Rao",
            role: "Head of Department",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
            message: "From nano-bots to spacecraft, mechanical engineers are everywhere. We teach the physics of putting ideas into motion."
        },
        stats: [
            { label: "Highest Package", value: "32 LPA" },
            { label: "Auto Industry", value: "Top Tier" },
            { label: "Robotics", value: "Advanced" },
            { label: "Core Placements", value: "90%" }
        ],
        features: [
            { title: "Robotics & Automation", description: "Industrial arms and automated assembly lines." },
            { title: "3D Printing Hub", description: "Rapid prototyping and additive manufacturing." },
            { title: "Thermodynamics", description: "Heat transfer and fluid mechanics labs." },
            { title: "AutoCAD & FEA", description: "Design and stress analysis using Ansys." }
        ],
        highlights: [
            "Automotive Design and Aerodynamics",
            "Robotics and Mechatronics Projects",
            "Advanced Manufacturing Processes",
            "Thermal Engineering Simulations"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop"
        ]
    },
    // Default fallback
    "default": {
        type: "department",
        title: "Department of Engineering",
        subtitle: "Excellence in Education",
        heroImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
        description: "A leading department committed to academic excellence, research innovation, and holistic student development. We strive to produce globally competent engineers.",
        hod: {
            name: "Head of Department",
            role: "HOD",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
            message: "Welcome to our department. We are dedicated to providing a rigorous academic environment that fosters curiosity, critical thinking, and professional growth."
        },
        stats: [
            { label: "Placement Rate", value: "90%+" },
            { label: "Faculty", value: "50+" },
            { label: "Labs", value: "10+" },
            { label: "Research", value: "Active" }
        ],
        features: [
            { title: "Advanced Labs", description: "Equipped with the latest technology." },
            { title: "Industry Tie-ups", description: "Collaborations with top MNCs." },
            { title: "Research Focus", description: "Encouraging innovation and patents." },
            { title: "Student Clubs", description: "Active technical and cultural societies." }
        ],
        highlights: [
            "Interdisciplinary Research Opportunities",
            "Collaborations with Industry Leaders",
            "Holistic Student Development Programs",
            "State-of-the-Art Laboratory Facilities"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
        ]
    }
};
