import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Ferretería Murillo | Ferretería de Confianza en Cerdanyola',
  description: 'Tu ferretería de barrio en Cerdanyola del Vallès. Asesoramiento experto de Leo, herramientas, bricolaje y placas personalizadas. ¡Visítanos!',
  openGraph: {
    "title": "Ferretería Murillo | Cerdanyola",
    "description": "Ferretería tradicional y de confianza en Cerdanyola del Vallès.",
    "type": "website",
    "siteName": "Ferretería Murillo"
  },
};

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${nunitoSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
