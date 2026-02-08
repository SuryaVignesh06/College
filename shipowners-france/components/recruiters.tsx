"use client";

import { LogoLoop } from "./ui/logo-loop";

const recruiters = [
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        alt: "Google",
        width: 120, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
        alt: "Microsoft",
        width: 120, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        alt: "Amazon",
        width: 100, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
        alt: "Goldman Sachs",
        width: 140, height: 50
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg",
        alt: "SpaceX",
        width: 140, height: 30
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        alt: "IBM",
        width: 100, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        alt: "Oracle",
        width: 120, height: 30
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        alt: "Infosys",
        width: 100, height: 40
    },
    {
        src: "https://cdn.worldvectorlogo.com/logos/tata-consultancy-services.svg",
        alt: "TCS",
        width: 120, height: 40
    },
    {
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
        alt: "Wipro",
        width: 100, height: 40
    }
];

export function Recruiters() {
    return (
        <section className="py-20 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Top Recruiters</h2>
                <h3 className="text-3xl font-display font-bold text-dark-blue">
                    Industry <span className="text-brand-red">Leaders</span> Hiring Our Students
                </h3>
            </div>

            <div className="w-full overflow-hidden">
                {/* We pass a custom renderItem to LogoLoop to handle the images */}
                <LogoLoop
                    logos={recruiters}
                    speed={50}
                    gap={60}
                    pauseOnHover={true}
                    logoHeight={40}
                    renderItem={(item) => (
                        <div className="relative h-16 w-40 flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110">
                            {/* Using standard img tag to avoid next.config.js domain issues for external URLs */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="max-h-12 w-auto object-contain"
                            />
                        </div>
                    )}
                />
            </div>
        </section>
    );
}
