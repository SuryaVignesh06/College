
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Post {
    id: number;
    title: string;
    category: string;
    date: string;
    image: string;
    slug: string;
}

const posts: Post[] = [
    {
        id: 1,
        title: "Annual Science & Technology Fair 2026: Innovations for a Sustainable Future",
        category: "Events",
        date: "Feb 15, 2026",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2670&auto=format&fit=crop",
        slug: "#",
    },
    {
        id: 2,
        title: "Shipowners College Ranked #1 for Graduate Employability in the Region",
        category: "Achievement",
        date: "Feb 10, 2026",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
        slug: "#",
    },
    {
        id: 3,
        title: "New International Student Exchange Program Launched with Top European Universities",
        category: "Global",
        date: "Feb 05, 2026",
        image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2670&auto=format&fit=crop",
        slug: "#",
    },
];

export function LatestPosts() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50/50">
            <div className="container mx-auto px-4 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-gray-200 pb-8">
                    <div className="space-y-4">
                        <span className="text-brand-red text-xs uppercase font-bold tracking-[0.2em] flex items-center gap-3">
                            <span className="w-8 h-px bg-brand-red"></span>
                            Campus Updates
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-blue">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-dark-blue to-dark-blue/60">News & Events</span>
                        </h2>
                    </div>

                    <Link
                        href="/newsroom"
                        className="group flex items-center gap-3 text-dark-blue uppercase font-bold text-xs tracking-wider transition-all hover:translate-x-1"
                    >
                        <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red transition-colors">
                            <Plus className="h-4 w-4 group-hover:text-white group-hover:rotate-90 transition-transform duration-300" />
                        </div>
                        View all updates
                    </Link>
                </div>

                {/* Grid of Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {posts.map((post, index) => (
                        <article
                            key={post.id}
                            className={cn(
                                "group cursor-pointer flex flex-col h-full bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2",
                                index === 1 ? "lg:-mt-8" : "" // Staggered layout effect
                            )}
                        >
                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-dark-blue">
                                    {post.category}
                                </div>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-dark-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="flex flex-col flex-grow p-8">
                                <div className="mb-4">
                                    <time className="text-gray-400 text-xs font-mono">{post.date}</time>
                                </div>

                                <h3 className="text-xl font-bold leading-snug text-dark-blue group-hover:text-brand-red transition-colors duration-300 line-clamp-3 mb-6">
                                    {post.title}
                                </h3>

                                <div className="mt-auto flex items-center gap-2 text-sm font-bold text-dark-blue group-hover:translate-x-2 transition-transform duration-300">
                                    Read More
                                    <ArrowRight className="h-4 w-4 text-brand-red" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
