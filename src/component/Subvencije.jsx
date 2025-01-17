import React from 'react';
import { CheckCircle, AlertCircle, FileText, Calendar, Clock, HelpCircle } from 'lucide-react';

export default function Subvencije() {
  const subvencijeInfo = [
    {
      title: "Državne subvencije",
      amount: "do 50%",
      description: "Povraćaj investicije kroz državne subvencije za fizička lica",
      details: [
        "Maksimalan iznos do 5.000 EUR",
        "Rok otplate do 36 meseci",
        "Bez učešća"
      ]
    },
    {
      title: "Lokalne subvencije",
      amount: "do 25%",
      description: "Dodatne subvencije od lokalnih samouprava",
      details: [
        "Varira od opštine do opštine",
        "Mogućnost kombinovanja sa državnim",
        "Posebni uslovi za poljoprivrednike"
      ]
    }
  ];

  const procesKoraci = [
    {
      title: "Inicijalna procena",
      description: "Procena podobnosti vašeg objekta za solarne panele",
      icon: CheckCircle
    },
    {
      title: "Priprema dokumentacije",
      description: "Prikupljanje i priprema potrebne dokumentacije",
      icon: FileText
    },
    {
      title: "Podnošenje zahteva",
      description: "Apliciranje za subvencije u vaše ime",
      icon: Calendar
    },
    {
      title: "Praćenje statusa",
      description: "Redovno informisanje o statusu aplikacije",
      icon: Clock
    }
  ];

  const potrebnaDokumentacija = [
    "Dokaz o vlasništvu objekta",
    "Računi za električnu energiju za prethodnih 12 meseci",
    "Potvrda o izmirenim obavezama za komunalne usluge",
    "Tehnička dokumentacija objekta",
    "Lična karta",
    "Saglasnost suvlasnika (ako postoje)"
  ];

  const faq = [
    {
      question: "Ko može da aplicira za subvencije?",
      answer: "Pravo na subvencije imaju fizička lica koja su vlasnici individualnih stambenih objekata."
    },
    {
      question: "Koliko traje proces odobravanja?",
      answer: "Proces odobravanja najčešće traje 30-45 dana od trenutka podnošenja kompletne dokumentacije."
    },
    {
      question: "Da li mogu kombinovati različite subvencije?",
      answer: "Da, moguće je kombinovati državne i lokalne subvencije, uz poštovanje specifičnih uslova svake subvencije."
    },
    {
      question: "Koji su rokovi za apliciranje?",
      answer: "Rokovi se objavljuju periodično. Trenutno je aktivan konkurs do kraja tekuće godine."
    }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Sekcija */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-green-600 via-green-700 to-green-900">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Subvencije za solarne panele
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Iskoristite državne i lokalne subvencije za prelazak na solarnu energiju. 
              Mi vam pomažemo u celom procesu.
            </p>
          </div>
        </div>
      </section>

      {/* Dostupne Subvencije */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Dostupne Subvencije
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subvencijeInfo.map((subvencija, index) => (
              <div key={index} className="bg-green-50 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  {subvencija.title}
                </h3>
                <div className="text-4xl font-bold text-green-600 mb-4">
                  {subvencija.amount}
                </div>
                <p className="text-gray-600 mb-6">{subvencija.description}</p>
                <ul className="space-y-3">
                  {subvencija.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proces Apliciranja */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Proces Apliciranja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procesKoraci.map((korak, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <korak.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">{korak.title}</h3>
                <p className="text-gray-600">{korak.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potrebna Dokumentacija */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Potrebna Dokumentacija
          </h2>
          <div className="max-w-3xl mx-auto bg-green-50 p-8 rounded-lg shadow-lg">
            <ul className="space-y-4">
              {potrebnaDokumentacija.map((dokument, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <FileText className="w-5 h-5 text-green-600 mr-3" />
                  {dokument}
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0" />
                <p className="text-sm text-yellow-800">
                  Napomena: Sva dokumentacija mora biti važeća u trenutku podnošenja zahteva. 
                  Naš tim će vam pomoći u prikupljanju i proveri dokumentacije.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Često Postavljana Pitanja */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Često Postavljana Pitanja
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start">
                  <HelpCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-green-800 mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Sekcija */}
      <section className="w-full py-12 bg-green-600">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Započnite proces danas
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Ne propustite priliku da značajno smanjite troškove prelaska na solarnu energiju.
            Naš tim je tu da vam pomogne u svakom koraku procesa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-yellow-400 text-green-800 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Zakažite konsultacije
            </button>
            <button className="px-8 py-3 bg-white text-green-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Proverite podobnost
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}