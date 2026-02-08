import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Dumbbell, Trophy, Activity } from "lucide-react";

export default function SportsComplexPage() {
    return (
        <PageLayout
            title="Sports Complex"
            subtitle="Fostering champions through world-class infrastructure and training."
            backgroundImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Key Stats */}
                    {[
                        { icon: Trophy, count: "50+", label: "Championships Won" },
                        { icon: Activity, count: "12", label: "Sports Disciplines" },
                        { icon: Dumbbell, count: "24/7", label: "Gym Access" },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-red flex items-center gap-4">
                            <div className="bg-red-50 p-3 rounded-full text-brand-red">
                                <stat.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <span className="block text-2xl font-bold text-dark-blue">{stat.count}</span>
                                <span className="text-gray-600 text-sm">{stat.label}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Facilities Grid */}
                <h2 className="text-3xl font-bold text-dark-blue mb-8 text-center">Our Facilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { name: "Olympic Size Pool", img: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?q=80&w=2574&auto=format&fit=crop" },
                        { name: "Indoor Gymnasium", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop" },
                        { name: "Basketball Courts", img: "https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=2671&auto=format&fit=crop" },
                        { name: "Football Field", img: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2670&auto=format&fit=crop" },
                    ].map((facility, idx) => (
                        <div key={idx} className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                            <Image src={facility.img} alt={facility.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-2xl font-bold">{facility.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
