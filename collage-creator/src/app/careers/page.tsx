'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import {
    Briefcase, MapPin, Clock, ArrowRight, Users, Heart, Lightbulb, Target,
    GraduationCap, BookOpen, Award, Coffee, Building, Stethoscope, ChevronRight
} from 'lucide-react';
import { useState } from 'react';

// Sample job openings data
const jobOpenings = [
    {
        id: 1,
        title: 'Associate Professor - Computer Science',
        department: 'School of Engineering & Technology',
        location: 'Main Campus',
        type: 'Full-time',
        posted: '2 days ago',
        description: 'Lead cutting-edge research and teach next-generation computer scientists.',
    },
    {
        id: 2,
        title: 'Administrative Coordinator',
        department: 'Office of Admissions',
        location: 'Main Campus',
        type: 'Full-time',
        posted: '1 week ago',
        description: 'Coordinate admissions processes and support prospective students.',
    },
    {
        id: 3,
        title: 'Research Assistant - Biomedical Sciences',
        department: 'School of Sciences',
        location: 'Research Center',
        type: 'Contract',
        posted: '3 days ago',
        description: 'Support groundbreaking biomedical research initiatives.',
    },
    {
        id: 4,
        title: 'Student Success Coach',
        department: 'Academic Support Services',
        location: 'Main Campus',
        type: 'Full-time',
        posted: '5 days ago',
        description: 'Guide students toward academic achievement and personal growth.',
    },
];

const values = [
    {
        icon: Heart,
        title: 'Compassion',
        description: 'We care deeply about our students, colleagues, and community.',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We embrace new ideas and creative approaches to education.',
    },
    {
        icon: Target,
        title: 'Excellence',
        description: 'We strive for the highest standards in everything we do.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'We work together to achieve shared goals and success.',
    },
];

const benefits = [
    { icon: Award, title: 'Competitive Salary', desc: 'Market-leading compensation packages with annual reviews' },
    { icon: Stethoscope, title: 'Health Insurance', desc: 'Comprehensive medical, dental & vision coverage' },
    { icon: Building, title: 'Retirement Plans', desc: 'Generous pension contributions and matching' },
    { icon: GraduationCap, title: 'Professional Development', desc: 'Tuition assistance and training programs' },
    { icon: Coffee, title: 'Work-Life Balance', desc: 'Flexible schedules and generous PTO' },
    { icon: BookOpen, title: 'Campus Perks', desc: 'Gym access, dining discounts, library privileges' },
];

export default function CareersPage() {
    const [hoveredJob, setHoveredJob] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-slate-50">
            {/* ========== HERO SECTION ========== */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                        alt="University Campus"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay matching site primary color */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center text-white px-6">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm mb-4 block">
                        Join Our Team
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                        Careers
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                        <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-white">Careers</span>
                    </div>
                </div>
            </section>

            {/* ========== INTRO SECTION ========== */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full blur-3xl opacity-60"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                        <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
                            alt="Faculty working together"
                            className="rounded-lg shadow-xl relative z-10 w-full object-cover h-[400px]"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900">
                            Surround Yourself with <span className="text-primary">Purpose</span>
                        </h2>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Working at University College means joining a community of experts
                            in education, research, and student development. Our collaborative
                            environment fosters growth, innovation, and meaningful impact.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Everything we do is underpinned by our core values:
                            <strong className="text-primary"> Excellence, Compassion, Innovation,
                                Integrity, and Collaboration</strong>.
                        </p>
                        <div className="grid grid-cols-2 gap-6 py-4">
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-secondary">500+</h4>
                                <p className="text-sm text-neutral-500">Team Members</p>
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-3xl font-bold text-secondary">30+</h4>
                                <p className="text-sm text-neutral-500">Years of Excellence</p>
                            </div>
                        </div>
                        <Link href="/about">
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors">
                                Read Our Story <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========== VALUES SECTION ========== */}
            <section className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                            What Drives Us
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">
                            Our Core Values
                        </h2>
                        <p className="text-blue-100 max-w-2xl mx-auto mt-4">
                            These principles guide everything we do at University College
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center 
                                           hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center 
                                               mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                    <value.icon className="h-7 w-7 text-secondary-foreground" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                <p className="text-blue-100 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== OPEN POSITIONS ========== */}
            <section id="positions" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                            Current Opportunities
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
                            Open Positions
                        </h2>
                        <p className="text-neutral-600 mt-4 max-w-2xl">
                            Explore our current job openings and join our team of dedicated professionals.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {jobOpenings.map((job) => (
                            <Card
                                key={job.id}
                                className={`group cursor-pointer transition-all duration-300 
                                           hover:shadow-lg overflow-hidden ${hoveredJob === job.id ? 'ring-2 ring-primary' : ''
                                    }`}
                                onMouseEnter={() => setHoveredJob(job.id)}
                                onMouseLeave={() => setHoveredJob(null)}
                            >
                                <CardContent className="p-0">
                                    <div className="flex flex-col lg:flex-row lg:items-center">
                                        {/* Left accent bar */}
                                        <div className={`w-full lg:w-1.5 h-1.5 lg:h-auto lg:self-stretch 
                                                        bg-gradient-to-b from-primary to-primary/80 
                                                        transition-all duration-300 ${hoveredJob === job.id ? 'lg:w-2' : ''
                                            }`} />

                                        <div className="flex-1 p-6">
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg lg:text-xl text-neutral-900 
                                                                         group-hover:text-primary transition-colors mb-1">
                                                        {job.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-neutral-500">
                                                        {job.department}
                                                    </CardDescription>
                                                    <p className="text-neutral-600 text-sm mt-2 hidden lg:block">
                                                        {job.description}
                                                    </p>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-2 text-sm">
                                                    <span className="flex items-center gap-1 px-3 py-1 
                                                                    bg-neutral-100 rounded text-neutral-600">
                                                        <MapPin className="h-3.5 w-3.5 text-primary" />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1 px-3 py-1 
                                                                    bg-neutral-100 rounded text-neutral-600">
                                                        <Briefcase className="h-3.5 w-3.5 text-primary" />
                                                        {job.type}
                                                    </span>
                                                    <span className="flex items-center gap-1 px-3 py-1 
                                                                    bg-neutral-100 rounded text-neutral-600">
                                                        <Clock className="h-3.5 w-3.5 text-primary" />
                                                        {job.posted}
                                                    </span>
                                                </div>

                                                <Button
                                                    className="bg-secondary text-secondary-foreground 
                                                               hover:bg-secondary/90 font-bold shadow-sm"
                                                >
                                                    Apply Now
                                                    <ChevronRight className="ml-1 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Resume CTA */}
                    <div className="text-center mt-12 p-8 bg-neutral-50 rounded-lg border border-neutral-200">
                        <p className="text-neutral-600 mb-4">
                            Don't see a position that fits your expertise?
                        </p>
                        <Button
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                            asChild
                        >
                            <Link href="/contact">
                                Submit Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* ========== QUOTE SECTION ========== */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="relative">
                        <span className="absolute -top-8 left-0 text-8xl font-serif text-neutral-200 
                                        select-none leading-none">"</span>
                        <p className="text-2xl md:text-3xl text-neutral-700 leading-relaxed font-light relative z-10">
                            At University College, we create a workplace where
                            <span className="text-primary font-medium"> unique perspectives</span>,
                            <span className="text-primary font-medium"> experiences</span>, and
                            <span className="text-primary font-medium"> backgrounds</span> combine to deliver
                            world-class education and transformative student experiences.
                        </p>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center 
                                       text-white font-bold text-lg">
                            SM
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-neutral-900">Dr. Sarah Mitchell</p>
                            <p className="text-neutral-500 text-sm">Vice Chancellor, Human Resources</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== BENEFITS SECTION ========== */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">
                            Employee Benefits
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
                            Why Work With Us?
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto mt-4">
                            We offer a comprehensive benefits package designed to support your well-being.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-neutral-50 rounded-lg hover:shadow-lg 
                                          transition-all duration-300 hover:bg-white border border-transparent
                                          hover:border-neutral-200"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center 
                                               justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <benefit.icon className="h-6 w-6 text-primary 
                                                            group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-lg text-neutral-900 mb-2">{benefit.title}</h3>
                                <p className="text-neutral-600 text-sm">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========== CTA SECTION ========== */}
            <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold">
                        Ready to Join Our Team?
                    </h2>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Take the first step towards a rewarding career. Explore our opportunities,
                        meet our team, and discover why University College is the right place for you.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link href="#positions">
                            <Button size="lg" className="h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold w-full sm:w-auto">
                                View Positions
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="h-14 px-10 text-lg border-white text-white hover:bg-white/10 w-full sm:w-auto">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
