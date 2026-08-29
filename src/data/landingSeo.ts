import { pricingPlans, site } from './site';

export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingSeo = {
  slug: string;
  name: string;
  title: string;
  description: string;
  category: string;
  audience: string;
  features: string[];
  keywords: string[];
  faq: LandingFaq[];
};

const baseUrl = site.url.replace(/\/$/, '');

export const landingSeoPages: LandingSeo[] = [
  {
    slug: 'rfq-automation-software',
    name: 'RFQ Automation Software',
    title: 'RFQ Automation Software for Quote Teams | RFQ AutoPilot',
    description:
      'Automate RFQ intake in Gmail and Outlook. Detect request emails, extract PDF data, build branded quotations, and reply faster with RFQ AutoPilot.',
    category: 'RFQ automation software',
    audience: 'Suppliers, distributors, manufacturers, wholesalers, and B2B sales teams',
    features: [
      'Automatic RFQ email detection',
      'RFQ attachment and PDF data extraction',
      'Branded quotation builder',
      'Professional PDF quote export',
      'Gmail and Outlook workflow support',
      'Human review before every response',
    ],
    keywords: ['rfq automation', 'rfq software', 'automate rfq', 'quote automation', 'request for quotation'],
    faq: [
      {
        question: 'What is RFQ automation software?',
        answer:
          'RFQ automation software helps teams identify incoming quote requests, organize RFQ details, prepare quotations, and respond faster with less manual copying.',
      },
      {
        question: 'How does RFQ AutoPilot detect RFQ emails automatically?',
        answer:
          'RFQ AutoPilot reviews email context, request language, and attachment signals to help surface messages that look like requests for quotation.',
      },
      {
        question: 'What types of documents can RFQ AutoPilot extract data from?',
        answer:
          'The workflow is built for RFQ emails and common attachments such as PDFs, spreadsheets, documents, and scanned files that need human review before quoting.',
      },
      {
        question: 'Does RFQ AutoPilot work with Gmail and Outlook?',
        answer:
          'Yes. RFQ AutoPilot is designed around Gmail and Outlook-oriented browser workflows so sales teams can process RFQs close to the inbox.',
      },
    ],
  },
  {
    slug: 'rfq-email-management-tool',
    name: 'RFQ Email Management Tool',
    title: 'RFQ Email Management Tool for Sales Teams | RFQ AutoPilot',
    description:
      'Manage RFQ emails with automatic detection, inbox organization, attachment extraction, quote drafting, and faster Gmail or Outlook responses.',
    category: 'RFQ email management',
    audience: 'Sales teams that receive quote requests through shared inboxes, Gmail, or Outlook',
    features: [
      'RFQ inbox detection and prioritization',
      'Email and attachment data extraction',
      'RFQ dashboard workflow',
      'Quote reply preparation',
      'Team-friendly RFQ organization',
      'CRM and ERP export-ready data',
    ],
    keywords: ['rfq email', 'email management', 'gmail rfq', 'outlook rfq', 'shared inbox'],
    faq: [
      {
        question: 'What is an RFQ email management tool?',
        answer:
          'An RFQ email management tool helps teams find, organize, extract, and respond to request-for-quote emails without losing opportunities in a busy inbox.',
      },
      {
        question: 'How is RFQ AutoPilot different from Gmail filters or Outlook rules?',
        answer:
          'Basic rules rely on simple matching. RFQ AutoPilot is built around the wider RFQ workflow, including detection, extraction, quote preparation, and response support.',
      },
      {
        question: 'Can RFQ AutoPilot parse and extract data from PDF attachments?',
        answer:
          'Yes. RFQ AutoPilot supports RFQ attachment workflows and helps structure extracted information for review before the quote is finalized.',
      },
      {
        question: 'How quickly can I get started?',
        answer:
          'Most users can install the browser extension quickly and begin testing the RFQ-to-quote workflow without a long implementation project.',
      },
    ],
  },
  {
    slug: 'rfq-software-for-manufacturers',
    name: 'RFQ Software for Manufacturers',
    title: 'RFQ Software for Manufacturers | RFQ AutoPilot',
    description:
      'Help manufacturers process RFQ emails, review technical attachments, prepare commercial terms, and generate branded quotation responses faster.',
    category: 'Manufacturing RFQ software',
    audience: 'Manufacturers, job shops, fabricators, and industrial sales teams',
    features: [
      'Manufacturing RFQ intake workflow',
      'PDF, drawing, and BOM review support',
      'Part number and specification extraction',
      'Commercial term preparation',
      'Branded PDF quotation export',
      'Human technical review controls',
    ],
    keywords: ['manufacturer rfq', 'manufacturing quote', 'bom rfq', 'technical drawing', 'industrial sales'],
    faq: [
      {
        question: 'What is RFQ software for manufacturers?',
        answer:
          'It is software that helps manufacturing sales teams organize RFQ information, review attachments, prepare quote inputs, and respond with consistent quotations.',
      },
      {
        question: 'How does RFQ AutoPilot extract data from manufacturing PDFs and technical drawings?',
        answer:
          'RFQ AutoPilot helps identify useful text and RFQ details from attachments, then presents the information for human review before quotation work continues.',
      },
      {
        question: 'Can RFQ AutoPilot parse multi-level Bills of Material (BOMs)?',
        answer:
          'It is designed to support structured RFQ and BOM-style data review, but manufacturing teams should verify every part, quantity, and specification.',
      },
      {
        question: 'Does RFQ AutoPilot support ITAR-controlled or classified manufacturing RFQs?',
        answer:
          'Sensitive, controlled, or classified RFQs should only be processed according to your company security and compliance requirements.',
      },
    ],
  },
  {
    slug: 'ai-rfq-processing-tool',
    name: 'AI RFQ Processing Tool',
    title: 'AI RFQ Processing Tool for Quotes | RFQ AutoPilot',
    description:
      'Use AI to read RFQ emails and PDF attachments, extract buyer requirements, organize line items, and draft professional quote responses.',
    category: 'AI RFQ processing',
    audience: 'Teams that need AI assistance for RFQ intake, parsing, and quotation preparation',
    features: [
      'AI RFQ email parsing',
      'AI PDF data extraction',
      'Line item organization',
      'Quote draft generation',
      'Multi-format RFQ support',
      'Review-first automation workflow',
    ],
    keywords: ['ai rfq', 'ai quote generator', 'ai pdf extraction', 'rfq parsing', 'automated quote'],
    faq: [
      {
        question: 'How does the AI extract data from RFQ email content?',
        answer:
          'The AI reviews the request text and attachment context to identify buyer details, product requirements, quantities, dates, and commercial information for review.',
      },
      {
        question: 'What makes your AI PDF data extraction different from OCR tools?',
        answer:
          'OCR reads text. RFQ AutoPilot focuses on turning RFQ document content into structured, editable quote inputs that a salesperson can verify.',
      },
      {
        question: 'How accurate is the AI quotation generator?',
        answer:
          'AI output should be treated as a draft. Users must review extracted data, pricing, terms, and the final quotation before sending.',
      },
      {
        question: 'What happens if the AI cannot extract certain data?',
        answer:
          'The user can edit, correct, or add missing information manually before the quote is generated and sent.',
      },
    ],
  },
  {
    slug: 'quotation-email-automation',
    name: 'Quotation Email Automation',
    title: 'Quotation Email Automation for RFQ Replies | RFQ AutoPilot',
    description:
      'Turn RFQ data into professional quotation emails with branded PDF quotes, reusable templates, approval review, and faster buyer responses.',
    category: 'Quotation email automation',
    audience: 'Sales teams that send repetitive RFQ reply emails and quotation PDFs',
    features: [
      'RFQ reply draft generation',
      'Reusable quotation email templates',
      'Branded PDF attachment workflow',
      'Review and approval before sending',
      'Gmail and Outlook response support',
      'Quote follow-up workflow support',
    ],
    keywords: ['quotation email', 'quote email automation', 'rfq reply', 'email quote generator', 'quote response'],
    faq: [
      {
        question: 'How does the email quote generator work inside Gmail and Outlook?',
        answer:
          'RFQ AutoPilot helps organize RFQ details, build the quotation, generate a PDF, and prepare a response email for review in the normal inbox workflow.',
      },
      {
        question: 'Can I generate quotation in Gmail without switching to another tool?',
        answer:
          'The workflow is designed to stay close to Gmail and browser-based email work while still giving users a structured quote builder.',
      },
      {
        question: 'Will automated replies look robotic or templated to my customers?',
        answer:
          'Users can edit generated text and use templates as a starting point, so the final reply can still match the company tone and customer context.',
      },
      {
        question: 'What if the AI gets a price wrong in the quotation?',
        answer:
          'Pricing and commercial terms must be reviewed by the user before the quotation is sent to the buyer.',
      },
    ],
  },
  {
    slug: 'rfq-data-extraction-from-pdf',
    name: 'RFQ Data Extraction from PDF',
    title: 'RFQ Data Extraction from PDF Attachments | RFQ AutoPilot',
    description:
      'Extract product names, quantities, specs, delivery details, and buyer requirements from PDF RFQs for faster quote preparation.',
    category: 'RFQ PDF extraction',
    audience: 'Teams that receive buyer RFQs as PDF files, forms, scans, and document attachments',
    features: [
      'PDF RFQ parsing',
      'Table and form extraction support',
      'Product and quantity identification',
      'Scanned document review workflow',
      'Editable extracted fields',
      'Quote builder handoff',
    ],
    keywords: ['pdf rfq', 'rfq data extraction', 'parse pdf', 'pdf quote request', 'ocr rfq'],
    faq: [
      {
        question: 'How does RFQ AutoPilot extract RFQ data from PDF files differently than copy-paste?',
        answer:
          'Instead of copying one field at a time, RFQ AutoPilot helps identify RFQ details and organize them into editable quote inputs for review.',
      },
      {
        question: 'Can the PDF RFQ parser handle PDFs created from different software?',
        answer:
          'The workflow is designed for different RFQ PDF layouts, but unusual formatting, scans, and complex tables may still need manual correction.',
      },
      {
        question: 'How does the system handle PDF RFQs with images or engineering drawings?',
        answer:
          'It can support document review workflows, but drawings, specifications, and critical technical information must be checked by qualified people.',
      },
      {
        question: 'Can I export extracted PDF data to Excel or my ERP system?',
        answer:
          'Extracted and reviewed information can support downstream workflows such as spreadsheets, CRM, ERP, and quote management processes.',
      },
    ],
  },
  {
    slug: 'gmail-chrome-extension-for-sales',
    name: 'Gmail Chrome Extension for Sales Teams',
    title: 'Gmail Chrome Extension for RFQ Sales Teams | RFQ AutoPilot',
    description:
      'Detect RFQ emails in Gmail, extract buyer requirements, generate branded quote PDFs, and prepare faster sales replies from one workflow.',
    category: 'Gmail sales extension',
    audience: 'Gmail and Google Workspace sales teams that handle RFQ emails',
    features: [
      'Gmail RFQ detection',
      'Sales inbox productivity workflow',
      'Attachment and buyer requirement extraction',
      'Quote PDF generation',
      'Reusable Gmail reply templates',
      'Chrome extension installation',
    ],
    keywords: ['gmail chrome extension', 'gmail sales extension', 'gmail rfq', 'google workspace', 'sales productivity'],
    faq: [
      {
        question: 'Is RFQ AutoPilot safe to install as a Chrome extension?',
        answer:
          'RFQ AutoPilot should be installed from the official Chrome Web Store and used according to your company email, security, and privacy policies.',
      },
      {
        question: 'Will the Chrome extension slow down my Gmail?',
        answer:
          'The extension is designed to support Gmail workflows without replacing Gmail. Performance can depend on browser, inbox, and attachment conditions.',
      },
      {
        question: 'Can I use this Gmail add-on if I use Google Workspace?',
        answer:
          'Yes. RFQ AutoPilot is designed for browser-based Gmail and Google Workspace sales workflows.',
      },
      {
        question: 'Will my customers know I am using an extension to generate quotes?',
        answer:
          'Customers receive your normal quotation response. Users can edit the email and PDF before sending so the final message reflects the business.',
      },
    ],
  },
  {
    slug: 'rfq-software-for-distributors',
    name: 'RFQ Software for Distributors',
    title: 'RFQ Software for Distributors | RFQ AutoPilot',
    description:
      'Help distributors process multi-SKU RFQs, extract line items, prepare pricing, generate branded quotes, and respond faster from the inbox.',
    category: 'Distributor RFQ software',
    audience: 'Distributors, wholesalers, parts suppliers, and inside sales teams',
    features: [
      'Multi-line distributor RFQ handling',
      'SKU and part number workflow support',
      'Shared inbox RFQ organization',
      'Pricing and term preparation',
      'Branded distributor quote PDFs',
      'Fast buyer response workflow',
    ],
    keywords: ['distributor rfq', 'wholesale quote', 'multi sku rfq', 'parts distributor', 'inside sales'],
    faq: [
      {
        question: 'Is RFQ AutoPilot built specifically for distribution companies?',
        answer:
          'Yes. The workflow is useful for distributors that receive frequent RFQs with part numbers, quantities, SKUs, and buyer-specific terms.',
      },
      {
        question: 'How does the system handle our catalog of 50,000+ SKUs?',
        answer:
          'RFQ AutoPilot helps structure quote request data, but catalog matching, pricing, availability, and ERP data should be verified by your team.',
      },
      {
        question: 'How does distributor RFQ management work for shared sales inboxes?',
        answer:
          'Teams can use the workflow to reduce missed quote requests and create a more consistent review process around shared sales email.',
      },
      {
        question: "What makes this different from our ERP's quoting module?",
        answer:
          'RFQ AutoPilot focuses on the inbox-to-quote workflow and can complement ERP quoting by reducing repetitive intake and document preparation work.',
      },
    ],
  },
  {
    slug: 'rfq-management-for-export-companies',
    name: 'RFQ Management for Export Companies',
    title: 'RFQ Management for Export Companies | RFQ AutoPilot',
    description:
      'Manage international RFQs with multilingual intake, currency-aware quotation workflows, export terms, and faster buyer replies.',
    category: 'Export RFQ management',
    audience: 'Exporters, importers, trading companies, and international B2B sales teams',
    features: [
      'International RFQ workflow support',
      'Multilingual RFQ review',
      'Currency and payment term workflow',
      'Incoterms and export quote support',
      'Time-zone friendly response process',
      'Gmail and Outlook RFQ handling',
    ],
    keywords: ['export rfq', 'international quote', 'import export', 'incoterms', 'multilingual rfq'],
    faq: [
      {
        question: 'How does RFQ AutoPilot handle RFQs in languages my team does not speak?',
        answer:
          'RFQ AutoPilot can help structure multilingual RFQ information, but users should verify translations, terms, and commercial details before responding.',
      },
      {
        question: "Can the export RFQ tool generate quotation replies in the buyer's language?",
        answer:
          'The workflow can support multilingual response preparation, while the final message should be reviewed by someone responsible for the buyer relationship.',
      },
      {
        question: 'Does the system understand international trade terms like Incoterms?',
        answer:
          'RFQ AutoPilot can support export quote workflows that include trade terms, but official Incoterms, freight, duties, and compliance details must be verified.',
      },
      {
        question: 'Can I use this tool if my company uses both Gmail and Outlook across different offices?',
        answer:
          'Yes. RFQ AutoPilot is designed for Gmail and Outlook-oriented RFQ workflows used by distributed sales teams.',
      },
    ],
  },
  {
    slug: 'outlook-add-in-for-rfq',
    name: 'Outlook Add-in for RFQ Processing',
    title: 'Outlook Add-in for RFQ Processing and Quotes | RFQ AutoPilot',
    description:
      'Process Outlook RFQ emails with automatic request detection, PDF data extraction, quote drafting, and professional quotation replies.',
    category: 'Outlook RFQ add-in',
    audience: 'Microsoft Outlook sales teams that receive RFQs by email',
    features: [
      'Outlook RFQ detection workflow',
      'Email and PDF attachment extraction',
      'Shared mailbox RFQ support',
      'Professional quotation reply drafting',
      'Quote PDF preparation',
      'Microsoft sales workflow support',
    ],
    keywords: ['outlook add-in', 'outlook rfq', 'microsoft outlook quote', 'shared mailbox', 'outlook sales'],
    faq: [
      {
        question: 'Does the Outlook RFQ tool work with the desktop version of Outlook or only the web version?',
        answer:
          'The page describes Outlook RFQ workflows across common Outlook environments. Exact availability should be confirmed for your Outlook version and deployment setup.',
      },
      {
        question: 'Will the Outlook add-in conflict with other add-ins we already use?',
        answer:
          'RFQ AutoPilot is designed to support the RFQ workflow without replacing existing sales, CRM, or email tools.',
      },
      {
        question: 'Does the RFQ automation Outlook add-in work with shared mailboxes?',
        answer:
          'Shared mailbox workflows are useful for RFQ teams, but setup should match your Microsoft 365, permissions, and sales routing process.',
      },
      {
        question: 'How does the add-in handle Outlook email signatures?',
        answer:
          'Users should review the generated response and make sure the final email includes the correct signature, terms, and attachments before sending.',
      },
    ],
  },
  {
    slug: 'procurement-chrome-extension',
    name: 'Procurement Chrome Extension',
    title: 'Procurement Chrome Extension | RFQ AutoPilot',
    description:
      'Use a Chrome extension to detect RFQs, extract procurement data, compare request details, and prepare quote responses in Gmail or Outlook.',
    category: 'Procurement Chrome extension',
    audience: 'Procurement, sourcing, and sales teams that manage RFQs in the browser',
    features: [
      'Browser-based procurement workflow',
      'RFQ email detection',
      'Procurement data extraction',
      'Supplier and quote comparison support',
      'ERP-ready export workflow',
      'Gmail and Outlook support',
    ],
    keywords: ['procurement chrome extension', 'procurement automation', 'sourcing extension', 'rfq procurement', 'supplier quote'],
    faq: [
      {
        question: 'Does RFQ AutoPilot work with Outlook?',
        answer:
          'Yes. RFQ AutoPilot supports Gmail and Outlook-oriented RFQ workflows from the browser.',
      },
      {
        question: 'Can multiple team members use RFQ AutoPilot?',
        answer:
          'Teams can choose a plan and workflow that matches their RFQ volume, users, and internal review process.',
      },
      {
        question: 'What file types can the extension extract data from?',
        answer:
          'RFQ AutoPilot is designed for common RFQ email and attachment workflows such as PDFs, spreadsheets, documents, and images.',
      },
      {
        question: 'How is RFQ AutoPilot different from a full procurement platform?',
        answer:
          'RFQ AutoPilot is a focused RFQ-to-quote browser workflow. It can complement larger procurement systems instead of replacing them.',
      },
    ],
  },
];

export const primaryLandingLinks = landingSeoPages.map(({ slug, name, description, category }) => ({
  slug,
  name,
  description,
  category,
  href: `/${slug}`,
}));

export function getLandingSeo(slug: string) {
  const page = landingSeoPages.find((item) => item.slug === slug);
  if (!page) throw new Error(`Missing landing SEO data for ${slug}`);
  return page;
}

export function buildLandingSchemas(page: LandingSeo) {
  const url = `${baseUrl}/${page.slug}`;
  const softwareId = `${baseUrl}/#software`;

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': softwareId,
    name: site.name,
    alternateName: page.name,
    description: page.description,
    url,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Chrome Browser, Gmail, Outlook',
    browserRequirements: 'Requires a Chromium-based browser for extension workflows.',
    downloadUrl: site.chromeStoreUrl,
    featureList: page.features,
    audience: {
      '@type': 'Audience',
      audienceType: page.audience,
    },
    publisher: {
      '@type': 'Organization',
      name: site.legalName,
      url: site.companyUrl,
      logo: `${baseUrl}/logo.png`,
    },
    brand: {
      '@type': 'Brand',
      name: site.name,
    },
    offers: pricingPlans.map((plan) => ({
      '@type': 'Offer',
      name: plan.name,
      price: String(plan.monthly),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url,
    })),
    sameAs: [site.chromeStoreUrl],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: page.name, item: url },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title.replace(` | ${site.name}`, ''),
    description: page.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: site.name,
      url: baseUrl,
    },
    about: {
      '@id': softwareId,
    },
    audience: {
      '@type': 'Audience',
      audienceType: page.audience,
    },
  };

  return [softwareSchema, breadcrumbSchema, faqSchema, webPageSchema];
}

function scoreLanding(page: LandingSeo, corpus: string) {
  let score = 0;
  const haystack = corpus.toLowerCase();
  const pageTerms = [page.name, page.category, page.slug.replace(/-/g, ' '), ...page.keywords];

  for (const term of pageTerms) {
    const normalized = term.toLowerCase();
    if (haystack.includes(normalized)) score += normalized.length > 18 ? 6 : 4;
  }

  if (haystack.includes('gmail') && page.slug.includes('gmail')) score += 8;
  if (haystack.includes('outlook') && page.slug.includes('outlook')) score += 8;
  if (haystack.includes('pdf') && page.slug.includes('pdf')) score += 8;
  if (haystack.includes('manufacturer') && page.slug.includes('manufacturers')) score += 8;
  if (haystack.includes('distributor') && page.slug.includes('distributors')) score += 8;
  if (haystack.includes('export') && page.slug.includes('export')) score += 8;
  if (haystack.includes('procurement') && page.slug.includes('procurement')) score += 8;
  if (haystack.includes('email') && page.slug.includes('email')) score += 5;

  return score;
}

export function getBlogLandingLinks(post: {
  id: string;
  data: {
    title: string;
    description: string;
    category: string;
  };
}) {
  const corpus = `${post.id} ${post.data.title} ${post.data.description} ${post.data.category}`;

  return landingSeoPages
    .map((page) => ({ ...page, score: scoreLanding(page, corpus) }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, 4)
    .map(({ slug, name, description, category }) => ({
      slug,
      name,
      description,
      category,
      href: `/${slug}`,
      url: `${baseUrl}/${slug}`,
    }));
}
