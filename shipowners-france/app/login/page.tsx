
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="w-full max-w-md bg-white p-8 lg:p-12 rounded-2xl shadow-xl relative z-10">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block mb-6">
                        <span className="text-dark-blue font-display font-bold text-2xl uppercase tracking-tighter">
                            Shipowners<br />College
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold text-dark-blue">Student Portal</h1>
                    <p className="text-gray-500 mt-2">Sign in to access your dashboard</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-dark-blue uppercase tracking-wider mb-2">Student ID / Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red/50 focus:ring-4 focus:ring-brand-red/10 transition-all"
                            placeholder="student@college.edu"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="block text-sm font-bold text-dark-blue uppercase tracking-wider">Password</label>
                            <a href="#" className="text-sm text-brand-red font-bold hover:underline">Forgot?</a>
                        </div>
                        <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-red/50 focus:ring-4 focus:ring-brand-red/10 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button className="w-full bg-dark-blue text-white font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-brand-red transition-colors shadow-lg flex items-center justify-center gap-2 group">
                        Sign In
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                <div className="text-center mt-8 pt-8 border-t border-gray-100">
                    <p className="text-gray-500">
                        Faculty or Staff? <a href="#" className="text-dark-blue font-bold hover:underline">Login here</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
