
"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-center items-center text-center">
            {/* Background Image - Full Photo Only */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop"
                    alt="CollegeGO Campus"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Minimal overlay just for text readability, keeping it "Photo Only" feel */}
                <div className="absolute inset-0 bg-black/20 z-10" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-20 flex flex-col items-center justify-center h-full pt-20">

                {/* Main Headline */}
                <div className="max-w-6xl overflow-hidden mb-8">
                    <span className={`
                inline-block text-white/90 font-bold uppercase tracking-[0.2em] mb-4 transform transition-all duration-1000 delay-300
                ${loaded ? "translate-y-0 opacity-100" : "max-md:translate-y-0 max-md:opacity-100 md:translate-y-10 md:opacity-0"}
            `}>
                        Autonomous • NAAC A+ • NBA Accredited
                    </span>
                    <h1 className={`
                text-white text-5xl md:text-7xl lg:text-9xl font-display font-bold leading-[1.05] tracking-tight transform transition-all duration-1000 ease-out drop-shadow-2xl
                ${loaded ? "translate-y-0 opacity-100" : "max-md:translate-y-0 max-md:opacity-100 md:translate-y-20 md:opacity-0"}
            `}>
                        CollegeGO<br />
                        <span className="text-white">Institute</span>
                    </h1>
                </div>

                <p className={`
            text-white/90 text-xl lg:text-2xl max-w-3xl mb-12 font-medium leading-relaxed transform transition-all duration-1000 delay-500 drop-shadow-md
            ${loaded ? "translate-y-0 opacity-100" : "max-md:translate-y-0 max-md:opacity-100 md:translate-y-10 md:opacity-0"}
         `}>
                    Empowering students with world-class infrastructure, <span className="font-bold text-white border-b-2 border-brand-red">67 LPA</span> highest package, and global opportunities.
                </p>

                <div className={`
             flex flex-col sm:flex-row gap-5 transform transition-all duration-1000 delay-700
             ${loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
         `}>
                    <Link
                        href="/admissions/apply"
                        className="bg-brand-red text-white hover:bg-white hover:text-dark-blue transition-all duration-300 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 group backdrop-blur-sm"
                    >
                        Start Your Application
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/explore"
                        className="bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-dark-blue transition-all duration-300 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg hover:shadow-xl hover:-translate-y-1 border border-white/30 flex items-center gap-2"
                    >
                        <Play className="h-4 w-4 fill-current" />
                        Campus Tour
                    </Link>
                </div>
            </div>
        </section>
    );
}
