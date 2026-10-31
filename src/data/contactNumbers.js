// Official Contact Numbers & Channels for City Grafix Kadapa
// 1. 7287867584 - Both Calls and WhatsApp
// 2. 9581764937 - Both Calls and WhatsApp
// 3. 7601043674 (761043674) - (Reception) Only WhatsApp

export const CONTACT_NUMBERS = [
  {
    id: 'line1',
    raw: '7287867584',
    display: '72878 67584',
    international: '+91 72878 67584',
    label: 'Primary Support & Direct Orders',
    badge: 'Calls & WhatsApp',
    badgeColor: 'sky',
    supportsCall: true,
    supportsWhatsApp: true,
    callHref: 'tel:+917287867584',
    whatsappHref: 'https://wa.me/917287867584?text=Hi%20City%20Grafix%2C%20I%20want%20to%20inquire%20about%20printing%20services.',
  },
  {
    id: 'line2',
    raw: '9581764937',
    display: '95817 64937',
    international: '+91 95817 64937',
    label: 'Signage & Custom Print Inquiries',
    badge: 'Calls & WhatsApp',
    badgeColor: 'teal',
    supportsCall: true,
    supportsWhatsApp: true,
    callHref: 'tel:+919581764937',
    whatsappHref: 'https://wa.me/919581764937?text=Hi%20City%20Grafix%2C%20I%20have%20a%20ready%20file%20and%20want%20to%20inquire%20about%20printing.',
  },
  {
    id: 'reception',
    raw: '7601043674',
    display: '76010 43674',
    international: '+91 76010 43674',
    label: 'Reception Desk',
    badge: '(Reception) Only WhatsApp',
    badgeColor: 'amber',
    supportsCall: false,
    supportsWhatsApp: true,
    callHref: null,
    whatsappHref: 'https://wa.me/917601043674?text=Hi%20City%20Grafix%20Reception%2C%20I%20have%20an%20inquiry.',
    note: 'WhatsApp Only • No Incoming Calls',
  },
];
