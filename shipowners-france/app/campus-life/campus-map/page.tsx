"use client";

import { useState } from "react";
import PageLayout from "@/components/page-layout";
import Image from "next/image";
import { Maximize, MapPin, Navigation, ChevronRight, ChevronLeft, Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Demo Data for Map Pins
const MAP_LOCATIONS = [
    {
        id: 1,
        name: "Main Admin Block",
        top: "40%",
        left: "50%",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop",
        description: "The heart of the campus, housing the administrative offices and the grand auditorium."
    },
    {
        id: 2,
        name: "Central Library",
        top: "30%",
        left: "70%",
        image: "https://images.unsplash.com/photo-1507842217121-9e93ca2dad93?q=80&w=2670&auto=format&fit=crop",
        description: "A 4-story knowledge hub with over 50,000 books and digital resources."
    },
    {
        id: 3,
        name: "Sports Complex",
        top: "60%",
        left: "25%",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
        description: "Olympic-sized swimming pool, indoor courts, and a fully equipped gym."
    },
    {
        id: 4,
        name: "Student Hostels",
        top: "75%",
        left: "65%",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop",
        description: "Modern residential blocks with 24/7 security and high-speed internet."
    },
    {
        id: 5,
        name: "Cafeteria",
        top: "55%",
        left: "45%",
        image: "https://images.unsplash.com/photo-1588611910609-8472a1d35509?q=80&w=2670&auto=format&fit=crop",
        description: "The favorite hangout spot serving delicious and healthy meals."
    }
];

// Demo Data for Virtual Tour
const TOUR_STOPS = [
    {
        title: "Welcome to CollegeGO",
        description: "Start your journey at our iconic Main Gate, a symbol of openness and opportunity.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Walk Down Green Avenue",
        description: "Experience the serenity of our tree-lined pathways that connect all major blocks.",
        image: "https://images.unsplash.com/photo-1623631484725-fef29525bbdd?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Innovation Hub",
        description: "Where ideas come to life. Step inside our state-of-the-art robotics and AI labs.",
        image: "https://images.unsplash.com/photo-1581093588401-fbb07366f555?q=80&w=2676&auto=format&fit=crop"
    },
    {
        title: "The Amphitheatre",
        description: "An open-air space for cultural events, student gatherings, and starry nights.",
        image: "https://images.unsplash.com/photo-1598555831610-c081691f7481?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Sunset at the Lake",
        description: "End your tour at the campus lake, the perfect spot for reflection and relaxation.",
        image: "https://images.unsplash.com/photo-1502086223501-68119136ca73?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function CampusMapPage() {
    const [activeTab, setActiveTab] = useState<"map" | "tour">("map");
    const [selectedLocation, setSelectedLocation] = useState<typeof MAP_LOCATIONS[0] | null>(null);
    const [tourIndex, setTourIndex] = useState(0);

    const nextStop = () => {
        setTourIndex((prev) => (prev + 1) % TOUR_STOPS.length);
    };

    const prevStop = () => {
        setTourIndex((prev) => (prev - 1 + TOUR_STOPS.length) % TOUR_STOPS.length);
    };

    return (
        <PageLayout
            title="Campus Map & Tour"
            subtitle="Navigate our sprawling 100-acre green campus or take a virtual walk."
            backgroundImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop"
        >
            <div className="container mx-auto px-4 py-8">
                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full flex">
                        <button
                            onClick={() => setActiveTab("map")}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === "map" ? "bg-dark-blue text-white shadow-lg" : "text-gray-500 hover:text-dark-blue"}`}
                        >
                            Interactive Map
                        </button>
                        <button
                            onClick={() => setActiveTab("tour")}
                            className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${activeTab === "tour" ? "bg-brand-red text-white shadow-lg" : "text-gray-500 hover:text-brand-red"}`}
                        >
                            Virtual Tour
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[600px] relative">

                    {/* MAP VIEW */}
                    {activeTab === "map" && (
                        <div className="relative w-full h-full min-h-[600px] bg-gray-50 group">
                            {/* Map Image (Using a stylized map placeholder) */}
                            <Image
                                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=2669&auto=format&fit=crop"
                                alt="Campus Map"
                                fill
                                className="object-cover opacity-80"
                            />

                            {/* Overlay Grid/Texture for 'Tech' feel */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                            {/* Pins */}
                            {MAP_LOCATIONS.map((loc) => (
                                <button
                                    key={loc.id}
                                    style={{ top: loc.top, left: loc.left }}
                                    onClick={() => setSelectedLocation(loc)}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group/pin z-10"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg border-4 border-white animate-bounce group-hover/pin:animate-none transition-transform group-hover/pin:scale-110">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-dark-blue text-white text-xs font-bold px-3 py-1 rounded shadow-md opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap z-20">
                                        {loc.name}
                                    </span>
                                </button>
                            ))}

                            {/* Sidebar / Modal for Selected Location */}
                            <AnimatePresence>
                                {selectedLocation && (
                                    <motion.div
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "100%" }}
                                        className="absolute right-0 top-0 bottom-0 w-full md:w-96 bg-white shadow-2xl z-20 border-l border-gray-100 p-8 flex flex-col overflow-y-auto"
                                    >
                                        <button
                                            onClick={() => setSelectedLocation(null)}
                                            className="self-end p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-brand-red transition-colors mb-6"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>

                                        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-md">
                                            <Image src={selectedLocation.image} alt={selectedLocation.name} fill className="object-cover" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-dark-blue mb-2">{selectedLocation.name}</h3>
                                        <div className="w-12 h-1 bg-brand-red mb-6"></div>
                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {selectedLocation.description}
                                        </p>

                                        <button className="mt-auto w-full py-4 bg-dark-blue text-white font-bold uppercase tracking-widest rounded-xl hover:bg-brand-red transition-colors flex items-center justify-center gap-2">
                                            <Navigation className="w-4 h-4" /> Navigate Here
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Help Text */}
                            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-gray-600 flex items-center gap-2 shadow-sm">
                                <Info className="w-4 h-4 text-brand-red" /> Click on the pins to explore
                            </div>
                        </div>
                    )}

                    {/* VIRTUAL TOUR VIEW */}
                    {activeTab === "tour" && (
                        <div className="relative w-full h-[600px] flex items-center bg-black">
                            {/* Background Image */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={tourIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="absolute inset-0 z-0"
                                >
                                    <Image
                                        src={TOUR_STOPS[tourIndex].image}
                                        alt={TOUR_STOPS[tourIndex].title}
                                        fill
                                        className="object-cover opacity-60"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-blue via-transparent to-transparent opacity-90"></div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Content */}
                            <div className="relative z-10 container mx-auto px-4 lg:px-24 flex flex-col items-center text-center">
                                <motion.span
                                    key={`step-${tourIndex}`}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="bg-brand-red/90 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                                >
                                    Stop {tourIndex + 1} of {TOUR_STOPS.length}
                                </motion.span>

                                <motion.h2
                                    key={`title-${tourIndex}`}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
                                >
                                    {TOUR_STOPS[tourIndex].title}
                                </motion.h2>

                                <motion.p
                                    key={`desc-${tourIndex}`}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-lg md:text-xl text-gray-200 max-w-2xl mb-12"
                                >
                                    {TOUR_STOPS[tourIndex].description}
                                </motion.p>

                                <div className="flex gap-4">
                                    <button
                                        onClick={prevStop}
                                        className="w-14 h-14 rounded-full border-2 border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-dark-blue transition-all"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextStop}
                                        className="w-14 h-14 rounded-full bg-white text-dark-blue flex items-center justify-center hover:bg-brand-red hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            {/* Progress Dots */}
                            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
                                {TOUR_STOPS.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-all ${i === tourIndex ? "w-8 bg-brand-red" : "bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PageLayout>
    );
}
