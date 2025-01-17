import React from 'react';
import { Sun, Battery, Zap, Shield, Award, BarChart } from 'lucide-react';
import panel from '../gallery/panel.png';
import { useCart } from '../context/CartContex';

export default function Proizvodi() {
  const { addToCart } = useCart();

  const solarniPaneli = [
    {
      id: 1,
      naziv: "HIPERGRID Premium",
      snaga: "400W",
      efikasnost: "21.5%",
      garancija: "25 godina",
      karakteristike: [
        "Mono-kristalni paneli",
        "Anti-reflektivni premaz",
        "Otpornost na grad i sneg",
        "Bifacijalna tehnologija"
      ],
      cena: "Od 250 EUR",
      slika: panel
    },
    {
      id: 2,
      naziv: "HIPERGRID Standard",
      snaga: "375W",
      efikasnost: "20.3%",
      garancija: "20 godina",
      karakteristike: [
        "Mono-kristalni paneli",
        "Visoka pouzdanost",
        "Otpornost na ekstremne uslove",
        "Optimalan odnos cene i kvaliteta"
      ],
      cena: "Od 200 EUR",
      slika: panel
    }
  ];

  const invertori = [
    {
      id: 3,
      naziv: "HIPERGRID Inverter Pro",
      snaga: "5-10kW",
      efikasnost: "98.3%",
      garancija: "10 godina",
      karakteristike: [
        "Pametno praćenje",
        "WiFi povezivanje",
        "Mobilna aplikacija",
        "Napredna dijagnostika"
      ],
      cena: "Od 1200 EUR",
      slika: panel
    },
    {
      id: 4,
      naziv: "HIPERGRID Inverter Basic",
      snaga: "3-6kW",
      efikasnost: "97.5%",
      garancija: "7 godina",
      karakteristike: [
        "Pouzdana tehnologija",
        "Jednostavna instalacija",
        "LCD ekran",
        "Kompaktan dizajn"
      ],
      cena: "Od 800 EUR",
      slika: panel
    }
  ];

  const baterije = [
    {
      naziv: "HIPERGRID Storage Pro",
      kapacitet: "10kWh",
      životniVek: "6000 ciklusa",
      garancija: "10 godina",
      karakteristike: [
        "Litijum-jonska tehnologija",
        "Pametno upravljanje",
        "Modularni dizajn",
        "Visoka sigurnost"
      ],
      cena: "Od 5000 EUR",
      slika: panel
    }
  ];

  const ProizvodKartica = ({ proizvod }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img
          src={proizvod.slika}
          alt={proizvod.naziv}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-800 mb-2">{proizvod.naziv}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-600">Snaga/Kapacitet</p>
            <p className="font-semibold text-green-700">{proizvod.snaga || proizvod.kapacitet}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Efikasnost</p>
            <p className="font-semibold text-green-700">{proizvod.efikasnost}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Garancija</p>
            <p className="font-semibold text-green-700">{proizvod.garancija}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Cena</p>
            <p className="font-semibold text-green-700">{proizvod.cena}</p>
          </div>
        </div>
        <div className="space-y-2">
          {proizvod.karakteristike.map((karakteristika, index) => (
            <div key={index} className="flex items-center">
              <Shield className="w-4 h-4 text-green-600 mr-2" />
              <span className="text-sm text-gray-600">{karakteristika}</span>
            </div>
          ))}
        </div>
        <button
          onClick={() => addToCart(proizvod)}
          className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Poruči
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Sekcija */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-green-600 via-green-700 to-green-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Naši Proizvodi
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Vrhunska solarna oprema za vaš dom ili poslovanje. 
              Kvalitet i pouzdanost su naš prioritet.
            </p>
          </div>
        </div>
      </section>

      {/* Solarni Paneli */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Solarni Paneli</h2>
            <p className="text-xl text-gray-600">
              Visokoefikasni paneli sa naprednom tehnologijom i dugom garancijom
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solarniPaneli.map((panel, index) => (
              <ProizvodKartica key={index} proizvod={panel} />
            ))}
          </div>
        </div>
      </section>

      {/* Invertori */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Invertori</h2>
            <p className="text-xl text-gray-600">
              Pametna rešenja za optimalan rad vašeg solarnog sistema
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {invertori.map((invertor, index) => (
              <ProizvodKartica key={index} proizvod={invertor} />
            ))}
          </div>
        </div>
      </section>

      {/* Baterije */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Sistemi za Skladištenje</h2>
            <p className="text-xl text-gray-600">
              Napredna rešenja za skladištenje solarne energije
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {baterije.map((baterija, index) => (
              <ProizvodKartica key={index} proizvod={baterija} />
            ))}
          </div>
        </div>
      </section>

      {/* Prednosti */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Zašto Izabrati Naše Proizvode
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Premium Kvalitet</h3>
              <p className="text-gray-600">
                Koristimo samo proverene komponente najvišeg kvaliteta
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Duga Garancija</h3>
              <p className="text-gray-600">
                Nudimo dugogodišnje garancije na sve naše proizvode
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <BarChart className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Visoka Efikasnost</h3>
              <p className="text-gray-600">
                Maksimalna proizvodnja energije u svim uslovima
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 bg-green-600">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Spremni da započnete?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas za detaljnu ponudu i besplatnu procenu za vaš objekat
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-green-800 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            Zatražite ponudu
          </button>
        </div>
      </section>
    </div>
  );
}