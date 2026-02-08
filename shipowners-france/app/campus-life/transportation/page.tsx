import PageLayout from "@/components/page-layout";
import { Bus, MapPin, Clock } from "lucide-react";

export default function TransportationPage() {
    return (
        <PageLayout
            title="Transportation"
            subtitle="Connecting you to the city with our efficient fleet of buses."
            backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2669&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-dark-blue">Commute with Ease</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We offer a fleet of comfortable buses connecting key areas of the city to the campus. Our transport service guarantees a safe and timely commute for day scholars and faculty members.
                        </p>

                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="font-bold text-dark-blue mb-4 flex items-center gap-2">
                                <Bus className="w-5 h-5 text-brand-red" />
                                Route Highlights
                            </h3>
                            <ul className="space-y-3">
                                {["City Center - Campus", "North Station - Campus", "South Extension - Campus"].map(route => (
                                    <li key={route} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
                                        <span className="text-gray-600">{route}</span>
                                        <span className="text-xs font-bold text-brand-red bg-red-50 px-2 py-1 rounded">EVERY 30 MIN</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-dark-blue text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-6">Transport Office</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-brand-red flex-shrink-0" />
                                <div>
                                    <span className="block font-bold text-lg mb-1">Location</span>
                                    <p className="text-gray-300 text-sm">Transport Shed, Near Gate 2</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="w-6 h-6 text-brand-red flex-shrink-0" />
                                <div>
                                    <span className="block font-bold text-lg mb-1">Office Hours</span>
                                    <p className="text-gray-300 text-sm">8:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-8 w-full bg-brand-red hover:bg-white hover:text-dark-blue text-white font-bold py-3 rounded-lg transition-colors">
                            Download Route Map
                        </button>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
