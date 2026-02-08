
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

export function Community() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Admissions CTA */}
                    <div className="relative overflow-hidden bg-dark-blue rounded-none p-8 lg:p-16 flex flex-col justify-center min-h-[500px] shadow-2xl group hover:-translate-y-1 transition-transform duration-300">
                        {/* Decorative Circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-white text-3xl lg:text-5xl font-display font-bold leading-tight mb-8">
                                Begin Your Journey at Shipowners College.
                            </h2>

                            <p className="text-white/60 text-lg mb-10 max-w-md">
                                Applications for the 2026-2027 academic year are now open. Discover your potential with us.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/apply"
                                    className="bg-brand-red text-white hover:bg-white hover:text-dark-blue transition-all duration-300 px-8 py-4 rounded-none inline-flex items-center justify-center gap-3 uppercase font-bold text-sm tracking-wider shadow-lg hover:shadow-xl"
                                >
                                    Apply Now
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/scholarships"
                                    className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-dark-blue transition-all duration-300 px-8 py-4 rounded-none inline-flex items-center justify-center gap-3 uppercase font-bold text-sm tracking-wider shadow-lg hover:shadow-xl"
                                >
                                    Scholarships
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Video CTA */}
                    <div className="relative overflow-hidden rounded-none min-h-[500px] group cursor-pointer shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
                        <Image
                            src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2670&auto=format&fit=crop"
                            alt="Student Life Video"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-dark-blue/40 group-hover:bg-dark-blue/30 transition-colors duration-500" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <Play className="h-6 w-6 text-brand-red ml-1" fill="currentColor" />
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 text-white bg-gradient-to-t from-dark-blue/90 to-transparent pt-32">
                            <span className="bg-brand-red px-3 py-1 rounded-none text-[10px] uppercase font-bold tracking-wider mb-4 inline-block">
                                Student Life
                            </span>

                            <h2 className="text-3xl lg:text-4xl font-display font-medium leading-tight mb-6">
                                Experience a Day in <br />the Life of a Student
                            </h2>

                            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:underline decoration-brand-red underline-offset-4 decoration-2">
                                Watch Video
                                <ArrowRight className="h-4 w-4" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
