import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function AlumniStoriesPage() {
    return (
        <PageLayout
            title="Alumni Stories"
            subtitle="Celebrating the achievements of our graduates across the globe."
            backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-12">
                {/* Hero Graphic */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-dark-blue mb-6">Legends of CollegeGO</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Our alumni network is strong, diverse, and impactful. Meet the trailblazers who are shaping industries and changing lives.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {[
                        {
                            name: "Sarah Jenkins, Class of 2015",
                            role: "CEO at TechFlow",
                            quote: "Values I learned at CollegeGO guide my decisions every day. It wasn't just about coding; it was about ethical leadership.",
                            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                        },
                        {
                            name: "Marcus Thorne, Class of 2018",
                            role: "Lead Architect at BuildSpace",
                            quote: "The practical exposure in the labs gave me a head start in my career. I felt industry-ready from day one.",
                            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop"
                        },
                        {
                            name: "Dr. Emily Chen, Class of 2012",
                            role: "Research Scientist, NASA",
                            quote: "My professors nurtured my curiosity. That curiosity is what led me to where I am today.",
                            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop"
                        },
                        {
                            name: "David Ross, Class of 2020",
                            role: "Founder, GreenEarth NGO",
                            quote: "CollegeGO taught me that success is meaningless if you don't give back to society.",
                            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop"
                        },
                    ].map((story, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 items-center border-t-4 border-brand-red">
                            <div className="w-32 h-32 flex-shrink-0 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-inner">
                                <Image src={story.img} alt={story.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <Quote className="w-8 h-8 text-brand-red/20 mb-4 mx-auto md:mx-0" />
                                <p className="text-gray-600 italic mb-6">"{story.quote}"</p>
                                <h4 className="font-bold text-dark-blue text-lg">{story.name}</h4>
                                <p className="text-sm text-brand-red font-bold uppercase tracking-wider">{story.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
}
