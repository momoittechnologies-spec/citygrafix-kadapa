// Default Seed Data for City Grafix Photography Platform
// Pre-populated with realistic events so the platform is immediately interactive

export const DEFAULT_EVENTS = [
  {
    id: 'evt-rahul-sneha-wedding',
    slug: 'rahul-sneha-wedding',
    title: 'Rahul & Sneha’s Royal Wedding',
    clientName: 'Rahul Reddy',
    clientPhone: '+91 98765 43210',
    eventType: 'Wedding',
    eventDate: '2026-09-18',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    createdAt: '2026-09-20T10:00:00Z',
    expiresAt: '2027-09-20T23:59:59Z', // 1 year validity (Active)
    pinCode: '', // No PIN (open public link)
    watermark: false,
    categories: ['All', 'Haldi', 'Wedding Ceremony', 'Reception', 'Portraits'],
    photos: [
      {
        id: 'p1',
        title: 'Mandap Welcome & Floral Arch',
        category: 'Wedding Ceremony',
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p2',
        title: 'Bride & Groom Royal Portrait',
        category: 'Portraits',
        url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p3',
        title: 'Jeelakarra Bellam Sacred Ritual',
        category: 'Wedding Ceremony',
        url: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p4',
        title: 'Haldi Joy & Celebration with Friends',
        category: 'Haldi',
        url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p5',
        title: 'Grand Reception Stage & Cake Cutting',
        category: 'Reception',
        url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p6',
        title: 'Bridal Traditional Gold Jewellery Details',
        category: 'Portraits',
        url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p7',
        title: 'Mangalasutram Traditional Knot',
        category: 'Wedding Ceremony',
        url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'p8',
        title: 'Sangeet Dance & Festive Celebration',
        category: 'Reception',
        url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      }
    ]
  },
  {
    id: 'evt-aadhya-1st-birthday',
    slug: 'aadhya-1st-birthday',
    title: 'Aadhya’s 1st Birthday & Cradle Ceremony',
    clientName: 'Srinivas Rao',
    clientPhone: '+91 94400 12345',
    eventType: 'Birthday',
    eventDate: '2026-10-10',
    coverImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
    createdAt: '2026-10-11T12:00:00Z',
    expiresAt: '2027-04-11T23:59:59Z', // 6 months validity (Active)
    pinCode: '',
    watermark: false,
    categories: ['All', 'Cradle Ceremony', 'Cake Cutting', 'Family Moments'],
    photos: [
      {
        id: 'b1',
        title: 'Floral Cradle Decoration & Lighting',
        category: 'Cradle Ceremony',
        url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'b2',
        title: 'Baby Angel Theme 1st Year Cake',
        category: 'Cake Cutting',
        url: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      },
      {
        id: 'b3',
        title: 'Family Candid Laughter',
        category: 'Family Moments',
        url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      }
    ]
  },
  {
    id: 'evt-kiran-divya-engagement',
    slug: 'kiran-divya-engagement',
    title: 'Kiran & Divya Engagement Ceremony',
    clientName: 'Kiran Kumar',
    clientPhone: '+91 91234 56789',
    eventType: 'Engagement',
    eventDate: '2026-02-14',
    coverImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
    createdAt: '2026-02-15T09:00:00Z',
    expiresAt: '2026-08-15T23:59:59Z', // Expired 2 months ago (To demonstrate extension flow)
    pinCode: '',
    watermark: false,
    categories: ['All', 'Ring Exchange', 'Couples Portraits'],
    photos: [
      {
        id: 'e1',
        title: 'Ring Exchange Moment',
        category: 'Ring Exchange',
        url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1600&q=85',
        thumbUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=500&q=70',
        width: 1600,
        height: 1067,
      }
    ]
  }
];
