import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BookOpen, Calendar, FlaskConical, GraduationCap, Landmark, TestTube } from 'lucide-react';

export const metadata = {
    title: 'Academics | University College',
    description: 'Explore our academic programs, schools, curriculum, and research opportunities.',
};

const schools = [
    { name: 'School of Engineering', icon: FlaskConical, programs: 12, href: '/departments' },
    { name: 'School of Business', icon: Landmark, programs: 8, href: '/departments' },
    { name: 'School of Arts & Humanities', icon: BookOpen, programs: 10, href: '/departments' },
    { name: 'School of Sciences', icon: TestTube, programs: 15, href: '/departments' },
];

export default function AcademicsPage() {
    return (
        <div>
            <PageHeader
                title="Academics"
                description="Rigorous curriculum, innovative teaching, and world-class research define our academic experience."
                breadcrumbs={[{ label: 'Academics', href: '/academics' }]}
            />

            {/* Academic Structure */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Our Structure</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Schools & Faculties</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {schools.map((school) => (
                        <Link key={school.name} href={school.href}>
                            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                                <CardHeader className="text-center">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                                        <school.icon size={28} />
                                    </div>
                                    <CardTitle className="text-lg">{school.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-2xl font-bold text-secondary">{school.programs}</p>
                                    <p className="text-sm text-neutral-500">Programs</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Academic Calendar */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Plan Ahead</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">Academic Calendar</h2>
                        <p className="text-neutral-600 leading-relaxed mb-6">
                            Our academic year is divided into two semesters, with breaks for major holidays and examination periods. Download the full calendar to plan your year effectively.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center space-x-3 text-neutral-700">
                                <Calendar size={18} className="text-primary" />
                                <span><strong>Fall Semester:</strong> August - December</span>
                            </li>
                            <li className="flex items-center space-x-3 text-neutral-700">
                                <Calendar size={18} className="text-primary" />
                                <span><strong>Spring Semester:</strong> January - May</span>
                            </li>
                            <li className="flex items-center space-x-3 text-neutral-700">
                                <Calendar size={18} className="text-primary" />
                                <span><strong>Summer Session:</strong> June - July (Optional)</span>
                            </li>
                        </ul>
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                            Download Full Calendar (PDF)
                        </Button>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop"
                        alt="Calendar planning"
                        className="rounded-lg shadow-xl w-full h-[350px] object-cover"
                    />
                </div>
            </section>

            {/* Teaching Methodology */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">How We Teach</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Our Approach</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white border rounded-lg p-8 space-y-4 shadow-sm">
                            <h3 className="font-bold text-xl text-neutral-900">Experiential Learning</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                Hands-on projects, internships, and real-world case studies are integral to our curriculum, ensuring students graduate with practical skills.
                            </p>
                        </div>
                        <div className="bg-white border rounded-lg p-8 space-y-4 shadow-sm">
                            <h3 className="font-bold text-xl text-neutral-900">Research-Driven</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                Students at all levels are encouraged to participate in research projects, fostering a culture of inquiry and innovation.
                            </p>
                        </div>
                        <div className="bg-white border rounded-lg p-8 space-y-4 shadow-sm">
                            <h3 className="font-bold text-xl text-neutral-900">Global Perspective</h3>
                            <p className="text-neutral-600 text-sm leading-relaxed">
                                International exchange programs and globally-focused coursework prepare students for a connected world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Departments CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-6 space-y-6">
                    <GraduationCap size={48} className="mx-auto text-secondary" />
                    <h2 className="font-serif text-4xl font-bold">Explore Our Departments</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                        Dive deeper into our 12 specialized academic departments and discover the programs that match your passion.
                    </p>
                    <Link href="/departments">
                        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                            Browse Departments
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
