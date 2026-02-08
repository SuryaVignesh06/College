"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { MessageModal } from "./message-modal";

export function NewsletterCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-white py-24 border-t border-gray-100">
            <MessageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-display font-light leading-tight text-dark-blue">
                            The maritime world is evolving every day, stay connected to keep up with the latest <span className="font-bold text-brand-red">challenges</span>.
                        </h2>
                    </div>
                    <div className="flex flex-col items-start justify-center">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="group flex items-center gap-4 text-xl font-bold uppercase tracking-wide text-dark-blue hover:text-brand-red transition-colors text-left"
                        >
                            Stay Connected With Us
                            <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-300">
                                <Mail className="h-5 w-5" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
