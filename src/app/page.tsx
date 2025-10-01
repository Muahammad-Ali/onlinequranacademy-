"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  BookOpen,
  Users,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Play,
  Globe,
  Shield,
  Heart,
} from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 text-sm relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern opacity-30"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2 relative z-10">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-1 md:space-y-0">
            <span className="flex items-center animate-slideInLeft stagger-1">
              <Phone className="w-3 h-3 mr-2" /> USA +1 330 597 5880
            </span>
            <span className="flex items-center animate-slideInLeft stagger-2">
              <Phone className="w-3 h-3 mr-2" /> UK +44 203 289 9880
            </span>
            <span className="flex items-center animate-slideInLeft stagger-3">
              <Mail className="w-3 h-3 mr-2" /> info@quranlearnacademy.com
            </span>
          </div>
          <div className="flex space-x-4 animate-slideInRight">
            {/* Social media icons with enhanced hover effects */}
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a href="#" className="hover:text-yellow-400 transition-all duration-300 transform hover:scale-110">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b section-transition">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className={`flex items-center transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <div className="animate-float">
              <BookOpen className="w-8 h-8 text-black mr-3" />
            </div>
            <h1 className="text-2xl font-bold text-black text-reveal">
              QURAN <span className="text-yellow-600 gradient-text">LEARN ACADEMY</span>
            </h1>
          </div>

          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <nav
            className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Packages", path: "/packages" },
                { name: "Payments", path: "/payments" },
                { name: "Contact", path: "/contact" },
              ].map((item, index) => (
                <li
                  key={item.name}
                  className={`transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.path}
                    className="block py-2 md:py-0 hover:text-yellow-600 transition-all duration-300 font-medium relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>


          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative text-white py-20 overflow-hidden "
        style={{
          backgroundImage: `url('/child2.jpeg')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        <div className="absolute inset-0 islamic-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 ">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="mb-8">
              <div className="text-6xl font-arabic text-yellow-400 mb-4 animate-fadeInUp animate-pulse-glow">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slideInLeft stagger-2">Online Quran Classes</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed animate-slideInRight stagger-3">
              Learn the Holy Quran from experienced teachers with flexible schedules and personalized attention
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp stagger-4">
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-lg btn-enhanced">
                <Play className="w-5 h-5 mr-2" />
                Register Online
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-lg btn-enhanced bg-transparent"
              >
                <Globe className="w-5 h-5 mr-2" />
                Free Trial Class
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white section-transition"
       style={{
          backgroundImage: `url('/quran.jpg')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Begin Learning Quran Now in 3 Easy Steps</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Getting yourself or your loved ones familiarized with the teachings of the holy Quran doesn't have to be a
              hassle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Click on Register Online",
                description:
                  'Simply click on "Register Online" and a tab for online registration will open. There, enter your basic details such as name, residential address, and contact information.',
                delay: "stagger-1",
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Provide Your Details",
                description:
                  "Once you are done with providing us these basic credentials, your process for registration will be complete.",
                delay: "stagger-2",
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Start Learning",
                description:
                  "Our team will contact you to schedule your classes at your convenient time and you can start your Quran learning journey.",
                delay: "stagger-3",
              },
            ].map((step, index) => (
              <Card key={index} className={`card-hover scroll-reveal ${step.delay} border-0 shadow-lg`}>
                <CardContent className="p-8 text-center">
                  <div className="text-black mb-6 flex justify-center group-hover:text-yellow-600 transition-colors duration-300 animate-scaleIn">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white section-transition">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 scroll-reveal">
              <h3 className="text-4xl font-bold mb-6">
                Few Words About <span className="text-yellow-400 gradient-text">Quran Learn Academy</span>
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Quran Learn Academy is an independent entity managed by a small group of dedicated professionals. We
                welcome everyone to learn the teachings of the holy Quran and the commandments of Islam irrespective of
                their race, colour, or cast.
              </p>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We aim to make every Muslim understand and follow the basic principles of our religion so as to ensure
                we can become a better Ummah as well as make this world a better place for everyone to live in.
              </p>

              <ul className="space-y-4">
                {[
                  { text: "Easy to understand process", icon: <Shield className="w-6 h-6" /> },
                  { text: "Equal attention to every student", icon: <Heart className="w-6 h-6" /> },
                  { text: "Timing that suits everyone", icon: <Clock className="w-6 h-6" /> },
                  { text: "One to one sessions", icon: <Users className="w-6 h-6" /> },
                ].map((item, index) => (
                  <li key={index} className={`flex items-center text-lg animate-slideInLeft stagger-${index + 1}`}>
                    <div className="text-yellow-400 mr-4 flex-shrink-0">{item.icon}</div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:w-1/2 scroll-reveal">
              <div className="relative">
                <img
                  src="/islamic-calligraphy-and-quran-learning.jpg"
                  alt="Quran Learn Academy"
                  className="rounded-lg shadow-2xl w-full card-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                <div className="absolute top-4 right-4 bg-yellow-600 text-black px-4 py-2 rounded-full font-bold animate-pulse-glow">
                  Free Trial Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white section-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We take pride in what we do and we take it upon ourselves to make our brothers and sisters good Muslims
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Award className="w-10 h-10" />,
                title: "Free Trial Classes",
                description: "Experience our teaching methodology with free trial classes before you commit.",
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Word by word Quran learning with Tajweed",
                description: "Learn proper pronunciation and recitation with our comprehensive Tajweed curriculum.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Expert Quran teachers with English fluency",
                description: "Our teachers are highly qualified and can communicate effectively in English.",
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Monthly progress assessment and feedback",
                description: "Regular evaluations to track your progress and provide constructive feedback.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 p-6 rounded-lg card-hover scroll-reveal stagger-${index + 1}`}
              >
                <div className="text-black hover:text-yellow-600 transition-colors duration-300 flex-shrink-0 animate-scaleIn">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-black mb-3">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white section-transition">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say About Us</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Hear from our satisfied students and their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "My both kids are learning to read Quran with proper pronunciation and I am very satisfied. Teachers are very professional and dedicated. I would highly recommend them.",
                author: "Yasmin Ahmad",
                rating: 5,
              },
              {
                text: "I loved it and nothing to complain about. The teachers are very patient and the scheduling is flexible which works perfectly with my busy routine.",
                author: "Isra Hashmi",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-white text-black border-0 shadow-xl card-hover scroll-reveal stagger-${index + 1}`}
              >
                <CardContent className="p-8 relative">
                  <div className="text-6xl text-gray-200 absolute top-4 left-4 font-serif">"</div>
                  <div className="flex mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">{testimonial.text}</p>
                  <div className="font-bold text-black text-lg">{testimonial.author}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white section-transition">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl font-bold text-black mb-4">Contact Us For More Information</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Get in touch with us for any queries or to start your Quran learning journey
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2 scroll-reveal">
              <form className="space-y-6">
                <div className="animate-slideInLeft stagger-1">
                  <label htmlFor="name" className="block text-black mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="animate-slideInLeft stagger-2">
                  <label htmlFor="email" className="block text-black mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="animate-slideInLeft stagger-3">
                  <label htmlFor="phone" className="block text-black mb-2 font-medium">
                    Phone (with country code)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="animate-slideInLeft stagger-4">
                  <label htmlFor="message" className="block text-black mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>

                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-3 rounded-lg btn-enhanced animate-slideInLeft stagger-5">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="lg:w-1/2 scroll-reveal">
              <h3 className="text-2xl font-bold text-black mb-6">Get In Touch</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Feel free to contact us through any of the following methods:
              </p>

              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6" />, text: "UK +44 203 289 9880" },
                  { icon: <Phone className="w-6 h-6" />, text: "USA 03121589993" },
                  { icon: <Mail className="w-6 h-6" />, text: "ilmulquranvirtualtutor@gmail.com" },
                  { icon: <MapPin className="w-6 h-6" />, text: "Online Quran Academy - Serving Worldwide" },
                ].map((contact, index) => (
                  <div key={index} className={`flex items-center text-lg animate-slideInRight stagger-${index + 1}`}>
                    <div className="text-black mr-4 animate-scaleIn">{contact.icon}</div>
                    <span className="text-gray-700">{contact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 section-transition">
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="scroll-reveal">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 relative pb-2">
                QURAN LEARN ACADEMY
                <div className="absolute left-0 bottom-0 w-12 h-0.5 bg-yellow-400"></div>
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Quran Learn Academy is an independent entity managed by a small group of dedicated professionals. We
                welcome everyone to learn the teachings of the holy Quran.
              </p>
            </div>

            <div className="scroll-reveal">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 relative pb-2">
                Quick Links
                <div className="absolute left-0 bottom-0 w-12 h-0.5 bg-yellow-400"></div>
              </h3>
              <ul className="space-y-2">
                {["About Us", "Services", "Packages", "Downloads", "Blog", "Web Portal"].map((link, index) => (
                  <li key={link} className={`animate-slideInLeft stagger-${index + 1}`}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-reveal">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 relative pb-2">
                Get In Touch
                <div className="absolute left-0 bottom-0 w-12 h-0.5 bg-yellow-400"></div>
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center animate-slideInRight stagger-1">
                  <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>UK +44 203 289 9880</span>
                </li>
                <li className="flex items-center animate-slideInRight stagger-2">
                  <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>USA +1 330 597 5880</span>
                </li>
                <li className="flex items-center animate-slideInRight stagger-3">
                  <Mail className="w-4 h-4 mr-3 text-yellow-400" />
                  <span>Info@quranlearnacademy.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm scroll-reveal">
            <p>Copyright © 2024 Quran Learn Academy. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
