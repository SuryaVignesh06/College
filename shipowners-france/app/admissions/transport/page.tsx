"use client";

import { motion } from "framer-motion";
import { Bus, MapPin, Phone } from "lucide-react";

export default function TransportPage() {
    const routes = [
        { code: "R-01", area: "City Centre - Main Campus", time: "7:45 AM" },
        { code: "R-02", area: "Railway Station - Main Campus", time: "7:50 AM" },
        { code: "R-03", area: "Housing Board Colony - Main Campus", time: "8:00 AM" },
        { code: "R-04", area: "Bypass Junction - Main Campus", time: "8:10 AM" },
        { code: "R-05", area: "Suburbs (North) - Main Campus", time: "7:30 AM" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 uppercase tracking-tight">Transport Facility</h1>
                <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">Safe, convenient, and punctual connectivity.</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Info */}
                    <div className="pt-8">
                        <h2 className="text-3xl font-display font-bold text-dark-blue mb-8 uppercase tracking-wide leading-tight">Connecting Every Corner</h2>
                        <div className="w-16 h-1 bg-brand-red mb-8"></div>
                        <p className="text-gray-600 leading-relaxed mb-10 text-lg font-light">
                            We operate a fleet of 50+ buses covering all major routes. Our buses are equipped with GPS tracking, first-aid kits, and speed governors to ensure the safety of our students.
                        </p>

                        <div className="bg-gray-50 p-8 border border-gray-200 mb-10 relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-dark-blue"></div>
                            <h3 className="font-bold text-dark-blue mb-6 flex items-center gap-3 uppercase tracking-wider text-sm"><Bus className="text-brand-red w-5 h-5" /> Fleet Features</h3>
                            <ul className="space-y-4 text-sm text-gray-600 font-medium">
                                <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-gray-400"></div> GPS tracking for real-time location.</li>
                                <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-gray-400"></div> Experienced and verified drivers.</li>
                                <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-gray-400"></div> Comfortable seating with legroom.</li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-6 bg-dark-blue text-white p-8 shadow-xl">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                <Phone className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="block text-xs uppercase opacity-60 font-bold tracking-widest mb-1">Transport In-charge</span>
                                <span className="font-bold text-2xl font-mono tracking-wider">+91 99887 76655</span>
                            </div>
                        </div>
                    </div>

                    {/* Routes */}
                    <div>
                        <div className="bg-white shadow-2xl border border-gray-100 relative">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 -z-10 translate-x-4 -translate-y-4 border border-gray-200"></div>
                            <div className="bg-gray-900 p-8 text-white">
                                <h3 className="font-bold uppercase tracking-widest text-lg">Major Bus Routes</h3>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {routes.map((route, idx) => (
                                    <div key={idx} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors group">
                                        <div className="flex items-center gap-6">
                                            <div className="w-12 h-12 border border-brand-red/20 bg-brand-red/5 flex items-center justify-center text-brand-red font-bold text-xs group-hover:bg-brand-red group-hover:text-white transition-colors">
                                                {route.code}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-dark-blue text-sm uppercase tracking-wide group-hover:text-brand-red transition-colors">{route.area}</h4>
                                            </div>
                                        </div>
                                        <div className="text-gray-400 text-xs font-mono font-bold flex items-center gap-2 bg-gray-100 px-3 py-1">
                                            <MapPin className="w-3 h-3" /> {route.time}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 bg-gray-50 text-center border-t border-gray-100">
                                <button className="text-dark-blue text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-red transition-colors border-b border-transparent hover:border-brand-red pb-1">Download Route Map</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
