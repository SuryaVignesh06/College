"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function FeeStructurePage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="bg-dark-blue py-20 text-center text-white relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-red"></div>
                <h1 className="text-4xl md:text-6xl font-display font-medium mb-6 uppercase tracking-tight">Fee Structure</h1>
                <p className="text-xl font-light opacity-80 max-w-2xl mx-auto">Transparent and affordable education for the academic year 2025-26.</p>
            </section>

            <section className="py-24 container mx-auto px-4 max-w-5xl">
                {/* Tuition Fee Table */}
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold text-dark-blue mb-8 border-l-4 border-brand-red pl-6 uppercase tracking-widest">Tuition & Academic Fees (Per Annum)</h2>
                    <div className="overflow-x-auto border border-gray-200 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-dark-blue text-white text-xs uppercase font-bold tracking-wider">
                                    <th className="p-5 border-r border-gray-700">Program</th>
                                    <th className="p-5 border-r border-gray-700">Tuition Fee</th>
                                    <th className="p-5 border-r border-gray-700">Special Fee</th>
                                    <th className="p-5">Total (INR)</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 text-sm">
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-5 font-bold text-dark-blue border-r border-gray-100">B.Tech (CSE, ECE, IT, AI&DS)</td>
                                    <td className="p-5 border-r border-gray-100">₹ 95,000</td>
                                    <td className="p-5 border-r border-gray-100">₹ 5,000</td>
                                    <td className="p-5 font-bold text-brand-red">₹ 1,00,000</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-5 font-bold text-dark-blue border-r border-gray-100">B.Tech (Mech, Civil, EEE)</td>
                                    <td className="p-5 border-r border-gray-100">₹ 75,000</td>
                                    <td className="p-5 border-r border-gray-100">₹ 5,000</td>
                                    <td className="p-5 font-bold text-brand-red">₹ 80,000</td>
                                </tr>
                                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-5 font-bold text-dark-blue border-r border-gray-100">M.Tech</td>
                                    <td className="p-5 border-r border-gray-100">₹ 55,000</td>
                                    <td className="p-5 border-r border-gray-100">₹ 5,000</td>
                                    <td className="p-5 font-bold text-brand-red">₹ 60,000</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-5 font-bold text-dark-blue border-r border-gray-100">MBA</td>
                                    <td className="p-5 border-r border-gray-100">₹ 45,000</td>
                                    <td className="p-5 border-r border-gray-100">₹ 5,000</td>
                                    <td className="p-5 font-bold text-brand-red">₹ 50,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </motion.div>

                {/* Additional Fees */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100"></div>
                        <h3 className="text-xl font-bold text-dark-blue mb-6 uppercase tracking-wide">Hostel Fee (Optional)</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex justify-between border-dashed border-b border-gray-200 pb-2"><span>Accommodation</span> <span className="font-bold text-dark-blue">₹ 40,000</span></li>
                            <li className="flex justify-between border-dashed border-b border-gray-200 pb-2"><span>Mess Charges</span> <span className="font-bold text-dark-blue">₹ 45,000</span></li>
                            <li className="flex justify-between pt-2 text-brand-red font-bold text-base"><span>Total Per Year</span> <span>₹ 85,000</span></li>
                        </ul>
                    </div>
                    <div className="bg-white border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100"></div>
                        <h3 className="text-xl font-bold text-dark-blue mb-6 uppercase tracking-wide">Transport Fee (Optional)</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex justify-between border-dashed border-b border-gray-200 pb-2"><span>Zone 1 (0-10 km)</span> <span className="font-bold text-dark-blue">₹ 15,000</span></li>
                            <li className="flex justify-between border-dashed border-b border-gray-200 pb-2"><span>Zone 2 (10-25 km)</span> <span className="font-bold text-dark-blue">₹ 22,000</span></li>
                            <li className="flex justify-between pt-2 text-brand-red font-bold text-base"><span>Zone 3 (25+ km)</span> <span>₹ 28,000</span></li>
                        </ul>
                    </div>
                </motion.div>

                <div className="text-center">
                    <button className="flex items-center gap-3 mx-auto bg-dark-blue text-white hover:bg-brand-red px-10 py-4 font-bold uppercase tracking-widest transition-all text-sm shadow-xl">
                        <Download className="w-5 h-5" /> Download Fee Structure PDF
                    </button>
                </div>
            </section>
        </div>
    );
}
