"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Maximize, MapPin, Navigation, ChevronRight, ChevronLeft, Info, X, Scan, Compass, LocateFixed, ArrowUp, Footprints } from "lucide-react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// VIT-AP Campus Data (Prototype)
const MAP_LOCATIONS = [
    {
        id: 1,
        name: "Central Block (Admin)",
        top: "45%",
        left: "50%",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop", // Curvy/Modern building lookalike
        description: "The iconic administrative heart of VIT-AP, housing the Chancellor's office and central administration."
    },
    {
        id: 2,
        name: "Academic Block 1 (AB-1)",
        top: "35%",
        left: "65%",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop", // Large academic building
        description: "The first academic block, home to the School of Computer Science and Engineering (SCOPE)."
    },
    {
        id: 3,
        name: "Academic Block 2 (AB-2)",
        top: "25%",
        left: "40%",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop", // Modern glass building
        description: "Houses the School of Advanced Sciences and the mechanical engineering labs."
    },
    {
        id: 4,
        name: "Student Hostels (MH/LH)",
        top: "70%",
        left: "70%",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop", // High rise facade
        description: "Modern high-rise hostels (MH1, MH2, LH1) with 24/7 security, gyms, and mess facilities."
    },
    {
        id: 5,
        name: "Rock Plaza",
        top: "55%",
        left: "45%",
        image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=2574&auto=format&fit=crop", // Open plaza
        description: "The central gathering spot for students, open-air events, and cultural fests."
    }
];

// Virtual Tour Stops - VIT AP Theme
const TOUR_STOPS = [
    {
        id: 1,
        title: "Central Block Plaza",
        street: "Innovators Way",
        description: "Standing before the iconic Central Block, the administrative hub of VIT-AP.",
        image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop",
        arMarkers: [
            { id: 101, label: "Admissions Office", distance: "20m", x: "30%", y: "45%", type: "building" },
            { id: 102, label: "Auditorium", distance: "80m", x: "75%", y: "55%", type: "hall" }
        ],
        coordinates: { x: 50, y: 80 }
    },
    {
        id: 2,
        title: "Academic Block 1 (AB-1)",
        street: "Knowledge Avenue",
        description: "The main academic hub featuring state-of-the-art labs and smart classrooms.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2686&auto=format&fit=crop",
        arMarkers: [
            { id: 201, label: "SCOPE Dept", distance: "10m", x: "25%", y: "40%", type: "dept" },
            { id: 202, label: "Library", distance: "150m", x: "80%", y: "50%", type: "facility" }
        ],
        coordinates: { x: 65, y: 60 }
    },
    {
        id: 3,
        title: "Rock Plaza",
        street: "Student Activity Center Rd",
        description: "A vibrant open space for student interactions and cultural performances.",
        image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?q=80&w=2574&auto=format&fit=crop",
        arMarkers: [
            { id: 301, label: "Food Court", distance: "40m", x: "15%", y: "60%", type: "food" },
            { id: 302, label: "Amphitheatre", distance: "20m", x: "60%", y: "55%", type: "spot" }
        ],
        coordinates: { x: 45, y: 50 }
    },
    {
        id: 4,
        title: "Hostel Zone (MH-1)",
        street: "Residential Road",
        description: "Modern living spaces designed for comfort and community living.",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2669&auto=format&fit=crop",
        arMarkers: [
            { id: 401, label: "Mens Hostel 1", distance: "10m", x: "50%", y: "40%", type: "building" },
            { id: 402, label: "Night Canteen", distance: "60m", x: "20%", y: "70%", type: "food" }
        ],
        coordinates: { x: 70, y: 30 }
    },
    {
        id: 5,
        title: "Sports Complex",
        street: "Champions Drive",
        description: "World-class facilities for indoor and outdoor sports.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
        arMarkers: [
            { id: 501, label: "Basketball Court", distance: "50m", x: "30%", y: "60%", type: "activity" },
            { id: 502, label: "Gymnasium", distance: "10m", x: "70%", y: "50%", type: "facility" }
        ],
        coordinates: { x: 20, y: 40 }
    }
];

export function CampusExplorer() {
    const [activeTab, setActiveTab] = useState<"map" | "tour">("map");
    const [selectedLocation, setSelectedLocation] = useState<typeof MAP_LOCATIONS[0] | null>(null);
    const [tourIndex, setTourIndex] = useState(0);
    const [direction, setDirection] = useState(0); // 0-360 degrees
    const [is3DMode, setIs3DMode] = useState(false); // New 3D toggle
    const [mapRotation, setMapRotation] = useState(0);
    const [mapTilt, setMapTilt] = useState(0);

    // Animation controls
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-pan & Compass effect
    useEffect(() => {
        if (activeTab === "tour") {
            const interval = setInterval(() => {
                setDirection(prev => (prev + 0.5) % 360);
            }, 50);

            // Continuous gentle movement
            controls.start({
                x: ["-5%", "5%"],
                transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 20,
                    ease: "linear"
                }
            });

            return () => clearInterval(interval);
        }
    }, [activeTab, tourIndex, controls]);

    // Reset 3D view when switching tabs
    useEffect(() => {
        if (activeTab === "map") {
            setIs3DMode(false);
            setMapRotation(0);
            setMapTilt(0);
        }
    }, [activeTab]);

    const toggle3DMode = () => {
        setIs3DMode(prev => !prev);
        if (!is3DMode) {
            setMapTilt(45); // Set default tilt
            setMapRotation(0);
        } else {
            setMapTilt(0);
            setMapRotation(0);
        }
    };

    const rotateMap = (angle: number) => {
        setMapRotation(prev => prev + angle);
    };

    const nextStop = () => {
        setTourIndex((prev) => (prev + 1) % TOUR_STOPS.length);
    };

    const prevStop = () => {
        setTourIndex((prev) => (prev - 1 + TOUR_STOPS.length) % TOUR_STOPS.length);
    };

    return (
        <div>
            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-gray-100 p-1 rounded-full flex shadow-inner">
                    <button
                        onClick={() => setActiveTab("map")}
                        className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeTab === "map" ? "bg-white text-dark-blue shadow-lg scale-105" : "text-gray-500 hover:text-dark-blue"}`}
                    >
                        <MapPin className="w-4 h-4" /> VIT-AP Map
                    </button>
                    <button
                        onClick={() => setActiveTab("tour")}
                        className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${activeTab === "tour" ? "bg-brand-red text-white shadow-lg scale-105" : "text-gray-500 hover:text-brand-red"}`}
                    >
                        <Scan className="w-4 h-4" /> AR Campus Tour
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 min-h-[700px] relative perspective-1000">

                {/* MAP VIEW */}
                {activeTab === "map" && (
                    <div className="relative w-full h-full min-h-[700px] bg-slate-900 overflow-hidden flex items-center justify-center">
                        {/* Realistic Satellite Map Image - Placeholder for VIT AP Aerial View */}

                        {/* 3D Transform Container */}
                        <motion.div
                            className="relative w-[150%] h-[150%] -ml-[25%] -mt-[25%]"
                            animate={{
                                rotateX: mapTilt,
                                rotateZ: mapRotation,
                                scale: is3DMode ? 1.2 : 1
                            }}
                            transition={{ type: "spring", stiffness: 60, damping: 20 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2669&auto=format&fit=crop"
                                alt="VIT-AP Campus Map"
                                fill
                                className="object-cover opacity-90 shadow-2xl"
                                style={{ transform: "translateZ(0)" }}
                            />

                            {/* Overlay Grid (fades out in 3D mode) */}
                            <div className={`absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none transition-opacity duration-500 ${is3DMode ? "opacity-30" : "opacity-50"}`}></div>


                            {/* Pins - Billboarded in 3D Mode */}
                            {MAP_LOCATIONS.map((loc) => (
                                <div
                                    key={loc.id}
                                    style={{ top: loc.top, left: loc.left }}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
                                >
                                    <motion.button
                                        onClick={() => setSelectedLocation(loc)}
                                        className="relative group/pin"
                                        style={{ transformStyle: "preserve-3d" }}
                                        // Counter-rotate to keep pins upright (billboarding)
                                        animate={{
                                            rotateX: -mapTilt,
                                            rotateZ: -mapRotation
                                        }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center shadow-lg border-[3px] border-white animate-bounce group-hover/pin:animate-none group-hover/pin:scale-125 transition-all duration-300">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        {/* 3D Stick (visible when tilted) */}
                                        {is3DMode && (
                                            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-1 h-8 bg-white/80 -z-10 origin-top"></div>
                                        )}

                                        {/* Pulsing Dot */}
                                        {!is3DMode && (
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-red rounded-full animate-ping opacity-75"></div>
                                        )}

                                        {/* Label (Billboarded) */}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity pointer-events-none">
                                            {loc.name}
                                        </div>
                                    </motion.button>
                                </div>
                            ))}
                        </motion.div>

                        {/* Map Controls UI (Fixed Overlay) */}
                        <div className="absolute top-6 right-6 flex flex-col gap-3 z-30">
                            <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100">
                                <Compass className="w-6 h-6 text-gray-700 mb-2 mx-auto" style={{ transform: `rotate(${-mapRotation}deg)`, transition: "transform 0.5s" }} />
                                <div className="w-8 h-1 bg-gray-200 rounded-full mx-auto"></div>
                            </div>

                            <button
                                onClick={toggle3DMode}
                                className={`p-3 rounded-xl shadow-lg transition-all font-bold text-xs flex flex-col items-center gap-1 ${is3DMode ? "bg-brand-red text-white" : "bg-white text-gray-700 hover:bg-gray-50"}`}
                            >
                                <div className="text-[10px] font-black uppercase">{is3DMode ? "2D" : "3D"}</div>
                                <Maximize className="w-5 h-5" />
                            </button>

                            {is3DMode && (
                                <div className="flex flex-col gap-2 mt-2 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg">
                                    <button onClick={() => rotateMap(45)} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronRight className="w-5 h-5" /></button>
                                    <button onClick={() => rotateMap(-45)} className="p-2 hover:bg-gray-100 rounded-lg"><ChevronLeft className="w-5 h-5" /></button>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Modal */}
                        <AnimatePresence>
                            {selectedLocation && (
                                <motion.div
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    className="absolute right-0 top-0 bottom-0 w-full md:w-96 bg-white shadow-2xl z-20 border-l border-gray-100 p-0 flex flex-col overflow-y-auto"
                                >
                                    <div className="relative h-48 w-full bg-gray-200">
                                        <Image src={selectedLocation.image} alt={selectedLocation.name} fill className="object-cover" />
                                        <button
                                            onClick={() => setSelectedLocation(null)}
                                            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur rounded-full text-white hover:bg-black/70 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-2xl font-bold text-dark-blue mb-2">{selectedLocation.name}</h3>
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded uppercase tracking-wide">Open Now</span>
                                            <span className="text-gray-400 text-sm">• VIT-AP Campus</span>
                                        </div>

                                        <p className="text-gray-600 leading-relaxed mb-8">
                                            {selectedLocation.description}
                                        </p>

                                        <button className="w-full py-3 bg-dark-blue text-white font-bold rounded-xl hover:bg-brand-red transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                            <Navigation className="w-4 h-4" /> Navigate Here
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}

                {/* AR / VR VIEW */}
                {activeTab === "tour" && (
                    <div ref={containerRef} className="relative w-full h-[700px] overflow-hidden bg-black cursor-move group select-none font-sans">

                        {/* Immersive Image Layer with Motion - Zoom Transition */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={tourIndex}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute inset-[-20%] w-[140%] h-[140%] flex items-center justify-center"
                            >
                                <motion.div
                                    className="relative w-full h-full"
                                    animate={controls}
                                    drag
                                    dragConstraints={containerRef}
                                >
                                    <Image
                                        src={TOUR_STOPS[tourIndex].image}
                                        alt={TOUR_STOPS[tourIndex].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />

                                    {/* Google Maps AR Markers */}
                                    {TOUR_STOPS[tourIndex].arMarkers.map((marker, i) => (
                                        <motion.div
                                            key={marker.id}
                                            initial={{ opacity: 0, scale: 0, y: 50 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            transition={{ delay: 0.5 + (i * 0.2), type: "spring", stiffness: 100 }}
                                            className="absolute flex flex-col items-center group/marker cursor-pointer z-10"
                                            style={{ top: marker.y, left: marker.x }}
                                        >
                                            {/* Pin Head */}
                                            <div className="bg-brand-red text-white p-2.5 rounded-full shadow-2xl border-[3px] border-white transform transition-transform group-hover/marker:scale-110 flex items-center justify-center relative z-10">
                                                <MapPin className="w-5 h-5 fill-current" />
                                            </div>
                                            {/* Stylized Stem */}
                                            <div className="w-1 h-8 bg-gradient-to-b from-white to-transparent -mt-1 relative z-0 opacity-80"></div>
                                            {/* Ground Dot */}
                                            <div className="w-3 h-1 bg-black/50 rounded-full blur-[2px] mt-0"></div>

                                            {/* Distance Label Card - Floating nearby */}
                                            <div className="absolute left-full top-0 ml-3 bg-white px-3 py-2 rounded-lg shadow-xl flex flex-col min-w-[100px] transform transition-transform origin-left group-hover/marker:scale-105">
                                                <div className="font-bold text-gray-900 text-sm leading-tight">{marker.label}</div>
                                                <div className="text-xs text-brand-red font-bold mt-0.5">{marker.distance}</div>
                                                {/* Card Arrow */}
                                                <div className="absolute top-3 -left-1.5 w-3 h-3 bg-white transform rotate-45"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>

                        {/* HUD Overlay (Fixed) */}
                        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 md:p-8">

                            {/* TOP BAR */}
                            <div className="flex justify-between items-start w-full">
                                {/* Location Badge */}
                                <motion.div
                                    key={`info-${tourIndex}`}
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="bg-black/80 backdrop-blur-md text-white rounded-xl overflow-hidden shadow-2xl max-w-xs border border-white/10"
                                >
                                    <div className="bg-brand-red px-4 py-1 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                                        <LocateFixed className="w-3 h-3" /> Live View
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold leading-tight">{TOUR_STOPS[tourIndex].title}</h2>
                                        <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide flex items-center gap-1">
                                            <MapPin className="w-3 h-3" /> {TOUR_STOPS[tourIndex].street}
                                        </p>
                                    </div>
                                </motion.div>

                                {/* Compass */}
                                <div className="bg-black/40 backdrop-blur-sm p-3 rounded-full border border-white/10">
                                    <Compass className="w-8 h-8 text-white opacity-90" />
                                </div>
                            </div>

                            {/* BOTTOM CONTROLS */}
                            <div className="flex justify-between items-end w-full relative pointer-events-auto">

                                {/* Street View Navigation Arrows */}
                                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-12 z-20">
                                    <button
                                        onClick={prevStop}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-dark-blue transition-all active:scale-95"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextStop}
                                        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-dark-blue transition-all active:scale-95"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* SCAN BUTTON / WALKING INSTRUCTION */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-10 w-full">
                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                        className="bg-white text-dark-blue px-6 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.5)] flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                                        onClick={nextStop}
                                    >
                                        <Footprints className="w-5 h-5 text-brand-red" />
                                        Tap to Walk Here
                                    </motion.div>

                                    {/* Floor Gradient */}
                                    <div className="w-full h-32 bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 -z-10"></div>
                                </div>

                                {/* MINIMAP - BOTTOM RIGHT */}
                                <div className="hidden md:block w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden relative bg-gray-200 ml-auto mb-0 z-30">
                                    <Image
                                        src="https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=2669&auto=format&fit=crop"
                                        alt="Minimap"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Radar Cone */}
                                    <div
                                        className="absolute top-1/2 left-1/2 w-full h-full bg-brand-red/30 origin-top-left -translate-y-1/2 -translate-x-1/2 rounded-full"
                                        style={{
                                            clipPath: "polygon(50% 50%, 0% 0%, 100% 0%)",
                                            transform: `rotate(${direction + 135}deg)` // Offset for visual alignment
                                        }}
                                    ></div>
                                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-brand-red rounded-full border-2 border-white -translate-x-1/2 -translate-y-1/2 z-20 shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
