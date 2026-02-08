"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, Filter } from "lucide-react";
import { useState } from "react";

export default function CourseCatalogPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const catalogs = [
        { title: "B.Tech CSE - R23 Regulations", dept: "Computer Science", date: "July 2025", category: "B.Tech" },
        { title: "B.Tech ECE - Syllabus & Scheme", dept: "Electronics", date: "July 2025", category: "B.Tech" },
        { title: "M.Tech Data Science - Course Structure", dept: "Postgraduate", date: "Aug 2025", category: "M.Tech" },
        { title: "MBA - Electives List", dept: "Management", date: "Aug 2025", category: "MBA" },
        { title: "Humanities & Sciences - Syllabus", dept: "General", date: "July 2025", category: "B.Tech" },
        { title: "Student Handbook 2025-26", dept: "General", date: "June 2025", category: "Regulations" },
        { title: "Examination Rules & Guidelines", dept: "Exam Cell", date: "May 2025", category: "Regulations" },
        { title: "M.Tech VLSI - Project Guidelines", dept: "Electronics", date: "Aug 2025", category: "M.Tech" },
    ];

    const filteredCatalogs = activeFilter === "All"
        ? catalogs
        : catalogs.filter(item => item.category === activeFilter);

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gray-50 py-20 text-center border-b border-gray-200">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-dark-blue mb-4">Course Catalog</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Explore the detailed curriculum and regulations for all our programs.</p>
            </section>

            <section className="py-20 container mx-auto px-4 max-w-5xl">
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {["All", "B.Tech", "M.Tech", "MBA", "Regulations"].map((filter, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-full border border-gray-200 text-sm font-bold uppercase transition-all ${activeFilter === filter
                                ? "bg-dark-blue text-white border-dark-blue shadow-lg scale-105"
                                : "bg-white text-gray-500 hover:border-brand-red hover:text-brand-red"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredCatalogs.map((item) => (
                            <motion.div
                                layout
                                key={item.title}
                                className="bg-white border border-gray-100 p-6 shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg group flex items-start gap-4"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-brand-red/10 group-hover:text-brand-red transition-colors">
                                    <FileText className="w-6 h-6 text-gray-400 group-hover:text-brand-red" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-dark-blue text-lg mb-1 group-hover:text-brand-red transition-colors">{item.title}</h3>
                                    <div className="flex items-center gap-4 text-xs text-gray-400 uppercase font-bold tracking-wider">
                                        <span>{item.dept}</span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-dark-blue transition-colors">
                                    <Download className="w-5 h-5" />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredCatalogs.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p>No documents found for this category.</p>
                    </div>
                )}
            </section>
        </div>
    );
}
