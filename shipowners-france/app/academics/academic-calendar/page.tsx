"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ChevronRight } from "lucide-react";

export default function AcademicCalendarPage() {
    const events = [
        { date: "July 15, 2025", event: "Commencement of Class Work for III & V Semesters", type: "Academic" },
        { date: "Sept 10, 2025", event: "First Mid-Term Examinations", type: "Exam" },
        { date: "Oct 15, 2025", event: "Dussehra Vacation Starts", type: "Holiday" },
        { date: "Nov 20, 2025", event: "Second Mid-Term Examinations", type: "Exam" },
        { date: "Dec 05, 2025", event: "End Semester Examinations Begin", type: "Exam" },
        { date: "Jan 02, 2026", event: "Commencement of Even Semester", type: "Academic" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Academic Calendar</h1>
                <p className="text-xl opacity-80 max-w-2xl mx-auto">Schedule for the Academic Year 2025-26</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-4xl">
                <div className="relative border-l-4 border-gray-100 ml-6 md:ml-12 space-y-12">
                    {events.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="relative pl-8 md:pl-12"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            {/* Dot */}
                            <div className={`absolute -left-[10px] top-6 w-5 h-5 rounded-full border-4 border-white shadow-md ${item.type === 'Exam' ? 'bg-brand-red' : item.type === 'Holiday' ? 'bg-green-500' : 'bg-dark-blue'
                                }`} />

                            <div className="bg-white border border-gray-100 p-6 shadow-lg rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-2xl transition-shadow">
                                <div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                                        <Calendar className="w-4 h-4" /> {item.date}
                                        <span className={`px-2 py-0.5 rounded text-[10px] text-white ${item.type === 'Exam' ? 'bg-brand-red' : item.type === 'Holiday' ? 'bg-green-500' : 'bg-dark-blue'
                                            }`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-dark-blue">{item.event}</h3>
                                </div>
                                <div className="shrink-0 flex items-center gap-2 text-brand-red font-bold text-sm cursor-pointer hover:underline">
                                    Details <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="bg-brand-red text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-dark-blue transition-colors">
                        Download PDF
                    </button>
                    <p className="mt-4 text-xs text-gray-400">* Dates are tentative and subject to change.</p>
                </div>
            </section>
        </div>
    );
}
