'use client';

import { useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const steps = ['industry', 'features', 'content', 'timeline', 'contact', 'review', 'thankyou'];

type SummaryField = 'industry' | 'features' | 'contentReady' | 'timeline';

export default function QuoteForm() {
  const [step, setStep] = useState('industry');
  const [expandedField, setExpandedField] = useState('');
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [formData, setFormData] = useState({
    industry: '',
    industryOther: '',
    features: [] as string[],
    featureOther: '',
    contentReady: '',
    timeline: '',
    name: '',
    email: '',
    notes: '',
  });

  const next = () => {
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const toggleFeature = (value: string) => {
    setFormData(prev => {
      const exists = prev.features.includes(value);
      const features = exists
        ? prev.features.filter(f => f !== value)
        : [...prev.features, value];
      return { ...prev, features };
    });
  };

  const toggleExpand = (field: SummaryField) => {
    setExpandedField(expandedField === field ? '' : field);
  };

  const updateField = (field: SummaryField, value: string) => {
    if (field === 'features') {
      toggleFeature(value);
    } else {
      setFormData({ ...formData, [field]: value });
      setExpandedField('');
    }
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>, field: string) => {
    if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
      e.preventDefault();
      if (field === 'industryOther') {
        setFormData(prev => ({ ...prev, industry: prev.industryOther }));
        next();
      }
      if (field === 'featureOther') {
        setFormData(prev => ({
          ...prev,
          features: [...prev.features, prev.featureOther],
          featureOther: '',
        }));
        next();
      }
    }
  };

  const handleSubmit = async () => {
    await fetch('/api/sendQuoteEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setStep('thankyou');
  };

  const summaryFields: { label: string; field: SummaryField; options: string[] }[] = [
    { label: 'Business Type', field: 'industry', options: ['Local Service', 'Creative', 'E-commerce', 'Hospitality', 'Other'] },
    { label: 'Features', field: 'features', options: ['Booking System', 'Portfolio', 'Online Payments', 'Blog', 'Quote Form', 'Just Info'] },
    { label: 'Content Readiness', field: 'contentReady', options: ['Yes, all ready', 'Some of it', 'Not yet'] },
    { label: 'Timeline', field: 'timeline', options: ['ASAP', '2–4 Weeks', '1–2 Months', 'Flexible'] }
  ];

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {step === 'industry' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-serif text-gold mb-6">What type of business do you run?</h1>
            <div className="grid gap-4">
              {['Local Service', 'Creative', 'E-commerce', 'Hospitality', 'Other'].map(opt => (
                <button
                  key={opt}
                  onClick={() => {
                    if (opt === 'Other') {
                      setIsOtherSelected(true);
                      setFormData(prev => ({ ...prev, industry: '' }));
                    } else {
                      setIsOtherSelected(false);
                      setFormData(prev => ({ ...prev, industry: opt }));
                      next();
                    }
                  }}
                  className={`border border-gold py-3 rounded transition-all ${
                    (formData.industry === opt || (opt === 'Other' && isOtherSelected))
                      ? 'bg-gold text-black'
                      : 'text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  {opt}
                </button>
              ))}

              {isOtherSelected && (
                <>
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={formData.industryOther}
                    className="w-full p-3 bg-zinc-900 border border-gold rounded text-white"
                    onChange={e => setFormData({ ...formData, industryOther: e.target.value })}
                    onKeyDown={e => handleEnterKey(e, 'industryOther')}
                  />
                  {formData.industryOther.trim() !== '' && (
                    <button
                      onClick={() => {
                        setFormData(prev => ({ ...prev, industry: prev.industryOther }));
                        next();
                      }}
                      className="mt-4 bg-gold text-black px-6 py-3 rounded shadow-gold hover:glow-on-hover transition-all"
                    >
                      Proceed
                    </button>
                  )}
                </>
              )}
            </div>
          </motion.div>
        )}

        {step === 'features' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-serif text-gold mb-6">What website integrations are you looking for?</h1>
            <div className="grid gap-4">
              {['Booking System', 'Portfolio', 'Online Payments', 'Blog', 'Quote Form', 'Just Info'].map(opt => (
                <button
                  key={opt}
                  onClick={() => toggleFeature(opt)}
                  className={`border border-gold py-3 rounded transition-all ${
                    formData.features.includes(opt) ? 'bg-gold text-black' : 'text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  {opt}
                </button>
              ))}
              <input
                type="text"
                placeholder="Other feature"
                value={formData.featureOther}
                onChange={e => setFormData({ ...formData, featureOther: e.target.value })}
                onKeyDown={e => handleEnterKey(e, 'featureOther')}
                className="w-full p-3 bg-zinc-900 border border-gold rounded text-white"
              />
            </div>
            {formData.features.length > 0 && (
              <button onClick={next} className="mt-6 bg-gold text-black px-6 py-3 rounded shadow-gold hover:glow-on-hover transition-all">
                Proceed
              </button>
            )}
          </motion.div>
        )}

        {step === 'content' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-serif text-gold mb-6">Do you already have your content ready?</h1>
            <div className="grid gap-4">
              {['Yes, all ready', 'Some of it', 'Not yet'].map(opt => (
                <button
                  key={opt}
                  onClick={() => { setFormData({ ...formData, contentReady: opt }); next(); }}
                  className="border border-gold text-gold py-3 rounded hover:bg-gold hover:text-black transition-all"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'timeline' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-serif text-gold mb-6">When would you like to go live?</h1>
            <div className="grid gap-4">
              {['ASAP', '2–4 Weeks', '1–2 Months', 'Flexible'].map(opt => (
                <button
                  key={opt}
                  onClick={() => { setFormData({ ...formData, timeline: opt }); next(); }}
                  className="border border-gold text-gold py-3 rounded hover:bg-gold hover:text-black transition-all"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'contact' && (
          <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={e => {
            e.preventDefault(); next();
          }} className="space-y-4">
            <h1 className="text-4xl font-serif text-gold mb-6">How can we reach you?</h1>
            <input required placeholder="Your name" className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
              onChange={e => setFormData({ ...formData, name: e.target.value })} />
            <input required type="email" placeholder="Email address" className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
              onChange={e => setFormData({ ...formData, email: e.target.value })} />
            <textarea placeholder="Tell us anything else you'd like..." className="w-full p-3 bg-zinc-900 border border-zinc-700 rounded text-white"
              onChange={e => setFormData({ ...formData, notes: e.target.value })} />
            <button type="submit" className="bg-gold text-black px-6 py-3 rounded shadow-gold hover:glow-on-hover transition-all">
              Proceed to Summary
            </button>
          </motion.form>
        )}

        {step === 'review' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-serif text-gold mb-6">Confirm your details</h1>
            <div className="text-left mt-10 space-y-2 border-t border-zinc-800 pt-6">
              <h2 className="text-2xl font-serif text-gold mb-4">Your Selections</h2>
              {summaryFields.map(({ label, field, options }) => {
                const value = formData[field];
                return (
                  <div key={field} className="border-b border-zinc-700 pb-2 mb-2">
                    <div className="flex justify-between items-center">
                      <span>{label}:</span>
                      <div className="flex items-center gap-2">
                        <span className="text-gold">
                          {Array.isArray(value) ? value.join(', ') : value}
                        </span>
                        <button type="button" onClick={() => toggleExpand(field)}>
                          <ChevronDown className="w-4 h-4 text-gold" />
                        </button>
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedField === field && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-2">
                          {options.map(opt => (
                            <button key={opt} onClick={() => updateField(field, opt)} className="block w-full text-left px-4 py-2 hover:bg-zinc-800 text-white">{opt}</button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              <button onClick={handleSubmit} className="mt-6 bg-gold text-black px-6 py-3 rounded shadow-gold hover:glow-on-hover transition-all">
                Submit My Request
              </button>
            </div>
          </motion.div>
        )}

        {step === 'thankyou' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-4xl font-serif text-gold mb-4">Thank you!</h1>
            <p>We’ve received your information and will be in touch shortly.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
