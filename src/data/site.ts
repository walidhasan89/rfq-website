export const site = {
  name: 'RFQ AutoPilot',
  legalName: 'Inoviqa LLC',
  url: 'https://rfqautopilot.com',
  description:
    'A Chrome extension that helps suppliers, distributors, manufacturers, wholesalers, and B2B sales teams turn incoming RFQs into professional branded quotations faster.',
  supportEmail: 'support@rfqautopilot.com',
  privacyEmail: 'support@rfqautopilot.com',
  legalEmail: 'support@rfqautopilot.com',
  chromeStoreUrl:
    'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl',
  companyUrl: 'https://inoviqa.com',
  founderUrl: 'https://walidhasan.com',
  social: {
    facebook: 'https://www.facebook.com/Inoviqa/',
    linkedin: 'https://www.linkedin.com/company/74756375/',
    instagram: 'https://www.instagram.com/inoviqa',
    behance: 'https://www.behance.net/walid_hasan',
    dribbble: 'https://dribbble.com/inoviqa',
  },
} as const;

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
] as const;

export type PricingFeature = {
  text: string;
  emphasized?: boolean;
};

export type PricingPlan = {
  id: 'free' | 'solo' | 'pro';
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  popular?: boolean;
  features: PricingFeature[];
};

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    monthly: 0,
    yearly: 0,
    description: 'Explore the core RFQ-to-quote workflow before upgrading.',
    features: [
      { text: 'Up to 30 RFQ captures per month' },
      { text: '10 AI credits' },
      { text: 'Basic email and attachment extraction' },
      { text: 'Standard quote builder' },
      { text: 'Standard PDF quotation export' },
      { text: 'Chrome extension access' },
    ],
  },
  {
    id: 'solo',
    name: 'Solo',
    monthly: 14.99,
    yearly: 149,
    description: 'For individual salespeople and small quotation teams.',
    features: [
      { text: 'Up to 300 RFQ captures per month', emphasized: true },
      { text: '100 AI credits' },
      { text: 'Up to 200 PDF exports' },
      { text: 'Company branding and colors' },
      { text: 'Custom quote and email templates' },
      { text: 'Email and chat support' },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 29.99,
    yearly: 299,
    popular: true,
    description: 'For growing suppliers, distributors, and high-volume quote workflows.',
    features: [
      { text: 'Unlimited RFQ captures', emphasized: true },
      { text: '300 AI credits' },
      { text: 'Unlimited PDF exports', emphasized: true },
      { text: 'Unlimited reusable templates' },
      { text: 'Advanced branding controls' },
      { text: 'Priority support' },
    ],
  },
];

export type SeoLandingPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  audience: string;
  problem: string;
  outcome: string;
  benefits: string[];
  workflow: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  related: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: 'rfq-response-software',
    title: 'RFQ Response Software for Faster, More Professional Quotations',
    metaTitle: 'RFQ Response Software for Suppliers | RFQ AutoPilot',
    description:
      'Turn incoming RFQ emails and attachments into accurate, branded quotations faster with RFQ AutoPilot for suppliers, distributors, and manufacturers.',
    eyebrow: 'RFQ Response Software',
    audience: 'suppliers, distributors, manufacturers, wholesalers, and B2B sales teams',
    problem:
      'Incoming RFQs often arrive as long email threads, spreadsheets, PDFs, and mixed attachments. Sales teams must manually identify requirements, copy line items, calculate pricing, format a quotation, and write a response. That process is slow, inconsistent, and easy to get wrong.',
    outcome:
      'RFQ AutoPilot creates a structured workflow from incoming request to final quotation. It helps your team review extracted requirements, prepare a professional quote, apply company branding, generate a PDF, and respond without rebuilding the same documents from scratch.',
    benefits: [
      'Reduce manual copying from emails, PDFs, and attachments',
      'Keep quote formatting consistent across your sales team',
      'Respond faster without skipping the human review step',
      'Create branded PDF quotations from a repeatable workflow',
      'Reuse company details, terms, and email templates',
      'Work from a lightweight Chrome extension instead of a complex ERP rollout',
    ],
    workflow: [
      { title: 'Open the incoming RFQ', description: 'Start from the buyer request in your normal email workflow.' },
      { title: 'Extract and review requirements', description: 'Organize relevant RFQ details and verify them before quoting.' },
      { title: 'Build the quotation', description: 'Add pricing, commercial terms, branding, and reusable company information.' },
      { title: 'Export and reply', description: 'Generate a professional PDF and prepare the response email.' },
    ],
    faq: [
      { question: 'Who is RFQ response software for?', answer: 'It is designed for businesses that receive quote requests and need to turn them into accurate sales quotations, including suppliers, distributors, manufacturers, wholesalers, and export sales teams.' },
      { question: 'Does RFQ AutoPilot send quotations automatically?', answer: 'The workflow is designed to keep the user in control. You review extracted information, pricing, terms, the PDF, and the email before sending.' },
      { question: 'Can it work with RFQ attachments?', answer: 'RFQ AutoPilot is designed to help interpret RFQ details from email content and common attachment workflows, including PDFs and related documents.' },
    ],
    related: ['rfq-email-automation', 'quotation-builder', 'rfq-pdf-data-extraction'],
  },
  {
    slug: 'rfq-email-automation',
    title: 'RFQ Email Automation Without Losing Control of the Quote',
    metaTitle: 'RFQ Email Automation for B2B Sales Teams | RFQ AutoPilot',
    description:
      'Simplify incoming RFQ email processing, quotation preparation, and professional responses in Gmail and Outlook workflows.',
    eyebrow: 'RFQ Email Automation',
    audience: 'B2B sales teams that receive RFQs through Gmail or Outlook',
    problem:
      'RFQ emails are rarely clean. Requirements may be split across the subject line, email body, forwarded messages, PDF files, spreadsheets, and buyer notes. Teams lose time moving details between inboxes, calculators, quote templates, and PDF tools.',
    outcome:
      'RFQ AutoPilot connects the major steps of the email-to-quote workflow. It helps capture request details, structure them for review, build the quotation, generate a branded PDF, and prepare a reusable response email.',
    benefits: [
      'Reduce repetitive copy-and-paste work',
      'Create a more consistent quotation response process',
      'Use dynamic email templates for faster replies',
      'Keep the final review and sending decision with the salesperson',
      'Support Gmail and Outlook-oriented RFQ workflows',
      'Avoid replacing your entire inbox or CRM',
    ],
    workflow: [
      { title: 'Receive the RFQ', description: 'Work from the buyer email and its attachments.' },
      { title: 'Structure the request', description: 'Capture buyer, product, quantity, delivery, and commercial details for review.' },
      { title: 'Prepare the quote', description: 'Add prices, terms, validity, lead time, and company branding.' },
      { title: 'Compose the response', description: 'Preview the quotation email and attach the generated PDF before sending.' },
    ],
    faq: [
      { question: 'Does RFQ AutoPilot replace Gmail or Outlook?', answer: 'No. It is designed to support the existing email workflow rather than replace your email platform.' },
      { question: 'Can I edit the email before sending?', answer: 'Yes. The workflow is built around review and editing before the final message is sent.' },
      { question: 'Is it useful for low RFQ volume?', answer: 'Yes. The free and Solo plans are suitable for individuals and smaller teams that want a more consistent workflow without enterprise software.' },
    ],
    related: ['gmail-rfq-extension', 'outlook-rfq-workflow', 'rfq-response-software'],
  },
  {
    slug: 'quotation-builder',
    title: 'Professional Quotation Builder for B2B Suppliers',
    metaTitle: 'B2B Quotation Builder with Branded PDF Export | RFQ AutoPilot',
    description:
      'Build professional B2B quotations with company branding, line items, commercial terms, PDF export, and reusable email templates.',
    eyebrow: 'Quotation Builder',
    audience: 'suppliers and sales teams that need consistent branded quotations',
    problem:
      'Quotation files created manually in Word, spreadsheets, or copied PDFs often have inconsistent layouts, missing terms, outdated company information, and slow revision cycles.',
    outcome:
      'RFQ AutoPilot provides a repeatable quote-building workflow with configurable company details, brand colors, line items, commercial terms, totals, PDF export, and response email preparation.',
    benefits: [
      'Create consistent quotation layouts',
      'Apply your own business color and branding',
      'Organize line items and commercial terms clearly',
      'Generate client-ready PDF quotations',
      'Reuse quote and email templates',
      'Reduce document formatting time',
    ],
    workflow: [
      { title: 'Set company details', description: 'Add the information and branding that should appear on quotations.' },
      { title: 'Add RFQ line items', description: 'Review requested products, quantities, units, and descriptions.' },
      { title: 'Complete commercial terms', description: 'Add price, lead time, validity, payment, delivery, and notes.' },
      { title: 'Generate the PDF', description: 'Preview and export the final quotation in a professional format.' },
    ],
    faq: [
      { question: 'Can I use my own brand color?', answer: 'Yes. The quotation workflow supports business branding controls so the exported PDF can better match your company identity.' },
      { question: 'Can I edit line items before export?', answer: 'Yes. Extracted and entered information should be reviewed and edited before the quotation is finalized.' },
      { question: 'Does it generate a PDF?', answer: 'Yes. Professional PDF quotation generation is a core part of the workflow.' },
    ],
    related: ['rfq-response-software', 'rfq-pdf-data-extraction', 'rfq-software-for-distributors'],
  },
  {
    slug: 'rfq-software-for-distributors',
    title: 'RFQ Software for Distributors and Wholesalers',
    metaTitle: 'RFQ Software for Distributors and Wholesalers | RFQ AutoPilot',
    description:
      'Help distribution sales teams process incoming RFQs, prepare accurate quotations, create branded PDFs, and reply faster.',
    eyebrow: 'For Distributors',
    audience: 'industrial distributors, wholesalers, parts suppliers, and equipment sellers',
    problem:
      'Distribution RFQs may contain many line items, manufacturer references, part numbers, quantities, requested delivery dates, and special buyer conditions. Re-entering all of this data slows the sales desk and increases the risk of omissions.',
    outcome:
      'RFQ AutoPilot helps distribution teams move from buyer request to structured quotation using a consistent browser-based workflow. The team can review requirements, enter pricing, apply commercial terms, and export a branded PDF.',
    benefits: [
      'Handle multi-line RFQs more consistently',
      'Reduce manual re-entry from buyer emails and files',
      'Standardize quotation terms and document branding',
      'Support inside sales and remote sales teams',
      'Prepare professional quote responses faster',
      'Start without a long ERP implementation',
    ],
    workflow: [
      { title: 'Capture the distributor RFQ', description: 'Review the buyer request, part details, quantities, and attachments.' },
      { title: 'Confirm availability and pricing', description: 'Add the commercial information your buyer needs.' },
      { title: 'Create a branded quotation', description: 'Use consistent company details, terms, and PDF formatting.' },
      { title: 'Reply to the buyer', description: 'Prepare a professional response with the final quotation attached.' },
    ],
    faq: [
      { question: 'Is this a distributor ERP?', answer: 'No. RFQ AutoPilot is a focused Chrome extension for the RFQ-to-quote workflow. It can complement existing email, CRM, inventory, and ERP systems.' },
      { question: 'Can it handle part numbers and line items?', answer: 'The quote workflow is designed around structured RFQ line items, including descriptions, quantities, and other relevant details.' },
      { question: 'Can multiple salespeople use it?', answer: 'Plan and account capabilities should be selected based on your team size and workflow. Contact support for current team options.' },
    ],
    related: ['rfq-software-for-manufacturers', 'quotation-builder', 'rfq-email-automation'],
  },
  {
    slug: 'rfq-software-for-manufacturers',
    title: 'RFQ Software for Manufacturers and Industrial Sales Teams',
    metaTitle: 'RFQ Software for Manufacturers | RFQ AutoPilot',
    description:
      'Streamline manufacturing RFQ review, quote preparation, commercial terms, branded PDF export, and buyer response workflows.',
    eyebrow: 'For Manufacturers',
    audience: 'manufacturers, contract manufacturers, fabricators, and industrial sales teams',
    problem:
      'Manufacturing RFQs can include drawings, specifications, materials, quantities, tolerances, delivery expectations, and commercial conditions. Information is often spread across multiple files and email messages.',
    outcome:
      'RFQ AutoPilot helps sales teams organize the commercial side of the response. Users can review RFQ information, prepare line items and terms, generate a consistent quotation PDF, and reply from their normal browser workflow.',
    benefits: [
      'Create a repeatable RFQ review process',
      'Reduce scattered information across emails and files',
      'Keep quotation formatting consistent',
      'Present lead time, validity, payment, and delivery terms clearly',
      'Generate professional branded PDF quotations',
      'Improve response speed while retaining human review',
    ],
    workflow: [
      { title: 'Review technical and commercial requirements', description: 'Gather the buyer request and supporting files.' },
      { title: 'Confirm quote inputs', description: 'Coordinate pricing, quantity, lead time, and commercial conditions.' },
      { title: 'Build the formal quotation', description: 'Create structured line items and consistent terms.' },
      { title: 'Export and respond', description: 'Generate the PDF and prepare the buyer response.' },
    ],
    faq: [
      { question: 'Does RFQ AutoPilot calculate manufacturing costs?', answer: 'It is focused on RFQ interpretation and quotation workflow. Your team remains responsible for engineering review, costing, pricing approval, and technical feasibility.' },
      { question: 'Can it process drawings?', answer: 'The extension should not replace engineering review. Supporting documents can be part of the RFQ workflow, but technical drawings and specifications must be verified by qualified staff.' },
      { question: 'Is human approval required?', answer: 'Yes. Every quotation should be reviewed for technical accuracy, pricing, terms, and buyer requirements before sending.' },
    ],
    related: ['rfq-software-for-distributors', 'rfq-pdf-data-extraction', 'rfq-response-software'],
  },
  {
    slug: 'gmail-rfq-extension',
    title: 'Gmail RFQ Extension for Faster Quote Responses',
    metaTitle: 'Gmail RFQ Extension for Suppliers | RFQ AutoPilot',
    description:
      'Capture RFQ details, build branded quotations, generate PDFs, and prepare buyer responses from a Gmail-centered workflow.',
    eyebrow: 'Gmail RFQ Extension',
    audience: 'sales teams that manage incoming quote requests through Gmail',
    problem:
      'Moving information from Gmail into spreadsheets, quote documents, PDF tools, and response templates creates unnecessary steps and inconsistent output.',
    outcome:
      'RFQ AutoPilot brings the quotation workflow closer to Gmail. It helps users work from the incoming request, review structured details, build the quote, generate the PDF, and open a prepared Gmail response.',
    benefits: [
      'Work from the buyer email instead of starting from a blank document',
      'Reduce repeated copying between browser tabs',
      'Use reusable email templates with dynamic information',
      'Generate a branded quotation PDF',
      'Preview the response before sending',
      'Keep the salesperson in control of the final email',
    ],
    workflow: [
      { title: 'Open the RFQ in Gmail', description: 'Start with the buyer message and attachments.' },
      { title: 'Review extracted information', description: 'Check names, line items, quantities, dates, and requirements.' },
      { title: 'Create the quotation', description: 'Complete pricing, terms, branding, and PDF output.' },
      { title: 'Prepare Gmail compose', description: 'Use the email preview and compose integration to respond.' },
    ],
    faq: [
      { question: 'Does the extension send email without review?', answer: 'The intended workflow includes preview and user confirmation before sending the final message.' },
      { question: 'Can I customize the response email?', answer: 'Yes. Reusable email templates and dynamic variables help create consistent but editable responses.' },
      { question: 'Do I need to leave Gmail?', answer: 'Some quotation work happens in the extension panel, but the workflow is designed to remain close to your normal Gmail process.' },
    ],
    related: ['rfq-email-automation', 'quotation-builder', 'outlook-rfq-workflow'],
  },
  {
    slug: 'outlook-rfq-workflow',
    title: 'Outlook RFQ Workflow for Supplier Quotation Teams',
    metaTitle: 'Outlook RFQ Workflow for Suppliers | RFQ AutoPilot',
    description:
      'Organize incoming RFQ information, prepare branded quotations, and improve buyer response consistency for Outlook-based sales teams.',
    eyebrow: 'Outlook RFQ Workflow',
    audience: 'suppliers and B2B sales teams that receive RFQs through Outlook',
    problem:
      'Outlook-based quotation teams often depend on forwarded email chains, local spreadsheets, shared folders, and manually edited Word or PDF templates.',
    outcome:
      'RFQ AutoPilot provides a browser-based RFQ-to-quote workflow that can support Outlook-centered teams by structuring the request, preparing the quotation, and generating professional response documents.',
    benefits: [
      'Standardize how RFQ information is reviewed',
      'Reduce dependence on copied Word and spreadsheet templates',
      'Generate consistent branded quotation PDFs',
      'Prepare response content faster',
      'Keep technical and commercial review with your team',
      'Use a focused extension instead of replacing your mail platform',
    ],
    workflow: [
      { title: 'Open the Outlook RFQ', description: 'Review the buyer request and all supporting files.' },
      { title: 'Capture the quote requirements', description: 'Structure the important commercial information.' },
      { title: 'Prepare the quotation', description: 'Add pricing, terms, validity, lead time, and branding.' },
      { title: 'Export and respond', description: 'Generate the PDF and use the prepared response in Outlook.' },
    ],
    faq: [
      { question: 'Is RFQ AutoPilot an Outlook add-in?', answer: 'RFQ AutoPilot is a Chrome extension. It is designed to support browser-based Outlook and related RFQ workflows rather than act as a native desktop Outlook add-in.' },
      { question: 'Can I use the PDF outside Outlook?', answer: 'Yes. The generated quotation PDF can be used in your normal buyer communication workflow.' },
      { question: 'Does it replace our quotation approval process?', answer: 'No. Internal pricing, technical, credit, and management approvals should remain part of your company process.' },
    ],
    related: ['rfq-email-automation', 'gmail-rfq-extension', 'rfq-response-software'],
  },
  {
    slug: 'rfq-pdf-data-extraction',
    title: 'RFQ PDF Data Extraction for Faster Quotation Preparation',
    metaTitle: 'RFQ PDF Data Extraction for Quote Workflows | RFQ AutoPilot',
    description:
      'Reduce manual copying from RFQ PDFs and attachments by structuring relevant information for review and quotation preparation.',
    eyebrow: 'RFQ PDF Data Extraction',
    audience: 'sales teams that receive buyer requirements in PDF files and attachments',
    problem:
      'RFQ PDFs may contain line items, buyer references, delivery requirements, terms, contact information, and notes in different layouts. Copying everything manually is slow and error-prone.',
    outcome:
      'RFQ AutoPilot helps identify and structure useful information from RFQ document workflows so the user can review it, correct it, and continue into the quotation builder.',
    benefits: [
      'Reduce repetitive copying from PDF documents',
      'Bring important RFQ details into a structured review step',
      'Correct extracted content before it enters the quote',
      'Move from document review to quotation preparation faster',
      'Keep source attachments available for verification',
      'Avoid treating AI extraction as automatic approval',
    ],
    workflow: [
      { title: 'Open the email and PDF', description: 'Start with the original buyer request and source document.' },
      { title: 'Extract candidate details', description: 'Identify relevant line items, quantities, references, dates, and terms.' },
      { title: 'Verify against the source', description: 'Review every important field and correct any missing or uncertain information.' },
      { title: 'Build the quotation', description: 'Use approved data to prepare the branded quote and response.' },
    ],
    faq: [
      { question: 'Is PDF extraction always perfect?', answer: 'No extraction system should be treated as perfect. Scanned files, unusual tables, low-quality documents, and complex formatting can require manual correction.' },
      { question: 'Should I verify extracted quantities and prices?', answer: 'Yes. Quantities, part numbers, specifications, dates, prices, and commercial terms must be checked against the original RFQ before sending a quotation.' },
      { question: 'Can it replace technical document review?', answer: 'No. It supports data handling but does not replace engineering, legal, quality, compliance, or technical review.' },
    ],
    related: ['quotation-builder', 'rfq-software-for-manufacturers', 'rfq-response-software'],
  },
];
