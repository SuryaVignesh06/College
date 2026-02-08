
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link2 } from "lucide-react";

export function FeaturedLinks() {
    const [offset, setOffset] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                setOffset(top * 0.3);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[70vh] min-h-[500px] overflow-hidden flex items-center justify-center bg-dark-blue">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 z-0 scale-110 will-change-transform"
                style={{ transform: `translateY(${offset}px)` }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
                    alt="Campus Life"
                    fill
                    className="object-cover opacity-50"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark-blue/90 via-dark-blue/40 to-dark-blue/90" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-white text-center">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div className="text-center lg:text-right">
                        <span className="text-4xl lg:text-6xl font-display font-medium uppercase tracking-widest leading-tight block mb-2">
                            Vibrant
                        </span>
                        <span className="text-xl lg:text-2xl font-light tracking-widest text-white/80">
                            Campus Experience
                        </span>
                    </div>

                    <div className="hidden lg:block w-px h-32 bg-white/30 backdrop-blur-sm" />
                    <div className="lg:hidden h-px w-32 bg-white/30 backdrop-blur-sm" />

                    <div className="text-center lg:text-left">
                        <span className="text-4xl lg:text-6xl font-display font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 block mb-2">
                            Limitless
                        </span>
                        <span className="text-xl lg:text-2xl font-light tracking-widest text-white/80">
                            Opportunities
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
