import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap gap-6 justify-center sm:justify-between text-sm text-muted-foreground border-t pt-6 border-border px-6 sm:px-20">
      <p>© {new Date().getFullYear()} CircuitPath Projects Solutions Limited</p>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About Us</Link>
        <Link href="/services" className="hover:underline">Services</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </div>
    </footer>
  );
}