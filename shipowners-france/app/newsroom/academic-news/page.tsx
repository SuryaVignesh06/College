import PageLayout from "@/components/page-layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export default function AcademicNewsPage() {
    return (
        <PageLayout
            title="Academic News"
            subtitle="Latest updates, achievements, and curricular developments from our faculties."
            backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Featured Story */}
                <div className="mb-16">
                    <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
                        <Image
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop"
                            alt="Graduation Ceremony"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
                            <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">FEATURED</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight max-w-4xl">
                                CollegeGO Ranked #1 for Innovation in Engineering Education
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-6">
                                Our commitment to practical, research-led teaching has been recognized globally, setting a new benchmark for academic excellence.
                            </p>
                            <div className="flex items-center gap-6 text-white/80 text-sm font-bold">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> Feb 08, 2026</span>
                                <span className="flex items-center gap-2"><User className="w-4 h-4" /> Dean's Office</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "New AI & Data Science Curriculum Announced",
                            date: "Feb 05, 2026",
                            img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
                            category: "Curriculum"
                        },
                        {
                            title: "Professor Alan Grant receives Nobel Prize in Physics",
                            date: "Jan 28, 2026",
                            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
                            category: "Awards"
                        },
                        {
                            title: "Partnership with Tech Giants for Internship Programs",
                            date: "Jan 15, 2026",
                            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
                            category: "Placements"
                        },
                        {
                            title: "CollegeGO launches Online MBA Program",
                            date: "Jan 10, 2026",
                            img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
                            category: "Admissions"
                        },
                        {
                            title: "Department of Arts hosts Annual Literature Summit",
                            date: "Dec 20, 2025",
                            img: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2670&auto=format&fit=crop",
                            category: "Events"
                        },
                        {
                            title: "Research Grant secured for Sustainable Energy Project",
                            date: "Dec 05, 2025",
                            img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
                            category: "Research"
                        }
                    ].map((news, idx) => (
                        <article key={idx} className="flex flex-col group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                <Image src={news.img} alt={news.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-dark-blue uppercase tracking-wider">
                                    {news.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                                <Calendar className="w-4 h-4" />
                                <span>{news.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-dark-blue group-hover:text-brand-red transition-colors mb-3 line-clamp-2">
                                {news.title}
                            </h3>
                            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-red mt-auto group-hover:gap-3 transition-all">
                                Read Story <ArrowRight className="w-4 h-4" />
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
