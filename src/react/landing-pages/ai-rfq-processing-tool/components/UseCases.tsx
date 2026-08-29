import React from 'react';
import { useReveal } from '../hooks/useReveal';

interface Props { darkMode: boolean }

const CHROME_EXTENSION_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

const industries = [
  {
    icon: '🏭',
    title: 'Manufacturing & Industrial Distribution',
    challenge: 'Complex multi-line RFQs with technical specifications, varied formats from different buyers, high quote volume from distributor networks.',
    solution: 'AI extracts data from RFQ emails and PDF BOMs automatically, matches part numbers to inventory, applies customer-specific pricing, generates quotes in minutes.',
    results: [
      '67% faster quote turnaround',
      '89% reduction in data entry errors',
      '4x more RFQ handling capacity',
    ],
    color: '#3b82f6',
  },
  {
    icon: '📦',
    title: 'Wholesale & B2B Suppliers',
    challenge: 'Daily flood of pricing requests, simple but numerous line items, competitive pressure to respond first.',
    solution: 'Intelligent RFQ parsing processes batch requests, AI quotation generator applies volume discounts and customer tiers automatically.',
    results: [
      'First-to-quote advantage',
      '5.2x increase in daily quote capacity',
      '41% improvement in win rates',
    ],
    color: '#10b981',
  },
  {
    icon: '🏗️',
    title: 'Construction & Building Materials',
    challenge: 'Project-based RFQs with detailed specifications, mixed formats (plans + quantities), tight bid deadlines.',
    solution: 'AI PDF data extraction reads takeoff sheets and project specs, maps materials to product catalog, includes delivery scheduling.',
    results: [
      'Meet more bid deadlines',
      '78% faster material quote preparation',
      'Fewer missed line items',
    ],
    color: '#f59e0b',
  },
  {
    icon: '💻',
    title: 'Technology & Electronics',
    challenge: 'Highly technical RFQs with precise part specifications, global suppliers with language variations, compliance requirements.',
    solution: 'NLP understands technical terminology across languages, validates compliance requirements, cross-references datasheets automatically.',
    results: [
      '83% reduction in specification errors',
      'Global RFQ handling',
      'Automated compliance checking',
    ],
    color: '#8b5cf6',
  },
];

const checklist = [
  'Process 20+ RFQs per week',
  'Receive RFQs via email as primary channel',
  'Deal with PDF or Excel attachments regularly',
  'Experience bottlenecks in quote turnaround',
  'Struggle with data entry errors',
  'Need to scale without adding staff',
  'Compete on response speed',
  'Handle multiple product categories',
  'Serve B2B or wholesale customers',
  'Want to automate repetitive tasks',
];

export default function UseCases({ darkMode }: Props) {
  const { ref, isVisible } = useReveal();

  return (
    <section id="use-cases" className={`relative py-28 overflow-hidden ${darkMode ? 'bg-[#060b18]' : 'bg-slate-50'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="glow-orb" style={{
          width: '400px', height: '400px',
          bottom: '0', left: '-100px',
          background: darkMode
            ? 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-16 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-sm font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400">
            👥 Who Benefits Most
          </div>
          <h2 className={`text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Built for{' '}
            <span className="gradient-text">High-Volume RFQ Teams</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            RFQ AutoPilot delivers the greatest impact for teams drowning in quote requests. Whether you're a{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-manufacturers" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              manufacturer
            </a>
            ,{' '}
            <a href="https://rfqautopilot.com/rfq-software-for-distributors" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              distributor
            </a>
            , or{' '}
            <a href="https://rfqautopilot.com/rfq-management-for-export-companies" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              export company
            </a>
            {' '}— if you process more than 20 RFQs per week, AI RFQ automation can transform your operations. See what{' '}
            <a href="https://www.forrester.com/research/intelligent-automation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 underline underline-offset-2 transition-colors">
              Forrester says about intelligent automation
            </a>
            .
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {industries.map((ind, i) => (
            <IndustryCard key={i} ind={ind} darkMode={darkMode} index={i} />
          ))}
        </div>

        {/* Checklist + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ChecklistBox darkMode={darkMode} />
          <ROIBox darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ ind, darkMode, index }: { ind: typeof industries[0], darkMode: boolean, index: number }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-${(index % 4) + 1} ${isVisible ? 'visible' : ''} group p-7 rounded-2xl border card-3d
        ${darkMode ? 'bg-slate-900/60 border-white/[0.07] hover:border-white/12' : 'bg-white border-slate-200/80 hover:shadow-md'}`}>
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: `radial-gradient(circle at 100% 0%, ${ind.color}08 0%, transparent 50%)`,
      }} />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: `${ind.color}18` }}>
            {ind.icon}
          </div>
          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{ind.title}</h3>
        </div>

        <div className="space-y-3 mb-5">
          <div className={`p-3.5 rounded-xl text-sm ${darkMode ? 'bg-red-950/20 border border-red-900/20' : 'bg-red-50 border border-red-100'}`}>
            <span className={`font-semibold text-xs uppercase tracking-wide ${darkMode ? 'text-red-400' : 'text-red-600'}`}>Challenge: </span>
            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{ind.challenge}</span>
          </div>
          <div className={`p-3.5 rounded-xl text-sm ${darkMode ? 'bg-blue-950/20 border border-blue-900/20' : 'bg-blue-50 border border-blue-100'}`}>
            <span className={`font-semibold text-xs uppercase tracking-wide ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Solution: </span>
            <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{ind.solution}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {ind.results.map((r, j) => (
            <span key={j} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: `${ind.color}15`, color: ind.color, border: `1px solid ${ind.color}25` }}>
              ✓ {r}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChecklistBox({ darkMode }: { darkMode: boolean }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${isVisible ? 'visible' : ''} p-8 rounded-2xl border
        ${darkMode ? 'bg-slate-900/60 border-white/[0.07]' : 'bg-white border-slate-200/80'}`}>
      <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Is RFQ AutoPilot Right for You?
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {checklist.map((item, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ROIBox({ darkMode: _darkMode }: { darkMode: boolean }) {
  const { ref, isVisible } = useReveal();
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-delay-1 ${isVisible ? 'visible' : ''} p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden`}
      style={{ background: 'var(--gradient-brand)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      </div>
      <div className="relative">
        <div className="text-4xl mb-4">💰</div>
        <h3 className="text-2xl font-bold text-white mb-3">Calculate Your ROI</h3>
        <p className="text-blue-100 text-base leading-relaxed mb-6">
          Find out exactly how much time and money you'll save by automating your RFQ processing with AI. Ideal for{' '}
          <a href="https://rfqautopilot.com/rfq-software-small-business" className="text-white underline underline-offset-2 font-medium hover:text-blue-100 transition-colors">
            small businesses
          </a>{' '}
          and large enterprises alike. Most teams see ROI within the first week.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { val: '87%', label: 'Avg. time saved' },
            { val: '340%', label: 'More quotes sent' },
            { val: '34%', label: 'Higher win rate' },
            { val: '< 1 week', label: 'Time to ROI' },
          ].map((s, i) => (
            <div key={i} className="text-center p-3 rounded-xl bg-white/10 border border-white/15">
              <p className="text-2xl font-black text-white">{s.val}</p>
              <p className="text-xs text-blue-100 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <a href={CHROME_EXTENSION_URL} target="_blank" rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-base px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors duration-200 text-center">
        See Your ROI — Start Free →
      </a>
    </div>
  );
}
