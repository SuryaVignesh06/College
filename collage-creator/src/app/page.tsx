import Hero from '@/components/home/Hero';
import Announcements from '@/components/home/Announcements';
import QuickLinks from '@/components/home/QuickLinks';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CalendarDays, ThumbsUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Announcements />
      <Hero />
      <QuickLinks />

      {/* About Preview */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
              alt="University Campus"
              className="rounded-lg shadow-xl relative z-10 w-full object-cover h-[400px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900">
              A Legacy of <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              For over three decades, University College has been at the forefront of education, fostering a culture of innovation, critical thinking, and social responsibility. Our campus is a vibrant ecosystem where bright minds converge to shape the future.
            </p>
            <div className="grid grid-cols-2 gap-6 py-4">
              <div className="space-y-1">
                <h4 className="text-3xl font-bold text-secondary">50+</h4>
                <p className="text-sm text-neutral-500">Undergraduate Programs</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl font-bold text-secondary">98%</h4>
                <p className="text-sm text-neutral-500">Graduate Employability</p>
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

      {/* News & Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-secondary font-bold uppercase tracking-wider text-sm">Happening Now</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mt-2">News & Events</h2>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="text-neutral-500 hover:text-primary">View All <ArrowRight size={16} className="ml-2" /></Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-center shadow-sm">
                  <span className="block text-xs font-bold text-neutral-500 uppercase">MAR</span>
                  <span className="block text-xl font-bold text-primary">15</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary transition-colors mb-2">Annual Science Exhibition 2026</h3>
              <p className="text-sm text-neutral-500 line-clamp-2">Join us for a showcase of student innovation and research projects across all science departments.</p>
            </div>

            {/* Event Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-center shadow-sm">
                  <span className="block text-xs font-bold text-neutral-500 uppercase">APR</span>
                  <span className="block text-xl font-bold text-primary">02</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary transition-colors mb-2">International Conference on AI</h3>
              <p className="text-sm text-neutral-500 line-clamp-2">Leading experts discuss the future of Artificial Intelligence in education and industry.</p>
            </div>

            {/* Event Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                <img src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop" alt="Event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-center shadow-sm">
                  <span className="block text-xs font-bold text-neutral-500 uppercase">MAY</span>
                  <span className="block text-xl font-bold text-primary">20</span>
                </div>
              </div>
              <h3 className="font-bold text-lg text-neutral-900 group-hover:text-primary transition-colors mb-2">Graduation Ceremony 2026</h3>
              <p className="text-sm text-neutral-500 line-clamp-2">Celebrating the achievements of our graduating class with guest speaker Dr. Jane Doe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Take the first step towards a bright future. Explore our programs, meet our faculty, and discover why University College is the right place for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/admissions">
              <Button size="lg" className="h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold w-full sm:w-auto">
                Apply Now
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
