import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Play, Mic, Headphones } from "lucide-react";

export default function PodcastPage() {
    return (
        <PageLayout
            title="The CollegeGO Podcast"
            subtitle="Conversations that inspire, educate, and entertain."
            backgroundImage="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Featured Episode */}
                <div className="bg-dark-blue rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 text-white mb-16 relative overflow-hidden shadow-2xl">
                    <div className="relative z-10 w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white/10">
                        <Image src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop" alt="Episode Art" fill className="object-cover" unoptimized />
                    </div>
                    <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
                        <span className="bg-brand-red px-3 py-1 rounded text-xs font-bold uppercase">Latest Episode • Ep #42</span>
                        <h2 className="text-3xl md:text-5xl font-bold">The Future of AI in Education</h2>
                        <p className="text-gray-300 text-lg">
                            Host Michael Scott talks to Dr. Janine Teagues about how Artificial Intelligence is reshaping the classroom and what it means for the future workforce.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-white text-dark-blue px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-red hover:text-white transition-colors">
                                <Play className="fill-current w-5 h-5" /> Listen Now
                            </button>
                            <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
                                <Headphones className="w-5 h-5" /> Subscribe
                            </button>
                        </div>
                    </div>
                    {/* Decor */}
                    <Mic className="absolute right-0 bottom-0 w-96 h-96 text-white/5 rotate-12 translate-x-1/4 translate-y-1/4" />
                </div>

                {/* Recent Episodes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: "Building a Career in Design", guest: "Sarah Jones", duration: "45 min", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop" },
                        { title: "Mental Health on Campus", guest: "Dr. Phil McGraw", duration: "32 min", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2669&auto=format&fit=crop" },
                        { title: "The Startup Journey", guest: "Elon Tusk", duration: "58 min", img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop" },
                        { title: "Sports vs Academics?", guest: "Coach Carter", duration: "40 min", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2670&auto=format&fit=crop" },
                        { title: "Sustainable Living 101", guest: "Greta T.", duration: "25 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" },
                        { title: "Women in STEM", guest: "Ada Lovelace", duration: "50 min", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" },
                    ].map((ep, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
                                <Image src={ep.img} alt={ep.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" unoptimized />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="bg-white p-4 rounded-full text-brand-red">
                                        <Play className="fill-current w-6 h-6 ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase text-gray-400 mb-2">
                                <Headphones className="w-3 h-3" /> {ep.duration}
                            </div>
                            <h3 className="text-xl font-bold text-dark-blue mb-1 group-hover:text-brand-red transition-colors">{ep.title}</h3>
                            <p className="text-sm text-gray-500">ft. {ep.guest}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
