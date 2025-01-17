import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Home, Building, Factory } from 'lucide-react';
import L from 'leaflet';

// Fix za marker ikonicu
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LocationMarker({ onLocationSelect }) {
  const [position, setPosition] = useState(null);
  
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onLocationSelect(e.latlng);
    },
  });

  return position === null ? null : <Marker position={position} />;
}

export default function Kalkulator() {
  const [formData, setFormData] = useState({
  
  });

  const [rezultati, setRezultati] = useState(null);

  const handleLocationSelect = (latlng) => {
    setFormData(prev => ({
      ...prev,
      lokacija: latlng
    }));
  };

  const calculateResults = () => {
    // Osnovni parametri sistema
    const snagaPanela = 0.4; // kW po panelu
    const povrsinaPanela = 2; // m² po panelu
    const brojPanela = Math.ceil(Number(formData.povrsinaKrova) / povrsinaPanela);
    const ukupnaSnaga = brojPanela * snagaPanela;
    
    // Proizvodnja energije
    const prosecnaGodisnjaProzvodnja = ukupnaSnaga * 1250; // kWh godišnje
    
    // Finansijski proračun
    const cenaPoKw = 1050; // EUR
    const investicija = ukupnaSnaga * cenaPoKw;
    const godisnjaUsteda = prosecnaGodisnjaProzvodnja * 0.08; // 0.08 EUR po kWh
    const periodOtplate = investicija / godisnjaUsteda;
    
    // CO2 redukcija
    const co2PoKwh = 0.7; // kg CO2 po kWh
    const godisnjaCo2Redukcija = prosecnaGodisnjaProzvodnja * co2PoKwh;
    
    return {
      snagaSistema: ukupnaSnaga.toFixed(1),
      pokrivenostPotrosnje: ((prosecnaGodisnjaProzvodnja / formData.godisnjaPostrosnja) * 100).toFixed(0),
      iskoriscenostProstora: ((brojPanela * povrsinaPanela / formData.povrsinaKrova) * 100).toFixed(0),
      investicija: Math.round(investicija),
      periodIsplativosti: Math.round(periodOtplate),
      ukupnaUsteda: Math.round(godisnjaUsteda * 25), // za 25 godina
      co2Redukcija: Math.round(godisnjaCo2Redukcija * 25), // za 25 godina
      godisnjaUsteda: Math.round(godisnjaUsteda),
      godisnjaUstedaEnergije: Math.round(prosecnaGodisnjaProzvodnja),
      trokoviOdrzavanja: Math.round(investicija * 0.02), // 2% investicije godišnje
      potrebneDimenzije: (brojPanela * povrsinaPanela).toFixed(1)
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = calculateResults();
    setRezultati(results);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero sekcija */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-radial from-green-600 via-green-700 to-green-900">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-shadow">Solarni Kalkulator</h1>
          <p className="text-xl">Izračunajte potencijalnu uštedu sa solarnim panelima</p>
        </div>
      </section>

      {/* Forma */}
      <section className="container mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
          {/* Mapa */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">Izaberite lokaciju</label>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <MapContainer
                center={[44.787197, 20.457273]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />
                <LocationMarker onLocationSelect={handleLocationSelect} />
              </MapContainer>
            </div>
          </div>

          {/* Tip Korisnika */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">Tip Korisnika</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                className={`p-4 rounded-lg flex flex-col items-center justify-center transition-colors ${
                  formData.tipKorisnika === 'domacinstvo' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 hover:bg-green-100'
                }`}
                onClick={() => setFormData({...formData, tipKorisnika: 'domacinstvo'})}
              >
                <Home className="w-8 h-8 mb-2" />
                <span>Domaćinstvo</span>
              </button>
              <button
                type="button"
                className={`p-4 rounded-lg flex flex-col items-center justify-center transition-colors ${
                  formData.tipKorisnika === 'privreda' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 hover:bg-green-100'
                }`}
                onClick={() => setFormData({...formData, tipKorisnika: 'privreda'})}
              >
                <Building className="w-8 h-8 mb-2" />
                <span>Privreda</span>
              </button>
              <button
                type="button"
                className={`p-4 rounded-lg flex flex-col items-center justify-center transition-colors ${
                  formData.tipKorisnika === 'industrija' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-green-50 hover:bg-green-100'
                }`}
                onClick={() => setFormData({...formData, tipKorisnika: 'industrija'})}
              >
                <Factory className="w-8 h-8 mb-2" />
                <span>Industrija</span>
              </button>
            </div>
          </div>

          {/* Površina Krova */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">
              Kolika je površina krova? (m²)
            </label>
            <div className="relative">
              <input
                type="number"
                required
                min="1"
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.povrsinaKrova}
                onChange={(e) => setFormData({...formData, povrsinaKrova: e.target.value})}
                placeholder="Unesite površinu krova"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                m²
              </span>
            </div>
          </div>

          {/* Materijal Krova */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">
              Od kog materijala je krov?
            </label>
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.materijalKrova}
              onChange={(e) => setFormData({...formData, materijalKrova: e.target.value})}
            >
              <option value="">Izaberite materijal</option>
              <option value="crep">Crep</option>
              <option value="lim">Lim</option>
              <option value="tegola">Tegola</option>
              <option value="ravan">Ravan krov</option>
              <option value="drugo">Drugo</option>
            </select>
          </div>

          {/* Orijentacija */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">
              Na kojoj strani sveta se montira sistem?
            </label>
            <select
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={formData.orijentacija}
              onChange={(e) => setFormData({...formData, orijentacija: e.target.value})}
            >
              <option value="">Izaberite orijentaciju</option>
              <option value="jug">Jug</option>
              <option value="jugoistok">Jugoistok</option>
              <option value="jugozapad">Jugozapad</option>
              <option value="istok">Istok</option>
              <option value="zapad">Zapad</option>
              <option value="sever">Sever</option>
            </select>
          </div>

          {/* Godišnja Potrošnja */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">
              Koja je vaša godišnja potrošnja struje u kWh?
            </label>
            <div className="relative">
              <input
                type="number"
                required
                min="1"
                className="w-full p-3 pr-16 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.godisnjaPostrosnja}
                onChange={(e) => setFormData({...formData, godisnjaPostrosnja: e.target.value})}
                placeholder="Unesite godišnju potrošnju"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                kWh
              </span>
            </div>
          </div>

          {/* Procenat Više Tarife */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <label className="block text-lg font-semibold mb-4">
              Koliki je vaš procenat potrošnje električne energije u višoj tarifi?
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="100"
                className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={formData.procenatViseTraife}
                onChange={(e) => setFormData({...formData, procenatViseTraife: e.target.value})}
                placeholder="Podrazumevano 80%"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                %
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Na početku druge strane računa za električnu energiju možete pronaći ovaj podatak za poslednji mesec.
              Ukoliko ne unesete, koristiće se podrazumevana vrednost od 80%.
            </p>
          </div>

          {/* Dugme za Izračunavanje */}
          <button
            type="submit"
            className="w-full py-4 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-colors focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
          >
            Izračunaj
          </button>
        </form>
      </section>

      {/* Rezultati */}
      {rezultati && (
  <section className="container mx-auto px-4 py-12">
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Rezultati za sistem od {rezultati.snagaSistema}kW
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.pokrivenostPotrosnje}%
          </h3>
          <p className="text-gray-600">Pokrivenost potrošnje</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.iskoriscenostProstora}%
          </h3>
          <p className="text-gray-600">Iskorišćenost prostora</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.investicija} EUR
          </h3>
          <p className="text-gray-600">Procena investicione vrednosti sistema</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.periodIsplativosti} god
          </h3>
          <p className="text-gray-600">Period isplativosti solarnog sistema</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.ukupnaUsteda} EUR
          </h3>
          <p className="text-gray-600">Ukupna ušteda za životni vek</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.co2Redukcija} t
          </h3>
          <p className="text-gray-600">Smanjenje emisije CO2 za životni vek</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.godisnjaUsteda} EUR
          </h3>
          <p className="text-gray-600">Ušteda troškova na godišnjem nivou</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.godisnjaUstedaEnergije}kWh
          </h3>
          <p className="text-gray-600">Ušteda energije na godišnjem nivou</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.trokoviOdrzavanja} EUR
          </h3>
          <p className="text-gray-600">Troškovi održavanja na godišnjem nivou</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-4xl font-bold text-green-800 mb-2">
            {rezultati.potrebneDimenzije} m²
          </h3>
          <p className="text-gray-600">Potrebne dimenzije sistema</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-bold mb-4">Napomene</h3>
        <ul className="space-y-2 text-gray-600">
          <li>Garantni rok solarnih fotonaponskih panela je 25 godina, dok je garantni rok invertora 10-ak godina.</li>
          <li>Imajte u vidu da je ovo procena, koja može da varira. Tačne vrednosti zavise od samog objekta, postojanja senki, nagiba krova i okrenutosti objekta, što se utvrđuje tek nakon pregleda od starne izvođača.</li>
          <li>Proračun ne uključuje obračun PDV-a i akciza, već obuhvata samo cenu troškova aktivne energije koju je moguće uštedeti na godišnjem nivou.</li>
          <li>Poželjna orijentacija krova je ka jugu. Ukoliko je objekat/krov orijentisan ka zapadu/istoku/severu, poželjno je instalirati panele sa smanjenim nagibom.</li>
        </ul>
      </div>
    </div>
  </section>
)}
    </div>
  );
}