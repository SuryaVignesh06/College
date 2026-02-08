
"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { departments } from "../data";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote, TrendingUp, Users, Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);

    // Type-safe data retrieval with fallback
    const isDepartment = slug in departments;
    const data: any = isDepartment ? departments[slug as keyof typeof departments] : departments["default"];

    // Unified Head (Dean or HOD)
    const head = data.type === "school" ? data.dean : data.hod;
    const headImage = head?.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"; // Fallback
    const headName = head?.name || "Academic Leader";
    const headRole = head?.role || (data.type === "school" ? "Dean" : "Head of Department");
    const headMessage = head?.message || "Welcome to our academic division.";

    // Dynamic Title Formatting for non-department pages
    const pageTitle = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    if (!isDepartment && slug !== "default") {
        return (
            <main className="bg-white min-h-screen pt-20">
                <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden flex items-center justify-center bg-dark-blue">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="container mx-auto px-4 text-center relative z-10 text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-display font-bold mb-4"
                        >
                            {pageTitle}
                        </motion.h1>
                        <div className="w-20 h-1 bg-brand-red mx-auto rounded-full"></div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Welcome to the <span className="font-bold text-dark-blue">{pageTitle}</span> section at CollegeGO.
                        </p>
                        <p className="text-gray-500">
                            We are currently updating this section with the latest information for the 2026-2027 academic year.
                            Please check back soon for detailed curriculum, schedules, and resources.
                        </p>
                        <div className="p-8 bg-gray-50 border border-gray-100 rounded-2xl mt-8">
                            <h3 className="text-lg font-bold text-dark-blue mb-2">Need immediate assistance?</h3>
                            <p className="text-gray-500 mb-4">Contact our administrative office directly.</p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline">
                                Contact Support <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={data.heroImage}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-dark-blue/60" />
                </motion.div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 uppercase tracking-widest text-xs font-bold transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide">
                            {data.subtitle}
                        </p>
                    </motion.div>
                </div>
            </div >

            {/* Introduction & HOD Section - Split Layout */}
            < section className="py-24" >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* Main Content */}
                        <motion.div
                            className="lg:col-span-7 space-y-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-display font-bold text-dark-blue">
                                {data.type === "school" ? "Departments & " : "About the "} <span className="text-brand-red">{data.type === "school" ? "Programs" : "Department"}</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {data.description}
                            </p>

                            {/* Conditional: School Department List, Program List, or Stats */}
                            {data.type === "school" && data.childDepartments ? (
                                <div className="pt-6">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Offered Departments</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {data.childDepartments.map((dept: any, idx: number) => (
                                            <Link key={idx} href={dept.link} className="flex items-center gap-2 p-3 bg-white border border-gray-100 shadow-sm hover:border-brand-red hover:text-brand-red transition-all group">
                                                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-red/10">
                                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-brand-red" />
                                                </div>
                                                <span className="font-bold text-dark-blue group-hover:text-brand-red">{dept.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : data.type === "program-level" && data.programsList ? (
                                <div className="pt-6">
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Available Programs</h3>
                                    <div className="space-y-3">
                                        {data.programsList.map((prog: any, idx: number) => (
                                            <div key={idx} className="flex items-center justify-between p-4 bg-white border border-gray-100 shadow-sm hover:border-brand-red transition-all group">
                                                <div>
                                                    <h4 className="font-bold text-dark-blue group-hover:text-brand-red transition-colors">{prog.name}</h4>
                                                    <div className="flex gap-2 mt-1">
                                                        {prog.tags.map((tag: string, tIdx: number) => (
                                                            <span key={tIdx} className="text-[10px] uppercase font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs font-bold text-gray-400 block uppercase tracking-wider">Duration</span>
                                                    <span className="font-bold text-brand-red">{prog.duration}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stats for Programs */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                                        {data.stats.map((stat: any, i: number) => (
                                            <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                                                <div className="text-2xl font-bold text-brand-red">{stat.value}</div>
                                                <div className="text-[10px] uppercase font-bold text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                /* Key Stats Grid for Departments */
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                                    {data.stats.map((stat: any, i: number) => (
                                        <motion.div
                                            key={i}
                                            className="p-6 bg-gray-50 border border-gray-100 rounded-none text-center hover:bg-white hover:shadow-lg transition-all duration-300"
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">{stat.value}</div>
                                            <div className="text-xs uppercase font-bold text-gray-500 tracking-wider">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>

                        {/* HOD / Dean / Info Card */}
                        <motion.div
                            className="lg:col-span-5 relative"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-dark-blue p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
                                <Quote className="absolute top-4 right-4 text-white/10 w-24 h-24 rotate-180" />

                                {data.type === "program-level" ? (
                                    <div className="relative z-10 flex flex-col items-start text-left space-y-6">
                                        <h3 className="text-2xl font-display font-bold">Why Choose This Program?</h3>
                                        <ul className="space-y-4 w-full">
                                            {data.features?.map((feat: any, idx: number) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2.5 shrink-0" />
                                                    <div>
                                                        <span className="font-bold block text-white">{feat.title}</span>
                                                        <span className="text-white/60 text-sm">{feat.description}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/admissions/apply" className="mt-6 w-full py-4 bg-brand-red text-white text-center font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all">
                                            Apply Now
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        <div className="w-32 h-32 rounded-full border-4 border-white/20 mb-6 overflow-hidden relative">
                                            <Image
                                                src={headImage}
                                                alt={headName}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-display font-bold mb-1">{headName}</h3>
                                        <p className="text-brand-red font-bold text-xs uppercase tracking-widest mb-6">{headRole}</p>
                                        <blockquote className="text-white/80 italic leading-relaxed text-lg">
                                            "{headMessage}"
                                        </blockquote>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section >

            {/* Features / Labs / Highlights */}
            < section className="py-24 bg-gray-50 border-t border-gray-200" >
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-display font-bold text-dark-blue">
                            Department <span className="text-brand-red">Highlights</span>
                        </h2>
                        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                            Equipped with world-class facilities to foster innovation and practical learning.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.features.map((feature: any, i: number) => (
                            <motion.div
                                key={i}
                                className="bg-white p-8 border border-gray-100 hover:border-brand-red/30 hover:shadow-xl transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="w-12 h-12 bg-gray-50 group-hover:bg-brand-red/10 rounded-none flex items-center justify-center mb-6 transition-colors">
                                    <CheckCircle2 className="w-6 h-6 text-dark-blue group-hover:text-brand-red transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-3 group-hover:text-brand-red transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Placements Banner */}
            < section className="py-16 bg-white overflow-hidden" >
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-dark-blue to-blue-900 p-12 lg:p-20 text-center">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
                                Ready to Architect Your Future?
                            </h2>
                            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
                                Join the {data.title} and launch your career with top-tier placements and research opportunities.
                            </p>
                            <Link
                                href="/admissions/apply"
                                className="inline-block bg-brand-red text-white font-bold uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-dark-blue transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
                            >
                                Apply for {slug.toUpperCase()}
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section >
        </main >
    );
}
