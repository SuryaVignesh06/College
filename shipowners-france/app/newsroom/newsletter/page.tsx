import PageLayout from "@/components/page-layout";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function NewsletterPage() {
    return (
        <PageLayout
            title="Newsletter"
            subtitle="The best of CollegeGO delivered straight to your inbox."
            backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Subscribe Section */}
                <div className="bg-dark-blue rounded-3xl p-8 md:p-16 text-center text-white mb-20 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <Mail className="w-16 h-16 mx-auto mb-6 text-brand-red" />
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay in the Loop</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join 15,000+ students, alumni, and faculty who receive our weekly roundup of news, events, and inspiring stories.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full text-dark-blue font-bold focus:outline-none focus:ring-4 focus:ring-brand-red/50"
                            />
                            <button className="bg-brand-red hover:bg-white hover:text-brand-red transition-colors text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">* No spam, unsubscribe anytime.</p>
                    </div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
                </div>

                {/* Archive */}
                <div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-8 text-center">Recent Issues</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "February 2026: The Innovation Issue",
                                date: "Feb 01, 2026",
                                desc: "Featuring our new AI lab, hackathon winners, and an interview with the Dean."
                            },
                            {
                                title: "January 2026: New Beginnings",
                                date: "Jan 01, 2026",
                                desc: "Welcoming the spring cohort, campus renovation updates, and 2025 recap."
                            },
                            {
                                title: "December 2025: Holiday Special",
                                date: "Dec 01, 2025",
                                desc: "highlights from the Winter Fest, alumni meetups, and year-end awards."
                            },
                        ].map((issue, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-red transition-all cursor-pointer group">
                                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">{issue.date}</span>
                                <h4 className="text-xl font-bold text-dark-blue mb-4 group-hover:text-brand-red transition-colors">{issue.title}</h4>
                                <p className="text-gray-600 text-sm mb-6">{issue.desc}</p>
                                <div className="flex items-center gap-2 text-brand-red font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all">
                                    Read Issue <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
