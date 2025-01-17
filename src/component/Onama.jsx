import React from 'react';
import { Users, Award, Target, Globe } from 'lucide-react';
import boro from '../gallery/boro.jpg';
import zoran from '../gallery/zoltan.jpg';

export default function Onama() {
  const stats = [
    {
      number: "2+",
      text: "Godina iskustva",
      icon: Users
    },
    {
      number: "30",
      text: "Razlicitih artikala",
      icon: Award
    },
    {
      number: "100%",
      text: "Zadovoljnih klijenata",
      icon: Target
    },
    {
      number: "5+",
      text: "Stručnih saradnika",
      icon: Globe
    }
  ];

  const values = [
    {
      title: "Inovacija",
      description: "Konstantno pratimo i implementiramo najnovije tehnologije u oblasti solarne energije."
    },
    {
      title: "Kvalitet",
      description: "Koristimo samo proverene komponente i materijale najvišeg kvaliteta."
    },
    {
      title: "Održivost",
      description: "Posvećeni smo očuvanju životne sredine i promociji obnovljivih izvora energije."
    },
    {
      title: "Profesionalnost",
      description: "Naš tim stručnjaka pruža vrhunsku uslugu i podršku u svakom trenutku."
    }
  ];

  const team = [
    {
      name: "Zoran Andjelić",
      position: "Generalni direktor",
      image: zoran,
      description: "15 godina iskustva u solarnoj industriji"
    },
    {
      name: "Boro Andjelić",
      position: "Tehnički direktor",
      image: boro,
      description: "Stručnjak za solarne sisteme"
    }
    
  ];

  const achievements = [
    {
      year: "2023",
      title: "Osnivanje kompanije",
      description: "Naša firma započinje svoje poslovanje s vizijom da doprinese razvoju održive energije u regionu."
    },
    {
      year: "2023",
      title: "Prvi uspešan projekat",
      description: "Realizovali smo naš prvi solarni projekt za komercijalni objekat, postavljajući temelje za budući razvoj."
    },
    {
      year: "2023",
      title: "Pokretanje inovativnih rešenja",
      description: "Predstavili smo prilagođena solarna rešenja za male i srednje preduzetnike."
    },
    {
      year: "2023",
      title: "Partnerstva i saradnje",
      description: "Uspešno smo ostvarili saradnju s renomiranim proizvođačima solarne opreme i lokalnim partnerima."
    },
    {
      year: "2024",
      title: "Širenje tima",
      description: "Povećali smo broj zaposlenih i uveli obuke kako bismo stvorili tim stručnjaka za obnovljive izvore energije."
    },
    {
      year: "2024",
      title: "Širenje kapaciteta",
      description: "Proširili smo kapacitet instalacija i ostvarili prisustvo u dodatnim regijama."
    },
    {
      year: "2024",
      title: "Inovacije u tehnologiji",
      description: "Pokrenuli smo istraživanja za uvođenje novih tehnologija, poput sistema za skladištenje energije."
    },
    {
      year: "2024",
      title: "Poverenje klijenata",
      description: "Realizovali smo projekte za više od 20 zadovoljnih klijenata, čime smo izgradili čvrstu reputaciju."
    },
    {
      year: "2024",
      title: "Doprinos zajednici",
      description: "Organizovali smo edukativne radionice o važnosti solarne energije u lokalnim zajednicama."
    }
  ];

  const certifications = [
    "ISO 9001:2015 - Sistem menadžmenta kvalitetom",
    "ISO 14001:2015 - Sistem upravljanja zaštitom životne sredine",
    "OHSAS 18001 - Sistem upravljanja bezbednošću i zdravljem na radu",
    "IEC 61215 - Standard za solarne module",
    "MCS sertifikat za solarne instalacije"
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Sekcija */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-green-600 via-green-700 to-green-900">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        O HIPERGRID-u
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto">
      Dobrodošli na zvanični sajt HIPERGRID, lidera u oblasti prodaje i ugradnje solarnih panela. Naša misija je pružiti vam najsvježiju i najefikasniju solarnu tehnologiju,
       koja ne samo da čini vaš dom ili poslovni prostor energetski efikasnijim, već doprinosi i očuvanju životne sredine.
      </p>
    </div>
  </div>
</section>

      {/* Naša Priča */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Naša Priča</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  HIPERGRID je osnovan 2009. godine sa jasnom vizijom: učiniti solarnu energiju dostupnom svima. Od tada smo izrasli u jednog od vodećih pružalaca solarnih rešenja u regionu.
                </p>
                <p>
                  Kroz godine predanog rada i kontinuiranog usavršavanja, razvili smo ekspertizu u dizajnu, instalaciji i održavanju solarnih sistema za domove i poslovne objekte.
                </p>
                <p>
                  Naša posvećenost kvalitetu i zadovoljstvu klijenata učinila nas je preferiranim izborom za hiljade domaćinstava i kompanija koje su se odlučile za prelazak na solarnu energiju.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="/about-image.jpg"
                alt="HIPERGRID Tim"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistike */}
      <section className="w-full py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naše Vrednosti */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Naše Vrednosti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naš Tim */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Naš Tim
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{member.name}</h3>
                <p className="text-green-600 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Naša Misija</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Naša misija je da omogućimo svakom domaćinstvu i poslovnom objektu pristup čistoj i održivoj energiji kroz inovativna solarna rešenja.
          </p>
          <p>
            Težimo ka tome da budemo pokretač energetske transformacije u Srbiji, promovišući održivi razvoj i energetsku nezavisnost.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Pružanje vrhunskih solarnih rešenja</li>
            <li>Edukacija o značaju obnovljivih izvora energije</li>
            <li>Smanjenje ugljeničnog otiska</li>
            <li>Podrška lokalnim zajednicama</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Naša Vizija</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Vizija HIPERGRID-a je da postane sinonim za inovacije u oblasti solarne energije i lider u energetskoj tranziciji ka održivoj budućnosti.
          </p>
          <p>
            Želimo da do 2030. godine omogućimo:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>100.000 domaćinstava sa solarnim sistemima</li>
            <li>Smanjenje emisije CO2 za 500.000 tona godišnje</li>
            <li>Kreiranje 1.000 novih radnih mesta u sektoru obnovljivih izvora energije</li>
            <li>Razvoj smart grid tehnologija za efikasniju distribuciju energije</li>
          </ul>
          <p className="mt-4">
            Verujemo u budućnost u kojoj je čista energija dostupna svima, a naša planeta zaštićena za buduće generacije.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Vremenska linija dostignuća */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Naša Dostignuća
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2"></div>
                  <div className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 rounded-full bg-green-600 border-4 border-white"></div>
                  <div className={`w-1/2 p-6 bg-white rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right mr-8' : 'ml-8'}`}>
                    <div className="text-green-600 font-bold mb-1">{achievement.year}</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikati i Priznanja */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Sertifikati i Priznanja
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Naši Sertifikati</h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-600">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-green-800 mb-6">Naša Stručnost</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Naši inženjeri i tehničari redovno pohađaju obuke i usavršavanja kako bi bili u toku sa najnovijim tehnologijama u oblasti solarne energije.
                </p>
                <p className="text-gray-600">
                  Sarađujemo sa vodećim svetskim proizvođačima opreme i kontinuirano unapređujemo naše procese rada.
                </p>
                <div className="mt-6">
                  <h4 className="font-bold text-green-800 mb-3">Oblasti ekspertize:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Projektovanje solarnih sistema</li>
                    <li>Energetska efikasnost</li>
                    <li>Smart home integracija</li>
                    <li>Održavanje solarnih sistema</li>
                    <li>Energetski menadžment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
      Strateška Lokacija za Solarnu Energiju
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Šajkaš - Solarna Raskrsnica Vojvodine
          </h3>
          <p className="text-gray-600">
            Smešteni u srcu Vojvodine, Šajkaš predstavlja idealnu lokaciju za centar solarne tehnologije zbog:
          </p>
          <ul className="mt-4 space-y-2 text-gray-600 list-disc list-inside">
            <li>Preko 2100 sunčanih sati godišnje</li>
            <li>Ravničarski teren pogodan za solarne instalacije</li>
            <li>Odlična povezanost sa svim većim gradovima</li>
            <li>Pristup ključnim transportnim rutama</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Povezanost sa Ključnim Lokacijama
          </h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center">
              <span className="font-bold mr-2">Novi Sad:</span> 25 km - 20 min
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">Beograd:</span> 60 km - 45 min
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">Zrenjanin:</span> 35 km - 30 min
            </li>
            <li className="flex items-center">
              <span className="font-bold mr-2">Subotica:</span> 90 km - 1h
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Logističke Prednosti
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Brz pristup autoputu E-75</li>
            <li>• Blizina međunarodnog aerodroma</li>
            <li>• Povezanost sa rečnim lukama na Dunavu i Tisi</li>
            <li>• Centralna lokacija za servisiranje cele Vojvodine</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Zašto je Ovo Važno za Vas?
          </h3>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Brza dostava opreme na vašu lokaciju</li>
            <li>✓ Efikasan servis i održavanje</li>
            <li>✓ Mogućnost brzog izlaska na teren</li>
            <li>✓ Smanjeni transportni troškovi</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Sekcija */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
  <div className="container mx-auto px-4 md:px-6 max-w-7xl">
    <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
      Gde nas možete naći
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-green-800">HIPERGRID Centrala</h3>
        <p className="text-gray-600">
          Nalazimo se u srcu Šajkaša, na idealnoj lokaciji za servisiranje cele Vojvodine i šire.
        </p>
        <div className="space-y-2">
          <p className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Solarna ulica 123, Šajkaš
          </p>
          <p className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +381 11 123 4567
          </p>
          <p className="flex items-center text-gray-600">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@hipergrid.rs
          </p>
        </div>
        <div className="mt-6">
          <h4 className="font-bold text-green-800 mb-2">Radno vreme:</h4>
          <p className="text-gray-600">Ponedeljak - Petak: 08:00 - 17:00</p>
          <p className="text-gray-600">Subota: 09:00 - 14:00</p>
          <p className="text-gray-600">Nedelja: Zatvoreno</p>
        </div>
      </div>
      <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22433.06970864678!2d20.065000799999998!3d45.27111115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b0f6b90c8f8a9%3A0x8dd0a21c9c31d91e!2z0KjQsNGY0LrQsNGI!5e0!3m2!1ssr!2srs!4v1709234567890!5m2!1ssr!2srs"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>
      
    </div>
  );
}