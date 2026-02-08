"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Book, Globe, Monitor, Clock } from "lucide-react";

export default function LibraryPage() {
    const resources = [
        { title: "Digital Library", count: "50,000+ E-Books", icon: Monitor },
        { title: "Research Journals", count: "1,200+ Subscriptions", icon: Globe },
        { title: "Physical Books", count: "1.5 Lakh+ Volumes", icon: Book },
        { title: "Open Hours", count: "8 AM - 10 PM", icon: Clock },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop" // Library image
                    alt="Library"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/80" />
                <div className="relative z-10 text-center text-white px-4 w-full max-w-4xl">
                    <motion.h1
                        className="text-5xl font-display font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Central <span className="text-brand-red">Library</span>
                    </motion.h1>

                    {/* Search Bar */}
                    <motion.div
                        className="relative w-full max-w-2xl mx-auto"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <input
                            type="text"
                            placeholder="Search for books, journals, or articles..."
                            className="w-full pl-6 pr-14 py-4 rounded-full text-dark-blue focus:outline-none shadow-2xl"
                        />
                        <button className="absolute right-2 top-2 p-2 bg-brand-red text-white rounded-full hover:bg-dark-blue transition-colors">
                            <Search className="w-6 h-6" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {resources.map((res, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform">
                                <res.icon className="w-10 h-10 text-brand-red mx-auto mb-4" />
                                <h3 className="font-bold text-dark-blue text-lg">{res.title}</h3>
                                <p className="text-gray-500 text-sm">{res.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-24 container mx-auto px-4">
                <h2 className="text-3xl font-display font-bold text-dark-blue mb-12 text-center">Library Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border border-gray-200 shadow-xl rounded-none relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
                        <h3 className="text-xl font-bold mb-4">Book Lending</h3>
                        <p className="text-gray-600 leading-relaxed">Students can borrow up to 6 books for a period of 15 days. Renewals can be done online through the OPAC system.</p>
                    </div>
                    <div className="bg-white p-8 border border-gray-200 shadow-xl rounded-none relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-dark-blue" />
                        <h3 className="text-xl font-bold mb-4">Digital Access</h3>
                        <p className="text-gray-600 leading-relaxed">Unlimited access to IEEE Xplore, ScienceDirect, and SpringerLink from campus Wi-Fi network.</p>
                    </div>
                    <div className="bg-white p-8 border border-gray-200 shadow-xl rounded-none relative">
                        <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />
                        <h3 className="text-xl font-bold mb-4">Study Rooms</h3>
                        <p className="text-gray-600 leading-relaxed">Dedicated silent zones and group discussion rooms available for students and faculty.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
