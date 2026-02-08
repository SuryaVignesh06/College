import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

export default function HealthCenterPage() {
    return (
        <PageLayout
            title="Health Center"
            subtitle="Ensuring the well-being of our campus community around the clock."
            backgroundImage="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2628&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/2 relative min-h-[300px]">
                        <Image src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" alt="Medical Facility" fill className="object-cover" />
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12 space-y-6">
                        <h2 className="text-3xl font-bold text-dark-blue">Comprehensive Care</h2>
                        <p className="text-gray-600">
                            Our on-campus health center is equipped to handle medical emergencies and routine check-ups. We have qualified doctors and nurses available 24/7 to ensure the health and safety of our students.
                        </p>

                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-4 text-gray-700">
                                <div className="bg-red-50 p-2 rounded-full text-brand-red"><Phone className="w-5 h-5" /></div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-gray-400">Emergency Contact</span>
                                    <span className="font-bold">+91 123 456 7890</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-700">
                                <div className="bg-red-50 p-2 rounded-full text-brand-red"><MapPin className="w-5 h-5" /></div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-gray-400">Location</span>
                                    <span className="font-bold">Building C, Ground Floor</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-700">
                                <div className="bg-red-50 p-2 rounded-full text-brand-red"><Clock className="w-5 h-5" /></div>
                                <div>
                                    <span className="block text-xs font-bold uppercase text-gray-400">OPD Timings</span>
                                    <span className="font-bold">9:00 AM - 5:00 PM (Mon-Sat)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
