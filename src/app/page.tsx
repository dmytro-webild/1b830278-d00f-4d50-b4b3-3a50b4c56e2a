"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { Award, Box, Settings, Users, Wrench } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Inicio",
          id: "hero",
        },
        {
          name: "Nosotros",
          id: "about",
        },
        {
          name: "Servicios",
          id: "features",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ]}
      brandName="Ferretería Murillo"
      button={{
        text: "Llámanos",
        href: "tel:936915503",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "plain",
      }}
      title="Ferretería Murillo"
      description="Tu ferretería de confianza en Cerdanyola. Siempre hay solución."
      testimonials={[
        {
          name: "Mari Molero",
          handle: "@cliente",
          testimonial: "La jefa (Leo) es majísima y agradable, y siempre que vas con algún problema te lo soluciona seguro.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/repairing-tools-equipment_1170-2529.jpg?_wi=1",
          imageAlt: "ferretería tradicional local interior estanterías",
        },
        {
          name: "José Manuel Sánchez",
          handle: "@cliente",
          testimonial: "La mejor ferretería del pueblo. La Leo es la mejor, te da solución para todo.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-construction-worker-uniform-cap-looking-each-other-unpleased-girl-holding-pencil-clipboard-touching-head-with-pencil-concerned-guy-keeping-hand-head_141793-78872.jpg?_wi=1",
          imageAlt: "dueña ferretería experta sonriendo",
        },
        {
          name: "Bernardo Borgia",
          handle: "@cliente",
          testimonial: "Excelente todo. La atención muy amable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/metal-chrome-tools-isolated-background_53876-71272.jpg",
          imageAlt: "icono herramienta llave inglesa simple",
        },
        {
          name: "Ansaca Salcedo",
          handle: "@cliente",
          testimonial: "Gran profesional, mejor persona.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/hammer-nails-wood-block-gray-surface_23-2151979284.jpg",
          imageAlt: "icono martillo bricolaje simple",
        },
        {
          name: "Pedro Gil",
          handle: "@cliente",
          testimonial: "Un servicio de 10, muy profesional y cercano.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/tools-graphic-design_24908-54896.jpg",
          imageAlt: "icono destornillador bricolaje simple",
        },
      ]}
      buttons={[
        {
          text: "Llamar ahora",
          href: "tel:936915503",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/repairing-tools-equipment_1170-2529.jpg?_wi=2"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "https://img.b2bpic.net/free-photo/portrait-happy-smiling-woman-holding-clipboard_1150-10777.jpg",
          alt: "Cliente satisfecho",
        },
        {
          src: "https://img.b2bpic.net/free-photo/portrait-smiling-man-holding-tools_1150-10778.jpg",
          alt: "Cliente satisfecho",
        },
        {
          src: "https://img.b2bpic.net/free-photo/young-man-smiling-camera-holding-wrench_1150-10779.jpg",
          alt: "Cliente satisfecho",
        },
        {
          src: "https://img.b2bpic.net/free-photo/happy-woman-holding-drill_1150-10780.jpg",
          alt: "Cliente satisfecho",
        },
        {
          src: "https://img.b2bpic.net/free-photo/man-smiling-holding-nails_1150-10781.jpg",
          alt: "Cliente satisfecho",
        },
      ]}
      avatarText="Más de 500 vecinos satisfechos"
      marqueeItems={[
        {
          type: "text",
          text: "Asesoramiento profesional",
        },
        {
          type: "text",
          text: "Materiales de alta calidad",
        },
        {
          type: "text",
          text: "Reparaciones urgentes",
        },
        {
          type: "text",
          text: "Atención personalizada",
        },
        {
          type: "text",
          text: "Servicio de barrio",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Sobre nosotros"
      title="Atención humana en Cerdanyola"
      description="Ferretería Murillo es un negocio de barrio con alma. Nuestra dueña, Leo, es experta en bricolaje y siempre está lista para darte ese consejo experto que necesitas para tus reparaciones en el hogar."
      subdescription="No solo vendemos productos, ofrecemos soluciones prácticas, cercanas y siempre con una sonrisa."
      icon={Users}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C1D6Oian3FjN3I4Y1dCNusDe5v/uploaded-1775545203454-z5oj4c92.png"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          icon: Wrench,
          title: "Ferretería General",
          description: "Amplio stock de herramientas y materiales para cualquier proyecto.",
        },
        {
          icon: Box,
          title: "Reparaciones del Hogar",
          description: "Consejos expertos de Leo para que arregles cualquier cosa en casa.",
        },
        {
          icon: Settings,
          title: "Placas Personalizadas",
          description: "Elaboración de placas conmemorativas y trabajos especiales.",
        },
        {
          icon: Award,
          title: "Atención Personalizada",
          description: "Trato cercano, honesto y resolutivo en cada visita.",
        },
      ]}
      title="Nuestros servicios"
      description="Todo lo que necesitas para tu hogar con asesoramiento experto."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      sideTitle="Preguntas frecuentes"
      sideDescription="Respondemos a las dudas más comunes de nuestros clientes."
      faqsAnimation="slide-up"
      faqs={[
        {
          id: "q1",
          title: "¿Tenéis servicio de copia de llaves?",
          content: "Sí, realizamos copias de llaves en el momento con maquinaria de precisión.",
        },
        {
          id: "q2",
          title: "¿Hacéis reparaciones a domicilio?",
          content: "Aunque somos una tienda de proximidad, podemos recomendarte profesionales de confianza de la zona.",
        },
        {
          id: "q3",
          title: "¿Puedo pedir placas personalizadas?",
          content: "Por supuesto, trabajamos bajo pedido para placas de buzón, señalética o conmemorativas.",
        },
        {
          id: "q4",
          title: "¿Aceptáis pedidos por WhatsApp?",
          content: "Sí, puedes enviarnos fotos o dudas por WhatsApp y te confirmaremos disponibilidad.",
        },
        {
          id: "q5",
          title: "¿Cuál es vuestro horario?",
          content: "Estamos abiertos de lunes a sábado de 09:00 a 14:00 y de 17:00 a 20:00.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ven a visitarnos en Passatge de l'Ajuntament, 9, 08290 Cerdanyola del Vallès. Estamos aquí para ayudarte de lunes a sábado. También puedes contactar por WhatsApp en el 936 915 503."
      buttons={[
        {
          text: "WhatsApp",
          href: "https://wa.me/34936915503",
        },
        {
          text: "Llamar",
          href: "tel:936915503",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Ferretería Murillo"
      copyrightText="© 2024 Ferretería Murillo"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
