"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    Atom, Cpu, Leaf, Brain,
    FlaskConical, Network, Database, Zap,
    Award, BookOpen, Briefcase, FileText, ChevronRight
} from "lucide-react";

// Data
const FOCUS_AREAS = [
    {
        title: "Artificial Intelligence",
        icon: Brain,
        color: "text-purple-500",
        description: "Pioneering research in machine learning, neural networks, and ethical AI to solve complex global challenges.",
        project: {
            title: "AI-Driven Early Diagnosis System",
            description: "Developing a deep learning model to detect early signs of diabetic retinopathy from retinal scans with 98% accuracy.",
            status: "Clinical Trials Phase 1",
            team: "Dr. Sarah Chen & 4 PhD Students"
        }
    },
    {
        title: "Sustainable Energy",
        icon: Leaf,
        color: "text-green-500",
        description: "Developing next-gen renewable energy solutions, efficient storage systems, and smart grid technologies.",
        project: {
            title: "Smart Grid Optimization Algorithm",
            description: "Creating a decentralized energy management system to optimize power distribution in microgrids using IoT sensors.",
            status: "Prototype Testing",
            team: "Prof. James Miller & Renewables Group"
        }
    },
    {
        title: "Biotechnology",
        icon: FlaskConical,
        color: "text-teal-500",
        description: "Advancing healthcare through genetic engineering, drug discovery, and bioinformatics research.",
        project: {
            title: "CRISPR-Based Crop Resilience",
            description: "Engineering drought-resistant crop varieties to ensure food security in changing climate conditions.",
            status: "Field Trials",
            team: "Dr. Anjali Gupta & Bio-Eng Lab"
        }
    },
    {
        title: "Robotics",
        icon: Cpu,
        color: "text-brand-red",
        description: "Creating autonomous systems and intelligent robotics for industrial, medical, and exploration applications.",
        project: {
            title: "Autonomous Search & Rescue Drone",
            description: "Building a swarm of autonomous drones capable of navigating complex disaster zones to locate survivors.",
            status: "Hardware Finalization",
            team: "Robotics Club & Prof. K. Lee"
        }
    }
];

const CENTERS = [
    {
        title: "Innovation Hub",
        description: "A collaborative space for students and startups to incubate ideas.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop",
        features: ["Incubation Support", "Mentor Network", "Seed Funding"]
    },
    {
        title: "Advanced Materials Lab",
        description: "State-of-the-art facility for synthesizing and testing new materials.",
        image: "https://images.unsplash.com/photo-1581093458791-9f302e6831c7?q=80&w=2670&auto=format&fit=crop",
        features: ["Nanotech Equipment", "Stress Testing", "Polymer Research"]
    },
    {
        title: "Data Science Center",
        description: "Crunching massive datasets to derive actionable insights for industry.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        features: ["Big Data Analytics", "Cloud Computing", "AI Modeling"]
    },
    {
        title: "IoT Lab",
        description: "Connecting the physical and digital worlds through smart devices.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
        features: ["Smart Home Tech", "Industrial IoT", "Sensor Networks"]
    }
];

const OPPORTUNITIES_DATA = {
    "Research Grants": {
        icon: Award,
        description: "Funding opportunities for breakthrough research projects.",
        details: [
            "National Science Foundation Grant (Up to ₹50L)",
            "Industry Sponsored Research (Variable)",
            "International Collab Grants (Up to $100k)",
            "Student Startup Fund (Up to ₹10L)"
        ]
    },
    "Student Projects": {
        icon: Briefcase,
        description: "Hands-on projects for undergraduate and postgraduate students.",
        details: [
            "Semester-long Capstone Projects",
            "Summer Research Fellowships",
            "Interdisciplinary Team Competitions",
            "Hardware & Software Hackathons"
        ]
    },
    "Publications": {
        icon: BookOpen,
        description: "Publish your findings in top-tier journals and conferences.",
        details: [
            "IEEE & ACM Conference Papers",
            "Peer-Reviewed Journal Articles",
            "Technical Whitepapers",
            "Open Access Research Repository"
        ]
    },
    "Patents": {
        icon: FileText,
        description: "Support for filing patents and protecting intellectual property.",
        details: [
            "Patent Drafting Assistance",
            "Legal & Filing Resources",
            "IP Strategy Workshops",
            "Commercialization Support"
        ]
    }
};

export default function ResearchPage() {
    const [activeTab, setActiveTab] = useState<keyof typeof OPPORTUNITIES_DATA>("Research Grants");
    const [selectedArea, setSelectedArea] = useState<typeof FOCUS_AREAS[0] | null>(null);

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedArea && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedArea(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelectedArea(null)}
                                className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                            >
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>

                            <div className="h-32 bg-dark-blue relative overflow-hidden">
                                <div className="absolute inset-0 bg-brand-red/10 mix-blend-overlay"></div>
                                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                    <div className={`p-3 bg-white rounded-xl shadow-lg`}>
                                        <selectedArea.icon className={`h-8 w-8 ${selectedArea.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white tracking-wide">{selectedArea.title}</h3>
                                </div>
                            </div>

                            <div className="p-8">
                                <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    Current Project Highlights
                                </span>
                                <h4 className="text-xl font-display font-bold text-dark-blue mb-2">{selectedArea.project.title}</h4>
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                    {selectedArea.project.description}
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Status</div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            <span className="text-sm font-bold text-dark-blue">{selectedArea.project.status}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Team Lead</div>
                                        <div className="text-sm font-bold text-dark-blue">{selectedArea.project.team}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
                    alt="Research Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/80 mix-blend-multiply" />
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <div className="inline-block border border-white/20 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full uppercase tracking-widest text-sm font-bold mb-4">
                            Innovation & Discovery
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-medium mb-2 uppercase tracking-tight">
                            Research <span className="font-bold text-brand-red">&amp;</span> Impact
                        </h1>
                        <p className="text-xl font-light opacity-80 max-w-2xl mx-auto tracking-wide uppercase">
                            Pushing the boundaries of what is possible through relentless inquiry.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Focus Areas Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-dark-blue mb-4 uppercase tracking-widest">Focus Areas</h2>
                    <div className="w-16 h-1 bg-brand-red mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FOCUS_AREAS.map((area, i) => (
                        <motion.div
                            key={i}
                            onClick={() => setSelectedArea(area)}
                            className="group p-8 border border-gray-100 bg-white hover:border-brand-red/20 hover:shadow-2xl transition-all duration-300 relative overflow-hidden cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 rounded-bl-full -mr-10 -mt-10 transition-colors group-hover:bg-brand-red/5"></div>

                            <div className={`w-14 h-14 mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <area.icon className={`h-7 w-7 ${area.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-dark-blue mb-3 uppercase tracking-wide group-hover:text-brand-red transition-colors">{area.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                                {area.description}
                            </p>

                            <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-brand-red opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                View Project <ChevronRight className="h-3 w-3 ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Centers & Labs Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-display font-medium text-dark-blue mb-2 uppercase tracking-tight">Centers <span className="font-bold">&amp; Labs</span></h2>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">World-class infrastructure for breakthrough research</p>
                        </div>
                        <button className="px-8 py-3 bg-dark-blue text-white uppercase tracking-widest text-sm font-bold hover:bg-brand-red transition-colors">
                            Explore All Facilities
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {CENTERS.map((center, i) => (
                            <motion.div
                                key={i}
                                className="group bg-white flex flex-col md:flex-row h-full border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                                    <Image
                                        src={center.image}
                                        alt={center.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-dark-blue/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col justify-center">
                                    <h3 className="text-2xl font-display font-bold text-dark-blue mb-3 uppercase tracking-wide">{center.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{center.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {center.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wider">
                                                <div className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Opportunities Section */}
            <section className="py-24 container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-display font-bold text-dark-blue mb-4 uppercase tracking-widest">Opportunities</h2>
                    <div className="w-16 h-1 bg-brand-red mx-auto mb-8"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                        Unlock your potential with our extensive research support ecosystem.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Tabs Navigation */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-2">
                        {Object.keys(OPPORTUNITIES_DATA).map((key) => {
                            // @ts-ignore
                            const item = OPPORTUNITIES_DATA[key];
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key as keyof typeof OPPORTUNITIES_DATA)}
                                    className={`text-left p-6 w-full flex items-center justify-between transition-all duration-300 border-l-4
                                        ${isActive
                                            ? "bg-gray-50 border-brand-red shadow-sm"
                                            : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-200"
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${isActive ? "bg-white text-brand-red shadow-sm" : "bg-gray-100 text-gray-400"}`}>
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className={`text-sm font-bold uppercase tracking-wider ${isActive ? "text-dark-blue" : "text-gray-500"}`}>
                                            {key}
                                        </span>
                                    </div>
                                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isActive ? "text-brand-red rotate-90" : "text-gray-300"}`} />
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Content */}
                    <div className="w-full lg:w-2/3 min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-dark-blue text-white p-10 md:p-12 relative overflow-hidden h-full flex flex-col justify-center"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        {/* @ts-ignore */}
                                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                                            {/* @ts-ignore */}
                                            {(() => { const Icon = OPPORTUNITIES_DATA[activeTab].icon; return <Icon className="h-8 w-8 text-brand-red" />; })()}
                                        </div>
                                        <h3 className="text-3xl font-display font-medium uppercase tracking-wide">{activeTab}</h3>
                                    </div>

                                    {/* @ts-ignore */}
                                    <p className="text-xl text-gray-300 font-light mb-8 leading-relaxed max-w-xl">
                                        {/* @ts-ignore */}
                                        {OPPORTUNITIES_DATA[activeTab].description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* @ts-ignore */}
                                        {OPPORTUNITIES_DATA[activeTab].details.map((detail, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                                <div className="h-2 w-2 bg-brand-red rotate-45"></div>
                                                <span className="text-sm font-bold uppercase tracking-wider text-gray-200">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-10 px-8 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-dark-blue transition-all duration-300">
                                        Apply Now / Learn More
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </div>
    );
}
