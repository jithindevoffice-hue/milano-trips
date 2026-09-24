import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {
  ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, CalendarDays, Camera,
  CarFront, Check, ChevronDown, ChevronLeft, ChevronRight, Clock3,
  Compass, Globe2, Heart, Hotel, Instagram, Mail, MapPin, Menu,
  MessageCircle, Mountain, Phone, Plane, PlayCircle, Search, Send,
  ShieldCheck, Sparkles, Star, UsersRound, Wallet, X,
} from 'lucide-react';
import { BUSINESS, CATEGORIES, DESTINATIONS, GALLERY, SERVICES } from './data.js';

const iconMap = { globe: Globe2, users: UsersRound, car: CarFront, camera: Camera, hotel: Hotel, plane: Plane };
const image = (name) => `/images/${name}.webp`;
const whatsappUrl = (message = `Hello Milano Trips LLP! I'd like to plan a trip.`) =>
  `https://wa.me/${BUSINESS.phoneDigits}?text=${encodeURIComponent(message)}`;

function Logo({ footer = false }) {
  return <Link to="/" className={`logo-link ${footer ? 'footer-logo' : ''}`} aria-label="Milano Trips LLP - Home">
    <img src="/logo-symbol.png" alt="" width="120" height="55" />
    <span className="logo-copy"><strong>Milano <span>Trips</span></strong><small>LLP · TRAVEL &amp; EXPERIENCES</small></span>
  </Link>;
}

function Header({ onQuote }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  const links = [
    ['/', 'Home'], ['/destinations', 'Destinations'], ['/services', 'Services'],
    ['/gallery', 'Gallery'], ['/about', 'About'], ['/testimonials', 'Stories'], ['/contact', 'Contact'],
  ];
  return <header className="site-header">
    <div className="container nav-wrap">
      <Logo />
      <nav className={`primary-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
        {links.map(([path, title]) => <NavLink key={path} end={path === '/'} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{title}</NavLink>)}
        <button className="btn btn-orange mobile-enquiry" onClick={() => { setOpen(false); onQuote(); }}>Enquire now <ArrowUpRight size={15} /></button>
      </nav>
      <button className="btn btn-orange desktop-enquiry" onClick={onQuote}>Enquire now <ArrowUpRight size={15} /></button>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

function Footer({ onQuote }) {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-intro"><Logo footer /><p>Discover the world with us. Personalised travel arrangements and memorable journeys, thoughtfully planned.</p><div className="footer-social"><a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="WhatsApp Milano Trips"><MessageCircle size={17} /></a><a href={`mailto:${BUSINESS.email}`} aria-label="Email Milano Trips"><Mail size={17} /></a></div></div>
      <div><h3>Explore</h3><Link to="/">Home</Link><Link to="/destinations">Destinations</Link><Link to="/gallery">Gallery</Link><Link to="/about">About us</Link><Link to="/testimonials">Travel stories</Link></div>
      <div><h3>Our services</h3>{SERVICES.slice(0, 5).map(s => <Link key={s.id} to="/services">{s.name}</Link>)}</div>
      <div><h3>Get in touch</h3><a href={`tel:${BUSINESS.phoneDigits}`}><Phone size={15} /> {BUSINESS.phone}</a><a href={`mailto:${BUSINESS.email}`}><Mail size={15} /> {BUSINESS.email}</a><a href={BUSINESS.website} target="_blank" rel="noreferrer"><Globe2 size={15} /> www.milanotrips.com</a><button className="footer-action" onClick={onQuote}>Plan your trip <ArrowUpRight size={15} /></button></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} Milano Trips LLP. All rights reserved.</span><span>Travel beyond borders · Made for curious travellers</span></div>
  </footer>;
}

function SectionHead({ eyebrow, title, text, action, to }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-description">{text}</p>}</div>{action && <Link className="text-action" to={to}>{action}<ArrowRight size={18} /></Link>}</div>;
}

function DestinationCard({ destination, onQuote, compact = false }) {
  return <article className={`destination-card ${compact ? 'compact' : ''}`}>
    <div className="destination-photo"><img loading="lazy" src={destination.image} alt={destination.name} /><span className="image-pill">{destination.label}</span></div>
    <div className="destination-details"><p className="card-kicker">{destination.category}</p><h3>{destination.name}</h3><p>{destination.description}</p><div className="destination-meta"><span><CalendarDays size={14} /> {destination.days}</span></div><div className="destination-card-bottom"><span>Made for <strong>you</strong></span><button className="circle-arrow" onClick={() => onQuote(destination.name)} aria-label={`Enquire about ${destination.name}`}><ArrowUpRight size={18} /></button></div></div>
  </article>;
}

function ServiceIcon({ name, size = 23 }) { const Icon = iconMap[name] || Compass; return <Icon size={size} strokeWidth={1.85} />; }

function ServiceCard({ service, onQuote, withImage = false }) {
  return <article className="service-card">
    {withImage && <img loading="lazy" className="service-photo" src={service.image} alt="" />}
    <div className="service-card-content"><div className="service-icon"><ServiceIcon name={service.icon} /></div><h3>{service.name}</h3><p>{service.text}</p><button className="service-arrow" onClick={() => onQuote(service.name)} aria-label={`Enquire about ${service.name}`}><ArrowUpRight size={17} /></button></div>
  </article>;
}

function Home({ onQuote }) {
  const navigate = useNavigate();
  return <>
    <section className="home-hero"><div className="container hero-inner"><div className="hero-copy"><p className="eyebrow"><span className="tiny-rule" /> TRAVEL · EXPLORE · EXPERIENCE</p><h1>Discover<br />the World<br /><em>with Us</em></h1><p className="hero-tagline">Enjoy the Amazing Adventure Vacations</p><p className="hero-description">We specialise in creating unforgettable travel experiences to captivating destinations across the globe.</p><div className="hero-buttons"><button className="btn btn-orange" onClick={() => navigate('/destinations')}>Explore destinations <ArrowUpRight size={17} /></button><button className="btn btn-outline" onClick={() => onQuote()}>Get a quote <ArrowRight size={17} /></button></div></div><div className="hero-visual"><div className="hero-photo"></div><div className="hero-stamp">EXPLORE<br /><strong>DREAM</strong><br />DISCOVER <Plane size={26} /></div><span className="hero-flight"><Plane size={27} fill="currentColor" /></span></div></div></section>
    <div className="container features-strip"><div><Compass /><strong>Handpicked</strong><span>Travel ideas</span></div><div><Heart /><strong>Thoughtful</strong><span>Planning</span></div><div><MessageCircle /><strong>Helpful</strong><span>Guidance</span></div><div><ShieldCheck /><strong>Comfortable</strong><span>Journeys</span></div></div>
    <section className="section container home-destinations"><SectionHead eyebrow="EXPLORE THE WORLD" title="Popular destinations" text="A little inspiration for your next getaway." action="View all destinations" to="/destinations" /><div className="home-destination-grid"><Link to="/destinations?category=Exotic%20Escapes" className="category-tile"><img src={image('gallery-06')} alt="Blue seas and a tropical island" /><span>01 / EXOTIC ESCAPES</span><h3>Exotic Escapes</h3><p>Southeast Asian beauty &amp; tropical inspiration</p><b><ArrowUpRight size={20} /></b></Link><Link to="/destinations?category=European%20Extravaganza" className="category-tile"><img src={image('london')} alt="Tower Bridge in London" /><span>02 / EUROPE</span><h3>European<br />Extravaganza</h3><p>Rich culture, timeless architecture</p><b><ArrowUpRight size={20} /></b></Link><Link to="/destinations?category=African%20Adventures" className="category-tile"><img src={image('elephants')} alt="Elephants on the African plains" /><span>03 / AFRICA</span><h3>African Adventures</h3><p>Nature, wildlife &amp; breathtaking landscapes</p><b><ArrowUpRight size={20} /></b></Link></div></section>
    <section className="home-banner"><div className="container home-banner-inner"><div><p className="eyebrow">YOUR NEXT STORY STARTS HERE</p><h2>Travel more.<br />Create bigger memories.</h2><p>Tell us your dream destination. We'll help put together your next experience.</p><button className="btn btn-orange" onClick={() => onQuote()}>Plan your trip <ArrowUpRight size={17} /></button></div><img loading="lazy" src={image('gallery-09')} alt="A scenic coastal arch" /></div></section>
    <section className="section container"><SectionHead eyebrow="WHAT WE DO" title="Travel, handled with care" text="From accommodation to on-ground travel, Milano Trips helps you connect the pieces." action="All services" to="/services" /><div className="home-services-grid">{SERVICES.slice(0, 3).map(s => <ServiceCard key={s.id} service={s} onQuote={onQuote} withImage />)}</div></section>
  </>;
}

function Destinations({ onQuote }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [category, setCategory] = useState(params.get('category') || 'All');
  const [search, setSearch] = useState(params.get('search') || '');
  useEffect(() => { setCategory(params.get('category') || 'All'); setSearch(params.get('search') || ''); }, [location.search]);
  const filtered = useMemo(() => DESTINATIONS.filter(d => (category === 'All' || category === d.category) && (`${d.name} ${d.category} ${d.description} ${d.label}`.toLowerCase().includes(search.toLowerCase()))), [category, search]);
  return <>
    <section className="page-hero destination-page-hero"><div className="container"><p className="eyebrow">HANDPICKED IDEAS</p><h1>Travel Packages<br />for Every Explorer</h1><p>From beautiful escapes to culture-rich journeys and adventure, discover travel inspiration with Milano Trips LLP.</p></div></section>
    <main className="container page-content"><div className="floating-filter"><label><Search size={18} /><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search destinations" aria-label="Search destinations" /></label><label><Compass size={18} /><select value={category} onChange={e => setCategory(e.target.value)} aria-label="Filter by travel style">{CATEGORIES.map(c => <option key={c}>{c}</option>)}</select></label><button className="btn btn-orange" onClick={() => onQuote(search)}>Custom itinerary <ArrowUpRight size={16} /></button></div>
      <SectionHead eyebrow="EXPLORE YOUR POSSIBILITIES" title="Our signature travel ideas" text="Browse inspiration below. Each itinerary is planned around your dates, group and preferences." />
      <div className="chip-row" role="group" aria-label="Destination filters">{CATEGORIES.map(c => <button key={c} className={`chip ${c === category ? 'active' : ''}`} aria-pressed={c === category} onClick={() => setCategory(c)}>{c}</button>)}</div>
      {filtered.length ? <div className="destination-grid">{filtered.map(d => <DestinationCard key={d.id} destination={d} onQuote={onQuote} />)}</div> : <div className="empty-state"><Search size={28} /><h3>No exact matches found</h3><p>We can still plan a personalised journey to your chosen place.</p><button className="btn btn-orange" onClick={() => onQuote(search)}>Ask for a custom trip</button></div>}
      <div className="note-box"><Sparkles size={19} /><p>Destinations shown are travel inspiration, not fixed departures or confirmed packages. Contact Milano Trips for current availability, a personalised itinerary and a quotation.</p></div>
    </main>
  </>;
}

function Services({ onQuote }) {
  return <><section className="page-hero services-page-hero"><div className="container service-hero-grid"><div><p className="eyebrow">EXPERIENCE SEAMLESS TRAVEL</p><h1>Travel solutions for a <em>better journey.</em></h1><p>From destination management to tours and transfers, enjoy thoughtful travel coordination from Milano Trips LLP.</p><button className="btn btn-orange" onClick={() => onQuote()}>Enquire about a service <ArrowUpRight size={17} /></button></div><div className="service-hero-image"><img src={image('transfer-car')} alt="Travel vehicle outside an airport" /></div></div></section>
    <div className="container features-strip services-features"><div><ShieldCheck /><strong>Professional</strong><span>Assistance</span></div><div><UsersRound /><strong>Personalised</strong><span>Arrangements</span></div><div><CarFront /><strong>Convenient</strong><span>Transport</span></div><div><Globe2 /><strong>International</strong><span>Travel inspiration</span></div></div>
    <section className="container section page-services"><SectionHead eyebrow="OUR SERVICES" title="What we do" text="Explore Milano Trips LLP's range of travel and destination services." /><div className="services-grid">{SERVICES.map(s => <ServiceCard key={s.id} service={s} onQuote={onQuote} withImage />)}</div></section>
    <section className="container services-cta"><div><p className="eyebrow">LET US TAKE CARE OF THE DETAILS</p><h2>A journey that feels effortless.</h2><p>Tell us what you're planning, and we'll discuss the services that fit your needs.</p><button className="btn btn-orange" onClick={() => onQuote()}>Plan with us <ArrowUpRight size={17} /></button></div><img src={image('kuala-lumpur')} alt="A bright city skyline at dusk" loading="lazy" /></section>
  </>;
}

function Gallery() {
  const filters = ['All', 'Beaches', 'Nature', 'Cities', 'Wildlife', 'Culture', 'Adventure'];
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const items = GALLERY.filter(g => filter === 'All' || g.category === filter);
  useEffect(() => { const onKey = e => { if (e.key === 'Escape') setActive(null); }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, []);
  useEffect(() => { document.body.style.overflow = active ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [active]);
  return <><section className="page-hero gallery-page-hero"><div className="container"><p className="eyebrow">A WORLD OF INSPIRATION</p><h1>Moments from<br />around the World</h1><p>Beautiful places, unforgettable scenery and inspiration for your next journey.</p></div></section>
    <main className="container page-content"><SectionHead eyebrow="TRAVEL IN PICTURES" title="Explore the gallery" text="A collection of travel inspiration from our design materials and brochure." /><div className="chip-row" role="group" aria-label="Photo filters">{filters.map(f => <button key={f} className={`chip ${filter === f ? 'active' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>)}</div><div className="gallery-grid">{items.map((g, i) => <button className={`gallery-item gallery-item-${i % 7}`} key={g.src} onClick={() => setActive(g)} aria-label={`Enlarge image: ${g.title}`}><img loading="lazy" src={g.src} alt={g.title} /><span className="gallery-caption"><span>{g.title}</span><ArrowUpRight size={18} /></span></button>)}</div><p className="fine-print">Images are visual inspiration from the supplied materials. Replace any third-party reference imagery with approved licensed photography before commercial publication.</p></main>
    {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}><button className="lightbox-close" aria-label="Close image" onClick={() => setActive(null)}><X /></button><img src={active.src} alt={active.title} onClick={e => e.stopPropagation()} /><p>{active.title}</p></div>}
  </>;
}

function Testimonials({ onQuote }) {
  const stories = [
    { title: 'Where your next story begins', text: 'Planning your first international trip? Let us help you bring the details together, from accommodation to transport.', image: image('gallery-06'), label: 'EXOTIC ESCAPES' },
    { title: 'Journeys worth sharing', text: 'From culturally rich cities to beautiful coastlines, discover places that make every moment memorable.', image: image('gallery-09'), label: 'EUROPEAN EXTRAVAGANZA' },
    { title: 'A world of new experiences', text: 'Make space for an adventure that is personal to you, whether you travel solo, together or as a group.', image: image('safari'), label: 'AFRICAN ADVENTURES' },
  ];
  return <><section className="subtle-page-hero"><div className="container center"><p className="eyebrow">TRAVEL STORIES</p><h1>Happy travellers.<br /><em>Real stories.</em></h1><p>Memorable journeys begin with the people who experience them.</p></div></section><main className="container page-content testimonial-content"><div className="testimonial-header"><div><p className="eyebrow">OUR TRAVEL COMMUNITY</p><h2>What our travellers say</h2><p>We'll share verified client testimonials here with their permission.</p></div><div className="star-deco" aria-hidden="true"><Sparkles size={30} /></div></div><div className="story-grid">{stories.map((story, i) => <article className="story-card" key={story.title}><div className="story-tag">{story.label}</div><h3>{story.title}</h3><p>{story.text}</p><img src={story.image} alt="" loading="lazy" /><span className="story-index">0{i+1} / TRAVEL INSPIRATION</span></article>)}</div><div className="story-cta"><MessageCircle size={28} /><div><h2>Have you travelled with us?</h2><p>We'd love to hear about your experience. Contact our team if you'd like to share your story.</p></div><a href={whatsappUrl('Hello Milano Trips! I would like to share feedback about my trip.')} className="btn btn-orange" target="_blank" rel="noreferrer">Share your experience <ArrowUpRight size={17} /></a></div><p className="fine-print">The cards above are travel inspiration, not customer reviews or client quotations.</p></main></>;
}

function About({ onQuote }) {
  return <><section className="about-intro container"><div className="about-copy"><p className="eyebrow">ABOUT MILANO TRIPS LLP</p><h1>Turning travel dreams into <em>lasting memories.</em></h1><p>Milano Trips LLP specialises in creating unforgettable travel experiences to captivating destinations across the globe. Our professional, experienced team provides service and guidance to guests so every journey can feel more enjoyable.</p><p>Our focus is on unique experiences, efficient assistance and quality destination management services, planned around your needs.</p><button className="btn btn-orange" onClick={() => onQuote()}>Start planning <ArrowUpRight size={17} /></button></div><div className="about-visual"><img src={image('about-traveler')} alt="Traveller looking out at the coast" /><span className="about-plane"><Plane size={27} /></span><div className="about-script">Travel<br />Explore<br /><strong>Discover</strong></div></div></section>
    <section className="container section"><SectionHead eyebrow="THE MILANO APPROACH" title="Why travel with us?" text="Professional service and thoughtful arrangements are at the heart of our approach." /><div className="value-grid"><div><span><Compass /></span><h3>Unique experiences</h3><p>Trips shaped around the places and moments you want to discover.</p></div><div><span><UsersRound /></span><h3>Experienced team</h3><p>Professional assistance from planning through your travel arrangements.</p></div><div><span><Globe2 /></span><h3>Worldwide inspiration</h3><p>Destinations across the globe, with cultural, scenic and adventure-led ideas.</p></div><div><span><Heart /></span><h3>Thoughtful service</h3><p>We take a personal approach to helping you plan your next experience.</p></div></div></section>
    <section className="about-bottom"><div className="container about-bottom-inner"><img loading="lazy" src={image('safari')} alt="Giraffes and a safari vehicle on the savannah" /><div><p className="eyebrow">ENJOY THE AMAZING ADVENTURE VACATIONS</p><h2>More places.<br />More possibilities.</h2><p>Whether it's a family trip, a corporate program or a special-interest tour, we're here to help you plan.</p><button className="btn btn-orange" onClick={() => onQuote()}>Let's talk about your trip <ArrowUpRight size={16} /></button></div></div></section>
  </>;
}

function ContactForm({ initial = '', isModal = false, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: initial, dates: '', message: '' });
  const [status, setStatus] = useState('');
  useEffect(() => {
    setForm(prev => ({ ...prev, interest: initial }));
  }, [initial]);
  function submit(e) {
    e.preventDefault();
    const subject = `Travel enquiry${form.interest ? `: ${form.interest}` : ''} - Milano Trips LLP`;
    const body = [
      `Name: ${form.name}`, `Email: ${form.email}`, `Phone: ${form.phone || 'Not provided'}`,
      `Interested in: ${form.interest || 'Custom journey'}`, `Preferred dates: ${form.dates || 'Flexible'}`,
      '', 'Message:', form.message || 'Please contact me about planning my trip.',
    ].join('\n');
    setStatus('Your email application should open with your enquiry. Review it and press Send to deliver it. If nothing opens, email info@milanotrips.com or contact us on WhatsApp.');
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return <form className={`contact-form ${isModal ? 'modal-form' : ''}`} onSubmit={submit}><div className="form-row"><label>Your name *<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your full name" /></label><label>Email address *<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label></div><div className="form-row"><label>Phone number<input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91" /></label><label>Interested in<select value={form.interest} onChange={e => setForm({ ...form, interest: e.target.value })}><option value="">Select an option</option>{DESTINATIONS.map(d => <option key={d.id} value={d.name}>{d.name}</option>)}{SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}<option>Custom travel plan</option></select></label></div>{isModal && <label>Preferred travel dates<input value={form.dates} onChange={e => setForm({ ...form, dates: e.target.value })} placeholder="e.g. December, dates flexible" /></label>}<label>Tell us about your plans<textarea rows="5" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Where would you like to go, and how can we help?" /></label><button className="btn btn-orange form-submit" type="submit"><Send size={16} /> Prepare email enquiry</button><p className="form-disclaimer">This form opens your email app; it does not submit information to a website server.</p>{status && <p className="form-status" role="status">{status}</p>}{isModal && <button type="button" className="modal-cancel" onClick={onClose}>Maybe later</button>}</form>;
}

function Contact({ onQuote }) {
  return <><section className="contact-hero"><div className="container contact-hero-inner"><div><p className="eyebrow">LET'S MAKE IT HAPPEN</p><h1>Let's plan your<br /><em>next adventure.</em></h1><p>Have a destination in mind? Tell us about your travel plans, and our team will help you explore the possibilities.</p></div><img src={image('coast-hero')} alt="Beautiful coastline with tropical blue water" /></div></section><main className="container contact-layout"><section className="contact-info"><p className="eyebrow">GET IN TOUCH</p><h2>We'd love to hear from you.</h2><p className="contact-lede">For itineraries, transfers, corporate travel and special requests, contact Milano Trips LLP.</p><div className="contact-list"><a href={`tel:${BUSINESS.phoneDigits}`}><span><Phone size={22} /></span><div><small>CALL OR WHATSAPP</small><strong>{BUSINESS.phone}</strong></div><ArrowUpRight size={17} /></a><a href={`mailto:${BUSINESS.email}`}><span><Mail size={22} /></span><div><small>EMAIL</small><strong>{BUSINESS.email}</strong></div><ArrowUpRight size={17} /></a><a href={BUSINESS.website} target="_blank" rel="noreferrer"><span><Globe2 size={22} /></span><div><small>OUR WEBSITE</small><strong>www.milanotrips.com</strong></div><ArrowUpRight size={17} /></a></div><div className="contact-note"><MessageCircle size={24} /><div><h3>Prefer WhatsApp?</h3><p>Start a conversation with the Milano Trips team.</p><a href={whatsappUrl()} target="_blank" rel="noreferrer">Chat with us <ArrowRight size={16} /></a></div></div></section><section className="contact-form-panel"><h2>Send us an enquiry</h2><p>Tell us what you're planning. Your email application will open with the details ready to send.</p><ContactForm /></section></main></>;
}

function QuoteModal({ initial, onClose }) {
  useEffect(() => { const esc = e => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', esc); document.body.style.overflow = 'hidden'; return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; }; }, [onClose]);
  return <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><section className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title"><button className="modal-close" onClick={onClose} aria-label="Close enquiry form"><X size={22} /></button><p className="eyebrow">PLAN YOUR NEXT ADVENTURE</p><h2 id="quote-title">Where to next?</h2><p>Share a few details. We'll help you explore a tailored itinerary or service.</p><ContactForm isModal initial={initial} onClose={onClose} /><div className="modal-whatsapp"><span>Want to talk instead?</span><a target="_blank" rel="noreferrer" href={whatsappUrl(initial ? `Hello Milano Trips LLP! I'd like to enquire about ${initial}.` : undefined)}><MessageCircle size={17} /> Chat on WhatsApp</a></div></section></div>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}
function NotFound() { return <main className="container not-found"><Compass size={43} /><h1>Looks like you've taken a different route.</h1><p>This page isn't available. Your next adventure is just a click away.</p><Link to="/" className="btn btn-orange">Back to home <ArrowRight size={17} /></Link></main>; }

export default function App() {
  const [quote, setQuote] = useState(null);
  const openQuote = (interest = '') => setQuote({ interest });
  const closeQuote = () => setQuote(null);
  return <><ScrollToTop /><Header onQuote={openQuote} /><Routes><Route path="/" element={<Home onQuote={openQuote} />} /><Route path="/destinations" element={<Destinations onQuote={openQuote} />} /><Route path="/services" element={<Services onQuote={openQuote} />} /><Route path="/gallery" element={<Gallery />} /><Route path="/testimonials" element={<Testimonials onQuote={openQuote} />} /><Route path="/about" element={<About onQuote={openQuote} />} /><Route path="/contact" element={<Contact onQuote={openQuote} />} /><Route path="*" element={<NotFound />} /></Routes><Footer onQuote={openQuote} />{quote && <QuoteModal initial={quote.interest} onClose={closeQuote} />}</>;
}
