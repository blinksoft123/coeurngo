'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Heart, Phone, Mail, ChevronRight } from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/a-propos' },
    { name: 'Nos actions', href: '/nos-actions' },
    { name: 'Programmes', href: '/programmes' },
    { name: 'Partenaires', href: '/partenaires' },
    { name: 'Nos besoins', href: '/nos-besoins' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner with official badge and contacts */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-slate-300">
              {SITE_DATA.legalType}
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-400 font-mono text-[11px]">
              {SITE_DATA.legalDecision}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href={`tel:${SITE_DATA.phones[0].replace(/\s+/g, '')}`} 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_DATA.phones[0]}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href={`mailto:${SITE_DATA.email}`} 
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors hidden sm:flex"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{SITE_DATA.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm py-2.5'
            : 'bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link 
              href="/" 
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg"
              aria-label="Coeur Sans Frontière - Accueil"
            >
              <div className="relative w-11 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Logo officiel Coeur Sans Frontière"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-tight">
                  COEUR SANS FRONTIÈRE
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-emerald-700 tracking-wider uppercase">
                  Assistance & Bienfaisance • Yaoundé
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-700 font-semibold bg-emerald-50/80'
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-emerald-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button (Desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/nous-soutenir"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Nous soutenir</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/nous-soutenir"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Soutenir</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                aria-expanded={isOpen}
                aria-label="Ouvrir le menu de navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Flyout Drawer */}
        {isOpen && (
          <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-100px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-1 divide-y divide-slate-100">
              <div className="py-2 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-emerald-50 text-emerald-700 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA & Quick Info */}
              <div className="pt-4 space-y-3">
                <Link
                  href="/nous-soutenir"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-rose-600 hover:bg-rose-700 shadow-sm transition-all"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  <span>Faire un don ou s&apos;engager</span>
                </Link>

                <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs text-slate-600">
                  <p className="font-semibold text-slate-800">COEUR SANS FRONTIÈRE</p>
                  <p>{SITE_DATA.headquarters}</p>
                  <div className="flex flex-col gap-1 pt-1 text-slate-700 font-medium">
                    <a href={`tel:${SITE_DATA.phones[0].replace(/\s+/g, '')}`} className="flex items-center gap-1.5 text-emerald-700">
                      <Phone className="w-3.5 h-3.5" />
                      {SITE_DATA.phones[0]}
                    </a>
                    <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-1.5 text-emerald-700">
                      <Mail className="w-3.5 h-3.5" />
                      {SITE_DATA.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
