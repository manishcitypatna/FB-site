
import { Code, Bot, LayoutDashboard, Cloud, Users, CheckCircle, Rocket, Target, Star, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  detailsLink: string;
}

export const servicesData: Service[] = [
  {
    id: "ai-workflow",
    title: "AI Workflow Automation",
    description: "Streamline complex processes with n8n-powered AI automation, boosting efficiency and reducing manual effort.",
    Icon: Zap, 
    detailsLink: "/services/ai-workflow-automation",
  },
  {
    id: "gpt-chatbots",
    title: "GPT Chatbots",
    description: "Engage customers with intelligent GPT-4o chatbots for e-commerce, POS, and CRM integrations.",
    Icon: Bot,
    detailsLink: "/services/gpt-chatbots",
  },
  {
    id: "web-app-dev",
    title: "Web App Development",
    description: "Custom web applications built with modern technologies like React, Vue, and Python for scalable solutions.",
    Icon: Code,
    detailsLink: "/services/web-app-development",
  },
  {
    id: "data-dashboards",
    title: "Data Dashboards",
    description: "Visualize your data with interactive dashboards using Looker Studio, Power BI, and Tableau for insightful analytics.",
    Icon: LayoutDashboard,
    detailsLink: "/services/data-dashboards",
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    description: "Robust and scalable cloud solutions on AWS, GCP, and Azure, tailored to your business needs.",
    Icon: Cloud,
    detailsLink: "/services/cloud-infrastructure",
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  outcomes: string[];
  dataAiHint?: string;
  liveLink?: string;
  caseStudyLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "ai-mis-agent",
    title: "AI-Powered MIS Agent",
    description: "Automated Management Information System agent for real-time reporting and analytics.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "AI analytics",
    stack: ["Python", "n8n", "GPT-3.5"],
    outcomes: ["Reduced reporting time by 80%", "Improved data accuracy by 95%"],
    caseStudyLink: "/portfolio/ai-mis-agent",
  },
  {
    id: "gpt4o-restaurant-bot",
    title: "GPT-4o Restaurant Order Chatbot",
    description: "A smart chatbot for handling restaurant orders, reservations, and customer inquiries.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "chatbot food",
    stack: ["GPT-4o", "Node.js", "Dialogflow"],
    outcomes: ["Increased order volume by 25%", "Enhanced customer satisfaction"],
    liveLink: "#",
  },
  {
    id: "lead-gen-system",
    title: "Lead Gen System with GPT + Webhooks",
    description: "Automated lead generation and qualification system using GPT and webhook integrations.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "marketing automation",
    stack: ["GPT-3.5", "Webhooks", "CRM"],
    outcomes: ["Generated 300% more qualified leads", "Streamlined sales pipeline"],
    caseStudyLink: "/portfolio/lead-gen-system",
  },
  {
    id: "auto-product-listing",
    title: "Auto Product Listing Tool",
    description: "E-commerce tool for automated product listing across multiple platforms.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "ecommerce tools",
    stack: ["Python", "Selenium", "Shopify API"],
    outcomes: ["Reduced listing time by 90%", "Expanded market reach"],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  avatarUrl?: string;
  dataAiHint?: string;
  quote: string;
  rating: number; // 1 to 5
}

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah L.",
    company: "CEO, Innovatech Ltd.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "professional woman",
    quote: "GSMA Technologies transformed our operations with their AI workflows. Their team is brilliant and delivered beyond our expectations!",
    rating: 5,
  },
  {
    id: "t2",
    name: "John B.",
    company: "CTO, Future Solutions Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "tech executive",
    quote: "The GPT chatbot developed by GSMA has revolutionized our customer service. Highly recommend their expertise.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Emily K.",
    company: "Marketing Director, Growth Co.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "marketing professional",
    quote: "Their data dashboard solutions provided us with critical insights, driving our marketing strategy सफलता (success). Their dedication is unmatched.",
    rating: 4,
  },
];

export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  dataAiHint?: string;
}

export const clientLogosData: ClientLogo[] = [
  { id: "cl1", name: "Innovatech Ltd.", logoUrl: "https://placehold.co/150x80.png?text=Innovatech", dataAiHint: "tech logo" },
  { id: "cl2", name: "Future Solutions Inc.", logoUrl: "https://placehold.co/150x80.png?text=FutureSol", dataAiHint: "modern logo" },
  { id: "cl3", name: "Growth Co.", logoUrl: "https://placehold.co/150x80.png?text=GrowthCo", dataAiHint: "corporate logo" },
  { id: "cl4", name: "Alpha Corp", logoUrl: "https://placehold.co/150x80.png?text=AlphaCorp", dataAiHint: "global logo" },
  { id: "cl5", name: "Beta LLC", logoUrl: "https://placehold.co/150x80.png?text=BetaLLC", dataAiHint: "startup logo" },
];

export interface TrustBadge {
  id: string;
  Icon: LucideIcon;
  text: string;
  value?: string;
}

export const trustBadgesData: TrustBadge[] = [
  { id: "tb1", Icon: CheckCircle, text: "n8n Verified Partner" },
  { id: "tb2", Icon: Zap, text: "Workflows Delivered", value: "70+" },
  { id: "tb3", Icon: Star, text: "5-Star Rating" },
];

export interface CompanyStat {
  id: string;
  value: string;
  label: string;
  Icon: LucideIcon;
}
export const companyStatsData: CompanyStat[] = [
  { id: "cs1", value: "70+", label: "Workflows Delivered", Icon: Zap },
  { id: "cs2", value: "50+", label: "Clients Served", Icon: Users },
  { id: "cs3", value: "<24hr", label: "Avg. Response Time", Icon: Rocket },
  { id: "cs4", value: "100%", label: "Project Success Rate", Icon: Target },
];

export interface Certification {
  id: string;
  name: string;
  logoUrl: string;
  dataAiHint?: string;
}

export const certificationsData: Certification[] = [
  { id: "c1", name: "n8n Certified", logoUrl: "https://placehold.co/120x60.png?text=n8n", dataAiHint: "certification logo" },
  { id: "c2", name: "OpenAI Partner", logoUrl: "https://placehold.co/120x60.png?text=OpenAI", dataAiHint: "AI partner" },
  { id: "c3", name: "AWS Certified", logoUrl: "https://placehold.co/120x60.png?text=AWS", dataAiHint: "cloud certification" },
  { id: "c4", name: "GCP Partner", logoUrl: "https://placehold.co/120x60.png?text=GCP", dataAiHint: "google cloud" },
];

