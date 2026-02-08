"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LifeAtCampusPage() {
    const gallery = [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2574&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2632&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2574&auto=format&fit=crop"
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2670&auto=format&fit=crop"
                    alt="Campus Life"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-dark-blue/80 mix-blend-multiply" />
                <div className="relative z-10 text-center text-white px-4 mt-20">
                    <motion.h1
                        className="text-6xl md:text-8xl font-display font-medium mb-4 uppercase tracking-tighter"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        Life @ <span className="font-bold text-brand-red">Campus</span>
                    </motion.h1>
                    <div className="h-px w-32 bg-white/30 mx-auto my-6"></div>
                    <p className="text-xl font-light tracking-widest uppercase opacity-80">More than just academics.</p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {gallery.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative h-80 overflow-hidden group border border-white ${idx === 0 ? "md:col-span-2 md:h-full min-h-[400px]" : ""}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Image
                                src={img}
                                alt={`Gallery ${idx}`}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-widest font-bold">Explore our vibrant community on Instagram <a href="#" className="text-brand-red underline">@collegego_official</a></p>
                </div>
            </section>
        </div>
    );
}
