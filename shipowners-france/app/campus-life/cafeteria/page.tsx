import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Coffee, Utensils, Clock } from "lucide-react";

export default function CafeteriaPage() {
    return (
        <PageLayout
            title="Cafeteria"
            subtitle="A vibrant space for delicious meals and great conversations."
            backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2647&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-dark-blue">Balanced Diet, Happy Life</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Our cafeteria offers a wide range of hygienic and nutritious meals, catering to diverse tastes. From quick bites to full-course meals, we ensure quality and taste in every serving.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 text-brand-red font-bold">
                                <Clock className="w-5 h-5" />
                                <span>Open 7:00 AM - 10:00 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300">
                        <Image src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2671&auto=format&fit=crop" alt="Cafeteria Food" fill className="object-cover" />
                    </div>
                </div>

                {/* Menu Highlights */}
                <h3 className="text-2xl font-bold text-dark-blue mb-6">Menu Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: "Healthy Bowls", icon: Utensils, desc: "Fresh salads and grain bowls." },
                        { name: "Beverages", icon: Coffee, desc: "Fresh juices, tea, and coffee." },
                        { name: "Hot Meals", icon: Utensils, desc: "Daily rotating specials." },
                        { name: "Snacks", icon: Utensils, desc: "Quick bites for busy students." },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:border-brand-red transition-colors">
                            <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-dark-blue mb-2">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
