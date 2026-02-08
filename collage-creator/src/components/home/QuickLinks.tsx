import { BookOpen, GraduationCap, Users, Monitor, Library, Building } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const links = [
    { icon: GraduationCap, label: 'Admissions', href: '/admissions', color: 'bg-blue-100 text-blue-600' },
    { icon: BookOpen, label: 'Programs', href: '/academics', color: 'bg-amber-100 text-amber-600' },
    { icon: Building, label: 'Departments', href: '/departments', color: 'bg-emerald-100 text-emerald-600' },
    { icon: Users, label: 'Student Portal', href: '#', color: 'bg-indigo-100 text-indigo-600' },
    { icon: Library, label: 'Library', href: '#', color: 'bg-rose-100 text-rose-600' },
    { icon: Monitor, label: 'E-Learning', href: '#', color: 'bg-purple-100 text-purple-600' },
];

const QuickLinks = () => {
    return (
        <section className="-mt-16 relative z-20 max-w-7xl mx-auto px-6 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {links.map((item, index) => (
                    <Link key={index} href={item.href}>
                        <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none shadow-md">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color}`}>
                                    <item.icon size={24} />
                                </div>
                                <span className="font-semibold text-neutral-800 text-sm">{item.label}</span>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default QuickLinks;
