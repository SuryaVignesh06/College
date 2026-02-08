"use client";

import { motion } from "framer-motion";
import { BookOpen, Clock, Users } from "lucide-react";

export default function CoursesOfferedPage() {
    const courses = [
        {
            level: "Undergraduate (B.Tech)",
            programs: [
                { name: "Computer Science & Engineering", intake: 180, duration: "4 Years" },
                { name: "Electronics & Communication Engg", intake: 180, duration: "4 Years" },
                { name: "Information Technology", intake: 120, duration: "4 Years" },
                { name: "Mechanical Engineering", intake: 60, duration: "4 Years" },
                { name: "Civil Engineering", intake: 60, duration: "4 Years" },
                { name: "Artificial Intelligence & Data Science", intake: 60, duration: "4 Years" },
            ]
        },
        {
            level: "Postgraduate (M.Tech / MBA)",
            programs: [
                { name: "M.Tech - Computer Science", intake: 18, duration: "2 Years" },
                { name: "M.Tech - VLSI Design", intake: 18, duration: "2 Years" },
                { name: "Master of Business Administration", intake: 60, duration: "2 Years" },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 uppercase tracking-tight">Courses Offered</h1>
                <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">Explore our diverse range of engineering and management programs designed for the future.</p>
            </section>

            <section className="py-24 container mx-auto px-4">
                <div className="space-y-20">
                    {courses.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-display font-bold text-dark-blue mb-10 border-l-8 border-brand-red pl-6 uppercase tracking-widest">{section.level}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.programs.map((prog, pIdx) => (
                                    <motion.div
                                        key={pIdx}
                                        className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: pIdx * 0.05 }}
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 -mr-12 -mt-12 rounded-full opacity-50 group-hover:bg-brand-red/10 transition-colors"></div>

                                        <div className="w-12 h-12 bg-dark-blue text-white flex items-center justify-center mb-6 shadow-md group-hover:bg-brand-red transition-colors">
                                            <BookOpen className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-dark-blue mb-6 group-hover:text-brand-red transition-colors leading-tight min-h-[3.5rem]">{prog.name}</h3>

                                        <div className="space-y-4 text-sm text-gray-600">
                                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                                                <span className="flex items-center gap-2 font-medium uppercase tracking-wide text-xs text-gray-400"><Users className="w-4 h-4" /> Intake</span>
                                                <span className="font-bold text-dark-blue">{prog.intake} Seats</span>
                                            </div>
                                            <div className="flex items-center justify-between pt-1">
                                                <span className="flex items-center gap-2 font-medium uppercase tracking-wide text-xs text-gray-400"><Clock className="w-4 h-4" /> Duration</span>
                                                <span className="font-bold text-dark-blue">{prog.duration}</span>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-500"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
