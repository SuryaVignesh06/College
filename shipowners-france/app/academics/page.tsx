
import PageLayout from "@/components/page-layout";

export default function AcademicsPage() {
    return (
        <PageLayout
            title="Academics"
            subtitle="Exploring the frontiers of knowledge."
            backgroundImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {["School of Engineering", "College of Business", "Faculty of Arts", "Medical School", "Law School", "Science Faculty"].map((school, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                        <h3 className="text-xl font-bold text-dark-blue mb-4">{school}</h3>
                        <p className="text-gray-600 mb-6">Offering undergraduate and graduate programs designed to challenge and inspire.</p>
                        <span className="text-brand-red font-bold text-sm uppercase tracking-wide">Explore Programs &rarr;</span>
                    </div>
                ))}
            </div>
        </PageLayout>
    );
}
