"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, BookOpen } from "lucide-react";

export default function FacultyDirectoryPage() {
    const faculty = [
        {
            name: "Dr. Richard Feynman",
            role: "Dean of Engineering",
            dept: "School of Engineering",
            image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=2670&auto=format&fit=crop",
            email: "dean.eng@collegego.edu",
            research: "Quantum Mechanics, Nanotechnology"
        },
        {
            name: "Dr. Indra Nooyi",
            role: "Dean of Business",
            dept: "School of Business",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            email: "dean.biz@collegego.edu",
            research: "Strategic Management, Leadership"
        },
        {
            name: "Prof. Amartya Sen",
            role: "Dean of Arts",
            dept: "School of Arts",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop",
            email: "dean.arts@collegego.edu",
            research: "Welfare Economics, Social Justice"
        },
        {
            name: "Dr. C.V. Raman",
            role: "Dean of Sciences",
            dept: "School of Sciences",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop",
            email: "dean.sci@collegego.edu",
            research: "Spectroscopy, Optics"
        },
        {
            name: "Dr. P. Venkata Krishna",
            role: "Head of Dept",
            dept: "Computer Science",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
            email: "hod.cse@collegego.edu",
            research: "Cloud Computing, IoT"
        },
        {
            name: "Dr. S. Sharma",
            role: "Head of Dept",
            dept: "AI & ML",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
            email: "hod.aiml@collegego.edu",
            research: "Deep Learning, NLP"
        },
        {
            name: "Dr. A. Verma",
            role: "Head of Dept",
            dept: "Data Science",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop",
            email: "hod.aids@collegego.edu",
            research: "Big Data Analytics"
        },
        {
            name: "Prof. K. Reddy",
            role: "Head of Dept",
            dept: "Information Tech",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
            email: "hod.it@collegego.edu",
            research: "Network Security"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Faculty Directory</h1>
                <p className="text-xl opacity-80 max-w-2xl mx-auto">Meet the visionary leaders and educators shaping the future.</p>
            </section>

            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {faculty.map((member, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="relative h-64 w-full bg-gray-100">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <p className="font-bold flex items-center gap-2 text-sm"><Mail className="w-4 h-4" /> {member.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark-blue mb-1">{member.name}</h3>
                                <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-2">{member.role}</p>
                                <p className="text-gray-500 text-sm mb-4">{member.dept}</p>
                                <div className="pt-4 border-t border-gray-100 text-xs text-gray-400">
                                    <span className="block font-bold mb-1 text-gray-500 uppercase">Research Area</span>
                                    {member.research}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
