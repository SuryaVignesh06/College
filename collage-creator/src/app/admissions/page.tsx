import PageHeader from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { CalendarDays, CheckCircle, ClipboardList, FileText, GraduationCap } from 'lucide-react';

export const metadata = {
    title: 'Admissions | University College',
    description: 'Apply to University College. Learn about our admission process, requirements, and deadlines.',
};

const steps = [
    { icon: ClipboardList, title: 'Submit Application', description: 'Complete the online application form with your personal and academic details.' },
    { icon: FileText, title: 'Upload Documents', description: 'Submit transcripts, certificates, and other required documents.' },
    { icon: CalendarDays, title: 'Entrance Exam/Interview', description: 'Appear for the entrance test or interview based on your program.' },
    { icon: CheckCircle, title: 'Receive Offer', description: 'Successful applicants receive an offer letter via email.' },
];

const programs = [
    { level: 'Undergraduate', count: 25, description: 'Bachelor programs in Arts, Science, Commerce, and Engineering.' },
    { level: 'Postgraduate', count: 18, description: 'Master degrees designed for career advancement and specialization.' },
    { level: 'Doctoral', count: 8, description: 'Ph.D. programs for aspiring researchers and academics.' },
];

export default function AdmissionsPage() {
    return (
        <div>
            <PageHeader
                title="Admissions"
                description="Begin your journey at University College. Discover our programs and apply today."
                breadcrumbs={[{ label: 'Admissions', href: '/admissions' }]}
            />

            {/* Why Choose Us */}
            <section className="py-20 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Why University College?</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-6">Your Future Starts Here</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                                <span className="text-neutral-600">World-class faculty and state-of-the-art facilities</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                                <span className="text-neutral-600">Industry-relevant curriculum with hands-on learning</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                                <span className="text-neutral-600">Strong placement record with top recruiters</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                                <span className="text-neutral-600">Vibrant campus life with 50+ clubs and societies</span>
                            </li>
                        </ul>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                        alt="Students on campus"
                        className="rounded-lg shadow-xl w-full h-[350px] object-cover"
                    />
                </div>
            </section>

            {/* Programs */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">Programs Offered</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Find Your Path</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {programs.map((prog) => (
                            <Card key={prog.level} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <GraduationCap size={32} className="text-primary mb-2" />
                                    <CardTitle className="font-serif text-2xl">{prog.level}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold text-secondary mb-2">{prog.count}+</p>
                                    <p className="text-neutral-500">{prog.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <span className="text-secondary font-bold uppercase tracking-wider text-sm">How to Apply</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Admission Process</h2>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center space-y-4 relative">
                                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                                    <step.icon size={28} />
                                </div>
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-bold">{index + 1}</span>
                                <h3 className="font-bold text-lg text-neutral-900">{step.title}</h3>
                                <p className="text-sm text-neutral-500">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Dates */}
            <section className="py-20 bg-neutral-900 text-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="font-serif text-3xl font-bold text-center mb-12">Important Dates</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-neutral-800 rounded-lg p-6 flex justify-between items-center">
                            <div>
                                <p className="text-neutral-400 text-sm">Early Bird Deadline</p>
                                <p className="text-xl font-bold">March 15, 2026</p>
                            </div>
                            <CalendarDays size={28} className="text-secondary" />
                        </div>
                        <div className="bg-neutral-800 rounded-lg p-6 flex justify-between items-center">
                            <div>
                                <p className="text-neutral-400 text-sm">Regular Deadline</p>
                                <p className="text-xl font-bold">May 31, 2026</p>
                            </div>
                            <CalendarDays size={28} className="text-secondary" />
                        </div>
                        <div className="bg-neutral-800 rounded-lg p-6 flex justify-between items-center">
                            <div>
                                <p className="text-neutral-400 text-sm">Entrance Exam</p>
                                <p className="text-xl font-bold">June 15, 2026</p>
                            </div>
                            <CalendarDays size={28} className="text-secondary" />
                        </div>
                        <div className="bg-neutral-800 rounded-lg p-6 flex justify-between items-center">
                            <div>
                                <p className="text-neutral-400 text-sm">Classes Begin</p>
                                <p className="text-xl font-bold">August 1, 2026</p>
                            </div>
                            <CalendarDays size={28} className="text-secondary" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Apply CTA */}
            <section className="py-24 bg-primary">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-6 text-white">
                    <h2 className="font-serif text-4xl font-bold">Ready to Apply?</h2>
                    <p className="text-blue-100 text-lg">Take the first step towards your future. Start your application today.</p>
                    <Link href="#">
                        <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold h-14 px-10 text-lg">
                            Start Application
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
