"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Zap, Globe, Cpu } from "lucide-react";

export default function WhyChooseUsPage() {
    const reasons = [
        {
            title: "Industry-Aligned Curriculum",
            description: "Our courses are co-designed with industry leaders to ensure you learn what matters.",
            icon: Zap
        },
        {
            title: "Global Opportunities",
            description: "Student exchange programs with 50+ universities worldwide.",
            icon: Globe
        },
        {
            title: "Innovation Hub",
            description: "24/7 access to state-of-the-art labs and incubation centers.",
            icon: Cpu
        },
        {
            title: "100% Placement Support",
            description: "Dedicated placement cell ensuring every student lands their dream job.",
            icon: CheckCircle
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"
                    alt="Why Choose Us"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/80 mix-blend-multiply" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-medium mb-4 uppercase tracking-tight">
                            Why Choose <span className="font-bold text-brand-red">CollegeGO?</span>
                        </h1>
                        <div className="h-px w-24 bg-white/50 mx-auto mb-4"></div>
                        <p className="text-xl max-w-2xl mx-auto font-light tracking-wide opacity-90">Experience education that empowers.</p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {reasons.map((reason, idx) => (
                            <div key={idx} className="p-8 bg-white border border-gray-200 hover:border-brand-red/30 hover:shadow-xl transition-all group relative">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gray-100 group-hover:bg-brand-red transition-colors"></div>
                                <reason.icon className="h-8 w-8 text-brand-red mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="font-bold text-dark-blue text-lg mb-3 uppercase tracking-wide">{reason.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-light">{reason.description}</p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] shadow-2xl border border-gray-200"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop"
                            alt="Campus Life"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 bg-white p-6 shadow-lg max-w-xs">
                            <span className="block text-4xl font-display font-bold text-brand-red mb-1">Top 10</span>
                            <span className="uppercase text-xs font-bold tracking-widest text-dark-blue">Ranked Engineering College in the Region</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
