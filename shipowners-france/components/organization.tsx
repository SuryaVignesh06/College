
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const departments = [
    { title: "Computer Science", href: "/academics/cse" },
    { title: "Artificial Intelligence", href: "/academics/aiml" },
    { title: "Data Science", href: "/academics/aids" },
    { title: "Information Technology", href: "/academics/it" },
    { title: "Electronics (ECE)", href: "/academics/ece" },
    { title: "Electrical (EEE)", href: "/academics/eee" },
    { title: "Mechanical", href: "/academics/mech" },
    { title: "Civil Engineering", href: "/academics/civil" },
];

export function Organization() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden flex flex-col justify-between group">
            {/* Background Image/Video */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"
                    alt="Departments Background"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/90 via-transparent to-transparent" />
            </div>

            {/* Main Title - Centered & Big */}
            <div className="relative z-10 flex-1 flex items-center justify-center pointer-events-none">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white text-center uppercase tracking-tight leading-none drop-shadow-xl px-4">
                    Our Academic<br />Departments
                </h2>
            </div>

            {/* Cards Row - Bottom Aligned */}
            <div className="relative z-20 container mx-auto px-4 pb-12">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {departments.map((dept, index) => (
                        <Link
                            key={index}
                            href={dept.href}
                            className="flex flex-col justify-between min-w-[200px] w-[200px] md:min-w-[240px] md:w-[240px] h-[280px] md:h-[320px] bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 hover:bg-brand-red/90 transition-all duration-300 group/card shrink-0"
                        >
                            <span className="text-white/80 text-xs font-bold uppercase tracking-wider border-b border-white/20 pb-4">
                                Dept. 0{index + 1}
                            </span>

                            <div className="mt-auto">
                                <h3 className="text-white text-xl md:text-2xl font-bold font-display uppercase leading-tight mb-6">
                                    {dept.title}
                                </h3>
                                <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/card:bg-white group-hover/card:text-brand-red transition-all duration-300">
                                    <ArrowRight className="h-4 w-4 text-white group-hover/card:text-brand-red -rotate-45 group-hover/card:rotate-0 transition-transform duration-300" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Right Scroll Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute right-8 bottom-1/2 translate-y-1/2 z-30 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group"
                >
                    <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
}
