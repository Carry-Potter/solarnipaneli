import React, { useState } from 'react';
import { useCart } from '../context/CartContex';
import emailjs from '@emailjs/browser';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const total = cart.reduce((sum, item) => sum + (parseFloat(item.cena.replace('Od ', '').replace(' EUR', '').replace(',', '.')) * item.quantity), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderDetails = cart.map(item => 
      `${item.naziv} - Količina: ${item.quantity} - Cena: ${parseFloat(item.cena.replace('Od ', '').replace(' EUR', '').replace(',', '.')) * item.quantity} RSD`
    ).join('\n');

    const total = cart.reduce((sum, item) => sum + (parseFloat(item.cena.replace('Od ', '').replace(' EUR', '').replace(',', '.')) * item.quantity), 0);

    const templateParams = {
      to_email: customerInfo.email,
      from_name: 'HIPERGRID',
      to_name: customerInfo.name,
      phone: customerInfo.phone,
      address: customerInfo.address,
      order_details: orderDetails,
      total: total.toFixed(2),
    };

    try {
      await emailjs.send(
        'service_j391b5k',
        'template_im07wf1',
        templateParams,
        'd_4Dy25C7dr6LQu2s'
      );
      alert('Porudžbina je uspešno poslata!');
      clearCart();
    } catch (error) {
      alert('Došlo je do greške prilikom slanja porudžbine.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-screen w-screen">
      <h2 className="text-2xl font-bold mb-6">Korpa</h2>
      
      {cart.length === 0 ? (
        <p>Vaša korpa je prazna</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="flex items-center gap-4 mb-4 p-4 bg-white rounded-lg shadow">
              <img src={item.slika} alt={item.naziv} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-bold">{item.naziv}</h3>
                <p className="text-gray-600">{item.cena} RSD</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Ukloni
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Informacije o kupcu</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1">Ime i prezime</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={customerInfo.name}
                  onChange={e => setCustomerInfo({...customerInfo, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full p-2 border rounded"
                  value={customerInfo.email}
                  onChange={e => setCustomerInfo({...customerInfo, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">Telefon</label>
                <input
                  type="tel"
                  required
                  className="w-full p-2 border rounded"
                  value={customerInfo.phone}
                  onChange={e => setCustomerInfo({...customerInfo, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="block mb-1">Adresa</label>
                <textarea
                  required
                  className="w-full p-2 border rounded"
                  value={customerInfo.address}
                  onChange={e => setCustomerInfo({...customerInfo, address: e.target.value})}
                />
              </div>
              
              <div className="text-xl font-bold mt-4">
                Ukupno: {total} RSD
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-radial from-custom-green via-custom-green/80 to-green-900 text-white rounded hover:opacity-90 transition-opacity"
              >
                Pošalji porudžbinu
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;