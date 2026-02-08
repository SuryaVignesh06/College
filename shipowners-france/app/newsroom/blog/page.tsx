import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { User, Tag } from "lucide-react";

export default function BlogPage() {
    return (
        <PageLayout
            title="The College Blog"
            subtitle="Stories, opinions, and insights from the CollegeGO community."
            backgroundImage="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8 order-2 lg:order-1">
                        {/* Categories */}
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="font-bold text-dark-blue mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {["Student Life", "Career Advice", "Faculty Insights", "Alumni Spotlights", "Campus Tech"].map(cat => (
                                    <li key={cat} className="text-gray-600 hover:text-brand-red cursor-pointer flex items-center justify-between">
                                        <span>{cat}</span>
                                        <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-400">12</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Tags */}
                        <div className="bg-gray-50 p-6 rounded-2xl">
                            <h3 className="font-bold text-dark-blue mb-4">Trending Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {["#Engineering", "#Design", "#Internships", "#MentalHealth", "#StudyTips", "#Events"].map(tag => (
                                    <span key={tag} className="bg-white text-xs font-bold text-gray-500 px-3 py-1 rounded-full cursor-pointer hover:bg-brand-red hover:text-white transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Feed */}
                    <div className="lg:col-span-2 space-y-12 order-1 lg:order-2">
                        {[
                            {
                                title: "5 Tips for acing your First Semester Exams",
                                excerpt: "Exam season can be stressful, but with the right strategy, you can conquer it. Here are top tips from our senior students.",
                                author: "Jennifer Wu, 3rd Year CS",
                                date: "Feb 06, 2026",
                                tag: "Study Tips",
                                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2670&auto=format&fit=crop"
                            },
                            {
                                title: "Why Interdisciplinary Learning is the Future",
                                excerpt: "Breaking down the silos between arts and sciences to create well-rounded problem solvers.",
                                author: "Prof. Robert Langdon",
                                date: "Jan 28, 2026",
                                tag: "Faculty Insights",
                                image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
                            },
                            {
                                title: "My Internship Experience at Google: A Diary",
                                excerpt: "From the interview process to the final presentation, here's everything I learned during my summer in Mountain View.",
                                author: "Alex Morgan, 4th Year IT",
                                date: "Jan 15, 2026",
                                tag: "Career Advice",
                                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                            },
                        ].map((post, idx) => (
                            <article key={idx} className="flex flex-col md:flex-row gap-6 items-start group cursor-pointer">
                                <div className="w-full md:w-48 aspect-square rounded-xl overflow-hidden relative flex-shrink-0">
                                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider mb-2">
                                        <span className="text-brand-red flex items-center gap-1"><Tag className="w-3 h-3" /> {post.tag}</span>
                                        <span className="text-gray-400">•</span>
                                        <span className="text-gray-400">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-dark-blue mb-3 group-hover:text-brand-red transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-bold text-dark-blue">
                                        <User className="w-4 h-4 text-gray-400" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-xl text-gray-400 font-bold uppercase tracking-widest hover:border-brand-red hover:text-brand-red transition-colors">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
