'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, GraduationCap, Menu, Search } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
            {/* Top Utility Bar - Institutional Blue */}
            <div className="bg-primary text-primary-foreground text-xs py-2 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:underline opacity-90 hover:opacity-100">Alumni</Link>
                        <Link href="#" className="hover:underline opacity-90 hover:opacity-100">Faculty</Link>
                        <Link href="#" className="hover:underline opacity-90 hover:opacity-100">Parents</Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:underline font-semibold flex items-center">
                            Student Portal
                        </Link>
                        <Link href="#" className="hover:underline font-semibold">Library</Link>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="h-10 w-10 bg-primary rounded-sm flex items-center justify-center text-white shadow-sm group-hover:bg-primary/90 transition-colors">
                        <GraduationCap size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-serif text-xl font-bold text-neutral-900 leading-none">
                            University <span className="text-secondary">College</span>
                        </span>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold mt-0.5">Est. 1993</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-neutral-100 to-neutral-50 p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Our Heritage
                                                    </div>
                                                    <p className="text-sm leading-tight text-neutral-600">
                                                        Tracing back over 30 years of academic excellence and holistic development.
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/about" title="History & Mission">
                                            The story behind our institution and where we are going.
                                        </ListItem>
                                        <ListItem href="/about" title="Leadership">
                                            Meet the Chancellor and Board of Directors.
                                        </ListItem>
                                        <ListItem href="/about" title="Campus Map">
                                            Explore our 15-acre green campus.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        <ListItem href="/academics" title="Undergraduate">
                                            Bachelor programs in Arts, Science, and Commerce.
                                        </ListItem>
                                        <ListItem href="/academics" title="Postgraduate">
                                            Master's degrees and advanced diplomas.
                                        </ListItem>
                                        <ListItem href="/departments" title="Departments">
                                            Explore our 12 specialized academic departments.
                                        </ListItem>
                                        <ListItem href="/research" title="Research">
                                            Innovation centers and published papers.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
                                        <ListItem href="/admissions" title="How to Apply">
                                            Step-by-step guide for prospective students.
                                        </ListItem>
                                        <ListItem href="/admissions" title="Scholarships">
                                            Financial aid and merit-based awards.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/news" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        News & Events
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/careers" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Careers
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="icon" className="text-neutral-600">
                        <Search size={20} />
                    </Button>
                    <div className="hidden md:flex space-x-2">
                        <Button variant="outline" className="border-primary text-primary hover:bg-neutral-50 font-semibold">
                            Visit
                        </Button>
                        <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold shadow-sm">
                            Apply Now
                        </Button>
                    </div>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu size={24} />
                    </Button>
                </div>
            </div>
        </nav>
    );
};

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-neutral-100 hover:text-accent-foreground focus:bg-neutral-100 focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-neutral-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

export default Navbar;
