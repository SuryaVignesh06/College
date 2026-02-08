import { validSlugs } from "../slugs";
import DepartmentClient from "./client-page";

export async function generateStaticParams() {
    return validSlugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function DepartmentPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <DepartmentClient slug={slug} />;
}
