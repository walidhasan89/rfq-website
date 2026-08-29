import { useEffect, useRef, useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface Props { darkMode: boolean; }

const faqs = [
  {
    q: 'Does the Outlook RFQ tool work with the desktop version of Outlook or only the web version?',
    a: (
      <>
        RFQ AutoPilot works with both. The add-in is compatible with Outlook for Windows (desktop), Outlook for Mac (desktop), Outlook on the Web (OWA), and the new Outlook for Windows. On desktop versions, the add-in appears in the ribbon toolbar and opens as a sidebar panel when activated. On the web version, it works identically through the browser. Core detection features also work on Outlook mobile apps for iOS and Android, with full quote generation optimized for desktop and web environments. Learn more about{' '}
        <a
          href="https://learn.microsoft.com/en-us/office/dev/add-ins/outlook/outlook-add-ins-overview"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
        >
          Outlook add-ins from Microsoft
        </a>.
      </>
    ),
  },
  {
    q: 'Will the Outlook add-in conflict with other add-ins we already use?',
    a: 'No. RFQ AutoPilot is built on the standard Microsoft Office Add-in platform and follows all Microsoft guidelines for add-in coexistence. It operates independently of other add-ins. If you use Salesforce for Outlook, Microsoft Dynamics add-in, DocuSign, or any other Outlook add-in, RFQ AutoPilot runs alongside them without conflict. Each add-in has its own sidebar space and does not interfere with others. We have tested compatibility with the 50 most popular Outlook add-ins and confirmed zero conflicts.',
  },
  {
    q: 'Can our IT admin control which users get access to the add-in?',
    a: (
      <>
        Yes. Through{' '}
        <a
          href="https://learn.microsoft.com/en-us/microsoft-365/admin/manage/centralized-deployment-of-add-ins"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
        >
          Microsoft 365 Admin Center centralized deployment
        </a>
        , your IT administrator controls exactly who has access. Options include deploying to the entire organization, to specific Azure AD security groups, or to individual users by name. Permissions can be set as optional (users choose to enable), enabled (on by default but can be disabled), or mandatory (always active, cannot be disabled by users). Access can be revoked at any time through the admin center.
      </>
    ),
  },
  {
    q: 'Does the RFQ automation Outlook add-in work with shared mailboxes?',
    a: "Yes. Many sales teams use shared mailboxes like quotes@company.com or sales@company.com. RFQ AutoPilot supports shared mailboxes with intelligent distribution. When an RFQ arrives in the shared mailbox, the add-in detects it and can assign it based on customer territory, product category, round-robin rotation, or team member availability. Assignment notifications appear in the designated rep's personal Outlook, preventing duplicate quoting. Managers can view all incoming shared mailbox RFQs through the analytics dashboard.",
  },
  {
    q: 'How does the Microsoft Outlook quote add-in handle Outlook rules and folders?',
    a: 'RFQ AutoPilot works harmoniously with your existing Outlook rules and folder structure. If you have rules that automatically move emails to specific folders, the add-in detects RFQs in those destination folders as well — not just the main inbox. You can configure the add-in to monitor specific folders, all folders, or only the inbox. Outlook categories applied by the add-in can be used in your own rules for further organization. The add-in never overrides or conflicts with your existing rule configurations.',
  },
  {
    q: 'Is the Outlook sales productivity add-in available on Microsoft AppSource?',
    a: (
      <>
        Yes. RFQ AutoPilot is listed on{' '}
        <a
          href="https://appsource.microsoft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
        >
          Microsoft AppSource
        </a>
        , Microsoft's official marketplace for business applications and add-ins. Being on AppSource means the add-in has passed Microsoft's security, compliance, and functionality review process. You can find it by searching "RFQ AutoPilot" in AppSource or directly from the "Get Add-ins" menu within Outlook. AppSource listing also ensures automatic updates — when we release new features, your add-in updates seamlessly without manual reinstallation.
      </>
    ),
  },
  {
    q: 'Can the Outlook extension for quoting work offline?',
    a: "The add-in requires an internet connection for AI processing features including RFQ detection, data extraction, product matching, and quote generation — these functions rely on our cloud AI models. However, Outlook's native offline capabilities are not affected by the add-in. You can read emails offline as usual. When you reconnect to the internet, the add-in resumes processing any RFQ emails that arrived during the offline period. For field sales teams with intermittent connectivity, extracted data and draft quotes are preserved if connectivity drops mid-process.",
  },
  {
    q: 'How does the add-in handle Outlook email signatures?',
    a: "RFQ AutoPilot respects your existing Outlook email signature settings. When generating a quotation reply draft, the system places your standard Outlook signature at the bottom of the email — exactly where it appears in any other Outlook reply. If different team members have different signatures, each person's signature is applied to their own generated quotes. You can also configure a quote-specific signature that includes additional information like direct phone lines, quote reference numbers, or department details.",
  },
  {
    q: 'We use Exchange on-premises, not Microsoft 365. Does the add-in still work?',
    a: (
      <>
        Yes, with some requirements. RFQ AutoPilot's Outlook add-in is compatible with on-premises Exchange Server 2016, 2019, and Exchange Server Subscription Edition. Your Exchange server must support the{' '}
        <a
          href="https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/add-ins-for-outlook/add-ins-for-outlook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors"
        >
          Office Add-in platform for Exchange
        </a>{' '}
        (which these versions do). Your Exchange administrator deploys the add-in through Exchange Admin Center. For older Exchange versions (2013 or earlier), compatibility may be limited — contact our team for a specific assessment. Hybrid environments running both on-premises Exchange and Exchange Online are fully supported.
      </>
    ),
  },
  {
    q: 'Can I use the add-in with a personal Outlook.com or Hotmail account?',
    a: 'Yes. RFQ AutoPilot works with personal Microsoft accounts including Outlook.com, Hotmail.com, and Live.com email addresses. For freelance sales professionals, independent distributors, or small business owners using personal Microsoft email, the add-in provides the same RFQ detection, extraction, and quoting capabilities. Simply install from the Add-ins menu in Outlook on the Web or the Outlook desktop app connected to your personal account.',
  },
  {
    q: 'How does the add-in perform with large attachments common in B2B RFQs?',
    a: 'The add-in processes email attachments up to 50MB per file, which covers the vast majority of PDF, Excel, and Word documents used in B2B procurement. Multi-page PDFs with 200+ pages, large Excel workbooks with thousands of rows, and complex documents are all handled without performance issues. Processing happens on our cloud servers, so your Outlook performance is not affected by attachment size.',
  },
  {
    q: 'What is the difference between installing this and installing a full desktop application?',
    a: "An Outlook add-in is fundamentally different from a traditional desktop application. There is no .exe file to download, no installation wizard, no system requirements beyond having Outlook, and no impact on your computer's performance. The add-in runs within Outlook's sandboxed environment — it cannot access your file system, other applications, or system resources outside of Outlook. Updates happen automatically through Microsoft's platform. It is lighter, safer, and simpler than any desktop software installation.",
  },
];

export default function FAQ({ darkMode }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  // Use a simpler approach: observe the section, then mark all children visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Mark header elements visible
          el.querySelectorAll('.section-fade').forEach((child) => {
            child.classList.add('visible');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className={`py-24 lg:py-32 relative overflow-hidden ${darkMode ? 'bg-[#020817]' : 'bg-white'}`}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-8 ${darkMode ? 'bg-blue-700' : 'bg-blue-300'}`} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — use section-fade instead of fade-up to avoid global observer conflicts */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-fade fade-up flex justify-center mb-4">
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium badge-gradient ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              <HelpCircle size={14} className="text-blue-500" />
              Frequently Asked Questions
            </span>
          </div>
          <h2 className={`section-fade fade-up stagger-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Everything You Need to{' '}
            <span className="gradient-text">Know</span>
          </h2>
          <p className={`section-fade fade-up stagger-2 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Answers to common questions about the{' '}
            <a href="https://rfqautopilot.com/outlook-add-in-for-rfq" className="text-blue-500 hover:text-blue-600 underline decoration-blue-400/40 transition-colors">
              Outlook Add-in for RFQ processing
            </a>.
          </p>
        </div>

        {/* FAQ Items — no fade-up classes so they're always visible */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? darkMode
                      ? 'border-blue-500/40 bg-blue-500/5'
                      : 'border-blue-200 bg-blue-50/50'
                    : darkMode
                      ? 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
                      : 'border-slate-200 bg-white hover:border-blue-200 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-start gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 mt-0.5 ${
                    isOpen
                      ? 'btn-gradient text-white'
                      : darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                  <span className={`flex-1 text-base font-semibold leading-relaxed ${
                    isOpen
                      ? darkMode ? 'text-white' : 'text-slate-900'
                      : darkMode ? 'text-slate-200' : 'text-slate-800'
                  }`}>
                    {faq.q}
                  </span>
                </button>

                {/* Answer — always rendered in DOM, shown/hidden via max-height */}
                <div className={`faq-content ${isOpen ? 'open' : ''}`}>
                  <div className={`px-6 pb-6 pl-[68px] text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className={`mt-14 p-8 rounded-3xl text-center ${
          darkMode ? 'bg-blue-900/15 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'
        }`}>
          <p className={`text-base font-medium mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            Still have questions?
          </p>
          <p className={`text-sm mb-5 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            Our team responds to every inquiry within 24 hours.
          </p>
          <a
            href="mailto:support@rfqautopilot.com"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
              darkMode ? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700' : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            Contact Support →
          </a>
        </div>
      </div>
    </section>
  );
}
