import React, { useState, useEffect } from 'react'
import {
  Sun, Zap, PiggyBank, Leaf, Star, Users, Package, ThumbsUp
} from 'lucide-react'
import { Link } from 'react-router-dom';
import Pocetna from '../gallery/1.jpg';
import Onama from '../gallery/17.png';
import panel from '../gallery/panel.png';
import panel1 from '../gallery/3.jpg';
import panel2 from '../gallery/4.jpg';
import panel3 from '../gallery/5.jpg';
import panel4 from '../gallery/16.png';
import panel5 from '../gallery/17.png';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const installationSteps = [
  {
    title: "Besplatna procena",
    description: "Naš stručni tim dolazi na vašu lokaciju i vrši detaljnu procenu krova, električne instalacije i vaših energetskih potreba.",
    icon: "🏠"
  },
  {
    title: "Dizajn sistema",
    description: "Kreiramo personalizovani plan instalacije prilagođen vašem objektu i potrebama za električnom energijom.",
    icon: "📐"
  },
  {
    title: "Profesionalna ugradnja",
    description: "Sertifikovani instalateri vrše montažu prema najvišim standardima, uz minimalno ometanje vašeg svakodnevnog života.",
    icon: "🛠️"
  },
  {
    title: "Tehnička podrška",
    description: "Nakon instalacije, pružamo 24/7 tehničku podršku i redovno održavanje vašeg solarnog sistema.",
    icon: "📞"
  }
];

export default function HomePage() {
  const [kwh, setKwh] = useState(0)
  const [savings, setSavings] = useState(0)
  const [stats, setStats] = useState({
    years: 0,
    productsSold: 0,
    happyCustomers: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        years: prevStats.years < 15 ? prevStats.years + 1 : 15,
        productsSold: prevStats.productsSold < 10000 ? prevStats.productsSold + 100 : 10000,
        happyCustomers: prevStats.happyCustomers < 5000 ? prevStats.happyCustomers + 50 : 5000
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const calculateSavings = () => {
    const annualSavings = kwh * 0.15 * 365
    setSavings(Math.round(annualSavings))
  }

  const [activeAccordion, setActiveAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  const faqData = [
    {
      question: "Koliko dugo traje instalacija HIPERGRID solarnih panela?",
      answer: "Instalacija HIPERGRID solarnih panela obično traje 1-3 dana, zavisno od veličine sistema i složenosti vašeg krova."
    },
    {
      question: "Da li HIPERGRID paneli rade tokom oblačnih dana?",
      answer: "Da, HIPERGRID solarni paneli su dizajnirani da proizvode električnu energiju čak i tokom oblačnih dana."
    },
    {
      question: "Koji je životni vek HIPERGRID solarnih panela?",
      answer: "HIPERGRID solarni paneli su projektovani da traju 25-30 godina, sa garancijama koje često pokrivaju 25 godina rada."
    }
  ]

  const productData = [
    {
      name: "HIPERGRID Pro",
      description: "Visoko efikasan panel za maksimalnu proizvodnju energije",
      efficiency: "23%",
      image: panel
    },
    {
      name: "HIPERGRID Flex",
      description: "Fleksibilni panel idealan za neravne površine",
      efficiency: "21%",
      image: panel
    },
    {
      name: "HIPERGRID Ultra",
      description: "Ultra tanki panel za moderan izgled",
      efficiency: "22%",
      image: panel
    }
  ]

  const whyChooseData = [
    {
      icon: Zap,
      title: "Vrhunska efikasnost",
      description: "Naši paneli koriste najnoviju tehnologiju za maksimalnu proizvodnju energije."
    },
    {
      icon: PiggyBank,
      title: "Dugoročna ušteda",
      description: "Ostvarujete značajne uštede na računima za struju uz minimalne troškove održavanja."
    },
    {
      icon: Leaf,
      title: "Ekološka održivost",
      description: "Svaki panel doprinosi smanjenju emisije CO2 i borbi protiv klimatskih promena."
    }
  ]

  const testimonialsData = [
    {
      name: "Ana Marković",
      comment: "HIPERGRID paneli su preporodili naše domaćinstvo. Računi za struju su nam se drastično smanjili!",
      rating: 5
    },
    {
      name: "Marko Petrović",
      comment: "Profesionalna ugradnja i izvanredan korisnički servis.",
      rating: 5
    },
    {
      name: "Jovana Nikolić",
      comment: "Sa HIPERGRID panelima, naša firma je postala energetski nezavisna.",
      rating: 5
    }
  ]

  const blogPostsData = [
    {
      id: 1,
      title: "Budućnost solarne energije",
      excerpt: "Otkrijte kako HIPERGRID revolucioniše solarnu industriju.",
      image: panel1
    },
    {
      id: 2,
      title: "Maksimiziranje efikasnosti panela",
      excerpt: "Praktični saveti za optimizaciju solarnih sistema.",
      image: panel2
    },
    {
      id: 3,
      title: "Zelena arhitektura",
      excerpt: "Integracija solarnih panela u moderno građevinarstvo.",
      image: panel3
    }
  ]

  return (
    <div className="flex flex-col min-h-screen ">


      <main className="flex-1">
        <div className='w-screen h-screen bg-gradient-radial from-green-600 via-green-700 to-green-900'>
        <section className="text-white relative flex items-center justify-center">
          <div className="container mx-auto items-center justify-center h-full">
            <div className="flex flex-col items-start text-left relative z-20 h-screen justify-center w-full md:w-1/2">
              <div className="space-y-2 text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-5" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', backgroundImage: 'radial-gradient(circle, rgb(255, 245, 142), rgb(187, 181, 0))', color: 'transparent' }}>
                  Energija budućnosti sa  HIPERGRID-om
                </h1>
                <p className="text-left mb-5">
                  Otkrijte moć sunca sa našim vrhunskim solarnim rešenjima.
                </p>
              </div>
              <div className="space-x-4 text-left mt-10">
                <a href="/onama" className="px-4 py-2 border border-white text-white rounded" style={{ background: 'radial-gradient(circle, rgb(223 220 55), rgb(187 175 13))' }}>
                  Saznajte više
                </a>
              </div>
            </div>
            <img src={panel4} alt="Pocetna slika" className="absolute top-20 right-0 sm:w-full md:w-auto h-full object-contain" />
          </div>
        </section>
        </div>

        <section className="w-screen py-12 bg-white flex items-center justify-center mt-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-green-800">
              O nama
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  HIPERGRID je vodeća kompanija u oblasti solarnih tehnologija, posvećena pružanju inovativnih i efikasnih rešenja za održivu energiju. 
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Naša misija je da učinimo čistu energiju dostupnom svima, od domaćinstava do velikih industrijskih postrojenja. Kroz kontinuirano istraživanje i razvoj, HIPERGRID postavlja nove standarde u efikasnosti i pouzdanosti solarnih sistema.
                </p>
                <Link
                  to="/o-nama"
                  className="px-4 py-2 border border-white text-white rounded hover:bg-green-500 bg-green-700"
                >
                  Saznajte više
                </Link>
              </div>
              <div className="relative h-[600px] rounded-lg overflow-hidden">
                <img
                  src={Onama}
                  alt="HIPERGRID Tim"
                  layout="fill"
                  objectFit="cover"
                 className=' h-full object-cover'/>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-center mb-8">
              Izračunajte svoje uštede
            </h2>
            <p className="text-xl mb-8">Saznajte koliko novca možete uštedeti instaliranjem solarnih panela.</p>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg mb-8">
              <h3 className="text-green-800 font-bold mb-4">Prosečna godišnja ušteda sa solarnim panelima</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={[
                    { mesec: 'Jan', usteda: 50, proizvodnja: 400 },
                    { mesec: 'Feb', usteda: 65, proizvodnja: 500 },
                    { mesec: 'Mar', usteda: 85, proizvodnja: 700 },
                    { mesec: 'Apr', usteda: 110, proizvodnja: 900 },
                    { mesec: 'Maj', usteda: 140, proizvodnja: 1100 },
                    { mesec: 'Jun', usteda: 160, proizvodnja: 1300 },
                    { mesec: 'Jul', usteda: 170, proizvodnja: 1400 },
                    { mesec: 'Avg', usteda: 155, proizvodnja: 1250 },
                    { mesec: 'Sep', usteda: 120, proizvodnja: 1000 },
                    { mesec: 'Okt', usteda: 90, proizvodnja: 750 },
                    { mesec: 'Nov', usteda: 60, proizvodnja: 500 },
                    { mesec: 'Dec', usteda: 45, proizvodnja: 350 }
                  ]}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="mesec" />
                  <YAxis yAxisId="left" label={{ value: 'Ušteda (EUR)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Proizvodnja (kWh)', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="usteda"
                    stroke="#16a34a"
                    name="Mesečna ušteda (EUR)"
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="proizvodnja"
                    stroke="#eab308"
                    name="Proizvodnja (kWh)"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <a
                href="./kalkulator"
                className="inline-block px-8 py-4 text-xl font-bold bg-yellow-400 text-green-800 rounded-lg hover:bg-yellow-500 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Izračunajte Vašu Uštedu
              </a>
            </div>
          </div>
        </section>




        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 text-center">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-20 text-green-800">
              Naši vrhunski solarni paneli
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8  " >
              {productData.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all relative overflow-visible mt-10"
                >
                  <div className="h-48 bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-70p absolute top-10  object-cover items-center"
                    style={{ transform: 'translateY(-60%)', zIndex: 1 ,width:'300px',margin: '10px' }}
                  /></div>
                  <div className="p-6 ">
                    <h3 className="text-xl font-bold mb-2 text-green-800">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-semibold">
                        Efikasnost: {product.efficiency}
                      </span>
                      <Link to="/proizvodi" onClick={() => window.scrollTo(0, 0)} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                        Pogledajte detalje
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">

          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Pomoć pri dobijanju subvencija
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                HIPERGRID vam pomaže da ostvarite maksimalne državne subvencije za ugradnju solarnih panela.
                Naš tim vas vodi kroz celokupan proces apliciranja i prikupljanja dokumentacije.
              </p>
              <Link
                to="/subvencije"
                onClick={() => window.scrollTo(0, 0)}
                className="px-8 py-3 bg-green-900 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Saznajte više o subvencijama
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-green-800">
              Zašto izabrati HIPERGRID solarne panele?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
              {whyChooseData.map((item, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-6 rounded-lg hover:shadow-lg transition-all mx-auto"
                >
                  <item.icon className="h-12 w-12 mb-4 text-green-600 mx-auto" />
                  <h3 className="text-xl font-bold mb-3 text-green-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>







        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 text-center">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-green-800">
              Često postavljana pitanja
            </h2>
            <div className="max-w-2xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-green-200 mb-4">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-4 flex justify-between items-center"
                  >
                    <span className="font-semibold text-green-800">{faq.question}</span>
                    <span>{activeAccordion === index ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === index && (
                    <div className="pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-green-800">
              HIPERGRID Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
              {blogPostsData.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all mx-auto"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-green-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                      className="block w-full py-2 bg-green-900 text-white rounded hover:opacity-90 transition-opacity"
                    >
                      Pročitaj više
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white text-center">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-12 text-green-800">
              Šta naši klijenti kažu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-6 rounded-lg shadow-md mx-auto"
                >
                  <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                  <div className="flex justify-center items-center">
                    <span className="font-semibold text-green-800">{testimonial.name}</span>
                    <div className="flex ml-4 text-yellow-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>




        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 text-center mx-auto">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                Profesionalna ugradnja solarnih panela
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                HIPERGRID pruža kompletan servis - od inicijalnog planiranja do završne instalacije.
                Naš tim sertifikovanih stručnjaka garantuje najviši kvalitet ugradnje i maksimalnu efikasnost vašeg solarnog sistema.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mx-auto">
              {installationSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center mx-auto"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-600 text-white rounded-lg p-8 text-center mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Zašto izabrati HIPERGRID instalaciju?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mx-auto">
                <div>
                  <h4 className="font-semibold mb-2">Sertifikovani instalateri</h4>
                  <p>Naš tim poseduje sve potrebne sertifikate i dozvole za profesionalnu ugradnju solarnih sistema.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">25 godina garancije na solarne panele</h4>
                  <p>Pružamo garanciju 25 godina na solarne panele</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Brza instalacija</h4>
                  <p>Većinu instalacija završavamo u roku od 1-3 dana, uz minimalno ometanje vašeg svakodnevnog života.</p>
                </div>
              </div>
              <button className="bg-yellow-400 text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors mx-auto">
                Zakažite besplatnu procenu
              </button>
            </div>


          </div>
        </section>
      </main>




      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-green-600 via-green-700 to-green-900 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Kontaktirajte HIPERGRID tim
          </h2>
          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Unesite vaše ime"
              className="w-full px-3 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Unesite vašu email adresu"
              className="w-full px-3 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="tel"
              placeholder="Unesite vaš broj telefona"
              className="w-full px-3 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              placeholder="Unesite vašu poruku"
              className="w-full px-3 py-2 bg-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="w-full py-2 bg-yellow-400 text-green-800 rounded hover:bg-yellow-500 transition-colors"
            >
              Pošaljite upit
            </button>
          </form>
        </div>
      </section>

    </div>
  )
}
