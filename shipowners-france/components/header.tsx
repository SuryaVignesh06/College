
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// --- Navigation Configuration ---
const NAV_ITEMS = [
    {
        label: "Academics",
        href: "/academics",
        megaMenu: {
            title: "Academic Excellence",
            description: "Discover our broad range of academic programs designed to inspire and challenge.",
            image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2628&auto=format&fit=crop",
            columns: [
                {
                    title: "Schools & Departments",
                    items: ["School of Engineering", "School of Business", "School of Arts", "School of Sciences"]
                },
                {
                    title: "Programs",
                    items: ["Undergraduate", "Postgraduate", "PhD Programs", "Online Courses"]
                },
                {
                    title: "Resources",
                    items: ["Academic Calendar", "Library", "Course Catalog", "Faculty Directory"]
                }
            ]
        }
    },
    {
        label: "Admissions",
        href: "/admissions",
        megaMenu: {
            title: "Join Our Community",
            description: "We welcome applications for graduate B.Tech and Post graduate M.Tech admissions.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
            columns: [
                {
                    title: "Programs",
                    items: ["Courses Offered", "Admission Procedure", "Scholarships", "Fee Structure"]
                },
                {
                    title: "Information For",
                    items: ["Hostels", "Anti-Ragging", "College Timings", "Transport"]
                },
                {
                    title: "Unique Features",
                    items: ["Why choose us?", "Life @ Campus", "Placements", "Awards"]
                }
            ]
        }
    },
    {
        label: "Research",
        href: "/research",
        megaMenu: {
            title: "Innovation & Impact",
            description: "Pioneering research that solves real-world challenges and advances knowledge.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
            columns: [
                {
                    title: "Focus Areas",
                    items: ["Artificial Intelligence", "Sustainable Energy", "Biotechnology", "Robotics"]
                },
                {
                    title: "Centers & Labs",
                    items: ["Innovation Hub", "Advanced Materials Lab", "Data Science Center", "IoT Lab"]
                },
                {
                    title: "Opportunities",
                    items: ["Research Grants", "Student Projects", "Publications", "Patents"]
                }
            ]
        }
    },
    {
        label: "Campus Life",
        href: "/campus-life",
        megaMenu: {
            title: "Vibrant Lifestyle",
            description: "Experience a campus life filled with culture, spots, arts and community.",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
            columns: [
                {
                    title: "Student Life",
                    items: ["Clubs & Societies", "Student Council", "Events & Festivals", "Volunteering"]
                },
                {
                    title: "Facilities",
                    items: ["Sports Complex", "Cafeteria", "Health Center", "Auditorium"]
                },
                {
                    title: "Living",
                    items: ["Hostel & Dining", "Safety & Security", "Transportation", "Campus Map"]
                }
            ]
        }
    },
    {
        label: "News",
        href: "/newsroom",
        megaMenu: {
            title: "Latest Updates",
            description: "Stay informed with the latest news, announcements, and stories from CollegeGO.",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop",
            columns: [
                {
                    title: "Categories",
                    items: ["Academic News", "Research Highlights", "Campus Events", "Alumni Stories"]
                },
                {
                    title: "Press",
                    items: ["Press Releases", "Media Kit", "In the News", "Contact PR"]
                },
                {
                    title: "Connect",
                    items: ["Newsletter", "Social Media", "Blog", "Podcast"]
                }
            ]
        }
    }
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            // If not home, always true (scrolled style). If home, depends on scroll Y.
            if (!isHome) {
                setScrolled(true);
            } else {
                setScrolled(window.scrollY > 20);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHome]); // Re-run when route changes

    // --- Dynamic Styles ---

    // Header Container: 
    // Scrolled -> Full width, white background, shadow
    // Top -> Transparent, allow islands to float
    const headerClasses = cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans",
        scrolled
            ? "bg-white text-dark-blue shadow-md py-0"
            : "bg-transparent py-6"
    );

    // Island/Container Inner logic:
    // ALWAYS use container to prevent layout shifts.
    const navContainerClasses = cn(
        "container mx-auto px-4 lg:px-8 flex items-center justify-between transition-all duration-300",
        scrolled ? "h-20" : ""
    );

    // Left Island (Logo):
    // Scrolled -> Just a wrapper
    // Top -> White/Transparent Capsule
    const leftSectionClasses = cn(
        "flex items-center transition-all duration-300",
        scrolled
            ? "px-0 border-0 border-transparent bg-transparent" // Explicitly clear borders/bg
            : "bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 shadow-sm hover:bg-white/30"
    );

    // Right Island (Nav):
    // Scrolled -> Just a wrapper
    // Top -> White/Transparent Capsule
    const rightSectionClasses = cn(
        "hidden lg:flex items-center gap-8 transition-all duration-300",
        scrolled
            ? "px-0 border-0 border-transparent bg-transparent" // Explicitly clear borders/bg
            : "bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 shadow-sm"
    );

    const logoTextClasses = cn(
        "text-2xl lg:text-3xl font-display font-bold tracking-tight uppercase leading-none transition-colors",
        scrolled ? "text-dark-blue" : "text-white"
    );

    const navLinkClasses = cn(
        "text-xs font-bold tracking-widest uppercase transition-colors h-full flex items-center relative group py-2",
        scrolled ? "text-dark-blue hover:text-brand-red" : "text-white hover:text-brand-red"
    );

    return (
        <header className={headerClasses}>
            <div className={navContainerClasses}>

                {/* Left Section: Logo */}
                <Link href="/" className="group z-50 relative">
                    <div className={leftSectionClasses}>
                        <div className={logoTextClasses}>
                            CollegeGO<br />Institute
                        </div>
                    </div>
                </Link>

                {/* Right Section: Navigation & Actions */}
                <div className={rightSectionClasses}>
                    <nav className="flex items-center gap-8 h-full">
                        {NAV_ITEMS.map((item) => (
                            <div key={item.label} className="group h-full flex items-center static">
                                <Link
                                    href={item.href}
                                    className={cn(navLinkClasses, scrolled ? "py-6" : "py-2")}
                                >
                                    {item.label}
                                </Link>

                                {/* Mega Menu Dropdown */}
                                <div className={cn(
                                    "absolute left-0 w-full bg-white shadow-2xl border-t-4 border-brand-red opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 -z-10 group-hover:z-40 overflow-hidden",
                                    scrolled ? "top-[80px]" : "top-[100px] rounded-3xl w-[95%] left-[2.5%]"
                                )}>
                                    <div className="container mx-auto px-8 py-12">
                                        <div className="grid grid-cols-4 gap-12">
                                            {/* Intro Column */}
                                            <div className="space-y-4">
                                                <h3 className="font-display font-bold text-dark-blue text-xl">{item.megaMenu.title}</h3>
                                                <p className="text-sm text-gray-500 leading-relaxed">
                                                    {item.megaMenu.description}
                                                </p>
                                                <div className="relative h-48 w-full rounded-tr-[50px] rounded-bl-[50px] overflow-hidden shadow-md">
                                                    <Image
                                                        src={item.megaMenu.image}
                                                        alt={item.megaMenu.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Link Columns */}
                                            {item.megaMenu.columns.map((col, idx) => (
                                                <div key={idx} className={cn(col.title === "Unique Features" ? "border-l pl-8 border-gray-100" : "")}>
                                                    <h4 className={cn(
                                                        "font-bold text-dark-blue border-b border-gray-100 pb-3 mb-4 uppercase tracking-wider",
                                                        col.title === "Unique Features" ? "text-lg text-brand-red border-b-2 border-brand-red mb-6" : "text-xs"
                                                    )}>
                                                        {col.title}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {col.items.map(subItem => (
                                                            <li key={subItem}>
                                                                <Link
                                                                    href={`${item.href}/${subItem.toLowerCase().replace(' @ ', '-at-').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                                                                    className={cn(
                                                                        "flex items-center gap-2 group/item transition-all",
                                                                        col.title === "Unique Features"
                                                                            ? "text-lg text-gray-600 hover:text-brand-red hover:pl-2 font-medium py-1"
                                                                            : "text-sm text-gray-600 hover:text-brand-red"
                                                                    )}
                                                                >
                                                                    <ChevronRight className={cn(
                                                                        "transition-colors",
                                                                        col.title === "Unique Features" ? "h-5 w-5 text-gray-300 group-hover/item:text-brand-red" : "h-3 w-3 text-gray-300 group-hover/item:text-brand-red"
                                                                    )} />
                                                                    {subItem}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Footer Vision */}
                                        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                                            <p className="text-dark-blue/80 italic text-sm">
                                                "Our VISION is to ignite the minds of the students through academic excellence."
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className={cn(
                        "flex items-center gap-4 pl-8 border-l",
                        scrolled ? "border-gray-200" : "border-white/20"
                    )}>
                        <button className={cn("transition-colors", scrolled ? "text-dark-blue hover:text-brand-red" : "text-white hover:text-brand-red")}>
                            <Search className="h-5 w-5" />
                        </button>
                        <Link
                            href="/admissions/apply"
                            className={cn(
                                "px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest transition-all duration-300 hover:shadow-lg",
                                scrolled
                                    ? "bg-brand-red text-white hover:bg-dark-blue"
                                    : "bg-white text-dark-blue hover:bg-brand-red hover:text-white"
                            )}
                        >
                            <span className="hidden xl:inline">Admission </span>Portal
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className={cn("lg:hidden flex items-center px-4 py-2", scrolled ? "text-dark-blue" : "text-white")}>
                    <button
                        className="p-1"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 bg-dark-blue z-40 transition-transform duration-500 ease-in-out lg:hidden pt-36 px-8 flex flex-col gap-8",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <nav className="flex flex-col gap-6">
                    {NAV_ITEMS.map(item => (
                        <Link key={item.label} href={item.href} className="text-2xl font-display font-bold text-white border-b border-white/10 pb-4">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <Link href="/admissions/apply" className="bg-brand-red text-white text-center py-4 uppercase font-bold tracking-widest mt-auto mb-8 shadow-xl rounded-xl">
                    Admission Portal
                </Link>
            </div>
        </header>
    );
}
