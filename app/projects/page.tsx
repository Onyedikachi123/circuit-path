import Link from "next/link";
import SecondaryNavigation from "@/components/SecondaryNavigation";
import Footer from "@/components/Footer";

export default function Project() {
  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col justify-between px-0 py-0">
      <SecondaryNavigation />
      <main className="max-w-8xl mx-auto w-full px-6 py-10 sm:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h1>

      
      </main>
      <Footer />
    </div>
  );
}
