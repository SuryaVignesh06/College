import PageLayout from "@/components/page-layout";
import Image from "next/image";

export default function ClubsSocietiesPage() {
    return (
        <PageLayout
            title="Clubs & Societies"
            subtitle="Find your community and pursue your passions beyond the classroom."
            backgroundImage="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Tech Club",
                            description: "For the innovators and tech enthusiasts.",
                            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2670&auto=format&fit=crop",
                        },
                        {
                            title: "Literary Society",
                            description: "Debates, poetry, and creative writing.",
                            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2573&auto=format&fit=crop",
                        },
                        {
                            title: "Music & Dance",
                            description: "Express yourself through rhythm and melody.",
                            image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop",
                        },
                        {
                            title: "Photography Club",
                            description: "Capturing moments, one click at a time.",
                            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2564&auto=format&fit=crop",
                        },
                        {
                            title: "Drama Club",
                            description: "The stage is yours.",
                            image: "https://images.unsplash.com/photo-1507676184212-d03ab07a11d0?q=80&w=2669&auto=format&fit=crop",
                        },
                        {
                            title: "Robotics Club",
                            description: "Building the future, literally.",
                            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a78e?q=80&w=2670&auto=format&fit=crop",
                        },
                    ].map((club, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-48">
                                <Image
                                    src={club.image}
                                    alt={club.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark-blue mb-2">{club.title}</h3>
                                <p className="text-gray-600">{club.description}</p>
                                <button className="mt-4 text-brand-red font-bold uppercase text-sm tracking-wider hover:underline">
                                    Join Now &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
