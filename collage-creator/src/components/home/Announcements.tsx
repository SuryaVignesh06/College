import { Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Announcements = () => {
    return (
        <div className="bg-neutral-100 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
                <div className="flex items-center space-x-4 overflow-hidden">
                    <div className="flex items-center text-primary font-bold uppercase text-xs tracking-wider shrink-0">
                        <Megaphone size={14} className="mr-2" />
                        Announcements
                    </div>
                    <div className="h-4 w-[1px] bg-neutral-300 shrink-0"></div>
                    <p className="text-sm text-neutral-700 truncate">
                        <span className="font-semibold text-neutral-900 mr-2">New:</span>
                        Applications for Fall 2026 are now open! Early bird deadline is March 15th.
                    </p>
                </div>
                <Link href="/news" className="hidden md:flex items-center text-xs font-bold text-primary hover:underline shrink-0">
                    View All Notices <ArrowRight size={12} className="ml-1" />
                </Link>
            </div>
        </div>
    );
};

export default Announcements;
