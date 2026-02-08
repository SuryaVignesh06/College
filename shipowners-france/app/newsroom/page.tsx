import PageLayout from "@/components/page-layout";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Newspaper, Mic, Calendar, Bookmark, Video, FileText } from "lucide-react";

export default function NewsroomPage() {
    const sections = [
        {
            title: "Latest Stories",
            description: "Breaking news and feature stories from across campus.",
            link: "/newsroom/academic-news",
            icon: Newspaper,
            color: "bg-blue-100 text-blue-600",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Research Breakthroughs",
            description: "See how our faculty and students are changing the world.",
            link: "/newsroom/research-highlights",
            icon: FileText,
            color: "bg-green-100 text-green-600",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Campus Events",
            description: "Don't miss out on festivals, workshops, and guest lectures.",
            link: "/newsroom/campus-events",
            icon: Calendar,
            color: "bg-purple-100 text-purple-600",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Alumni Spotlight",
            description: "Inspiring journeys of our graduates making a mark.",
            link: "/newsroom/alumni-stories",
            icon: Bookmark,
            color: "bg-yellow-100 text-yellow-600",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Media Kit",
            description: "Resources for press, including logos and fact sheets.",
            link: "/newsroom/media-kit",
            icon: Video,
            color: "bg-pink-100 text-pink-600",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop"
        },
        {
            title: "Podcast",
            description: "Tune in to 'The CollegeGO Show' for deep dives and interviews.",
            link: "/newsroom/podcast",
            icon: Mic,
            color: "bg-red-100 text-red-600",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=2694&auto=format&fit=crop"
        }
    ];

    return (
        <PageLayout
            title="Newsroom"
            subtitle="The central hub for news, stories, and updates from CollegeGO."
            backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4">
                {/* Featured Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-dark-blue mb-8">Featured</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                        <div className="relative h-64 lg:h-full min-h-[400px]">
                            <Image
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop"
                                alt="Featured News"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8 lg:p-12">
                            <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red font-bold text-xs uppercase tracking-wider rounded-full mb-4">
                                Top Story
                            </span>
                            <h3 className="text-3xl lg:text-4xl font-bold text-dark-blue mb-4">
                                CollegeGO Ranked #1 for Innovation in Education
                            </h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                For the third consecutive year, our commitment to hands-on learning and research excellence has been recognized on the global stage.
                            </p>
                            <Link href="/newsroom/academic-news" className="inline-flex items-center gap-2 bg-dark-blue text-white px-8 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-brand-red transition-colors">
                                Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section>
                    <h2 className="text-3xl font-bold text-dark-blue mb-8">Explore Sections</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, idx) => (
                            <Link key={idx} href={section.link} className="group block h-full">
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-sm">
                                            <section.icon className={`w-5 h-5 ${section.color.split(" ")[1]}`} />
                                        </div>
                                    </div>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-xl font-bold text-dark-blue mb-2 group-hover:text-brand-red transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                                            {section.description}
                                        </p>
                                        <div className="text-brand-red font-bold text-xs uppercase tracking-wider flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0">
                                            View Section <ArrowRight className="w-3 h-3" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </PageLayout>
    );
}
