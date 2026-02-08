
"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GenericPage({ params }: { params: Promise<{ slug: string[] }> }) {
    const { slug } = use(params);
    const title = slug[slug.length - 1].split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const category = slug[0].toUpperCase();

    return (
        <main className="bg-white min-h-screen pt-24">
            {/* Simple Header */}
            <div className="bg-gray-50 border-b border-gray-200 py-16 lg:py-24">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-brand-red font-bold tracking-widest uppercase text-sm mb-4 block">
                        {category}
                    </span>
                    <h1 className="text-4xl lg:text-6xl font-display font-bold text-dark-blue mb-6">
                        {title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                        <Link href="/" className="hover:text-brand-red">Home</Link>
                        <span>/</span>
                        <span className="text-dark-blue font-medium">{title}</span>
                    </div>
                </div>
            </div>

            {/* Placeholder Content */}
            <div className="container mx-auto px-4 py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <span className="text-4xl">🚧</span>
                    </div>
                    <h2 className="text-2xl font-bold text-dark-blue mb-4">Content Under Development</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        We are currently building the comprehensive content for <strong>{title}</strong>.
                        This page will soon feature detailed information, galleries, and resources relevant to {category}.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/"
                            className="bg-dark-blue text-white px-8 py-3 rounded-none font-bold uppercase tracking-wider hover:bg-brand-red transition-colors"
                        >
                            Back Home
                        </Link>
                        <Link
                            href="/contact"
                            className="border border-gray-300 text-dark-blue px-8 py-3 rounded-none font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
