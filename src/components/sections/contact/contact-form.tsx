
"use client";

import { useState, type FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { FloatingCard } from '@/components/common/floating-card';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Placeholder for form submission logic
    // Replace with your actual backend endpoint or email service integration
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Form data submitted:", formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FloatingCard className="w-full max-w-2xl mx-auto" interactive>
      <h2 className="text-3xl font-bold text-center text-foreground mb-2">
        Let's Co-Create the Future.
      </h2>
      <p className="text-center text-foreground/70 mb-8">Drop us a message.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleChange} required disabled={isLoading} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required disabled={isLoading} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" type="text" placeholder="Inquiry about AI solutions" value={formData.subject} onChange={handleChange} required disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell us about your project or query..." value={formData.message} onChange={handleChange} rows={5} required disabled={isLoading} />
        </div>
        <Button type="submit" className="w-full text-lg py-3" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </FloatingCard>
  );
}
