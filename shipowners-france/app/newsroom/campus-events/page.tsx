import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export default function CampusEventsPage() {
    return (
        <PageLayout
            title="Campus Events"
            subtitle="Stay connected with what's happening around the campus."
            backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Filter/Tabs (Visual only) */}
                <div className="flex overflow-x-auto pb-4 gap-4 mb-12 border-b border-gray-100">
                    {["All Events", "Academic", "Cultural", "Sports", "Workshops"].map((tab, idx) => (
                        <button key={tab} className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${idx === 0 ? 'bg-brand-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <div className="space-y-8">
                    {[
                        {
                            day: "12",
                            month: "FEB",
                            title: "International Conference on Sustainable Tech",
                            time: "10:00 AM - 4:00 PM",
                            location: "Main Auditorium",
                            img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
                        },
                        {
                            day: "18",
                            month: "FEB",
                            title: "Annual Sports Meet 2026",
                            time: "8:00 AM Onwards",
                            location: "Sports Complex",
                            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2670&auto=format&fit=crop"
                        },
                        {
                            day: "25",
                            month: "FEB",
                            title: "Workshop: Entrepreneurship 101",
                            time: "2:00 PM - 5:00 PM",
                            location: "Seminar Hall B",
                            img: "https://images.unsplash.com/photo-1558008258-325b3e33004d?q=80&w=2592&auto=format&fit=crop"
                        },
                        {
                            day: "05",
                            month: "MAR",
                            title: "Spring Music Festival",
                            time: "6:00 PM - 10:00 PM",
                            location: "Open Air Theatre",
                            img: "https://images.unsplash.com/photo-1459749411177-04aa6278839b?q=80&w=2670&auto=format&fit=crop"
                        },
                    ].map((event, idx) => (
                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-6 hover:shadow-lg transition-shadow">
                            {/* ID card style Image */}
                            <div className="relative w-full md:w-64 h-48 md:h-auto rounded-xl overflow-hidden flex-shrink-0">
                                <Image src={event.img} alt={event.title} fill className="object-cover" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex items-start gap-6">
                                    <div className="flex flex-col items-center text-dark-blue min-w-[60px]">
                                        <span className="text-4xl font-bold leading-none">{event.day}</span>
                                        <span className="text-sm font-bold uppercase text-brand-red">{event.month}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-dark-blue mb-4">{event.title}</h3>
                                        <div className="flex flex-wrap gap-6 text-gray-500 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                <span>{event.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{event.location}</span>
                                            </div>
                                        </div>
                                        <button className="mt-6 px-6 py-2 border-2 border-dark-blue text-dark-blue font-bold text-xs uppercase tracking-widest rounded-lg hover:bg-dark-blue hover:text-white transition-colors">
                                            Register Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
