import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 border-t border-gray-100 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/d0fd6e44-1a60-4d94-ab4a-7b01861ccf9d.png" 
            alt="Mieteinander Logo" 
            className="h-20"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4 p-6 md:p-0 bg-white/50 rounded-lg shadow-sm md:shadow-none md:bg-transparent">
            <h3 className="text-lg font-semibold text-gray-900">Kontakt</h3>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <Mail className="h-5 w-5 text-gray-600" />
              <a href="mailto:info@mieteinander-wohnen.de" className="text-gray-600 hover:text-gray-900">
                info@mieteinander-wohnen.de
              </a>
            </div>
          </div>
          
          <div className="space-y-4 p-6 md:p-0 bg-white/50 rounded-lg shadow-sm md:shadow-none md:bg-transparent">
            <h3 className="text-lg font-semibold text-gray-900">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/datenschutz" className="text-gray-600 hover:text-gray-900">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="text-gray-600 hover:text-gray-900">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/agb" className="text-gray-600 hover:text-gray-900">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4 p-6 md:p-0 bg-white/50 rounded-lg shadow-sm md:shadow-none md:bg-transparent">
            <h3 className="text-lg font-semibold text-gray-900">Standort</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="h-5 w-5 text-gray-600 flex-shrink-0" />
                <address className="text-gray-600 not-italic">
                  mieteinander GmbH<br />
                  Schlossplatz 12<br />
                  18445 Kramerhof<br />
                  Deutschland
                </address>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © 2025 mieteinander GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};