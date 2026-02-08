import PageLayout from "@/components/page-layout";
import Image from "next/image";

export default function StudentCouncilPage() {
    return (
        <PageLayout
            title="Student Council"
            subtitle="The voice of the student body, leading with purpose and integrity."
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* President's Message */}
                    <section className="bg-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row gap-8 items-center">
                        <div className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0 rounded-full overflow-hidden border-4 border-brand-red">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                                alt="Student President"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-dark-blue mb-2">Message from the President</h3>
                            <p className="text-gray-600 italic mb-4">
                                "Our mission is to create an inclusive environment where every student feels heard and valued. We are here to serve you."
                            </p>
                            <p className="font-bold text-dark-blue">- Alex Johnson, Student Body President</p>
                        </div>
                    </section>

                    {/* Members Grid */}
                    <section>
                        <h3 className="text-2xl font-bold text-dark-blue mb-6 text-center">Meet the Council</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { role: "Vice President", name: "Sarah Lee" },
                                { role: "General Secretary", name: "Michael Chen" },
                                { role: "Treasurer", name: "Emma Wilson" },
                                { role: "Sports Secretary", name: "David Kim" },
                            ].map((member, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
                                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden relative">
                                        <Image
                                            src={`https://ui-avatars.com/api/?name=${member.name}&background=random`}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h4 className="font-bold text-dark-blue">{member.name}</h4>
                                    <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </PageLayout>
    );
}
