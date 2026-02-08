
"use client";

import { useState } from "react";
import Link from "next/link";
import PageLayout from "@/components/page-layout";
import { ArrowRight, Check, ChevronRight, User, Book, FileText, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AdmissionPortal() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    // Simple form submit handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 1000);
    };

    if (submitted) {
        return (
            <PageLayout
                title="Application Submitted"
                subtitle="Thank you for choosing CollegeGO."
            >
                <div className="max-w-2xl mx-auto text-center py-16">
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Check className="h-12 w-12 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-dark-blue mb-4">Application Received Successfully!</h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Your application reference number is <span className="font-mono font-bold text-dark-blue">GO-2026-X892</span>.
                        We have sent a confirmation email with further instructions regarding the entrance exam and counseling process.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => window.location.href = '/College/'} className="bg-dark-blue text-white px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-brand-red transition-colors inline-block">
                            Return Home
                        </button>
                        <button className="border border-gray-300 text-dark-blue px-8 py-3 rounded-full font-bold uppercase text-sm hover:bg-gray-50 transition-colors">
                            Download Application
                        </button>
                    </div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout
            title="Admission Portal"
            subtitle="Apply for B.Tech / M.Tech Programs - Academic Year 2026-27"
        >
            <div className="max-w-4xl mx-auto">
                {/* Progress Steps */}
                <div className="flex items-center justify-between mb-12 px-4 relative">
                    <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2" />
                    {[
                        { id: 1, label: "Personal Info", icon: User },
                        { id: 2, label: "Education", icon: Book },
                        { id: 3, label: "Entrance Exam", icon: FileText },
                        { id: 4, label: "Review", icon: Send },
                    ].map((s) => (
                        <div key={s.id} className="flex flex-col items-center gap-2 bg-white px-2">
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                                step >= s.id ? "bg-brand-red border-brand-red text-white" : "bg-white border-gray-300 text-gray-400"
                            )}>
                                <s.icon className="h-5 w-5" />
                            </div>
                            <span className={cn(
                                "text-xs font-bold uppercase tracking-wider",
                                step >= s.id ? "text-brand-red" : "text-gray-400"
                            )}>{s.label}</span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
                    {/* Step 1: Personal Info */}
                    {step === 1 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl font-bold text-dark-blue border-b pb-4 mb-6">Personal Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="First Name" placeholder="Enter your first name" />
                                <InputGroup label="Last Name" placeholder="Enter your last name" />
                                <InputGroup label="Date of Birth" type="date" />
                                <InputGroup label="Gender" type="select" options={["Select Gender", "Male", "Female", "Other"]} />
                                <InputGroup label="Email Address" type="email" placeholder="student@example.com" />
                                <InputGroup label="Phone Number" type="tel" placeholder="+91 98765 43210" />
                                <InputGroup label="Father's Name" placeholder="Parent/Guardian Name" />
                                <InputGroup label="Mother's Name" placeholder="Parent/Guardian Name" />
                            </div>
                            <InputGroup label="Residential Address" type="textarea" placeholder="Full address with pincode" />
                        </div>
                    )}

                    {/* Step 2: Education */}
                    {step === 2 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl font-bold text-dark-blue border-b pb-4 mb-6">Educational Background</h3>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-red mb-4 uppercase text-sm">Class X Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <InputGroup label="Board" placeholder="e.g. CBSE, SSC" />
                                    <InputGroup label="School Name" placeholder="School Name" />
                                    <InputGroup label="CGPA / %" placeholder="10.0" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h4 className="font-bold text-brand-red mb-4 uppercase text-sm">Class XII / Intermediate Details</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <InputGroup label="Board" placeholder="e.g. CBSE, BIEAP" />
                                    <InputGroup label="College Name" placeholder="College Name" />
                                    <InputGroup label="Total Marks / %" placeholder="980" />
                                </div>
                                <div className="mt-4">
                                    <InputGroup label="Group Subjects" placeholder="e.g. MPC (Maths, Physics, Chemistry)" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Entrance Exam */}
                    {step === 3 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl font-bold text-dark-blue border-b pb-4 mb-6">Entrance Exam & Course Preference</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="Entrance Exam" type="select" options={["EAMCET", "JEE Mains", "Management Quota"]} />
                                <InputGroup label="Hall Ticket Number" placeholder="Ex: 2605XXX" />
                                <InputGroup label="Rank Obtained" placeholder="Ex: 4500" />
                            </div>

                            <div className="mt-8">
                                <label className="block text-sm font-bold text-dark-blue uppercase tracking-wider mb-4">Course Preference (Priority Order)</label>
                                <div className="space-y-3">
                                    <PreferenceSelect index={1} />
                                    <PreferenceSelect index={2} />
                                    <PreferenceSelect index={3} />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Review */}
                    {step === 4 && (
                        <div className="space-y-6 animate-fade-in">
                            <h3 className="text-2xl font-bold text-dark-blue border-b pb-4 mb-6">Review Application</h3>
                            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl text-sm text-blue-800">
                                <p className="flex gap-2">
                                    <span className="font-bold">Note:</span>
                                    Please ensure all details are correct. Once submitted, you cannot edit your application online.
                                </p>
                            </div>

                            <div className="space-y-4 text-gray-700">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="font-bold">Applicant Name:</span>
                                    <span>Surya Teja</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="font-bold">Email:</span>
                                    <span>student@example.com</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="font-bold">Phone:</span>
                                    <span>+91 98765 43210</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="font-bold">Entrance Exam:</span>
                                    <span>EAMCET - Rank 4500</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="font-bold">Preference 1:</span>
                                    <span>Computer Science & Engineering</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mt-6">
                                <input type="checkbox" id="declare" className="mt-1" />
                                <label htmlFor="declare" className="text-sm text-gray-600">
                                    I hereby declare that all the information provided by me in this application form is true and correct to the best of my knowledge.
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
                        <button
                            type="button"
                            onClick={() => setStep(prev => Math.max(1, prev - 1))}
                            disabled={step === 1}
                            className={cn(
                                "px-6 py-3 rounded-full font-bold uppercase text-xs tracking-wider border",
                                step === 1 ? "opacity-50 cursor-not-allowed border-gray-200 text-gray-400" : "border-gray-300 text-dark-blue hover:bg-gray-50"
                            )}
                        >
                            Back
                        </button>

                        {step < 4 ? (
                            <button
                                type="button"
                                onClick={() => setStep(prev => Math.min(4, prev + 1))}
                                className="bg-dark-blue text-white px-8 py-3 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-brand-red transition-all flex items-center gap-2"
                            >
                                Next Step
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="bg-brand-red text-white px-10 py-3 rounded-full font-bold uppercase text-xs tracking-wider hover:bg-dark-blue transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Submit Application
                                <Send className="h-4 w-4" />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </PageLayout>
    );
}

function InputGroup({ label, placeholder, type = "text", options = [] }: { label: string, placeholder?: string, type?: string, options?: string[] }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-dark-blue uppercase tracking-wider">{label}</label>
            {type === "select" ? (
                <div className="relative">
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red appearance-none text-gray-700">
                        {options.map(opt => <option key={opt}>{opt}</option>)}
                    </select>
                    <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rotate-90" />
                </div>
            ) : type === "textarea" ? (
                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red h-24 resize-none" placeholder={placeholder}></textarea>
            ) : (
                <input
                    type={type}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
}

function PreferenceSelect({ index }: { index: number }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-dark-blue text-white flex items-center justify-center font-bold text-xs shrink-0">
                {index}
            </div>
            <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red">
                <option>Computer Science & Engineering (CSE)</option>
                <option>Artificial Intelligence & Data Science</option>
                <option>Electronics & Communication Engineering</option>
                <option>Information Technology</option>
                <option>Mechanical Engineering</option>
            </select>
        </div>
    );
}
