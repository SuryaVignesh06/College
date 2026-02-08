import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, BookOpen, Building2, GraduationCap, Target, Users } from 'lucide-react';

export const metadata = {
    title: 'About Us | University College',
    description: 'Learn about the history, vision, mission, and leadership of University College.',
};

export default function AboutPage() {
    return (
        <div>
            <PageHeader
                title="About University College"
                description="Over three decades of academic excellence, innovation, and holistic development."
                breadcrumbs={[{ label: 'About', href: '/about' }]}
            />

            {/* Mission & Vision */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-primary/5 border border-primary/10 rounded-lg p-8 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <Target size={24} />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-neutral-900">Our Mission</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            To provide transformative education that empowers students to become critical thinkers, innovators, and socially responsible leaders prepared to address the challenges of a globalized world.
                        </p>
                    </div>
                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-8 space-y-4">
                        <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-foreground">
                            <Award size={24} />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-neutral-900">Our Vision</h3>
                        <p className="text-neutral-600 leading-relaxed">
                            To be a globally recognized institution of academic excellence, pioneering research, and community engagement that shapes future generations of leaders.
                        </p>
                    </div>
                </div>
            </section>

            {/* History */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Heritage</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">A Rich History of Excellence</h2>
                        <p className="text-neutral-600 leading-relaxed mb-4">
                            Established in 1993, University College was founded with a vision to create a center of learning that combines academic rigor with practical application. What started as a small institution with just 200 students and 15 faculty members has grown into a thriving university with over 8,000 students and 400 faculty across 12 departments.
                        </p>
                        <p className="text-neutral-600 leading-relaxed">
                            Throughout our history, we have remained committed to our founding principles of excellence, integrity, and innovation. Today, we are proud to be recognized as one of the leading institutions in the region.
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086&auto=format&fit=crop"
                            alt="University Building"
                            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <GraduationCap size={32} className="mx-auto text-primary" />
                        <h4 className="text-4xl font-bold text-neutral-900">8,000+</h4>
                        <p className="text-neutral-500">Students Enrolled</p>
                    </div>
                    <div className="space-y-2">
                        <Users size={32} className="mx-auto text-primary" />
                        <h4 className="text-4xl font-bold text-neutral-900">400+</h4>
                        <p className="text-neutral-500">Expert Faculty</p>
                    </div>
                    <div className="space-y-2">
                        <BookOpen size={32} className="mx-auto text-primary" />
                        <h4 className="text-4xl font-bold text-neutral-900">50+</h4>
                        <p className="text-neutral-500">Programs Offered</p>
                    </div>
                    <div className="space-y-2">
                        <Building2 size={32} className="mx-auto text-primary" />
                        <h4 className="text-4xl font-bold text-neutral-900">12</h4>
                        <p className="text-neutral-500">Departments</p>
                    </div>
                </div>
            </section>

            {/* Leadership CTA */}
            <section className="py-20 bg-primary text-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Our leadership team brings together decades of academic and administrative experience to guide the university towards its vision.
                    </p>
                    <Link href="/about/leadership">
                        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                            View Leadership Team
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
