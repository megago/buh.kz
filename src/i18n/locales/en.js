export default {
  meta: {
    title: 'LeaderABH — Accounting Support for Business in Almaty',
    description:
      'Full-cycle accounting for your business: taxes, reporting, HR records. 20+ years of experience, liability secured by contract. Free diagnostic.'
  },
  nav: {
    services: 'Services',
    guarantees: 'Guarantees',
    team: 'Team',
    certificates: 'Certificates',
    contact: 'Contact'
  },
  lang: {
    label: 'Language',
    switchAria: 'Choose site language'
  },
  hero: {
    titleLine1: 'Run your business,',
    titleLine2: 'we’ll take care of accounting and taxes',
    lead: 'We provide full-cycle accounting for your business, freeing you from routine work and protecting you from fines — liability is secured by contract.',
    ctaPrimary: 'Free diagnostic',
    ctaSecondary: 'Call us',
    stats: [
      { value: '20+', label: 'years of experience' },
      { value: '50 bn', label: 'client turnover (₸)' },
      { value: '40+', label: 'tax audits passed' }
    ]
  },
  services: {
    heading: 'Turnkey comprehensive support',
    note: 'We guarantee quality, timely work — not just in words, but backed by a signed contract.',
    cta: 'Get an accounting diagnostic',
    checklist: [
      'Analysis and development of a tax and accounting strategy tailored to your business',
      'Tax and accounting consultations',
      'Preparation and filing of all accounting and tax reports',
      'Bookkeeping (full or partial)',
      'Processing of primary documents',
      'Tax calculations',
      'Payroll and social contribution calculations',
      'HR records management'
    ],
    cards: [
      { title: 'One-off consultations', text: 'Targeted help with a specific question — no long-term commitment.' },
      { title: 'Opening and liquidation', text: 'We support your business from registering a sole proprietorship/LLP to closing it, with no loose ends or fines.' },
      { title: 'HR administration', text: 'Orders, employment contracts, personnel records — compliant with Kazakhstan’s labour law.' }
    ]
  },
  benefits: {
    heading: 'With us, you save time and nerves',
    items: [
      {
        title: '100% liability',
        text: 'We take responsibility for all accounting and guarantee it is done correctly. Any mistake made through our fault is reimbursed in full.'
      },
      {
        title: 'Save on salary',
        text: 'Working with us saves you the cost of an in-house accountant’s salary and social contributions — we simply sign a contract and are not your staff.'
      },
      {
        title: 'Collective experience',
        text: 'Our team brings together specialists with different backgrounds and experience. In a difficult situation, we solve it together — something a single in-house accountant can’t do.'
      }
    ]
  },
  certificates: {
    heading: 'Our certificates',
    items: [
      'ACCA DipIFR diploma in International Financial Reporting',
      'Russell Bedford professional accountant certificate',
      'Certificate of membership in the Chamber of Tax Consultants of Kazakhstan'
    ]
  },
  team: {
    heading: 'A team of professionals at your service',
    lead: 'We provide high-quality service in accounting, tax audit, and legal support. With us, you can be confident in the accuracy and timeliness of all your company’s financial operations.',
    stats: [
      { prefix: '', suffix: ' bn', title: 'in turnover', text: 'We have experience working with large companies' },
      { prefix: 'Over ', suffix: '', title: 'years', text: 'of accounting experience' },
      { prefix: 'Over ', suffix: '', title: '', text: 'tax audits passed' }
    ],
    partner: 'Partner of the «Uchet.Partners» network',
    partnerAlt: 'Partner of the «Uchet.Partners» network'
  },
  contract: {
    heading: 'All terms of cooperation are set out in the contract',
    text: 'We understand that words alone can promise anything, so we back ours with a contract that spells out the full scope of responsibility.'
  },
  contact: {
    heading: 'Free diagnostic of your accounting',
    lead: 'Leave your contact details — we’ll get in touch and schedule a meeting to discuss your accounting.',
    nameLabel: 'Name',
    phoneLabel: 'Phone',
    emailLabel: 'E-mail',
    phonePlaceholder: '+7 (___) ___-__-__',
    submit: 'Submit',
    submitting: 'Sending…',
    errors: {
      name: 'Please enter your name (at least 2 characters)',
      phone: 'Please enter a valid phone number',
      email: 'Please enter a valid e-mail address'
    },
    successMessage: 'Thank you! We’ll open WhatsApp — send the message and we’ll get back to you.',
    genericError: 'Something went wrong.',
    proxyDownError: 'Submissions are temporarily unavailable. Please call us directly.',
    sendError: 'Couldn’t send your request. Please try again or call us.',
    whatsappMessage: {
      title: 'Accounting diagnostic request',
      name: 'Name',
      phone: 'Phone',
      email: 'E-mail'
    }
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: '1. General provisions',
        body: 'This policy sets out how personal data is processed for visitors of the LeaderABH website (the "Site") who leave their contact details via the feedback form.'
      },
      {
        heading: '2. What data we collect',
        body: 'Name, phone number, and email address provided in the request form.'
      },
      {
        heading: '3. Purpose of processing',
        body: 'The data is used solely to contact the visitor regarding accounting and tax support, and is not shared with third parties.'
      },
      {
        heading: '4. How the request is submitted',
        body: 'Requests submitted through the Site\'s form are sent via the WhatsApp number listed in the "Contact" section.'
      },
      {
        heading: '5. Data storage and protection',
        body: 'We take reasonable measures to protect the data provided from unauthorized access.'
      },
      {
        heading: '6. Contact',
        body: 'For questions about personal data processing, contact us at {email}.'
      }
    ]
  },
  footer: {
    privacy: 'Privacy Policy',
    rights: 'All rights reserved.',
    phoneLabel: 'Phone:',
    emailLabel: 'Email:',
    addressLabel: 'Address:'
  },
  social: {
    whatsapp: 'Message us on WhatsApp',
    telegram: 'Message us on Telegram',
    instagram: "Instagram {'@'}{handle}"
  },
  a11y: {
    skipLink: 'Skip to content',
    homeAria: 'LeaderABH — go to homepage',
    openMenu: 'Open menu',
    mainNav: 'Main navigation',
    contactUs: 'Contact us',
    close: 'Close',
    prevCert: 'Previous certificate',
    nextCert: 'Next certificate',
    openCert: 'Open: {alt}'
  }
}
