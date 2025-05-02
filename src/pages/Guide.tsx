
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Guide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gradient-to-br from-white to-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Guide e Tutorial</h1>
            
            <div className="space-y-8">
              <p className="text-gray-600">
                Guide e tutorial in arrivo...
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Guide;
