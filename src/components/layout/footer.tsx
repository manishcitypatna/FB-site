
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"; // Removed Zap

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card/50 text-foreground/80 py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
               <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17L12 12L2 17Z" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7V17" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7V17" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12V22" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 2V12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7L12 12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7L12 12" stroke="hsl(var(--primary-foreground))" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold text-foreground">GSMA<span className="text-primary">Tech</span></span>
            </Link>
            <p className="text-sm">Future-Proof Your Business with AI-Powered IT Solutions.</p>
             <div className="mt-4 flex space-x-3">
              <Link href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><Facebook size={20} /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/gdpr" className="hover:text-primary transition-colors">GDPR Compliance</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm">
          <p>&copy; {currentYear} GSMA Technologies. All rights reserved.</p>
          <p>Innovating the future, one solution at a time.</p>
        </div>
      </div>
    </footer>
  );
}
