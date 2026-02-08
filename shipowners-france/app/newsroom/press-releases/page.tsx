import PageLayout from "@/components/page-layout";
import { FileText, Download, Calendar } from "lucide-react";
import Link from "next/link";

export default function PressReleasesPage() {
    return (
        <PageLayout
            title="Press Releases"
            subtitle="Official announcements and statements from CollegeGO."
            backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    {[
                        {
                            date: "February 01, 2026",
                            title: "CollegeGO Announces Strategic Partnership with Global Tech Leader to Enhance AI Research",
                            excerpt: "A landmark collaboration that will bring $10M in funding and access to state-of-the-art computing resources for our students and faculty.",
                            category: "Partnerships"
                        },
                        {
                            date: "January 15, 2026",
                            title: "Admissions Open for New Joint Degree Program in Data Science & Economics",
                            excerpt: "Responding to industry demand, CollegeGO launches a unique interdisciplinary program starting Fall 2026.",
                            category: "Academics"
                        },
                        {
                            date: "December 10, 2025",
                            title: "CollegeGO Sustainability Initiative: Achieving Carbon Neutrality by 2030",
                            excerpt: "A comprehensive roadmap detailing our commitment to green energy, waste reduction, and sustainable campus practices.",
                            category: "Sustainability"
                        },
                        {
                            date: "November 22, 2025",
                            title: "Annual Convocation 2025: Celebrating the Class of Resilience",
                            excerpt: "Over 2,000 students graduated in a grand ceremony attended by the Minister of Education.",
                            category: "Events"
                        },
                    ].map((release, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-brand-red transition-colors group">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{release.date}</span>
                                </div>
                                <span className="hidden md:inline">•</span>
                                <span className="bg-gray-100 text-dark-blue px-2 py-1 rounded font-bold uppercase text-xs">
                                    {release.category}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-brand-red transition-colors">
                                <Link href="#">{release.title}</Link>
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {release.excerpt}
                            </p>
                            <div className="flex gap-4">
                                <button className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider hover:underline">
                                    <FileText className="w-4 h-4" /> Read Full Release
                                </button>
                                <button className="flex items-center gap-2 text-gray-400 font-bold text-sm uppercase tracking-wider hover:text-dark-blue transition-colors">
                                    <Download className="w-4 h-4" /> Download PDF
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* Pagination Mock */}
                    <div className="flex justify-center pt-8">
                        <div className="flex gap-2">
                            <span className="w-10 h-10 flex items-center justify-center bg-brand-red text-white font-bold rounded-full cursor-pointer">1</span>
                            <span className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 font-bold rounded-full hover:bg-gray-200 cursor-pointer transition-colors">2</span>
                            <span className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-600 font-bold rounded-full hover:bg-gray-200 cursor-pointer transition-colors">3</span>
                            <span className="w-10 h-10 flex items-center justify-center text-gray-400 font-bold">...</span>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
