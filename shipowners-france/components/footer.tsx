
"use client";

import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 text-dark-blue border-t border-gray-100">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
                    <FooterColumn title="About">
                        <FooterLink href="#">Who are we?</FooterLink>
                        <FooterLink href="#">Governance</FooterLink>
                        <FooterLink href="#">The team</FooterLink>
                        <FooterLink href="#">History</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Commitment">
                        <FooterLink href="#">Position notes</FooterLink>
                        <FooterLink href="#">Our areas of intervention</FooterLink>
                        <FooterLink href="#">Newsroom</FooterLink>
                        <FooterLink href="#">Agenda</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Membership">
                        <FooterLink href="#">Our members</FooterLink>
                        <FooterLink href="#">Associate members</FooterLink>
                        <FooterLink href="#">Join as Member</FooterLink>
                        <FooterLink href="#">Partner with us</FooterLink>
                    </FooterColumn>

                    <FooterColumn title="Connect">
                        <div className="flex gap-4 mt-2">
                            <SocialLink href="#" icon={Linkedin} />
                            <SocialLink href="#" icon={Twitter} />
                            <SocialLink href="#" icon={Youtube} />
                        </div>
                    </FooterColumn>
                </div>

                <div className="h-px w-full bg-gray-100 mb-12" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-sm text-gray-500">
                    <div className="space-y-6">
                        <h3 className="text-brand-red uppercase font-bold text-xs tracking-widest">Contact Us</h3>
                        <div className="flex flex-col md:flex-row gap-12">
                            <div className="space-y-2">
                                <a href="tel:+330153895252" className="block hover:text-dark-blue transition-colors font-mono">+33 (0)1 53 89 52 52</a>
                                <a href="mailto:contact@armateursdefrance.org" className="block hover:text-dark-blue transition-colors font-mono">contact@armateursdefrance.org</a>
                            </div>
                            <div className="font-mono">
                                <p>13 rue du Docteur Lancereaux</p>
                                <p>75008 Paris, France</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 font-medium">
                        <Link href="#" className="hover:text-dark-blue transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-dark-blue transition-colors">Legal Notice</Link>
                        <Link href="#" className="hover:text-dark-blue transition-colors">Cookies</Link>
                        <span className="opacity-50">© 2026 French Shipowners</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-brand-red uppercase font-bold text-xs tracking-[0.2em]">
                {title}
            </h3>
            <div className="flex flex-col gap-3">
                {children}
            </div>
        </div>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-dark-blue hover:text-brand-red hover:translate-x-1 transition-all duration-300 font-medium">
            {children}
        </Link>
    );
}

function SocialLink({ href, icon: Icon }: { href: string; icon: any }) {
    return (
        <Link
            href={href}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-300"
        >
            <Icon className="h-5 w-5" />
        </Link>
    )
}
