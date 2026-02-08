"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Utensils, Shield, Dumbbell, Book, Coffee } from "lucide-react";

export default function HostelsPage() {
    const amenities = [
        { icon: Wifi, label: "High-Speed Wi-Fi" },
        { icon: Utensils, label: "Hygienic Mess" },
        { icon: Shield, label: "24/7 Security" },
        { icon: Dumbbell, label: "Gymnasium" },
        { icon: Book, label: "Reading Room" },
        { icon: Coffee, label: "Recreation Hall" },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop"
                    alt="Hostels"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/80 mix-blend-multiply" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-2 border-white/20 p-8 md:p-12 inline-block backdrop-blur-sm"
                    >
                        <h1 className="text-5xl md:text-7xl font-display font-medium mb-4 uppercase tracking-tight">
                            Hostel <span className="font-bold text-brand-red">Life</span>
                        </h1>
                        <div className="h-px w-24 bg-white/50 mx-auto mb-4"></div>
                        <p className="text-xl max-w-xl mx-auto font-light tracking-wide">A home away from home.</p>
                    </motion.div>
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="py-24 bg-gray-50 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-display font-bold text-dark-blue text-center mb-16 uppercase tracking-widest">World-Class Amenities</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-200 bg-white shadow-sm">
                        {amenities.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="p-8 text-center hover:bg-gray-50 transition-colors border-r border-b border-gray-100 last:border-r-0 lg:last:border-r-0 [&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r md:[&:nth-child(3n)]:border-r-0"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <item.icon className="w-8 h-8 mx-auto text-brand-red mb-4" />
                                <span className="font-bold text-dark-blue text-xs uppercase tracking-wider block">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery / Info */}
            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 sticky top-24">
                        <h2 className="text-4xl font-display font-bold text-dark-blue leading-tight uppercase tracking-tight">Beyond Just <br />Accomodation</h2>
                        <div className="w-20 h-1 bg-brand-red"></div>
                        <p className="text-gray-600 leading-relaxed text-lg font-light">
                            Experience a holistic campus life with world-class facilities designed for your well-being. From nutritious meals in our hygienic mess to fitness sessions in the modern gym, every aspect of hostel life is curated to make you feel at home.
                        </p>

                        <div className="space-y-6 pt-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gray-50 border border-gray-100 group-hover:border-brand-red/50 transition-colors">
                                    <Utensils className="w-6 h-6 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-blue uppercase tracking-wide text-sm mb-1">Hygienic Mess</h4>
                                    <p className="text-sm text-gray-500">Nutritious, balanced meals prepared in a clean environment.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gray-50 border border-gray-100 group-hover:border-brand-red/50 transition-colors">
                                    <Dumbbell className="w-6 h-6 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-blue uppercase tracking-wide text-sm mb-1">Modern Gymnasium</h4>
                                    <p className="text-sm text-gray-500">State-of-the-art equipment to keep you fit and healthy.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 group">
                                <div className="p-3 bg-gray-50 border border-gray-100 group-hover:border-brand-red/50 transition-colors">
                                    <Wifi className="w-6 h-6 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark-blue uppercase tracking-wide text-sm mb-1">High-Speed Connectivity</h4>
                                    <p className="text-sm text-gray-500">24/7 Wi-Fi access for uninterrupted learning.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Professional Collage */}
                    <div className="grid grid-cols-2 gap-4 h-full min-h-[600px]">
                        {/* Large Main Image - Hostel Room */}
                        <div className="col-span-2 relative h-80 group overflow-hidden border border-gray-200 shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop"
                                alt="Modern Hostel Room"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <span className="text-xs font-bold uppercase tracking-widest bg-brand-red px-2 py-1 mb-2 inline-block">Living</span>
                                <h3 className="text-2xl font-bold uppercase tracking-wide">Spacious Rooms</h3>
                            </div>
                        </div>

                        {/* Gym Image */}
                        <div className="relative h-64 group overflow-hidden border border-gray-200 shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
                                alt="Gymnasium"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <span className="text-xs font-bold uppercase tracking-widest bg-brand-red px-2 py-1 mb-2 inline-block">Fitness</span>
                                <h3 className="text-xl font-bold uppercase tracking-wide">Gym</h3>
                            </div>
                        </div>

                        {/* Mess Image */}
                        <div className="relative h-64 group overflow-hidden border border-gray-200 shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2670&auto=format&fit=crop"
                                alt="Dining Hall"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <span className="text-xs font-bold uppercase tracking-widest bg-brand-red px-2 py-1 mb-2 inline-block">Dining</span>
                                <h3 className="text-xl font-bold uppercase tracking-wide">Mess</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
