import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Heart, Globe, Users } from "lucide-react";

export default function VolunteeringPage() {
    return (
        <PageLayout
            title="Volunteering"
            subtitle="Making a difference in the community and beyond."
            backgroundImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Introduction */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-dark-blue mb-4">Giving Back to Society</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We believe in the power of service. Our students actively participate in various community outreach programs, environmental drives, and educational initiatives.
                        </p>
                    </div>

                    {/* Key Areas */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {[
                            { title: "Community Outreach", icon: Users, desc: "Working with local NGOs to support underprivileged communities." },
                            { title: "Environmental Drives", icon: Globe, desc: "Tree plantation, cleanliness drives, and sustainability workshops." },
                            { title: "Education for All", icon: Heart, desc: "Teaching and mentoring children in nearby schools." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-red text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-blue mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="relative rounded-3xl overflow-hidden bg-dark-blue text-white p-12 md:p-24 text-center">
                        <div className="absolute inset-0 opacity-20">
                            <Image src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2674&auto=format&fit=crop" alt="Volunteers" fill className="object-cover" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to make an impact?</h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join the NSS or NCC units and start your journey of service today.</p>
                            <button className="bg-brand-red text-white hover:bg-white hover:text-dark-blue transition-colors px-8 py-3 rounded-full font-bold uppercase tracking-widest">
                                Register as Volunteer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
