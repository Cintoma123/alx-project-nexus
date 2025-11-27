import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <Navbar />
            <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
}
