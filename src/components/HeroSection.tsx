import React from "react";

const HeroSection = () => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-8">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        Wir revolutionieren die <br />
        Mieterkommunikation
      </h1>
      <p className="text-xl text-gray-600">
        Du hast einen <br className="md:hidden" /> Interessenten für deine Immobilie?
      </p>
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
          Jetzt informieren
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
