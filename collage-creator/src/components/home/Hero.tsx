import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-neutral-900">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white space-y-8">
                <div className="space-y-4 animate-fade-in-up">
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-bold tracking-wider uppercase">
                        Admissions Open for 2026
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                        Shape the <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-200">Future.</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-neutral-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Join a community defined by academic excellence, innovative research, and a commitment to global impact.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 pt-4 animate-fade-in-up delay-100">
                    <Link href="/admissions">
                        <Button size="lg" className="h-14 px-8 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold rounded-sm w-full md:w-auto">
                            Apply for Admission
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white/10 rounded-sm w-full md:w-auto">
                            Virtual Campus Tour
                        </Button>
                    </Link>
                </div>

                {/* Bottom Stats/Info */}
                <div className="absolute bottom-12 left-0 right-0 hidden md:flex justify-center text-neutral-400 text-sm space-x-12">
                    <div className="flex items-center space-x-2">
                        <Calendar size={18} className="text-secondary" />
                        <span>Next Open Day: April 15, 2026</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <MapPin size={18} className="text-secondary" />
                        <span>Academic City, State</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
