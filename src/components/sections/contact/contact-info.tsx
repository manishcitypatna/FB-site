
import { FloatingCard } from "@/components/common/floating-card";
import { MapPin, Phone, Mail, Share2, MessageCircle } from "lucide-react";
import Link from "next/link";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <FloatingCard interactive>
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
          <MapPin className="h-6 w-6 mr-3 text-primary" /> Our Headquarters
        </h3>
        <p className="text-foreground/80 mb-2">123 Innovation Drive, Tech City, TX 75001, USA</p>
        <div className="aspect-video rounded-md overflow-hidden mt-4 border">
          {/* Placeholder for Interactive Google Map */}
          {/* For actual map, use @vis.gl/react-google-maps or an iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9500000000003!2d-96.80000000000001!3d32.780000000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDQ2JzQ4LjAiTiA5NsKwNDcnNjAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="GSMA Technologies Location"
            data-ai-hint="map location"
          ></iframe>
        </div>
      </FloatingCard>

      <FloatingCard interactive>
        <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
          <Share2 className="h-6 w-6 mr-3 text-primary" /> Get in Touch
        </h3>
        <ul className="space-y-3 text-foreground/80">
          <li className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-accent" />
            <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
          </li>
          <li className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-accent" />
            <a href="mailto:info@gsmatech.com" className="hover:text-primary transition-colors">info@gsmatech.com</a>
          </li>
           <li className="flex items-center">
            <MessageCircle className="h-5 w-5 mr-3 text-accent" />
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Us</a>
          </li>
        </ul>
      </FloatingCard>

      {/* WhatsApp Floating Icon - implement as fixed position in page or layout if needed globally */}
      {/* <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50">
        <MessageCircle className="h-8 w-8" />
      </Link> */}
    </div>
  );
}
