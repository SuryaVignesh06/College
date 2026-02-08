
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PageLayout({
    children,
    title,
    subtitle,
    backgroundImage = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop"
}: {
    children: React.ReactNode;
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}) {
    return (
        <main className="min-h-screen pt-[80px]">
            {/* Inner Page Hero */}
            <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${backgroundImage}')` }}
                    />
                    <div className="absolute inset-0 bg-dark-blue/60" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">{title}</h1>
                    {subtitle && <p className="text-xl font-light opacity-90">{subtitle}</p>}
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 lg:py-24">
                {children}
            </div>
        </main>
    );
}
