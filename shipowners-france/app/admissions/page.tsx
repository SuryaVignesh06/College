
import PageLayout from "@/components/page-layout";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AdmissionsFeatures } from "@/components/admissions-features";

export default function AdmissionsPage() {
    return (
        <PageLayout
            title="Admissions"
            subtitle="Join our community of innovators and leaders."
            backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                    <h2 className="text-3xl font-display font-bold text-dark-blue">Undergraduate Admissions at CollegeGO</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We seek students who are intellectually curious, creative, and committed to making a difference. Our holistic admissions process reviews your academic achievements, extracurricular involvement, and personal essays.
                    </p>
                    <ul className="space-y-4">
                        {["High School Transcript", "Standardized Test Scores (Optional)", "Two Letters of Recommendation", "Personal Statement"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-brand-red" />
                                <span className="text-dark-blue font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/apply"
                        className="inline-flex items-center gap-2 bg-brand-red text-white hover:bg-dark-blue transition-colors px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wide mt-4"
                    >
                        Start Application
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
                    <h3 className="text-xl font-bold text-dark-blue mb-6">Important Dates</h3>
                    <div className="space-y-6">
                        <div className="flex justify-between border-b border-gray-200 pb-4">
                            <span className="font-medium">Early Decision Deadline</span>
                            <span className="text-brand-red font-bold">Nov 1, 2026</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 pb-4">
                            <span className="font-medium">Regular Decision Deadline</span>
                            <span className="text-brand-red font-bold">Jan 15, 2027</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-200 pb-4">
                            <span className="font-medium">Financial Aid Priority</span>
                            <span className="text-brand-red font-bold">Feb 1, 2027</span>
                        </div>
                    </div>
                </div>
            </div>

            <AdmissionsFeatures />
        </PageLayout >
    );
}
