
"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

export function AdmissionsFeatures() {
    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Column 1: Intro & Image */}
                    <div className="lg:col-span-4 space-y-6">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-blue mb-4">Admissions</h2>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Welcomes applications for graduate B.Tech as well as Post graduate M.Tech admissions.
                            </p>
                        </div>

                        <div className="relative h-[300px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-lg border-4 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                                alt="Students discussing"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Column 2: UG / PG */}
                    <div className="lg:col-span-3 lg:pl-8">
                        <h3 className="text-lg font-bold text-dark-blue mb-6 border-b pb-4">Under Graduation / Post Graduation</h3>
                        <ul className="space-y-4">
                            {["Courses Offered", "Admission Procedure", "Scholarships"].map((item, i) => (
                                <li key={i} className="group flex items-center gap-3 text-gray-600 hover:text-brand-red transition-colors cursor-pointer">
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-red" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Information For */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold text-dark-blue mb-6 border-b pb-4">Information for</h3>
                        <ul className="space-y-4">
                            {["Hostels", "Anti-Ragging", "College Timings", "Library", "Sports & Recreation", "Facilities"].map((item, i) => (
                                <li key={i} className="group flex items-center gap-3 text-gray-600 hover:text-brand-red transition-colors cursor-pointer">
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-red" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Unique Features */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold text-dark-blue mb-6 border-b pb-4">Unique Features</h3>
                        <ul className="space-y-4">
                            {[
                                "Why choose us?",
                                "Life @ CollegeGO Campus",
                                "Institutional Distinctiveness",
                                "Best Practices",
                                "V E D I C",
                                "Honours & Awards"
                            ].map((item, i) => (
                                <li key={i} className="group flex items-center gap-3 text-gray-600 hover:text-brand-red transition-colors cursor-pointer">
                                    <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-red" />
                                    <span className="text-sm font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Vision Statement */}
                <div className="border-t border-gray-100 pt-12 text-center max-w-4xl mx-auto">
                    <p className="text-xl md:text-2xl text-dark-blue/80 font-medium leading-relaxed">
                        Our <span className="font-bold text-dark-blue">VISION</span> is to ignite the minds of the students through academic excellence so as to bring about social transformation and prosperity.
                    </p>
                </div>
            </div>
        </section>
    );
}
