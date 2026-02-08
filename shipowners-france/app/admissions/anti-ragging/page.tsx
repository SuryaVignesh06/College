"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Phone, ShieldAlert } from "lucide-react";

export default function AntiRaggingPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-red-50 py-24 text-center border-b border-red-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>

                <div className="w-24 h-24 bg-red-100 flex items-center justify-center mx-auto mb-8 border border-red-200">
                    <ShieldAlert className="w-12 h-12 text-red-600" />
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-medium text-dark-blue mb-4 uppercase tracking-tight">Zero Tolerance</h1>
                <p className="text-xl text-red-600/80 font-bold max-w-2xl mx-auto uppercase tracking-wider text-sm">Strictly Prohibited & Punishable</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-5xl">
                <div className="bg-white border-l-8 border-red-600 shadow-2xl p-10 md:p-14 mb-16 relative">
                    <h2 className="text-2xl font-bold text-dark-blue mb-8 uppercase tracking-wide flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                        What Constitutes Ragging?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        Ragging constitutes any act by a student or group of students that involves teasing, treating, or handling with rudeness a fresher or any other student. We maintain a zero-tolerance policy towards such behavior.
                    </p>
                    <ul className="space-y-4 border-t border-gray-100 pt-8">
                        <li className="flex gap-4 items-start text-gray-700 font-medium">
                            <div className="w-1.5 h-1.5 bg-red-600 mt-2"></div>
                            Indisciplined activities which cause annoyance, hardship, or psychological harm.
                        </li>
                        <li className="flex gap-4 items-start text-gray-700 font-medium">
                            <div className="w-1.5 h-1.5 bg-red-600 mt-2"></div>
                            Generating a sense of shame, torment, or embarrassment.
                        </li>
                        <li className="flex gap-4 items-start text-gray-700 font-medium">
                            <div className="w-1.5 h-1.5 bg-red-600 mt-2"></div>
                            Any act of financial extortion or forceful expenditure.
                        </li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <motion.div
                        className="bg-dark-blue text-white p-10 shadow-2xl relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 uppercase tracking-wider"><Phone className="w-6 h-6" /> 24x7 Helpline</h3>
                        <div className="space-y-8">
                            <div className="border-b border-white/10 pb-6">
                                <span className="block text-xs uppercase opacity-60 mb-2 font-bold tracking-widest">Anti-Ragging Squad</span>
                                <span className="text-3xl font-bold text-brand-red tracking-wider font-mono">+91 98765 43210</span>
                            </div>
                            <div>
                                <span className="block text-xs uppercase opacity-60 mb-2 font-bold tracking-widest">Principal / Dean</span>
                                <span className="text-2xl font-bold tracking-wider font-mono">+91 98765 12345</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-gray-50 border border-gray-200 p-10"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold text-dark-blue mb-2 uppercase tracking-wide">Report an Incident</h3>
                        <p className="text-xs text-gray-500 mb-8 uppercase font-bold tracking-wider">Confidential & Secure Reporting</p>
                        <form className="space-y-6">
                            <input type="text" placeholder="YOUR NAME (OPTIONAL)" className="w-full p-4 border border-gray-300 rounded-none text-xs font-bold uppercase tracking-wide focus:border-dark-blue outline-none transition-colors bg-white placeholder-gray-400" />
                            <textarea placeholder="DESCRIBE THE INCIDENT..." className="w-full p-4 border border-gray-300 rounded-none text-xs font-bold uppercase tracking-wide focus:border-dark-blue outline-none transition-colors h-32 bg-white placeholder-gray-400"></textarea>
                            <button className="w-full py-4 bg-red-600 text-white font-bold text-sm uppercase tracking-widest hover:bg-dark-blue transition-colors shadow-lg">Submit Report</button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
