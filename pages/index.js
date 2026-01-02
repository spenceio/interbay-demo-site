import React, { useState } from 'react';
import Head from 'next/head';
import { ArrowRight, Sparkles, Beaker, Users, BookOpen, Check, Globe, Leaf, Code, Microscope } from 'lucide-react';

export default function InterbayLabsLanding() {
  const [selectedTLD, setSelectedTLD] = useState('org');

  // Replace these with your actual GoDaddy lander URLs
  const BUY_NOW_URL_ORG = "https://www.godaddy.com/domainsearch/find?domainToCheck=interbaylabs.org";
  const BUY_NOW_URL_COM = "https://www.godaddy.com/domainsearch/find?domainToCheck=interbaylabs.com";
  const MAKE_OFFER_URL_ORG = "https://www.godaddy.com/domainsearch/find?domainToCheck=interbaylabs.org";
  const MAKE_OFFER_URL_COM = "https://www.godaddy.com/domainsearch/find?domainToCheck=interbaylabs.com";
  const BUNDLE_URL = "mailto:domains@spence.io?subject=InterbayLabs Bundle Inquiry";

  const pricing = {
    org: {
      buyNow: 450,
      minOffer: 280,
      lease: 23,
      tld: '.org'
    },
    com: {
      buyNow: 2200,
      minOffer: 1300,
      lease: 110,
      tld: '.com'
    }
  };

  const current = pricing[selectedTLD];

  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>InterbayLabs - Research Infrastructure Domain</title>
        <meta name="description" content="InterbayLabs.org and .com available for purchase - Perfect for research institutions, non-profits, and R&D organizations" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 text-white">
        {/* Top Banner */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-700 text-white py-3 px-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles size={20} className="animate-pulse" />
              <span className="font-semibold">Domain available for research institutions</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm opacity-90">InterbayLabs.org & .com</span>
              <span className="text-sm font-bold">From $450</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-12 w-full bg-slate-950/90 backdrop-blur-lg z-40 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <Beaker size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">InterbayLabs</span>
            </div>
            <a href="https://spence.io" className="text-sm text-gray-400 hover:text-white transition-colors">
              ← Back to Spence.io
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-40 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-1.5 bg-emerald-600/20 border border-emerald-600/30 rounded-full text-sm text-emerald-300">
                <span className="flex items-center gap-2">
                  <Beaker size={14} className="animate-pulse" />
                  Research infrastructure for the public good
                </span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Enable breakthrough<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">research and discovery</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                InterbayLabs provides the digital foundation for academic research institutions, 
                non-profit laboratories, and open-source initiatives advancing science and knowledge.
              </p>

              {/* Demo Disclaimer */}
              <div className="mb-8 p-4 bg-yellow-900/20 border border-yellow-600/30 rounded-lg max-w-2xl mx-auto">
                <p className="text-sm text-yellow-200">
                  ⚠️ This page is for demonstration purposes only and does not represent an actual company.
                </p>
              </div>

              {/* TLD Selector */}
              <div className="flex justify-center gap-4 mb-8">
                <button
                  onClick={() => setSelectedTLD('org')}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                    selectedTLD === 'org'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
                >
                  InterbayLabs.org
                  <div className="text-xs mt-1 opacity-80">For non-profits & academia</div>
                </button>
                <button
                  onClick={() => setSelectedTLD('com')}
                  className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                    selectedTLD === 'com'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
                >
                  InterbayLabs.com
                  <div className="text-xs mt-1 opacity-80">For research commercialization</div>
                </button>
              </div>

              <div className="text-sm text-gray-500 mb-8">
                Or secure both domains with our bundle offer ↓
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 blur-3xl"></div>
              <div className="relative bg-slate-900/50 border border-white/10 rounded-2xl p-12 backdrop-blur">
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Microscope size={32} className="text-emerald-400" />
                    </div>
                    <div className="text-lg font-bold mb-2">Biotech Research</div>
                    <div className="text-sm text-gray-400">Genomics, proteomics, drug discovery</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Leaf size={32} className="text-teal-400" />
                    </div>
                    <div className="text-lg font-bold mb-2">Climate Science</div>
                    <div className="text-sm text-gray-400">Environmental modeling, sustainability</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code size={32} className="text-cyan-400" />
                    </div>
                    <div className="text-lg font-bold mb-2">Open Source</div>
                    <div className="text-sm text-gray-400">Developer tools, libraries, platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <BookOpen size={32} className="text-blue-400" />
                    </div>
                    <div className="text-lg font-bold mb-2">AI Safety</div>
                    <div className="text-sm text-gray-400">Alignment research, ethics, governance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6 bg-slate-950/80">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Supporting research that matters</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-emerald-950/50 to-slate-950 border border-emerald-600/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Microscope className="text-emerald-400" size={24} />
                  <h3 className="text-2xl font-bold">University Research Labs</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Academic research groups studying genomics, computational biology, and life sciences. 
                  InterbayLabs.org provides institutional credibility for grant applications.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    NSF/NIH grant-ready domain
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    .org signals non-profit status
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Professional email addresses
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-teal-950/50 to-slate-950 border border-teal-600/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="text-teal-400" size={24} />
                  <h3 className="text-2xl font-bold">Climate Research Institutes</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Non-profit organizations focused on climate modeling, carbon capture, and environmental 
                  science. Build public trust with a .org domain.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Foundation funding credibility
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Public data sharing platform
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Academic collaboration hub
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-cyan-950/50 to-slate-950 border border-cyan-600/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-cyan-400" size={24} />
                  <h3 className="text-2xl font-bold">Open Source Foundations</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Developer communities building open-source tools, libraries, and platforms. 
                  InterbayLabs.org conveys community-driven, non-commercial values.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Community trust and transparency
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    GitHub organization hosting
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Documentation and API sites
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-blue-950/50 to-slate-950 border border-blue-600/30 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-400" size={24} />
                  <h3 className="text-2xl font-bold">AI Safety Research</h3>
                </div>
                <p className="text-gray-400 mb-6">
                  Independent research initiatives studying AI alignment, ethics, and governance. 
                  Position as serious, mission-driven research with .org credibility.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Academic partnership credibility
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Policy research publishing
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Grant application strengthening
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why .org vs .com */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Choosing your domain</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-slate-900/50 border-2 border-emerald-600 rounded-xl">
                <div className="text-center mb-6">
                  <div className="text-emerald-400 font-mono text-2xl mb-2">InterbayLabs.org</div>
                  <div className="text-4xl font-bold mb-2">${pricing.org.buyNow}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Best for:</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span><strong>Non-profit research labs</strong> - Signals mission-driven, not commercial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span><strong>Academic institutions</strong> - Expected TLD for university research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span><strong>Grant applications</strong> - Strengthens credibility with funders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span><strong>Open-source projects</strong> - Community trust and transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-emerald-500 mt-1 flex-shrink-0" />
                    <span><strong>Public data sharing</strong> - Positions as accessible resource</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-slate-900/50 border border-white/10 rounded-xl">
                <div className="text-center mb-6">
                  <div className="text-gray-400 font-mono text-2xl mb-2">InterbayLabs.com</div>
                  <div className="text-4xl font-bold mb-2">${pricing.com.buyNow}</div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Best for:</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Research commercialization</strong> - Spin-offs, tech transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Corporate R&D divisions</strong> - Private sector research labs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Hybrid models</strong> - Grant-funded with commercial applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Brand protection</strong> - Secure both .org and .com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                    <span><strong>Future flexibility</strong> - Option to pivot to commercial</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-600/30 rounded-xl text-center">
              <div className="text-lg font-semibold mb-2">💡 Many research institutions secure both</div>
              <div className="text-sm text-gray-400">
                Use .org for public-facing research, .com for commercial partnerships or redirects
              </div>
            </div>
          </div>
        </section>

        {/* Purchase Options */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-black">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Claim InterbayLabs{current.tld}
              </h2>
              <p className="text-xl text-gray-400">Flexible options for research budgets</p>
            </div>

            {/* Bundle Option - Featured */}
            <div className="mb-12 p-8 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 border-2 border-emerald-500 rounded-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-emerald-600 text-sm font-bold rounded-full">
                ⭐ BEST VALUE - SAVE $250
              </div>
              <div className="text-center mb-6 pt-4">
                <div className="text-emerald-300 font-mono text-2xl mb-2">
                  InterbayLabs.org + InterbayLabs.com
                </div>
                <div className="text-5xl font-bold mb-2">$2,400</div>
                <div className="text-gray-400">Both domains (save $250)</div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-3">Bundle includes:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      InterbayLabs.org ($450 value)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      InterbayLabs.com ($2,200 value)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      Complete brand protection
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      Universities with tech transfer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      Research orgs exploring commercial
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      Long-term brand building
                    </li>
                  </ul>
                </div>
              </div>
              <a
                href={BUNDLE_URL}
                className="block w-full py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-bold text-lg text-center transition-all"
              >
                Inquire About Bundle
              </a>
            </div>

            {/* Individual Domain Options */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Buy Now */}
              <div className="p-8 bg-slate-900 border border-white/10 rounded-xl">
                <div className="text-center mb-6">
                  <div className="text-sm text-emerald-400 mb-2">Buy Now</div>
                  <div className="text-4xl font-bold mb-2">${current.buyNow}</div>
                  <div className="text-sm text-gray-400">InterbayLabs{current.tld}</div>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Immediate ownership
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Fast 48-72hr transfer
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Secure escrow process
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Post-sale setup support
                  </li>
                </ul>
                <a
                  href={selectedTLD === 'org' ? BUY_NOW_URL_ORG : BUY_NOW_URL_COM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold text-center transition-all"
                >
                  Buy Now
                </a>
              </div>

              {/* Make Offer */}
              <div className="p-8 bg-slate-900 border border-white/10 rounded-xl">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-400 mb-2">Make Offer</div>
                  <div className="text-4xl font-bold mb-2">${current.minOffer}+</div>
                  <div className="text-sm text-gray-400">Minimum offer</div>
                </div>
                <ul className="space-y-3 mb-8 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Flexible for grant budgets
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Negotiate terms
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    24hr response time
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Academic pricing available
                  </li>
                </ul>
                <a
                  href={selectedTLD === 'org' ? MAKE_OFFER_URL_ORG : MAKE_OFFER_URL_COM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 border border-white/20 hover:bg-white/5 rounded-lg font-semibold text-center transition-all"
                >
                  Make Offer
                </a>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p className="mb-2">All transactions secured via Escrow.com</p>
              <p className="mb-2">Academic institution discounts available - contact us</p>
              <p>Questions? Email <a href="mailto:domains@spence.io" className="text-emerald-400 hover:text-emerald-300">domains@spence.io</a></p>
            </div>
          </div>
        </section>

        {/* Grant-Friendly Section */}
        <section className="py-20 px-6 bg-slate-950/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Grant-friendly pricing</h2>
            <p className="text-lg text-gray-400 mb-8">
              InterbayLabs.org at $450 fits within typical NSF, NIH, and foundation grant line items 
              for "website development" or "communications infrastructure."
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-emerald-400 mb-2">NSF</div>
                <div className="text-sm text-gray-400">
                  Allowable under most research grants as project infrastructure
                </div>
              </div>
              <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-teal-400 mb-2">NIH</div>
                <div className="text-sm text-gray-400">
                  Qualifies as dissemination/outreach expense for biomedical research
                </div>
              </div>
              <div className="p-6 bg-slate-900/50 border border-white/10 rounded-lg">
                <div className="text-3xl font-bold text-cyan-400 mb-2">Foundations</div>
                <div className="text-sm text-gray-400">
                  Standard budget item for non-profit infrastructure development
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-white/10 bg-black">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
            <p className="mb-2">
              This is a demonstration showcasing the potential of InterbayLabs.org and InterbayLabs.com
            </p>
            <p>
              Domain available for purchase • <a href="https://spence.io" className="text-emerald-400 hover:text-emerald-300">Spence.io</a> • © 2026
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
