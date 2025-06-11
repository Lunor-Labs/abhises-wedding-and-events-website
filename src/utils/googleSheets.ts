import { Service, GalleryImage, Testimonial, Package, GoogleSheetsData } from '../types';

// Default Google Sheet ID - replace with your actual sheet ID
const DEFAULT_SHEET_ID = '1WnkPPg-FoFkWnwWO4TkTO1lmX5loT_ndwnhhtp0_opM';

// Sheet names for different data types
const SHEET_NAMES = {
  services: 'Services',
  gallery: 'Gallery', 
  testimonials: 'Testimonials',
  packages: 'Packages'
};

// Default fallback data
const defaultData: GoogleSheetsData = {
  services: [
    {
      icon: 'Calendar',
      title: 'Wedding Planning',
      description: 'Complete wedding coordination from concept to celebration, ensuring every detail is perfect.',
      features: ['Timeline Management', 'Vendor Coordination', 'Budget Planning', 'Day-of Coordination']
    },
    {
      icon: 'Compass',
      title: 'Event Coordination',
      description: 'Professional event management for rehearsal dinners, brunch parties, and anniversary celebrations.',
      features: ['Event Design', 'Logistics Management', 'Guest Coordination', 'Timeline Execution']
    },
    {
      icon: 'Flower',
      title: 'Floral Design',
      description: 'Stunning floral arrangements that capture your style and enhance your wedding\'s natural beauty.',
      features: ['Bridal Bouquets', 'Ceremony Arrangements', 'Reception Centerpieces', 'Floral Installations']
    },
    {
      icon: 'Home',
      title: 'Venue Styling',
      description: 'Transform any space into your dream wedding venue with our expert styling and decor services.',
      features: ['Space Design', 'Lighting Setup', 'Furniture Arrangement', 'Decor Installation']
    },
    {
      icon: 'Plane',
      title: 'Destination Weddings',
      description: 'Seamless planning for destination weddings, handling all logistics for your perfect getaway celebration.',
      features: ['Location Scouting', 'Travel Coordination', 'Local Vendor Management', 'Guest Services']
    },
    {
      icon: 'Camera',
      title: 'Photography Coordination',
      description: 'Work with top photographers to capture every precious moment of your special day.',
      features: ['Photographer Selection', 'Shot List Planning', 'Timeline Coordination', 'Album Design']
    }
  ],
  gallery: [
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Elegant wedding ceremony',
      category: 'Ceremony'
    },
    {
      src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful bridal bouquet',
      category: 'Florals'
    },
    {
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Reception table setting',
      category: 'Reception'
    },
    {
      src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding cake details',
      category: 'Details'
    },
    {
      src: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Outdoor wedding venue',
      category: 'Venues'
    },
    {
      src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Bridal party portrait',
      category: 'Portraits'
    },
    {
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding arch decoration',
      category: 'Decor'
    },
    {
      src: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Wedding rings detail',
      category: 'Details'
    }
  ],
  testimonials: [
    {
      name: 'Sarah & Michael',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      text: 'Ever After Moments made our dream wedding come true! Every detail was perfect, and they handled everything with such grace and professionalism. We couldn\'t be happier!',
      rating: 5,
      wedding: 'Garden Wedding, June 2024'
    },
    {
      name: 'Emma & David',
      image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      text: 'From our first meeting to the last dance, the team was incredible. They understood our vision perfectly and created a magical day that exceeded all our expectations.',
      rating: 5,
      wedding: 'Beach Wedding, August 2024'
    },
    {
      name: 'Jessica & Ryan',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      text: 'The attention to detail was extraordinary. Every flower, every decoration, every moment was planned to perfection. Our guests are still talking about our wedding!',
      rating: 5,
      wedding: 'Vineyard Wedding, September 2024'
    },
    {
      name: 'Amanda & Chris',
      image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face',
      text: 'Planning a destination wedding seemed impossible until we found Ever After Moments. They coordinated everything flawlessly, allowing us to enjoy our special day stress-free.',
      rating: 5,
      wedding: 'Destination Wedding, July 2024'
    }
  ],
  packages: [
    {
      name: 'Essential',
      icon: 'Star',
      price: '$2,999',
      description: 'Perfect for intimate celebrations and couples who want professional guidance.',
      features: [
        'Initial consultation & planning session',
        'Wedding timeline creation',
        'Vendor recommendations',
        'Budget planning assistance',
        'Month-of coordination',
        'Day-of coordination (8 hours)',
        'Emergency kit for wedding day',
        'Setup & breakdown coordination'
      ],
      popular: false,
      color: 'from-pink-400 to-pink-500'
    },
    {
      name: 'Elegant',
      icon: 'Crown',
      price: '$4,999',
      description: 'Comprehensive planning with enhanced design services for your dream wedding.',
      features: [
        'Everything in Essential package',
        'Full wedding design & styling',
        'Unlimited vendor meetings',
        'RSVP management',
        'Rehearsal coordination',
        'Guest accommodation assistance',
        'Custom floor plan design',
        'Bridal party coordination',
        'Welcome bags creation',
        'Photography timeline planning'
      ],
      popular: true,
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: 'Elite',
      icon: 'Gem',
      price: '$7,999',
      description: 'The ultimate luxury experience with white-glove service and exclusive amenities.',
      features: [
        'Everything in Elegant package',
        'Personal wedding concierge',
        'Custom invitation design',
        'Exclusive vendor partnerships',
        'Destination wedding coordination',
        'VIP guest services',
        'Luxury transportation coordination',
        'Post-wedding cleanup service',
        'Anniversary planning session',
        'Complimentary engagement party planning',
        '24/7 planning support',
        'Premium linens & decor upgrades'
      ],
      popular: false,
      color: 'from-pink-600 to-pink-700'
    }
  ]
};

// Parse features string (comma-separated) into array
const parseFeatures = (featuresString: string): string[] => {
  if (!featuresString) return [];
  return featuresString.split(',').map(feature => feature.trim()).filter(feature => feature.length > 0);
};

// Check if a row is likely a header row
const isHeaderRow = (row: any): boolean => {
  if (!row.c || !row.c[0] || !row.c[0].v) return false;
  
  const firstCell = row.c[0].v.toString().toLowerCase();
  const headerKeywords = ['icon', 'title', 'name', 'image', 'src', 'url'];
  
  return headerKeywords.some(keyword => firstCell.includes(keyword));
};

// Fetch data from Google Sheets using gviz API
export const fetchGoogleSheetsData = async (sheetId: string = DEFAULT_SHEET_ID): Promise<GoogleSheetsData> => {
  const data: GoogleSheetsData = {
    services: [],
    gallery: [],
    testimonials: [],
    packages: []
  };

  try {
    // Fetch Services
    try {
      const servicesUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${SHEET_NAMES.services}`;
      const servicesResponse = await fetch(servicesUrl);
      const servicesText = await servicesResponse.text();
      const servicesJson = JSON.parse(servicesText.substring(47).slice(0, -2));
      
      if (servicesJson.table && servicesJson.table.rows) {
        // Filter out header row and empty rows
        const dataRows = servicesJson.table.rows.filter((row: any, index: number) => {
          if (index === 0 && isHeaderRow(row)) return false; // Skip first row if it's a header
          return row.c && row.c[1] && row.c[1].v; // Must have a title
        });

        data.services = dataRows.map((row: any) => ({
          icon: row.c[0]?.v || 'Calendar',
          title: row.c[1]?.v || '',
          description: row.c[2]?.v || '',
          features: parseFeatures(row.c[3]?.v || '')
        })).filter((service: Service) => service.title);
      }
    } catch (error) {
      console.warn('Failed to fetch services from Google Sheets:', error);
      data.services = defaultData.services;
    }

    // Fetch Gallery
    try {
      const galleryUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${SHEET_NAMES.gallery}`;
      const galleryResponse = await fetch(galleryUrl);
      const galleryText = await galleryResponse.text();
      const galleryJson = JSON.parse(galleryText.substring(47).slice(0, -2));
      
      if (galleryJson.table && galleryJson.table.rows) {
        // Filter out header row and empty rows
        const dataRows = galleryJson.table.rows.filter((row: any, index: number) => {
          if (index === 0 && isHeaderRow(row)) return false; // Skip first row if it's a header
          return row.c && row.c[0] && row.c[0].v; // Must have an image URL
        });

        data.gallery = dataRows.map((row: any) => ({
          src: row.c[0]?.v || '',
          alt: row.c[1]?.v || '',
          category: row.c[2]?.v || 'Wedding'
        })).filter((image: GalleryImage) => image.src);
      }
    } catch (error) {
      console.warn('Failed to fetch gallery from Google Sheets:', error);
      data.gallery = defaultData.gallery;
    }

    // Fetch Testimonials
    try {
      const testimonialsUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${SHEET_NAMES.testimonials}`;
      const testimonialsResponse = await fetch(testimonialsUrl);
      const testimonialsText = await testimonialsResponse.text();
      const testimonialsJson = JSON.parse(testimonialsText.substring(47).slice(0, -2));
      
      if (testimonialsJson.table && testimonialsJson.table.rows) {
        // Filter out header row and empty rows
        const dataRows = testimonialsJson.table.rows.filter((row: any, index: number) => {
          if (index === 0 && isHeaderRow(row)) return false; // Skip first row if it's a header
          return row.c && row.c[0] && row.c[0].v && row.c[2] && row.c[2].v; // Must have name and text
        });

        data.testimonials = dataRows.map((row: any) => ({
          name: row.c[0]?.v || '',
          image: row.c[1]?.v || '',
          text: row.c[2]?.v || '',
          rating: parseInt(row.c[3]?.v) || 5,
          wedding: row.c[4]?.v || ''
        })).filter((testimonial: Testimonial) => testimonial.name && testimonial.text);
      }
    } catch (error) {
      console.warn('Failed to fetch testimonials from Google Sheets:', error);
      data.testimonials = defaultData.testimonials;
    }

    // Fetch Packages
    try {
      const packagesUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${SHEET_NAMES.packages}`;
      const packagesResponse = await fetch(packagesUrl);
      const packagesText = await packagesResponse.text();
      const packagesJson = JSON.parse(packagesText.substring(47).slice(0, -2));
      
      if (packagesJson.table && packagesJson.table.rows) {
        // Filter out header row and empty rows
        const dataRows = packagesJson.table.rows.filter((row: any, index: number) => {
          if (index === 0 && isHeaderRow(row)) return false; // Skip first row if it's a header
          return row.c && row.c[0] && row.c[0].v; // Must have a name
        });

        data.packages = dataRows.map((row: any) => ({
          name: row.c[0]?.v || '',
          icon: row.c[1]?.v || 'Star',
          price: row.c[2]?.v || '',
          description: row.c[3]?.v || '',
          features: parseFeatures(row.c[4]?.v || ''),
          popular: row.c[5]?.v === 'TRUE' || row.c[5]?.v === true,
          color: row.c[6]?.v || 'from-pink-400 to-pink-500'
        })).filter((pkg: Package) => pkg.name);
      }
    } catch (error) {
      console.warn('Failed to fetch packages from Google Sheets:', error);
      data.packages = defaultData.packages;
    }

    // Use default data if no data was fetched
    if (data.services.length === 0) data.services = defaultData.services;
    if (data.gallery.length === 0) data.gallery = defaultData.gallery;
    if (data.testimonials.length === 0) data.testimonials = defaultData.testimonials;
    if (data.packages.length === 0) data.packages = defaultData.packages;

    return data;
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return defaultData;
  }
};

// Get icon component by name
export const getIconComponent = (iconName: string) => {
  const iconMap: { [key: string]: string } = {
    'Calendar': 'Calendar',
    'Compass': 'Compass', 
    'Flower': 'Flower',
    'Home': 'Home',
    'Plane': 'Plane',
    'Camera': 'Camera',
    'Star': 'Star',
    'Crown': 'Crown',
    'Gem': 'Gem',
    'Heart': 'Heart',
    'Award': 'Award',
    'Users': 'Users',
    'Sparkles': 'Sparkles'
  };
  
  return iconMap[iconName] || 'Star';
};