import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Calculator, Info, FileText, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContex';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: 'Početna', path: '/', icon: Sun },
    { name: 'Kalkulator', path: '/kalkulator', icon: Calculator },
    { name: 'Proizvodi', path: '/proizvodi', icon: FileText },
    { name: 'Subvencije', path: '/subvencije', icon: FileText },
    { name: 'O nama', path: '/onama', icon: Info },
    { name: 'Korpa', path: '/cart', icon: ShoppingCart, badge: itemCount }
  ];

  return (
    <nav className="bg-gradient-radial fixed w-full bg-custom-green via-custom-green/80 to-green-900 shadow-lg" style={{ zIndex: 200 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-bold">HIPERGRID</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white hover:bg-green-500 px-3 py-2 rounded-md text-sm font-medium flex items-center relative"
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                  {item.badge && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:bg-green-500 block px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
       
    </nav>
  );
}