
import PageLayout from "@/components/page-layout";

export default function ScholarshipsPage() {
    return (
        <PageLayout
            title="Scholarships & Aid"
            subtitle="Making world-class education accessible."
            backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl font-bold text-dark-blue">Merit-Based Scholarships</h2>
                <p className="text-gray-600">
                    We offer a range of scholarships to recognize academic achievement, leadership potential, and artistic talent. All applicants are automatically considered for merit scholarships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-8">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="text-xl font-bold text-brand-red mb-2">Presidential Scholar</h3>
                        <p className="text-sm text-gray-600">Full tuition coverage for exceptional academic achievers.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                        <h3 className="text-xl font-bold text-brand-red mb-2">Dean's List Award</h3>
                        <p className="text-sm text-gray-600">Partial tuition waivers for students with high GPA.</p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
