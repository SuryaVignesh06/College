import PageLayout from "@/components/page-layout";
import Image from "next/image";

export default function AuditoriumPage() {
    return (
        <PageLayout
            title="Auditorium"
            subtitle="A state-of-the-art venue for performances, conferences, and gatherings."
            backgroundImage="https://images.unsplash.com/photo-1507676184212-d03ab07a11d0?q=80&w=2669&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-dark-blue mb-4">The Main Hall</h2>
                    <p className="text-gray-600">
                        With a seating capacity of over 1000, our auditorium is the centerpiece of campus life, hosting convocation ceremonies, cultural fests, and international conferences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Large Image */}
                    <div className="relative md:col-span-2 aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1544391655-320d048c75dd?q=80&w=2670&auto=format&fit=crop" alt="Stage View" fill className="object-cover" />
                    </div>
                    {/* Detailed Shots */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2564&auto=format&fit=crop" alt="Seating" fill className="object-cover" />
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <Image src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2670&auto=format&fit=crop" alt="Lighting" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
