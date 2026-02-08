import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function EventsFestivalsPage() {
    return (
        <PageLayout
            title="Events & Festivals"
            subtitle="Celebrating our diverse culture, talent, and spirit throughout the year."
            backgroundImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Featured Event */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl lg:col-span-2 relative h-[400px]">
                        <Image
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"
                            alt="Annual Tech Fest"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 md:p-12">
                            <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">UPCOMING</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">TechnoVibe 2026</h2>
                            <p className="text-gray-200 text-lg max-w-2xl">The biggest technical festival featuring hackathons, workshops, and guest lectures from industry leaders.</p>
                            <div className="flex items-center gap-2 text-white mt-4 font-bold">
                                <Calendar className="w-5 h-5" />
                                <span>March 15-18, 2026</span>
                            </div>
                        </div>
                    </div>

                    {/* Upcoming Events List */}
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-dark-blue mb-6">Annual Highlights</h3>
                        <ul className="space-y-6">
                            {[
                                { name: "Cultural Night", date: "April 2026", desc: "A showcase of music, dance, and drama." },
                                { name: "Sports Meet", date: "October 2026", desc: "Inter-college sports championship." },
                                { name: "Alumni Meet", date: "December 2026", desc: "Welcoming back our graduates." },
                            ].map((event, idx) => (
                                <li key={idx} className="flex gap-4 items-start border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                                    <div className="bg-white p-3 rounded-lg shadow-sm text-center min-w-[80px]">
                                        <span className="block text-sm text-gray-400 font-bold uppercase">{event.date.split(" ")[0]}</span>
                                        <span className="block text-xl font-bold text-dark-blue">{event.date.split(" ")[1]}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-dark-blue text-lg">{event.name}</h4>
                                        <p className="text-gray-600 text-sm mt-1">{event.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Gallery Preview */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-dark-blue">Gallery</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                <Image src="https://images.unsplash.com/photo-1514525253440-b393452e8d03?q=80&w=2670&auto=format&fit=crop" alt="Concert" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                                <Image src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop" alt="Audience" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
