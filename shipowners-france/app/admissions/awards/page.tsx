"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Trophy, Medal, Award, Crown, Zap, Globe, Heart, Shield, BookOpen, Users, Leaf } from "lucide-react";

export default function AwardsPage() {
    const awards = [
        {
            title: "Best Engineering College",
            issuer: "National Education Council",
            place: "New Delhi, India",
            description: "Awarded for exceptional academic standards, infrastructure, and placement records.",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Excellence in Research",
            issuer: "Science & Tech Board",
            place: "Bangalore, India",
            description: "Recognized for pioneering research in renewable energy and artificial intelligence.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Top Innovation Hub",
            issuer: "Startup India",
            place: "Hyderabad, India",
            description: "Honored for fostering a vibrant startup ecosystem and student entrepreneurship.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Green Campus Award",
            issuer: "Environmental Ministry",
            place: "Kerala, India",
            description: "Appreciated for sustainable practices, solar energy adoption, and waste management.",
            image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?q=80&w=2560&auto=format&fit=crop"
        },
        {
            title: "Best Infrastructure",
            issuer: "Architecture Digest",
            place: "Mumbai, India",
            description: "Cited for having state-of-the-art labs, libraries, and student living spaces.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Student Satisfaction",
            issuer: "University Survey 2024",
            place: "Online Global Survey",
            description: "Voted #1 by students for campus life, faculty support, and overall experience.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Industry Interface",
            issuer: "CII Awards",
            place: "Chennai, India",
            description: "Celebrated for strong industry ties, internships, and corporate partnerships.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Sports Excellence",
            issuer: "National Sports Board",
            place: "Pune, India",
            description: "Winner of the National Inter-University Sports Championship 2024.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Cultural Vibrancy",
            issuer: "Art & Culture Forum",
            place: "Kolkata, India",
            description: "Recognized for promoting arts, music, and cultural diversity on campus.",
            image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?q=80&w=2574&auto=format&fit=crop"
        },
        {
            title: "Tech-Fest of the Year",
            issuer: "TechCrunch India",
            place: "Bangalore, India",
            description: "Awarded for organizing the most impactful student-led technical festival.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Best Placement Record",
            issuer: "HR Association",
            place: "Delhi, India",
            description: "Consistent 95%+ placement record with top-tier global companies.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Social Impact Award",
            issuer: "NGO Alliance",
            place: "Global",
            description: "Commended for impactful community service and social outreach programs.",
            image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop"
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="py-32 bg-dark-blue text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                {/* Optional Background Image for Header */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=2573&auto=format&fit=crop"
                        alt="Awards Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 uppercase tracking-tight">Our <span className="font-bold text-brand-red">Achievements</span></h1>
                    <p className="text-xl font-light opacity-80 max-w-2xl mx-auto tracking-wide uppercase">Celebrating excellence in every dimension.</p>
                </div>
            </section>

            <section className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            className="bg-white border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 relative group overflow-hidden flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-red transition-colors z-20"></div>

                            {/* Image Section */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={award.image}
                                    alt={award.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-dark-blue/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-display font-bold text-dark-blue mb-2 uppercase tracking-wide leading-tight">{award.title}</h3>

                                <div className="flex items-center gap-2 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    <span className="text-brand-red">{award.issuer}</span>
                                    <span>•</span>
                                    <span>{award.place}</span>
                                </div>

                                <p className="text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                                    {award.description}
                                </p>

                                <div className="flex items-center text-sm font-bold text-dark-blue uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                                    <span>View Details</span>
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
