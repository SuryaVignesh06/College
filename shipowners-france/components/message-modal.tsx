
"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MessageModal({ isOpen, onClose }: MessageModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Reset state when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            // Slight delay to allow transition to finish before resetting
            const timer = setTimeout(() => {
                setIsSuccess(false);
                setIsSubmitting(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);
        // Don't auto-close, let user see success message
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-dark-blue/60 backdrop-blur-sm transition-opacity duration-300"
                aria-hidden="true"
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 scale-100"
            >
                {/* Header */}
                <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-xl font-display font-bold text-dark-blue">
                        {isSuccess ? "Message Sent!" : "Get in Touch"}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-dark-blue transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-8">
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-dark-blue">Thank You!</h4>
                            <p className="text-gray-500 max-w-xs">
                                We've received your message and will get back to you shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-6 px-8 py-3 bg-dark-blue text-white font-bold rounded-full hover:bg-brand-red transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-dark-blue uppercase tracking-wider">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-dark-blue"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-dark-blue uppercase tracking-wider">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-dark-blue"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-dark-blue uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all text-dark-blue resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-brand-red text-white font-bold rounded-xl hover:bg-dark-blue transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
