
import { ContactForm } from "@/components/sections/contact/contact-form";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import type { Metadata } from 'next';
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with GSMA Technologies. Let\'s discuss your project or answer any questions you may have about our AI and IT solutions.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Connect With <span className="text-primary">Our Team</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            We're excited to hear about your ideas and challenges. Reach out to us, and let's explore how we can create impactful solutions together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
      {/* WhatsApp Floating Icon */}
      <Link 
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
    </div>
  );
}
