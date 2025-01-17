import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-green-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">O HIPERGRID-u</h3>
            <p className="text-sm">
              HIPERGRID je vodeći dobavljač solarnih rešenja, posvećen inovacijama, 
              održivoj budućnosti i čistoj energiji.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Brzi linkovi</h3>
            <ul className="space-y-1">
              <li><Link to="/proizvodi" className="text-sm hover:underline">Naši proizvodi</Link></li>
              <li><Link to="/usluge" className="text-sm hover:underline">Usluge</Link></li>
              <li><Link to="/blog" className="text-sm hover:underline">Blog</Link></li>
              <li><Link to="/karijera" className="text-sm hover:underline">Karijera</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Kontakt</h3>
            <p className="text-sm">Adresa: Solarna ulica 123, 11000 Beograd</p>
            <p className="text-sm">Telefon: +381 11 123 4567</p>
            <p className="text-sm">Email: info@hipergrid.rs</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} HIPERGRID. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}