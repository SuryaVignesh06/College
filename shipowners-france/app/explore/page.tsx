"use client";

import PageLayout from "@/components/page-layout";
import { CampusExplorer } from "@/components/campus-explorer";

export default function ExplorePage() {
    return (
        <PageLayout
            title="Explore Campus"
            subtitle="Take a virtual tour and explore our 100-acre green campus."
            backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-8">
                <CampusExplorer />
            </div>
        </PageLayout>
    );
}
