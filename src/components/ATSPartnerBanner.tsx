
import React from 'react';

export const ATSPartnerBanner = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-clickblue-50 rounded-2xl p-6 shadow-sm">
          <img 
            src="/lovable-uploads/5129b4b6-db28-4e06-99a2-3c6a636cee0d.png" 
            alt="ATS Logo" 
            className="h-16 w-auto"
          />
          <div className="text-center md:text-left">
            <p className="text-gray-700">
              Progetto in collaborazione con <span className="font-semibold">ATS - Consulenti Associati</span>, 
              esperti nella consulenza per i bandi INAIL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
