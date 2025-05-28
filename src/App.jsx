import { useState, useEffect } from 'react'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Intersection Observer hooks for each section
  const [aboutRef, isAboutVisible] = useIntersectionObserver();
  const [servicesRef, isServicesVisible] = useIntersectionObserver();
  const [portfolioRef, isPortfolioVisible] = useIntersectionObserver();
  const [testimonialsRef, isTestimonialsVisible] = useIntersectionObserver();
  const [contactRef, isContactVisible] = useIntersectionObserver();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Modern Garden Oasis",
      category: "Residential",
      image: "/images/riverscape1.webp",
      description: "Contemporary garden design with water features"
    },
    {
      title: "Townhouse Lawn and Garden",
      category: "Commercial",
      image: "/images/riverscape2.webp",
      description: "Townhouse Lawn and Garden"
    },
    {
      title: "Family Backyard",
      category: "Residential",
      image: "/images/riverscape3.webp",
      description: "Complete backyard makeover"
    },
    {
      title: "Corporate Campus",
      category: "Commercial",
      image: "/images/gallery1.webp",
      description: "Landscape design for tech campus"
    },
    {
      title: "Lawn Makeover",
      category: "Garden Design",
      image: "/images/gallery.JPG",
      description: "Lawn Makeover"
    },
    {
      title: "Hardscape/Low Maintenance Implementation",
      category: "Hardscaping",
      image: "/images/hardscape.png",
      description: "Custom stone patio installation"
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Garden Design', 'Hardscaping'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Riverscape Designs
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 transition-colors`}>
                Home
              </a>
              <a href="#about" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 transition-colors`}>
                About
              </a>
              <a href="#services" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 transition-colors`}>
                Services
              </a>
              <a href="#portfolio" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 transition-colors`}>
                Portfolio
              </a>
              <a href="#testimonials" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 transition-colors`}>
                Testimonials
              </a>
              <a href="#contact" className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 transition-colors`}>
                Contact
              </a>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition-colors">
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className={`${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-green-600 focus:outline-none`}>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/riverscape1.webp')] bg-cover bg-center animate-zoom"></div>
        <div className="relative z-20 text-center text-white px-4 w-full">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Transform Your Outdoor Space</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">Professional landscaping services that bring your vision to life</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors animate-fade-in-delay-2">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutRef}
        id="about"
        className={`w-full py-20 px-4 transition-all duration-1000 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className={`relative h-[500px] rounded-2xl overflow-hidden transition-all duration-1000 delay-300 ${isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
              <div className="absolute inset-0 bg-[url('/images/riverscape2.webp')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Right Column - Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-500 ${isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
              <div>
                <h2 className="text-4xl font-bold mb-4">About Riverscape Designs</h2>
                <div className="w-20 h-1 bg-green-600 mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Founded in 2010, Riverscape Designs has been at the forefront of landscape architecture and design.
                  We combine artistic vision with technical expertise to create outdoor spaces that inspire and endure.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Eco-Friendly Approach</h3>
                    <p className="text-gray-600">Sustainable practices and native plant selection</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Creative Design</h3>
                    <p className="text-gray-600">Unique solutions tailored to your space</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                    <p className="text-gray-600">Certified professionals with years of experience</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">💎</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Quality Materials</h3>
                    <p className="text-gray-600">Premium products that stand the test of time</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">14</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className={`w-full py-20 px-4 bg-gray-50 transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-all duration-1000 delay-300 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Landscape Design",
                description: "Custom designs tailored to your space and preferences",
                icon: "🎨"
              },
              {
                title: "Garden Maintenance",
                description: "Regular care to keep your garden looking its best",
                icon: "🌿"
              },
              {
                title: "Hardscaping",
                description: "Patios, walkways, and outdoor living spaces",
                icon: "🏗️"
              }
            ].map((service, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-1000 delay-${(index + 1) * 200} ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={portfolioRef}
        id="portfolio"
        className={`w-full py-20 px-4 transition-all duration-1000 ${isPortfolioVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our diverse portfolio of landscape transformations, from residential gardens to commercial spaces.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-green-600 hover:text-white'}
                  focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Updated overlay with stronger gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Added permanent subtle overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-green-400 mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium w-fit hover:bg-green-600 hover:text-white transition-colors mx-2 mb-2">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              <span>View All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        id="testimonials"
        className={`w-full py-20 px-4 bg-gray-50 transition-all duration-1000 ${isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                text: "They transformed our backyard into a beautiful outdoor living space. Professional and timely service!",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Michael Brown",
                text: "The team was knowledgeable and creative. Our garden has never looked better.",
                rating: "⭐⭐⭐⭐⭐"
              },
              {
                name: "Emily Davis",
                text: "Outstanding work on our landscape design. They exceeded our expectations!",
                rating: "⭐⭐⭐⭐⭐"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-yellow-400 mb-4">{testimonial.rating}</div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`w-full py-20 px-4 transition-all duration-1000 ${isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="max-w-3xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Riverscape Designs</h3>
            <p className="text-gray-400">Transforming outdoor spaces into beautiful landscapes since 2010.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Garden Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@riverscapedesigns.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Riverscape Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
