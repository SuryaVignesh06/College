import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function InTheNewsPage() {
    return (
        <PageLayout
            title="In the News"
            subtitle="What the world is saying about CollegeGO."
            backgroundImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            source: "TechDaily",
                            logo: "https://ui-avatars.com/api/?name=Tech+Daily&background=0D8ABC&color=fff",
                            title: "How CollegeGO is redefining Engineering Education in the 21st Century",
                            date: "Feb 02, 2026",
                            snippet: "The institute's new hands-on curriculum is setting a benchmark for others to follow, bridging the gap between academia and industry."
                        },
                        {
                            source: "The Education Times",
                            logo: "https://ui-avatars.com/api/?name=Education+Times&background=ff0000&color=fff",
                            title: "Top 10 Universities for Research Innovation: CollegeGO Ranks #4",
                            date: "Jan 20, 2026",
                            snippet: "With a surge in patent filings and impactful publications, CollegeGO secures a top spot in this year's innovation rankings."
                        },
                        {
                            source: "Business Insider",
                            logo: "https://ui-avatars.com/api/?name=Business+Insider&background=000&color=fff",
                            title: "Interview: Dean Sarah Thompson on the Future of Higher Ed",
                            date: "Dec 15, 2025",
                            snippet: "We sat down with Dr. Thompson to discuss how universities must adapt to the AI revolution."
                        },
                        {
                            source: "Science Today",
                            logo: "https://ui-avatars.com/api/?name=Science+Today&background=4CAF50&color=fff",
                            title: "CollegeGO Researchers Develop Low-Cost Water Purification System",
                            date: "Nov 30, 2025",
                            snippet: "A breakthrough that could provide clean drinking water to millions in rural areas."
                        },
                        {
                            source: "Global News",
                            logo: "https://ui-avatars.com/api/?name=Global+News&background=673AB7&color=fff",
                            title: "Campus Life at CollegeGO: A Photo Essay",
                            date: "Oct 25, 2025",
                            snippet: "A visual journey through the vibrant culture, festivals, and daily life of students."
                        },
                        {
                            source: "Startup Weekly",
                            logo: "https://ui-avatars.com/api/?name=Startup+Weekly&background=FF9800&color=fff",
                            title: "Incubator Spotlight: 5 Startups Born at CollegeGO",
                            date: "Sep 10, 2025",
                            snippet: "From fintech to agritech, these student-led startups are making waves."
                        }
                    ].map((news, idx) => (
                        <Link href="#" key={idx} className="block group">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-red transition-all h-full flex flex-col">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full overflow-hidden relative">
                                            <Image src={news.logo} alt={news.source} fill className="object-cover" />
                                        </div>
                                        <span className="font-bold text-gray-500 text-sm uppercase tracking-wide">{news.source}</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-brand-red transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-4 group-hover:text-brand-red transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                    {news.snippet}
                                </p>
                                <span className="text-xs text-gray-400 font-bold">{news.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
