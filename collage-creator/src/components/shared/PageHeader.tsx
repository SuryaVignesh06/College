import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    description: string;
    breadcrumbs: { label: string; href: string }[];
}

const PageHeader = ({ title, description, breadcrumbs }: PageHeaderProps) => {
    return (
        <div className="bg-neutral-100 border-b border-neutral-200 py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-6">
                <nav className="flex items-center text-sm text-neutral-500 mb-4 space-x-2">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <ChevronRight size={14} />
                            <Link href={crumb.href} className="hover:text-primary transition-colors">
                                {crumb.label}
                            </Link>
                        </div>
                    ))}
                </nav>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">{title}</h1>
                <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default PageHeader;
