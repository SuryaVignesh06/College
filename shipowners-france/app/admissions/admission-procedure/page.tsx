"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserCheck, FileText, CheckCircle } from "lucide-react";

export default function AdmissionProcedurePage() {
    const steps = [
        {
            title: "Check Eligibility",
            description: "Candidates must have passed 10+2 with minimum 60% aggregate in Physics, Chemistry, and Mathematics.",
            icon: CheckCircle
        },
        {
            title: "Entrance Exam",
            description: "Appear for EAMCET / JEE Mains. Admissions are based on the rank secured in these examinations.",
            icon: FileText
        },
        {
            title: "Counseling & Seat Allotment",
            description: "Participate in the state-level counseling process and select CollegeGO as your preferred choice.",
            icon: UserCheck
        },
        {
            title: "Document Verification",
            description: "Report to the college with original certificates and pay the admission fee to confirm your seat.",
            icon: ClipboardList
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 uppercase tracking-tight">Admission Procedure</h1>
                <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">Your journey to excellence begins here. Follow these systematic steps.</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-5xl">
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -ml-0.5 md:transform md:-translate-x-1/2" />

                    <div className="space-y-16">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                {/* Icon Square */}
                                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white border-2 border-brand-red flex items-center justify-center z-10 -ml-8 md:transform md:-translate-x-1/2 shadow-md">
                                    <step.icon className="w-8 h-8 text-brand-red" />
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-dark-blue"></div>
                                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-dark-blue"></div>
                                </div>

                                <div className="pl-24 md:pl-0 md:w-[45%]">
                                    <div className="bg-white p-10 border border-gray-200 shadow-sm hover:shadow-xl transition-all relative group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-brand-red transition-colors"></div>
                                        <span className="block text-6xl font-bold text-gray-50 absolute right-4 top-2 select-none -z-10">{idx + 1}</span>
                                        <h3 className="text-xl font-bold text-dark-blue mb-4 uppercase tracking-wider">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-24">
                    <button className="bg-brand-red text-white px-12 py-4 font-bold uppercase tracking-[0.2em] hover:bg-dark-blue transition-colors text-sm shadow-xl">
                        Apply Now
                    </button>
                </div>
            </section>
        </div>
    );
}
