// components/ContactForm.tsx
import Footer from '@/components/molecules/footer';
import Header from '@/components/molecules/header2';
import ContactMe from '@/components/organisms/contact-section';
import VortexDemo from '@/components/organisms/vortex-section';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const ContactForm: React.FC = () => {
  return (
    <div className="bg-zinc-900 ">
      <Header />
      <VortexDemo/>
        <ContactMe />
        <Footer />
    </div>
  );
};

export default ContactForm;