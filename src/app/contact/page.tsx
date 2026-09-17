'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ShieldCheck, 
  Building2,
  Heart
} from 'lucide-react';
import { SITE_DATA } from '@/data/siteData';
import SectionHeader from '@/components/SectionHeader';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const motifParam = searchParams.get('motif');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (motifParam) {
      const subjectMap: Record<string, string> = {
        'don-materiel': 'Proposition de don en nature / matériel',
        'parrainage-scolaire': 'Parrainage scolaire / Financement pension',
        'partenariat': 'Proposition de partenariat institutionnel',
        'benevolat': 'Candidature bénévole / Encadrement terrain',
        'don-financier': 'Demande des modalités de soutien financier',
      };
      if (subjectMap[motifParam]) {
        setFormData((prev) => ({ ...prev, subject: subjectMap[motifParam] }));
      }
    }
  }, [motifParam]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est obligatoire.';
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse email valide.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est obligatoire.';
    if (!formData.message.trim()) newErrors.message = 'Le message est obligatoire.';
    else if (formData.message.length < 10) newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setServerError(data.error || 'Une erreur est survenue.');
      }
    } catch (err) {
      setServerError('Erreur de connexion au serveur. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Col 1: Contact Details & Schedule (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 relative z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-emerald-300 border border-white/20 inline-block">
              Permanence Officielle
            </span>
            <h3 className="text-2xl font-black text-white">
              CŒURS SANS FRONTIÈRES
            </h3>
            <p className="text-xs text-slate-300">
              {SITE_DATA.legalType}
            </p>
          </div>

          <div className="space-y-5 pt-4 border-t border-white/10 text-sm relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs uppercase tracking-wider">Siège Social</p>
                <p className="text-slate-300 text-sm mt-0.5">{SITE_DATA.headquarters}</p>
                <p className="text-slate-400 text-xs mt-0.5">Secteur Mballa II & Nkozoa</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs uppercase tracking-wider">Lignes Téléphoniques</p>
                <div className="space-y-1 mt-1 text-sm">
                  <a href={`tel:${SITE_DATA.phones[0].replace(/\s+/g, '')}`} className="block text-emerald-300 hover:text-emerald-200 transition-colors font-medium">
                    {SITE_DATA.phones[0]}
                  </a>
                  <a href={`tel:${SITE_DATA.phones[1].replace(/\s+/g, '')}`} className="block text-emerald-300 hover:text-emerald-200 transition-colors font-medium">
                    {SITE_DATA.phones[1]}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs uppercase tracking-wider">Courrier Électronique</p>
                <a href={`mailto:${SITE_DATA.email}`} className="text-slate-200 hover:text-emerald-300 transition-colors text-sm font-mono mt-0.5 block">
                  {SITE_DATA.email}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs text-slate-400 relative z-10">
            <span className="font-mono text-emerald-400 font-bold block">{SITE_DATA.legalDecision}</span>
            <span>Association déclarée et reconnue d&apos;utilité sociale au Cameroun.</span>
          </div>
        </div>

        {/* Quick info card */}
        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200/80 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-700" />
            <span>Réception des dons de matériel</span>
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed">
            Les dépôts de fournitures scolaires, matières premières de savonnerie et vêtements s&apos;effectuent sur rendez-vous au siège social à Yaoundé.
          </p>
        </div>
      </div>

      {/* Col 2: Interactive Form (7 cols) */}
      <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-lg space-y-6">
        <div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            Envoyez-nous un message
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Remplissez ce formulaire pour toute question, proposition de partenariat ou engagement solidaire.
          </p>
        </div>

        {submitSuccess && (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in">
            <div className="flex items-center gap-2 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              <span>Message envoyé avec succès !</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700">
              Merci pour votre engagement. Les membres du bureau de Cœurs Sans Frontières ont bien reçu votre correspondance et vous répondront dans les meilleurs délais.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="text-xs font-bold text-emerald-700 underline pt-1"
            >
              Envoyer un autre message
            </button>
          </div>
        )}

        {serverError && (
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{serverError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nom */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Nom complet <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Paul Mbarga"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.name ? 'border-rose-500 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
                }`}
              />
              {errors.name && <p className="text-[11px] text-rose-600">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Adresse email <span className="text-rose-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Ex: contact@exemple.cm"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? 'border-rose-500 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
                }`}
              />
              {errors.email && <p className="text-[11px] text-rose-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Téléphone */}
            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Téléphone / WhatsApp
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ex: +237 699 00 00 00"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 transition-all"
              />
            </div>

            {/* Sujet */}
            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Sujet du message <span className="text-rose-600">*</span>
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Ex: Proposition de partenariat"
                className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.subject ? 'border-rose-500 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
                }`}
              />
              {errors.subject && <p className="text-[11px] text-rose-600">{errors.subject}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
              Message <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Précisez votre demande, vos coordonnées ou les détails de votre proposition..."
              className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.message ? 'border-rose-500 focus:ring-rose-200' : 'border-slate-300 focus:border-emerald-600 focus:ring-emerald-100'
              }`}
            />
            {errors.message && <p className="text-[11px] text-rose-600">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 disabled:opacity-50 shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Envoi en cours...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            Écoute & Disponibilité
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Nous Contacter
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Notre permanence à Yaoundé se tient à votre disposition pour répondre à vos questions et organiser vos contributions.
          </p>
        </div>
      </section>

      {/* Main Content with Suspense for searchParams */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-12 text-slate-500 text-sm">Chargement du formulaire de contact...</div>}>
            <ContactFormInner />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
