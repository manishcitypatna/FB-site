
import type { Metadata } from 'next';
import { FloatingCard } from '@/components/common/floating-card';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for GSMA Technologies.',
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FloatingCard className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Terms of Service</h1>
          <div className="prose dark:prose-invert max-w-none text-foreground/80">
            <p>Last updated: July 29, 2024</p>
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the [Your Website URL] website (the "Service") operated by GSMA Technologies ("us", "we", or "our").</p>
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
            
            {/* Add more sections as needed: Accounts, Intellectual Property, Links To Other Web Sites, Termination, Limitation Of Liability, etc. */}

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>By email: legal@gsmatech.com</li> {/* Replace with actual email */}
            </ul>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}
