// components/ContactForm.tsx
import Footer from '@/components/molecules/footer';
import Header2 from '@/components/molecules/header2';
import ContactMe from '@/components/organisms/contact-section';
import VortexDemo from '@/components/organisms/vortex-section';
import { Vortex } from '@/components/ui/vortex';
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-zinc-900 ">
      <Header2 />
      <VortexDemo/>
        <ContactMe />
        <Footer />
    </div>
  );
};

export default ContactForm;