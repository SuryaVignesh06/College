import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Download, FileImage, FileText } from "lucide-react";

export default function MediaKitPage() {
    return (
        <PageLayout
            title="Media Kit"
            subtitle="Resources, logos, and guidelines for press and media partners."
            backgroundImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-dark-blue">Brand Assets</h2>
                        <p className="text-gray-600">
                            Download official CollegeGO logos, leadership headshots, and campus photography for use in editorial content. Please adhere to our brand guidelines when using these assets.
                        </p>
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                            <h3 className="font-bold text-dark-blue mb-4">Official Logo Pack</h3>
                            <div className="flex items-center gap-6 mb-6">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <span className="text-2xl font-display font-bold text-dark-blue">CollegeGO</span>
                                </div>
                                <div className="bg-dark-blue p-4 rounded-lg shadow-sm">
                                    <span className="text-2xl font-display font-bold text-white">CollegeGO</span>
                                </div>
                            </div>
                            <button className="bg-dark-blue text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-brand-red transition-colors">
                                <Download className="w-4 h-4" /> Download Logos (ZIP)
                            </button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-dark-blue">Fact Sheet</h2>
                        <div className="bg-white rounded-xl shadow-lg border-t-4 border-brand-red p-8">
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Founded</span>
                                    <span className="font-bold text-dark-blue">1985</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">President</span>
                                    <span className="font-bold text-dark-blue">Dr. Sarah Thompson</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Student Body</span>
                                    <span className="font-bold text-dark-blue">12,000+</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-gray-500">Faculty</span>
                                    <span className="font-bold text-dark-blue">850+</span>
                                </li>
                                <li className="flex justify-between pt-2">
                                    <span className="text-gray-500">Campus Size</span>
                                    <span className="font-bold text-dark-blue">100 Acres</span>
                                </li>
                            </ul>
                            <button className="w-full mt-6 border border-gray-300 text-gray-600 font-bold py-3 rounded-lg hover:border-dark-blue hover:text-dark-blue transition-colors flex justify-center items-center gap-2">
                                <FileText className="w-4 h-4" /> Download Fact Sheet
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-dark-blue mb-8">High-Res Photography</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop",
                            "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2670&auto=format&fit=crop"
                        ].map((img, idx) => (
                            <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                                <Image src={img} alt="Campus Shot" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Download className="text-white w-8 h-8" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
