import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Wifi, Home, Coffee } from "lucide-react";

export default function HostelDiningPage() {
    return (
        <PageLayout
            title="Hostel & Dining"
            subtitle="Comfortable living spaces that feel like a home away from home."
            backgroundImage="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Hostel Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-blue mb-4">Residential Halls</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We provide separate hostels for boys and girls with spacious, well-furnished rooms. Our residential halls are designed to foster a sense of community while ensuring privacy and comfort.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: Wifi, text: "High-Speed Wi-Fi" },
                                { icon: Home, text: "Furnished Rooms" },
                                { icon: Coffee, text: "Common Rooms" },
                                { icon: Home, text: "Laundry Service" },
                            ].map((amenity, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                                    <amenity.icon className="w-6 h-6 text-brand-red" />
                                    <span className="font-bold text-dark-blue">{amenity.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                            <Image src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2670&auto=format&fit=crop" alt="Hostel Room" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image src="https://images.unsplash.com/photo-1522771753035-48482b1d31f4?q=80&w=2535&auto=format&fit=crop" alt="Common Area" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
