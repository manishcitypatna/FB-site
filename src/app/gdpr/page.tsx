
import type { Metadata } from 'next';
import { FloatingCard } from '@/components/common/floating-card';

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description: 'Information about GDPR Compliance at GSMA Technologies.',
};

export default function GDPRPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <FloatingCard className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">GDPR Compliance</h1>
          <div className="prose dark:prose-invert max-w-none text-foreground/80">
            <p>Last updated: July 29, 2024</p>
            <p>GSMA Technologies is committed to ensuring the security and protection of the personal information that we process, and to provide a compliant and consistent approach to data protection. We have always had a robust and effective data protection program in place which complies with existing law and abides by the data protection principles.</p>
            <p>This page outlines our commitment to GDPR compliance.</p>
            
            {/* Add more sections: Our Commitment, Data Subject Rights, Data Processing, etc. */}

            <h2 className="text-2xl font-semibold mt-6 mb-3 text-foreground">Data Protection Officer</h2>
            <p>We have appointed a Data Protection Officer (DPO) to oversee our compliance with data protection laws. If you have any questions about our GDPR compliance or wish to exercise your data subject rights, please contact our DPO:</p>
            <ul>
              <li>By email: dpo@gsmatech.com</li> {/* Replace with actual email */}
            </ul>
          </div>
        </FloatingCard>
      </div>
    </div>
  );
}
