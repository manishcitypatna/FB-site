
import type { Metadata } from 'next';
import { FloatingCard } from '@/components/common/floating-card';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for GSMA Technologies.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FloatingCard className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
          <div className="prose dark:prose-invert max-w-none text-foreground/80">
            <p>Last updated: July 29, 2024</p>
            <p>GSMA Technologies ("us", "we", or "our") operates the [Your Website URL] website (the "Service").</p>
            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
            
            {/* Add more sections as needed: Types of Data Collected, Use of Data, Transfer Of Data, Disclosure Of Data, Security of Data, etc. */}
            
            <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: privacy@gsmatech.com</li> {/* Replace with actual email */}
            </ul>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}
