import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

export default function SocialMediaPage() {
    return (
        <PageLayout
            title="Social Media"
            subtitle="Follow the conversation and tag us @CollegeGO to be featured."
            backgroundImage="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Social Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-16">
                    {[
                        { icon: Instagram, label: "Instagram", color: "bg-pink-600", handle: "@CollegeGO" },
                        { icon: Twitter, label: "Twitter", color: "bg-sky-500", handle: "@CollegeGO_Official" },
                        { icon: Linkedin, label: "LinkedIn", color: "bg-blue-700", handle: "/school/collegego" },
                        { icon: Facebook, label: "Facebook", color: "bg-blue-600", handle: "/CollegeGO" },
                        { icon: Youtube, label: "YouTube", color: "bg-red-600", handle: "/CollegeGOTV" },
                    ].map((social, idx) => (
                        <a key={idx} href="#" className="flex items-center gap-3 bg-white pl-3 pr-6 py-3 rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className={`${social.color} text-white p-2 rounded-full`}>
                                <social.icon className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-xs text-gray-400 font-bold uppercase">{social.label}</span>
                                <span className="block font-bold text-dark-blue">{social.handle}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Social Wall Mockup */}
                <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">#LifeAtCollegeGO</h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {[
                        "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2670&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2670&auto=format&fit=crop",
                        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
                    ].map((img, idx) => (
                        <div key={idx} className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-lg group">
                            <div className="relative aspect-[4/5] w-full">
                                <Image src={img} alt="Social Post" fill className="object-cover" />
                                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                    <div className="flex items-center gap-2 text-white text-sm">
                                        <Instagram className="w-4 h-4" />
                                        <span className="font-bold">@student_life</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-gray-100 text-dark-blue font-bold px-8 py-3 rounded-full hover:bg-brand-red hover:text-white transition-colors">
                        Load More Posts
                    </button>
                </div>
            </div>
        </PageLayout>
    );
}
