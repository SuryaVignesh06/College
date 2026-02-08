"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function KeyFigures() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const backdropBlur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(8px)"]);

    return (
        <section className="py-24 lg:py-32 bg-white relative">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-50 -z-10" />

            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 items-start">
                    <div className="lg:w-1/3 lg:sticky lg:top-32">
                        <span className="text-brand-red text-xs uppercase font-bold tracking-[0.2em] mb-6 block">
                            Placement Highlights
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-blue mb-8 leading-tight">
                            Transforming <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-blue to-blue-600">
                                Careers
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            With a consistent track record of excellence, VIT Bhimavaram ensures students achieve their career aspirations with top global companies.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">A+</div>
                                <div>
                                    <h4 className="font-bold text-dark-blue">NAAC Accredited</h4>
                                    <p className="text-sm text-gray-500">3.51 CGPA</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">NB</div>
                                <div>
                                    <h4 className="font-bold text-dark-blue">NBA Accredited</h4>
                                    <p className="text-sm text-gray-500">For all eligible UG Programs</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Stat 1 - Highest Package */}
                        <div className="relative group overflow-hidden rounded-none aspect-[4/5] bg-dark-blue text-white p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-40 h-40">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                                </svg>
                            </div>
                            <div className="relative z-10 pt-4">
                                <span className="text-lg font-medium text-white/80 uppercase tracking-widest border-b border-white/20 pb-4 inline-block mb-4">Highest Package</span>
                                <span className="text-8xl font-display font-bold block leading-none tracking-tighter">67</span>
                                <span className="text-3xl font-light">LPA</span>
                            </div>
                            <div className="relative z-10">
                                <p className="text-white/80 text-sm">Offered by top-tier multinational corporations to our diverse talent pool.</p>
                            </div>
                        </div>

                        {/* Stat 2 - Placements */}
                        <div ref={ref} className="relative group overflow-hidden rounded-none aspect-[4/5] md:mt-12 shadow-lg hover:shadow-2xl transition-all duration-500">
                            <Image
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2670&auto=format&fit=crop"
                                alt="Placement Drive"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <motion.div
                                style={{ backdropFilter: backdropBlur, WebkitBackdropFilter: backdropBlur }}
                                className="absolute inset-0 bg-gradient-to-t from-brand-red/90 via-brand-red/40 to-transparent"
                            />
                            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                                <span className="text-6xl font-display font-bold block mb-2">1000+</span>
                                <h3 className="text-lg font-bold uppercase tracking-wide border-t border-white/20 pt-4 mt-2">
                                    Placements Offered
                                </h3>
                                <p className="text-sm text-white/80 mt-2">Consistent performance year on year.</p>
                            </div>
                        </div>

                        {/* Stat 3 - Summary */}
                        <div className="col-span-1 md:col-span-2 bg-white rounded-none p-8 lg:p-12 shadow-lg border border-gray-100 flex flex-wrap items-center justify-around gap-8 text-center">
                            <div>
                                <span className="block text-4xl font-bold text-dark-blue mb-1">200+</span>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Companies Visiting</span>
                            </div>
                            <div className="w-px h-16 bg-gray-200 hidden md:block" />
                            <div>
                                <span className="block text-4xl font-bold text-dark-blue mb-1">4.5 LPA</span>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Avg Package</span>
                            </div>
                            <div className="w-px h-16 bg-gray-200 hidden md:block" />
                            <div>
                                <span className="block text-4xl font-bold text-dark-blue mb-1">11+</span>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Branches</span>
                            </div>
                            <div className="w-px h-16 bg-gray-200 hidden md:block" />
                            <div>
                                <span className="block text-4xl font-bold text-dark-blue mb-1">14</span>
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Years of Excellence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
