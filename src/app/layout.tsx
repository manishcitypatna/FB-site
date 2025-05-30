
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster"; // Shadcn Toaster

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'GSMA Innovationscape - AI & IT Solutions',
    template: '%s | GSMA Innovationscape',
  },
  description: 'Future-Proof Your Business with AI-Powered IT Solutions by GSMA Technologies.',
  keywords: ['AI solutions', 'IT services', 'n8n automation', 'GPT chatbots', 'web development', 'GSMA Technologies'],
  openGraph: {
    title: 'GSMA Innovationscape - AI & IT Solutions',
    description: 'Pioneering the future of business with cutting-edge AI and IT innovations.',
    url: 'https://www.gsmatech.com', // Replace with actual domain
    siteName: 'GSMA Innovationscape',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=GSMA+Innovationscape', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'GSMA Innovationscape',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GSMA Innovationscape - AI & IT Solutions',
    description: 'Future-Proof Your Business with AI-Powered IT Solutions by GSMA Technologies.',
    // images: ['https://placehold.co/1200x600.png?text=GSMA+Innovationscape'], // Replace with actual Twitter image
    // creator: '@gsmatech', // Replace with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // PWA related meta tags
  // manifest: '/manifest.json', // TODO: Create manifest.json
  themeColor: [
    { color: '#25CBBE' } // Dark theme primary color
  ],
  // verification: { // Example for Google Search Console
  // google: 'your-google-site-verification-code',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <ThemeProvider
          defaultTheme="dark"
          storageKey="gsma-theme"
        >
          <div className="particle-bg"></div>
          <Header />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

// Re-export ThemeProvider with attribute and system support as expected by shadcn/ui docs if they were using next-themes
// For the custom provider, we already handle class toggling.
// We can keep the shadcn/ui ThemeProvider as well if it's used by some internal components.
// For now, let's use the custom one.
// The above ThemeProvider is a simplified one, if full `next-themes` features are needed, it should be installed.
// I've adjusted the ThemeProvider to work more like next-themes for shadcn compatibility.
// The ThemeProvider from `components/theme-provider.tsx` is custom.
// Let's adjust the props for the custom ThemeProvider used in layout.tsx
// The custom ThemeProvider does not use `attribute`, `enableSystem`, `disableTransitionOnChange`.
// Let's simplify the ThemeProvider usage in layout.tsx for the custom provider.

// Corrected Layout using the custom ThemeProvider:
// The ThemeProvider from `components/theme-provider.tsx` is a simple one.
// It does not take `attribute`, `enableSystem`, or `disableTransitionOnChange` props.
// I will use the custom `ThemeProvider` as defined.
// The metadata for themeColor in `layout.tsx` refers to system preference, which the custom provider doesn't directly handle.
// The custom provider sets a default theme and allows manual toggle.
// This is fine for the requested features.
// The `ThemeProvider` will be from `@/components/theme-provider`.
// The `ThemeProvider` props in `layout.tsx` need to match the custom provider.
// The custom `ThemeProvider` only takes `children`, `defaultTheme`, and `storageKey`.

// Updated RootLayout with custom ThemeProvider:
// <ThemeProvider defaultTheme="light" storageKey="gsma-theme">
// this should be fine. Let me remove the `next-themes` specific props from ThemeProvider usage in layout.
// Actually, `shadcn/ui` components `Toaster` and others might rely on `next-themes` context.
// Since `next-themes` is not installed, this could be an issue.
// Given the "professionally designed" requirement and shadcn usage, `next-themes` is standard.
// The prompt said: "Refer relying on adding npm packages instead of adding script tags for adding new libraries unless instructed otherwise."
// It also said: "Always confirm in package.json first if the libary is already not installed before suggesting an update."
// `next-themes` is missing. I should not add it.
// My custom ThemeProvider toggles a class on `<html>`, which is what `next-themes` does. So ShadCN components should work.
// The important part for ShadCN is the presence of `class="dark"` on the html/body.
// The custom `ThemeProvider` handles this.
// I'll remove the `next-themes` specific props from `ThemeProvider` invocation.

// Previous content of layout.tsx:
// (The original had geist, geist_mono, metadata, RootLayout, ThemeProvider with next-themes props)
// The new content for layout.tsx should use the custom ThemeProvider correctly.
// The metadata.themeColor array should correspond to the themes the app supports.
// My custom provider starts with 'light' by default or from localStorage.
// The `enableSystem` functionality is not in my custom provider.
// Let's make the ThemeProvider in `layout.tsx` simpler:

// Corrected:
// <ThemeProvider defaultTheme="light" storageKey="gsma-theme">
//   <div className="particle-bg"></div>
//   <Header />
//   <main className="flex-grow relative z-10">{children}</main>
//   <Footer />
//   <Toaster />
// </ThemeProvider>
// This is how it should be.

// The `ThemeProvider` in `src/components/theme-provider.tsx` is the one being used.
// It correctly sets the class on the `<html>` element.
// ShadCN components use CSS variables that change based on the `.dark` class, so it should work.
// The Toaster from `shadcn/ui` should also respect this.

