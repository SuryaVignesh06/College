import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand Column */}
                <div className="space-y-4">
                    <h3 className="font-serif text-2xl font-bold text-white">University College</h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
                        Empowering the next generation of leaders through academic excellence, innovation, and holistic development since 1993.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        <SocialIcon icon={<Facebook size={18} />} />
                        <SocialIcon icon={<Twitter size={18} />} />
                        <SocialIcon icon={<Instagram size={18} />} />
                        <SocialIcon icon={<Linkedin size={18} />} />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
                        <li><Link href="/academics" className="hover:text-white transition-colors">Academics</Link></li>
                        <li><Link href="/research" className="hover:text-white transition-colors">Research</Link></li>
                        <li><Link href="/campus-life" className="hover:text-white transition-colors">Campus Life</Link></li>
                        <li><Link href="/careers" className="hover:text-white transition-colors">Careers @ Uni</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Resources</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="#" className="hover:text-white transition-colors">Student Portal</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Faculty Portal</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Library</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Alumni Network</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Events Calendar</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">News & Media</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start space-x-3">
                            <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
                            <span>123 University Avenue,<br />Academic City, ST 12345</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-secondary shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-secondary shrink-0" />
                            <span>admissions@university.edu</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                            Request Information
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                <p>&copy; {new Date().getFullYear()} University College. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Use</Link>
                    <Link href="#" className="hover:text-white">Accessibility</Link>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-all">
        {icon}
    </a>
);

export default Footer;
