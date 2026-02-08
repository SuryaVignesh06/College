"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Quote, TrendingUp, Users, Building, Award } from "lucide-react";
import { LogoLoop } from "@/components/ui/logo-loop";

const PLACEMENT_STATS = [
    { label: "Highest Package", value: "67 LPA", icon: TrendingUp },
    { label: "Students Placed", value: "1000+", icon: Users },
    { label: "Companies Visited", value: "200+", icon: Building },
    { label: "Avg Package", value: "8.5 LPA", icon: Award },
];

const SUCCESS_STORIES_BY_YEAR = {
    2025: [
        {
            name: "Aditi Sharma",
            company: "Google",
            role: "Software Engineer",
            package: "67 LPA",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            quote: "The coding culture here is unmatched. The relentless support from faculty and peers helped me crack the Google interview."
        },
        {
            name: "Rahul Verma",
            company: "Amazon",
            role: "SDE I",
            package: "45 LPA",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            quote: "Mock interviews and competitive programming workshops were the game changer for me."
        },
        {
            name: "Sneha Reddy",
            company: "Microsoft",
            role: "Data Scientist",
            package: "42 LPA",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
            quote: "CollegeGO provided the perfect environment to explore AI and Data Science. I am grateful for the opportunities."
        },
        {
            name: "Aryan Kapoor",
            company: "Uber",
            role: "Backend Engineer",
            package: "40 LPA",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
            quote: "The system design electives gave me deep insights into building scalable applications."
        },
        {
            name: "Meera Iyer",
            company: "Adobe",
            role: "Product Intern",
            package: "38 LPA",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop",
            quote: "I learned to think from a user's perspective, which was crucial for my product role."
        },
        {
            name: "Kabir Singh",
            company: "Salesforce",
            role: "Developer",
            package: "35 LPA",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
            quote: "The hackathons organized by the college were the highlight of my engineering journey."
        },
        {
            name: "Zara Khan",
            company: "Atlassian",
            role: "SDE",
            package: "50 LPA",
            image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop",
            quote: "Collaborative projects helped me understand the importance of teamwork in software development."
        }
    ],
    2024: [
        {
            name: "Vikram Singh",
            company: "Goldman Sachs",
            role: "Analyst",
            package: "38 LPA",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2574&auto=format&fit=crop",
            quote: "The finance electives and internship support helped me secure this role at a top investment bank."
        },
        {
            name: "Anjali Gupta",
            company: "J.P. Morgan",
            role: "Tech Analyst",
            package: "36 LPA",
            image: "https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?q=80&w=2574&auto=format&fit=crop",
            quote: "The robust curriculum prepared me well for the technical challenges of the financial sector."
        },
        {
            name: "Arjun Nair",
            company: "Morgan Stanley",
            role: "Associate",
            package: "35 LPA",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
            quote: "Building real-world projects during the semester made the transition to industry seamless."
        },
        {
            name: "Riya Desai",
            company: "Oracle",
            role: "Software Engineer",
            package: "32 LPA",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop",
            quote: "The database management courses were incredibly detailed and stuck with me."
        },
        {
            name: "Karan Malhotra",
            company: "Cisco",
            role: "Network Engineer",
            package: "28 LPA",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
            quote: "Networking labs provided hands-on experience that was directly applicable to my job."
        },
        {
            name: "Sanya Mir",
            company: "Intel",
            role: "Hardware Engineer",
            package: "30 LPA",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=2572&auto=format&fit=crop",
            quote: "I loved the focus on core engineering subjects alongside modern tech."
        },
        {
            name: "Dev Patel",
            company: "Qualcomm",
            role: "Systems Engineer",
            package: "31 LPA",
            image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop",
            quote: "The embedded systems projects were challenging but incredibly rewarding."
        }
    ],
    2023: [
        {
            name: "Priya Patel",
            company: "Airbnb",
            role: "Full Stack Dev",
            package: "52 LPA",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
            quote: "The rigorous curriculum and algorithmic training were instrumental in my success."
        },
        {
            name: "Rohan Das",
            company: "Walmart",
            role: "Software Engineer",
            package: "32 LPA",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
            quote: "Campus placements were well-organized, and the placement cell was extremely supportive."
        },
        {
            name: "Kavita Mehra",
            company: "Flipkart",
            role: "SDE II",
            package: "30 LPA",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=2574&auto=format&fit=crop",
            quote: "I learned to balance technical skills with soft skills, which is crucial for a global firm."
        },
        {
            name: "Amit Kumar",
            company: "Samsung",
            role: "R&D Engineer",
            package: "28 LPA",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
            quote: "Research opportunities at the college helped me publish papers and get noticed."
        },
        {
            name: "Neha Singh",
            company: "Deloitte",
            role: "Consultant",
            package: "15 LPA",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop",
            quote: "The case study competitions prepared me well for the consulting world."
        },
        {
            name: "Rajesh Koothrappali",
            company: "TCS",
            role: "System Engineer",
            package: "12 LPA",
            image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2574&auto=format&fit=crop",
            quote: "The college provided a solid foundation in computer science fundamentals."
        },
        {
            name: "Simran Kaur",
            company: "Wipro",
            role: "Project Engineer",
            package: "12 LPA",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
            quote: "I am grateful for the diverse learning environment and supportive faculty."
        }
    ]
};

const RECRUITER_LOGOS = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        alt: "Google",
        width: 120, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        alt: "Microsoft",
        width: 120, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon",
        width: 100, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
        alt: "Goldman Sachs",
        width: 140, height: 50
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg",
        alt: "SpaceX",
        width: 140, height: 30
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        alt: "IBM",
        width: 100, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        alt: "Oracle",
        width: 120, height: 30
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        alt: "Infosys",
        width: 100, height: 40
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/tata-consultancy-services.svg",
        alt: "TCS",
        width: 120, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
        alt: "Wipro",
        width: 100, height: 40
    }
];

export default function PlacementsPage() {
    const [selectedYear, setSelectedYear] = useState<keyof typeof SUCCESS_STORIES_BY_YEAR>(2025);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop"
                    alt="Placements"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/80 mix-blend-multiply" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 inline-block"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-medium mb-2 uppercase tracking-tight">
                            Success <span className="font-bold text-brand-red">Stories</span>
                        </h1>
                        <p className="text-lg max-w-2xl mx-auto text-gray-200 font-light tracking-wide uppercase">
                            Leading the way in global technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 -mt-24 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {PLACEMENT_STATS.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white p-8 shadow-xl border-l-4 border-brand-red text-center group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -mr-12 -mt-12 z-0"></div>
                                <div className="relative z-10">
                                    <div className="w-12 h-12 mx-auto bg-dark-blue flex items-center justify-center mb-4 text-white group-hover:bg-brand-red transition-colors shadow-lg">
                                        <stat.icon className="h-6 w-6" />
                                    </div>
                                    <div className="text-4xl font-bold text-dark-blue mb-2 font-mono">{stat.value}</div>
                                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recruiters Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-dark-blue mb-4 uppercase tracking-widest">Top Recruiters</h2>
                    <div className="w-16 h-1 bg-brand-red mx-auto"></div>
                </div>
                <div className="w-full overflow-hidden">
                    <LogoLoop
                        logos={RECRUITER_LOGOS}
                        speed={50}
                        gap={60}
                        pauseOnHover={true}
                        logoHeight={40}
                        renderItem={(item) => (
                            <div className="relative h-16 w-40 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="max-h-12 w-auto object-contain"
                                />
                            </div>
                        )}
                    />
                </div>
            </section>

            {/* Success Stories */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-medium text-dark-blue mb-2 uppercase tracking-tight">Student <span className="font-bold">Testimonials</span></h2>
                        <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Hear from our placed students</p>
                    </div>

                    {/* Year Filter Tabs */}
                    <div className="flex justify-center gap-4 mb-16">
                        {Object.keys(SUCCESS_STORIES_BY_YEAR).reverse().map((year) => (
                            <button
                                key={year}
                                onClick={() => setSelectedYear(Number(year) as keyof typeof SUCCESS_STORIES_BY_YEAR)}
                                className={`px-8 py-3 uppercase tracking-widest font-bold text-sm transition-all duration-300 border border-dark-blue
                                    ${selectedYear === Number(year)
                                        ? "bg-dark-blue text-white shadow-lg scale-105"
                                        : "bg-white text-dark-blue hover:bg-gray-50 hover:scale-105"
                                    }`}
                            >
                                Batch {year}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedYear}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-10"
                        >
                            {SUCCESS_STORIES_BY_YEAR[selectedYear].map((student, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-white border border-gray-200 p-10 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-red transition-colors"></div>
                                    <Quote className="absolute top-8 right-8 text-gray-100 h-20 w-20 transform -rotate-12 group-hover:text-brand-red/5 transition-colors" />

                                    <div className="flex items-center gap-5 mb-8 relative z-10">
                                        <div className="w-16 h-16 overflow-hidden relative border-2 border-white shadow-md">
                                            <Image src={student.image} alt={student.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-dark-blue text-lg uppercase tracking-wide">{student.name}</h4>
                                            <p className="text-brand-red text-xs font-bold uppercase tracking-wider">{student.company}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10 font-light text-lg">"{student.quote}"</p>
                                    <div className="border-t border-gray-100 pt-6 flex justify-between items-center text-xs uppercase tracking-widest font-bold">
                                        <span className="text-gray-400">Package offered</span>
                                        <span className="text-dark-blue bg-gray-100 px-3 py-1">{student.package}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}
