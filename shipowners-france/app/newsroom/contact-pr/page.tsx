import PageLayout from "@/components/page-layout";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

export default function ContactPRPage() {
    return (
        <PageLayout
            title="Contact PR"
            subtitle="Get in touch with our communications team for inquiries and interviews."
            backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-blue mb-4">Media Relations Team</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We are happy to assist journalists and media professionals with stories, expert comments, and campus visits. Please reach out to us using the details below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: "Email", value: "press@collegego.edu" },
                                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                                { icon: MapPin, label: "Address", value: "Communications Office, Admin Block, CollegeGO Campus" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="bg-red-50 p-3 rounded-full text-brand-red">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-gray-400 uppercase tracking-wide mb-1">{item.label}</span>
                                        <span className="text-xl font-bold text-dark-blue">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-lg font-bold text-dark-blue mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: Twitter, color: "bg-sky-500" },
                                    { icon: Linkedin, color: "bg-blue-700" },
                                    { icon: Facebook, color: "bg-blue-600" },
                                ].map((social, idx) => (
                                    <a key={idx} href="#" className={`${social.color} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}>
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-brand-red">
                        <h3 className="text-2xl font-bold text-dark-blue mb-6">Send a Query</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Organization</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="Media House / Company" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-600 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-dark-blue text-white font-bold py-3 rounded-lg hover:bg-brand-red transition-colors">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
