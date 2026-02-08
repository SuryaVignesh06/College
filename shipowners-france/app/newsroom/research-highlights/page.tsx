import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Microscope, Atom, Dna, Brain } from "lucide-react";

export default function ResearchHighlightsPage() {
    return (
        <PageLayout
            title="Research Highlights"
            subtitle="Pushing the boundaries of knowledge to solve global challenges."
            backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold text-dark-blue mb-6">Innovation for a Better Tomorrow</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        At CollegeGO, research is at the heart of our mission. From life-saving medical breakthroughs to sustainable energy solutions, our faculty and students are making a tangible impact on the world.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { label: "Biotech", icon: Dna },
                        { label: "Quantum Physics", icon: Atom },
                        { label: "AI & Robotics", icon: Brain },
                        { label: "Material Science", icon: Microscope },
                    ].map((cat, idx) => (
                        <div key={idx} className="bg-white border border-gray-100 p-6 rounded-xl text-center hover:shadow-lg hover:border-brand-red transition-all cursor-pointer group">
                            <cat.icon className="w-10 h-10 mx-auto mb-4 text-gray-400 group-hover:text-brand-red transition-colors" />
                            <span className="font-bold text-dark-blue">{cat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Featured Research Papers/Stories */}
                <div className="space-y-16">
                    {[
                        {
                            title: "Breakthrough in Renewable Energy Storage",
                            desc: "Our material science team has developed a new graphene-based battery prototype that charges 10x faster than conventional lithium-ion cells.",
                            img: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2670&auto=format&fit=crop",
                            author: "Dr. Elena Rostova",
                            readTime: "5 min read"
                        },
                        {
                            title: "AI Model Predicts Monsoon Patterns with 98% Accuracy",
                            desc: "The Department of Computer Science has unveiled a new deep learning model that significantly improves weather forecasting for agricultural planning.",
                            img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
                            author: "Prof. Rajesh Kumar",
                            readTime: "7 min read"
                        }
                    ].map((story, idx) => (
                        <div key={idx} className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1 relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                                <Image src={story.img} alt={story.title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold text-dark-blue">{story.title}</h3>
                                <p className="text-gray-600 text-lg leading-relaxed">{story.desc}</p>
                                <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden relative">
                                            <Image src={`https://ui-avatars.com/api/?name=${story.author}&background=random`} alt={story.author} fill className="object-cover" />
                                        </div>
                                        <span className="font-bold text-sm text-dark-blue">{story.author}</span>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium">{story.readTime}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
