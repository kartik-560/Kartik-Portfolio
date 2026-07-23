import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kartik Kanzode - Student & Freelance Web Developer',
  description: 'Engineering student and freelance web developer specializing in Next.js,x React, and modern web technologies. Available for projects and internships.',
  keywords: 'student, freelance, web developer, React, Next.js, JavaScript, frontend ,Internship, projects, portfolio',
  authors: [{ name: 'Kartik Kanzode' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
