"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function CollegeTimingsPage() {
    const schedule = [
        { time: "09:00 AM - 09:50 AM", session: "1st Period" },
        { time: "09:50 AM - 10:40 AM", session: "2nd Period" },
        { time: "10:40 AM - 10:50 AM", session: "Short Break", highlight: true },
        { time: "10:50 AM - 11:40 AM", session: "3rd Period" },
        { time: "11:40 AM - 12:30 PM", session: "4th Period" },
        { time: "12:30 PM - 01:20 PM", session: "Lunch Break", highlight: true },
        { time: "01:20 PM - 02:10 PM", session: "5th Period (Labs)" },
        { time: "02:10 PM - 03:00 PM", session: "6th Period" },
        { time: "03:00 PM - 03:50 PM", session: "7th Period" },
        { time: "04:00 PM - 05:00 PM", session: "Sports & Library" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 uppercase tracking-tight">College Timings</h1>
                <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">Standard operating hours for academic excellence.</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-3xl">
                <div className="bg-white border text-center border-gray-200 shadow-xl overflow-hidden relative">
                    <div className="bg-dark-blue p-6 flex justify-between items-center text-white">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                                <Clock className="w-5 h-5" />
                            </div>
                            <h2 className="font-bold text-lg uppercase tracking-wider">Daily Schedule</h2>
                        </div>
                        <div className="bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-widest">Mon - Sat</div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {schedule.map((slot, idx) => (
                            <div key={idx} className={`p-5 flex justify-between items-center group hover:bg-gray-50 transition-colors ${slot.highlight ? 'bg-amber-50/50' : 'bg-white'}`}>
                                <span className={`font-mono text-sm font-bold ${slot.highlight ? 'text-amber-700' : 'text-gray-400 group-hover:text-dark-blue transition-colors'}`}>{slot.time}</span>
                                <div className="flex-1 border-b border-dotted border-gray-200 mx-6 opacity-30"></div>
                                <span className={`font-bold uppercase text-sm tracking-wide ${slot.highlight ? 'text-amber-800' : 'text-dark-blue'}`}>{slot.session}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block border border-gray-200 bg-gray-50 px-8 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <p className="mb-2">* Timings may vary per dept.</p>
                        <p>* Second Saturday is a holiday.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
