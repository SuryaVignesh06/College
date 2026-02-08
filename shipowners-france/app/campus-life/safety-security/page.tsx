import PageLayout from "@/components/page-layout";
import { Shield, Eye, Lock } from "lucide-react";

export default function SafetySecurityPage() {
    return (
        <PageLayout
            title="Safety & Security"
            subtitle="Your safety is our priority. A secure campus for peace of mind."
            backgroundImage="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            icon: Shield,
                            title: "24/7 Security",
                            desc: "Round-the-clock security personnel stationed at all entry points and hostels."
                        },
                        {
                            icon: Eye,
                            title: "CCTV Surveillance",
                            desc: "Comprehensive coverage of the campus with advanced monitoring systems."
                        },
                        {
                            icon: Lock,
                            title: "Biometric Access",
                            desc: "Restricted access to hostels and labs to ensure only authorized entry."
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                            <div className="bg-dark-blue w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-dark-blue mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-red-50 border border-brand-red rounded-xl p-8 text-center max-w-3xl mx-auto">
                    <h3 className="text-2xl font-bold text-brand-red mb-2">Zero Tolerance for Ragging</h3>
                    <p className="text-dark-blue">
                        CollegeGO is a ragging-free campus. strict disciplinary action will be taken against anyone found indulging in ragging activities.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}
