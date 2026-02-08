"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy } from "lucide-react";

export default function ScholarshipsPage() {
    const scholarships = [
        {
            title: "Merit Scholarship",
            target: "For Top Rankers",
            description: "100% tuition fee waiver for students securing rank below 1000 in EAMCET / JEE Mains. 50% waiver for ranks below 5000.",
            icon: Award,
            accent: "border-purple-500 text-purple-600"
        },
        {
            title: "Sports Excellence",
            target: "National Level Players",
            description: "Special scholarships and fee concessions for students who have represented the state or nation in sports events.",
            icon: Trophy,
            accent: "border-orange-500 text-orange-600"
        },
        {
            title: "Means-cum-Merit",
            target: "Economically Weak Sections",
            description: "Financial assistance provided to students from economically weaker backgrounds with good academic records.",
            icon: GraduationCap,
            accent: "border-blue-500 text-blue-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 uppercase tracking-tight">Scholarships</h1>
                <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">Providing financial support to deserving and talented students.</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {scholarships.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white border border-gray-200 p-10 shadow-sm hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-dark-blue transition-colors"></div>

                            <div className={`w-20 h-20 mx-auto border-2 ${item.accent.split(' ')[0]} flex items-center justify-center mb-8 rotate-45 group-hover:rotate-0 transition-all duration-500`}>
                                <item.icon className={`w-8 h-8 -rotate-45 group-hover:rotate-0 transition-all duration-500 ${item.accent.split(' ')[1]}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-dark-blue mb-4 uppercase tracking-wide">{item.title}</h3>
                            <span className="inline-block px-4 py-1 bg-gray-50 border border-gray-200 text-dark-blue text-xs font-bold uppercase tracking-widest mb-6">{item.target}</span>
                            <p className="text-gray-600 leading-relaxed mb-10 text-sm">{item.description}</p>

                            <button className="text-dark-blue font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-brand-red pb-1 hover:text-brand-red transition-colors">
                                View Details & Apply
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 bg-gray-50 p-12 border border-gray-200 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200 opacity-20 rotate-45 transform translate-x-16 -translate-y-16"></div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-4">Need Help with Financial Aid?</h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Our dedicated scholarship cell is here to assist you with the application process and guide you through available opportunities.</p>
                    <a href="mailto:scholarships@collegego.edu" className="inline-block bg-dark-blue text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-brand-red transition-colors shadow-lg">
                        Contact Scholarship Cell
                    </a>
                </div>
            </section>
        </div>
    );
}
