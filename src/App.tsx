import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, MonitorSmartphone, PenTool, Video,
  Megaphone, CheckCircle2, 
  MapPin, Phone, Mail, Instagram, Twitter, Linkedin
} from 'lucide-react';
import portfolio1 from '../assets/portfolio_1.png';
import portfolio2 from '../assets/portfolio_2.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img src="/assets/logo.svg" alt="Creoviz Logo" className="h-8" />
        </a>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#services" className="hover:text-brand-orange transition-colors">Services</a>
          <a href="#work" className="hover:text-brand-orange transition-colors">Work</a>
          <a href="#about" className="hover:text-brand-orange transition-colors">About</a>
          <a href="#process" className="hover:text-brand-orange transition-colors">Process</a>
        </div>
        
        <div className="hidden md:block">
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-orange transition-all hover:shadow-lg hover:-translate-y-0.5 inline-block">
            Start a Project
          </a>
        </div>

        <button className="md:hidden text-black" onClick={() => setMobileMenu(!mobileMenu)}>
          {mobileMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-t border-gray-100"
          >
            <a href="#services" className="text-lg font-medium" onClick={() => setMobileMenu(false)}>Services</a>
            <a href="#work" className="text-lg font-medium" onClick={() => setMobileMenu(false)}>Work</a>
            <a href="#about" className="text-lg font-medium" onClick={() => setMobileMenu(false)}>About</a>
            <a href="#contact" className="text-lg font-medium text-brand-orange" onClick={() => setMobileMenu(false)}>Start a Project</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50 via-white to-white -z-10"></div>
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-semibold text-sm"
        >
          Creative Agency for Modern Brands
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.1]"
        >
          We Build Brands That <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff7e33]">Stand Out.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Creoviz is a premium creative agency combining strategy, design, and technology to deliver digital experiences that drive growth.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="w-full sm:w-auto bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-hover transition-all shadow-[0_0_20px_rgba(240,74,0,0.3)] hover:shadow-[0_0_30px_rgba(240,74,0,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
            Get a Free Proposal <ArrowRight size={20} />
          </a>
          <a href="#work" className="w-full sm:w-auto bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center">
            View Our Work
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
      >
        <img src="/assets/hero_workspace.png" alt="Creoviz Workspace" className="w-full object-cover aspect-video" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { icon: <MonitorSmartphone size={32} />, title: "Digital Design", desc: "Award-winning websites and apps." },
    { icon: <PenTool size={32} />, title: "Brand Identity", desc: "Logos, guidelines, and visual systems." },
    { icon: <Megaphone size={32} />, title: "Marketing", desc: "Data-driven growth strategies." },
    { icon: <Video size={32} />, title: "Motion & Video", desc: "Engaging animations and edits." }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise.</h2>
          <p className="text-xl text-gray-600">We offer a comprehensive suite of creative services tailored to elevate your brand.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { img: portfolio1, title: 'Fintech Mobile App', category: 'Product Design' },
    { img: portfolio2, title: 'Eco Brand Identity', category: 'Branding' },
  ];

  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Work.</h2>
            <p className="text-xl text-gray-600">A glimpse into our creative journey and successful collaborations.</p>
          </div>
          <a href="#" className="font-semibold text-brand-orange hover:text-brand-hover flex items-center gap-2 pb-2">
            View all projects <ArrowRight size={20} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-[24px] mb-6 aspect-[4/3] bg-gray-100 relative">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-1">{p.title}</h3>
              <p className="text-gray-500 font-medium">{p.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Creativity Meets <span className="text-brand-orange">Strategy.</span></h2>
          <p className="text-xl text-gray-400 mb-6 leading-relaxed">
            At Creoviz, we don't just create pretty pictures. We engineer visual solutions that solve real business problems.
          </p>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            From the initial spark of an idea to the final pixel perfect launch, our team of dedicated experts ensures your brand communicates its true value.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-black text-white mb-2">50+</div>
              <div className="text-gray-500 font-medium">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">99%</div>
              <div className="text-gray-500 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-brand-orange rounded-[32px] blur-2xl opacity-20 -z-10 translate-x-4 translate-y-4"></div>
          <div className="bg-gray-900 border border-gray-800 p-10 rounded-[32px]">
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
            <ul className="space-y-4">
              {['Award-winning design team', 'Data-driven marketing strategies', 'Lightning fast delivery sprints', 'Dedicated ongoing support'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-300">
                  <CheckCircle2 className="text-brand-orange flex-shrink-0" size={24} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { title: "Discovery", desc: "We learn about your brand, audience, and goals." },
    { title: "Strategy", desc: "Crafting a roadmap tailored to your success." },
    { title: "Creation", desc: "Design and development with meticulous detail." },
    { title: "Launch", desc: "Going live and monitoring performance." }
  ];

  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">How We Work.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative text-left md:text-center">
              <div className="text-6xl font-black text-gray-100 mb-6 select-none">0{i+1}</div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-brand-orange relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div className="container mx-auto px-6 relative z-10 text-center">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Ready to Elevate <br/>Your Brand?</h2>
      <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
        Let's collaborate to build something extraordinary. Our team is ready to turn your vision into reality.
      </p>
      <a href="#contact" className="inline-block bg-white text-brand-orange px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1">
        Start Your Project
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-black pt-24 pb-12 border-t border-gray-900">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <img src="/assets/logo.svg" alt="Creoviz" className="h-10 mb-6 brightness-0 invert" />
          <p className="text-gray-400 mb-6">Creative solutions that grow your brand. We design the future.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"><Instagram size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"><Twitter size={18} /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">News & Blog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Web Design</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Video Production</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3"><Mail size={18} className="text-brand-orange"/> hello@creoviz.com</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand-orange"/> +91 85900 08225</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-brand-orange"/> Global Remote</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>&copy; 2026 Creoviz. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
