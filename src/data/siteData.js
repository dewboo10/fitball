/**
 * ============================================================
 *  FITBALL SHOP — DATA & IMAGE CONFIGURATION
 * ============================================================
 *
 *  HOW TO ADD YOUR IMAGES
 *  ─────────────────────
 *  1. Drop image files into  src/assets/images/
 *  2. Import them below (examples shown)
 *  3. Replace the empty string '' with your imported variable
 *
 *  If a value stays '', the UI shows a styled icon placeholder.
 * ============================================================
 */

// ── Example imports (uncomment & rename) ─────────────────────
import heroBg          from '../assets/images/hero-bg.png'
import gymEquipImg     from '../assets/images/gym-equipment.png'
// import sportsWearImg   from './assets/images/sportswear.jpg'
import cardio_machines from '../assets/images/cardio-machines.png'
import sportswearImg  from '../assets/images/sportswear.png'
import sportshoes from '../assets/images/sportshoes.png'
import yoga_pilates from '../assets/images/yoga.png'
import combat_sports from '../assets/images/combat.png'
import interior1 from '../assets/images/interior.png'
// import interior2 from '../assets/images/interior2.png'
import exterior from '../assets/images/exterior.png'
// ============================================================
//  DATA CONFIGURATION
// ============================================================
// Add or edit any data your site needs here, then import it in your components and pages
// ── HERO ─────────────────────────────────────────────────────
// Recommended: 1920×1080 dark action photo (gym/sports)
export const heroImage = heroBg          // e.g. heroBg

// ── CATEGORY CARDS ───────────────────────────────────────────
// Recommended: 600×400 px each, high-contrast sport photos
export const CATEGORY_IMAGES = {
  gym_equipment:    gymEquipImg,   // Dumbbells, barbells, machines
  cardio_machines:  cardio_machines,   // Treadmill, cycle, rowing
  sportswear:       sportswearImg,   // Jerseys, shorts, compression wear
  footwear:         sportshoes,   // Running, training, court shoes
  yoga_pilates:     yoga_pilates,   // Mats, blocks, resistance bands
  combat_sports:    combat_sports,   // Boxing, MMA, wrestling
  outdoor_sports:   '',   // Cricket, football, badminton
  team_sports:      '',   // Basketball, volleyball, hockey
  water_sports:     '',   // Swimming, surfing accessories
  cycling:          '',   // Bikes, helmets, accessories
  supplements:      '',   // Protein, pre-workout, vitamins
  accessories:      '',   // Bags, gloves, belts, straps
}

// ── SHOP IMAGES ───────────────────────────────────────────────
export const SHOP_IMAGES = {
  exterior:  exterior,   // Shop front photo
  interior1: interior1,   // Inside view 1
  // interior2: interior2,   // Inside view 2
}

// ── CATEGORIES DATA ───────────────────────────────────────────
export const CATEGORIES = [
  {
    id: 'gym_equipment',
    icon: '🏋️',
    title: 'Gym Equipment',
    subtitle: 'Strength & Conditioning',
    desc: 'Dumbbells, barbells, weight plates, racks, benches, cable machines & full home gym setups.',
    items: ['Dumbbells', 'Barbells & Weight Plates', 'Power Racks', 'Adjustable Benches', 'Cable Machines', 'Smith Machines'],
    accent: '#C8F400',
  },
  {
    id: 'cardio_machines',
    icon: '🏃',
    title: 'Cardio Machines',
    subtitle: 'Endurance & Stamina',
    desc: 'Treadmills, stationary cycles, ellipticals, rowing machines — commercial and home grade.',
    items: ['Treadmills', 'Stationary Cycles', 'Elliptical Trainers', 'Rowing Machines', 'Stair Climbers', 'Air Bikes'],
    accent: '#00D4FF',
  },
  {
    id: 'sportswear',
    icon: '👕',
    title: 'Sportswear & Apparel',
    subtitle: 'Performance Clothing',
    desc: 'Compression wear, dry-fit jerseys, shorts, track pants, sports bras & team kits for all sports.',
    items: ['Compression Wear', 'Dry-Fit Jerseys', 'Training Shorts', 'Track Suits', 'Sports Bras', 'Team Kits'],
    accent: '#FF4D1A',
  },
  {
    id: 'footwear',
    icon: '👟',
    title: 'Sports Footwear',
    subtitle: 'Every Court & Track',
    desc: 'Running shoes, training shoes, court shoes, football boots, cricket spikes & more.',
    items: ['Running Shoes', 'Training Shoes', 'Court Shoes', 'Football Boots', 'Cricket Spikes', 'Outdoor Trekking'],
    accent: '#C8F400',
  },
  {
    id: 'yoga_pilates',
    icon: '🧘',
    title: 'Yoga & Pilates',
    subtitle: 'Flexibility & Mindfulness',
    desc: 'Premium yoga mats, resistance bands, foam rollers, balance boards, blocks and straps.',
    items: ['Yoga Mats', 'Resistance Bands', 'Foam Rollers', 'Balance Boards', 'Yoga Blocks & Straps', 'Pilates Rings'],
    accent: '#00D4FF',
  },
  {
    id: 'combat_sports',
    icon: '🥊',
    title: 'Combat Sports',
    subtitle: 'Boxing, MMA & Martial Arts',
    desc: 'Boxing gloves, heavy bags, MMA gear, wrestling mats, headgear & protective equipment.',
    items: ['Boxing Gloves', 'Heavy & Speed Bags', 'MMA Gloves & Shorts', 'Headgear & Guards', 'Wrestling Mats', 'Focus Mitts'],
    accent: '#FF4D1A',
  },
  {
    id: 'outdoor_sports',
    icon: '🏏',
    title: 'Outdoor Sports',
    subtitle: 'Cricket, Badminton & More',
    desc: 'Complete cricket kits, badminton rackets, tennis equipment, football gear & athletics accessories.',
    items: ['Cricket Kits & Bats', 'Badminton Rackets', 'Tennis Equipment', 'Football Gear', 'Athletics Accessories', 'Table Tennis'],
    accent: '#C8F400',
  },
  {
    id: 'team_sports',
    icon: '🏀',
    title: 'Team Sports',
    subtitle: 'Basketball, Volleyball & Hockey',
    desc: 'Balls, nets, court markers, goalkeeper gear, field hockey sticks and team training kits.',
    items: ['Basketball & Nets', 'Volleyball Sets', 'Field Hockey Sticks', 'Handball Equipment', 'Court Markers', 'Goalkeeper Gear'],
    accent: '#00D4FF',
  },
  {
    id: 'cycling',
    icon: '🚴',
    title: 'Cycling',
    subtitle: 'Road, MTB & Indoor',
    desc: 'Road bikes, mountain bikes, cycling helmets, jersey sets, gloves, pumps and smart accessories.',
    items: ['Road Bikes', 'Mountain Bikes', 'Cycling Helmets', 'Cycling Jerseys', 'Bike Accessories', 'Smart Bike Computers'],
    accent: '#FF4D1A',
  },
  {
    id: 'supplements',
    icon: '💊',
    title: 'Nutrition & Supplements',
    subtitle: 'Fuel Your Performance',
    desc: 'Whey protein, creatine, pre-workout, mass gainers, BCAAs, vitamins and health bars.',
    items: ['Whey Protein', 'Mass Gainers', 'Pre-Workout', 'Creatine', 'BCAAs & EAAs', 'Vitamins & Minerals'],
    accent: '#C8F400',
  },
  {
    id: 'accessories',
    icon: '🎽',
    title: 'Fitness Accessories',
    subtitle: 'Gear Up & Train Smart',
    desc: 'Gym bags, weight belts, gloves, wraps, water bottles, jump ropes, resistance bands and trackers.',
    items: ['Gym Bags & Backpacks', 'Weight Belts & Wraps', 'Gym Gloves', 'Jump Ropes', 'Water Bottles', 'Fitness Trackers'],
    accent: '#00D4FF',
  },
  {
    id: 'water_sports',
    icon: '🏊',
    title: 'Water Sports',
    subtitle: 'Swimming & Aquatics',
    desc: 'Competitive swimwear, goggles, caps, kickboards, pull buoys and open-water swimming gear.',
    items: ['Competitive Swimwear', 'Swimming Goggles', 'Swim Caps', 'Kickboards', 'Pull Buoys', 'Open-Water Gear'],
    accent: '#00D4FF',
  },
]

// ── MARQUEE / TICKER TEXT ────────────────────────────────────
export const TICKER_ITEMS = [
  '🏋️ GYM EQUIPMENT',
  '👟 SPORTS FOOTWEAR',
  '🥊 COMBAT SPORTS',
  '🏃 CARDIO MACHINES',
  '🏏 OUTDOOR SPORTS',
  '🧘 YOGA & PILATES',
  '🚴 CYCLING GEAR',
  '💊 SUPPLEMENTS',
  '🏀 TEAM SPORTS',
  '🎽 ACCESSORIES',
]

// ── STATS ─────────────────────────────────────────────────────
export const STATS = [
  { value: '500+', label: 'Products In-Store' },
  { value: '12',   label: 'Sport Categories' },
  { value: '10+',  label: 'Years of Service' },
  { value: '5000+',label: 'Happy Athletes' },
]

// ── WHY CHOOSE US ─────────────────────────────────────────────
export const WHY_US = [
  { icon: '🏆', title: 'Top Brands Only',       desc: 'We stock only certified brands — Nike, Adidas, Decathlon, Cosco, SG, BDM, BSN and more.' },
  { icon: '🧑‍💼', title: 'Expert Guidance',     desc: 'Our staff are fitness enthusiasts themselves — they help you pick the right gear, every time.' },
  { icon: '✅', title: 'Quality Guaranteed',     desc: 'Every product is quality-checked before hitting our shelves. No fakes, no compromises.' },
  { icon: '🚚', title: 'Fast Local Delivery',    desc: 'Same-day delivery across Indore for orders placed before 2 PM. Large equipment delivery included.' },
  { icon: '🔧', title: 'Assembly & Service',     desc: 'We install and assemble large gym equipment at your home or gym — free of charge.' },
  { icon: '💬', title: 'After-Sales Support',    desc: 'Warranty handling, replacement parts, and dedicated customer support you can always count on.' },
]

// ── CONTACT ───────────────────────────────────────────────────
export const CONTACT_INFO = {
  address:    'Shop No. 14, Vijay Nagar Square, Near Bombay Hospital, Indore – 452010, Madhya Pradesh',
  phone1:     '+91 98930 12345',
  phone2:     '+91 73100 54321',
  email:      'info@fitballshop.in',
  whatsapp:   '+91 98930 12345',
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 9:00 PM' },
    { day: 'Sunday',             time: '10:00 AM – 7:00 PM' },
    { day: 'Public Holidays',    time: '10:00 AM – 6:00 PM' },
  ],
  social: {
    instagram: '#',
    facebook:  '#',
    youtube:   '#',
    whatsapp:  '#',
  },
}
