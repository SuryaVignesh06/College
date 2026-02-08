
import PageLayout from "@/components/page-layout";
import Image from "next/image";

export default function CampusLifePage() {
    return (
        <PageLayout
            title="Campus Life"
            subtitle="A vibrant community of diverse talents at CollegeGO."
            backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?q=80&w=2670&auto=format&fit=crop" alt="Sports" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                        <h3 className="text-white text-2xl font-bold">Athletics & Recreation</h3>
                    </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" alt="Clubs" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                        <h3 className="text-white text-2xl font-bold">Student Clubs & Organizations</h3>
                    </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" alt="Housing" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                        <h3 className="text-white text-2xl font-bold">Housing & Dining</h3>
                    </div>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2670&auto=format&fit=crop" alt="Events" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                        <h3 className="text-white text-2xl font-bold">Arts & Culture</h3>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
