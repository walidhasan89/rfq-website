import { useState, useEffect, useRef } from 'react';

interface FAQProps {
  darkMode: boolean;
}

const faqs = [
  {
    q: 'Is RFQ AutoPilot safe to install as a Chrome extension?',
    a: (darkMode: boolean) => (
      <>
        Absolutely. RFQ AutoPilot follows all{' '}
        <a
          href="https://support.google.com/chrome_webstore/answer/1047776"
          target="_blank"
          rel="noopener noreferrer"
          className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          Chrome Web Store security policies
        </a>{' '}
        and undergoes Google's review process before publication. The extension requests only necessary permissions — reading email content to detect RFQs and composing draft replies to generate quotes. We never access contacts, browsing history, or data outside Gmail. All data transmission uses TLS 1.3 encryption. You can review the full{' '}
        <a
          href="https://developer.chrome.com/docs/extensions"
          target="_blank"
          rel="noopener noreferrer"
          className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          Chrome Extensions documentation
        </a>{' '}
        to understand how extensions work.
      </>
    ),
  },
  {
    q: 'Will the Chrome extension slow down my Gmail?',
    a: (_darkMode: boolean) => (
      <>
        No. RFQ AutoPilot is built as a lightweight extension that loads only when you open Gmail. It uses minimal memory and processes data asynchronously so your Gmail performance is unaffected. The extension adds less than 2MB to your browser footprint. AI processing happens on our secure cloud servers, not in your browser.
      </>
    ),
  },
  {
    q: 'Can I use this Gmail add-on if I use Google Workspace (formerly G Suite)?',
    a: (darkMode: boolean) => (
      <>
        Yes. RFQ AutoPilot is fully compatible with Google Workspace accounts including Business Starter, Business Standard, Business Plus, and Enterprise editions.{' '}
        <a
          href="https://workspace.google.com/marketplace"
          target="_blank"
          rel="noopener noreferrer"
          className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          Google Workspace administrators
        </a>{' '}
        can approve the extension for organization-wide deployment through the Google Admin console. Individual users within a Workspace organization can also install it independently if their admin policy allows Chrome extensions.
      </>
    ),
  },
  {
    q: 'How does this compare to other sales productivity Gmail extensions like Streak or Mixmax?',
    a: (darkMode: boolean) => (
      <>
        Tools like{' '}
        <a
          href="https://www.streak.com/how-streak-works"
          target="_blank"
          rel="noopener noreferrer"
          className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          Streak add CRM functionality to Gmail
        </a>
        . Mixmax adds email tracking and sequences. RFQ AutoPilot adds RFQ processing and quotation generation — a capability none of those tools provide. They complement each other. Many users run RFQ AutoPilot alongside their existing Gmail sales tools. Think of RFQ AutoPilot as your inbox quoting engine. Also explore our{' '}
        <a
          href="https://rfqautopilot.com/gmail-chrome-extension-for-sales"
          className={`underline underline-offset-2 transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          Gmail Chrome extension for sales
        </a>{' '}
        guide for a full comparison.
      </>
    ),
  },
  {
    q: 'Does the extension work with multiple Gmail accounts?',
    a: (_darkMode: boolean) => (
      <>
        Yes. If you manage multiple Gmail accounts — for example, a personal sales account and a shared sales@company.com account — you can connect each account to RFQ AutoPilot. The extension detects which account is currently active and processes RFQs accordingly. Product catalogs and templates can be shared across accounts or configured independently per account.
      </>
    ),
  },
  {
    q: 'Can my entire sales team use the same Chrome extension with shared settings?',
    a: (_darkMode: boolean) => (
      <>
        Yes. Solo and Pro plans support team configurations where: product catalog and pricing database are shared across all team members, quote templates are available to everyone, individual reps maintain their own Gmail connections and signatures, managers access team-wide analytics, admin controls who can modify pricing and templates, and quote assignment prevents two reps from quoting the same RFQ.
      </>
    ),
  },
  {
    q: 'What Gmail data does the extension access?',
    a: (_darkMode: boolean) => (
      <>
        RFQ AutoPilot accesses only: incoming email content (to detect and extract RFQ data), email attachments (to parse PDFs, Excel, and images), draft composition (to create quotation reply drafts), and email metadata (sender name, email address, date, subject). The extension does <strong>NOT</strong> access your contacts list, personal emails, browsing history, Google Drive files, Calendar, Maps, or other Google services.
      </>
    ),
  },
  {
    q: 'Can I disable the extension for certain emails or senders?',
    a: (_darkMode: boolean) => (
      <>
        Yes. You can configure exclusion rules including specific sender email addresses or domains to ignore, Gmail labels that should be excluded from scanning, time-based quiet hours when detection is paused, and a manual toggle to pause/resume the extension anytime. This ensures the extension only processes emails relevant to your sales quoting workflow.
      </>
    ),
  },
  {
    q: 'How does the extension handle attachments larger than typical Gmail limits?',
    a: (_darkMode: boolean) => (
      <>
        Gmail allows attachments up to 25MB. For PDFs and Excel files within that limit, RFQ AutoPilot processes them directly. Our{' '}
        <a
          href="https://rfqautopilot.com/rfq-data-extraction-from-pdf"
          className="underline underline-offset-2 text-blue-600 hover:text-blue-700"
        >
          RFQ data extraction from PDF
        </a>{' '}
        handles files up to 50MB — including files shared via Google Drive links within emails (with your permission).
      </>
    ),
  },
  {
    q: 'Will my customers know I am using an extension to generate quotes?',
    a: (_darkMode: boolean) => (
      <>
        No. Your customers see a completely normal Gmail reply from your personal email address. The quotation appears as a professionally formatted email — indistinguishable from one you typed manually. There is no "sent via RFQ AutoPilot" branding, no external links, and no indication that AI assisted in creating the quote. Your customer experiences a fast, professional response and nothing more.
      </>
    ),
  },
  {
    q: 'Can I try the extension before committing to a paid plan?',
    a: (_darkMode: boolean) => (
      <>
        Yes. RFQ AutoPilot offers a permanent free plan that includes 30 RFQs per month, 10 AI credits, basic email detection, standard templates, and an analytics dashboard. No credit card required. No trial expiration. Use it for free as long as you want. This is ideal for{' '}
        <a
          href="https://rfqautopilot.com/rfq-software-small-business"
          className="underline underline-offset-2 text-blue-600 hover:text-blue-700"
        >
          small business RFQ management
        </a>
        . Upgrade to Solo or Pro only when your volume demands it.
      </>
    ),
  },
  {
    q: 'What happens if I uninstall the extension?',
    a: (_darkMode: boolean) => (
      <>
        If you uninstall RFQ AutoPilot: your Gmail account returns to its normal state immediately, no emails are affected or modified, your product catalog and templates are preserved on our servers for 90 days in case you reinstall, quote history and analytics remain accessible via web login, and you can reinstall anytime and pick up where you left off.
      </>
    ),
  },
];

export default function FAQ({ darkMode }: FAQProps) {
  // Track which items are open — multiple can be open at once
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  // Track whether the section header has animated in
  const headerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Add visible to all header elements once
            headerRef.current?.querySelectorAll('.faq-header-anim').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            hasAnimated.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (index: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section
      id="faq"
      className={`py-24 lg:py-32 ${darkMode ? 'section-bg-alt-dark' : 'section-bg-alt-light'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header — animated once on enter, never re-animates */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="faq-header-anim slide-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border ${
              darkMode ? 'bg-blue-950/60 border-blue-500/30 text-blue-400' : 'bg-blue-50 border-blue-200 text-blue-600'
            }`}>
              ❓ FAQ
            </span>
          </div>
          <h2 className={`faq-header-anim slide-up delay-100 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`faq-header-anim slide-up delay-200 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Everything you need to know about RFQ AutoPilot
          </p>
        </div>

        {/* FAQ Items — NO animation classes on the item wrappers themselves */}
        {/* They are rendered statically so React state changes never cause them to disappear */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openItems.has(i);
            return (
              <div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isOpen
                    ? darkMode
                      ? 'border-blue-800/50 bg-blue-950/20'
                      : 'border-blue-200 bg-blue-50/60'
                    : darkMode
                      ? 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Question button */}
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`font-semibold text-sm sm:text-base leading-snug ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-light leading-none transition-transform duration-300 ${
                      isOpen
                        ? 'gradient-brand text-white rotate-45'
                        : darkMode
                          ? 'bg-slate-800 text-slate-400'
                          : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer — always in DOM, shown/hidden with maxHeight + opacity only */}
                <div
                  style={{
                    maxHeight: isOpen ? '800px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease',
                  }}
                >
                  <div className={`px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {faq.a(darkMode)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support link — static, no animation class */}
        <div className={`mt-10 text-center p-6 rounded-2xl border ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <p className={`text-sm mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Still have questions?
          </p>
          <a
            href="mailto:support@rfqautopilot.com"
            className={`text-sm font-semibold transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            Contact support@rfqautopilot.com →
          </a>
        </div>
      </div>
    </section>
  );
}
