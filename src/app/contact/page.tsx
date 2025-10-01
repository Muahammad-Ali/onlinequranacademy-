"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/islamic-geometric-pattern-gold.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Get in touch with us for any queries or to start your Quran learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-black mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-black mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black mb-2 font-medium">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-black mb-2 font-medium">
                    Phone Number (with country code)
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="e.g., +1 234 567 8900"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-black mb-2 font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-black mb-2 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Please describe your inquiry in detail..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all duration-300"
                    required
                  ></textarea>
                </div>

                <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-black mb-8">Get In Touch</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We're here to help you on your Quran learning journey. Feel free to contact us through any of the
                following methods:
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "UK Phone", text: "+44 203 289 9880" },
                  { icon: <Phone className="w-6 h-6" />, title: "USA Phone", text: "+1 330 597 5880" },
                  { icon: <Mail className="w-6 h-6" />, title: "Email", text: "Info@quranlearnacademy.com" },
                  {
                    icon: <MapPin className="w-6 h-6" />,
                    title: "Service Area",
                    text: "Online Quran Academy - Serving Worldwide",
                  },
                  { icon: <Clock className="w-6 h-6" />, title: "Available Hours", text: "24/7 Support Available" },
                ].map((contact, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="text-yellow-600 mr-4 flex-shrink-0">{contact.icon}</div>
                        <div>
                          <h4 className="font-bold text-black mb-1">{contact.title}</h4>
                          <p className="text-gray-700">{contact.text}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Quick answers to common questions about our Quran learning programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I register for classes?",
                answer:
                  "Simply click on 'Register Online' on our homepage and fill out the registration form with your basic details.",
              },
              {
                question: "Are trial classes really free?",
                answer:
                  "Yes, we offer completely free trial classes so you can experience our teaching methodology before committing.",
              },
              {
                question: "What are your class timings?",
                answer:
                  "We offer flexible scheduling to accommodate students worldwide. Our team will work with you to find convenient times.",
              },
              {
                question: "Do you teach children and adults?",
                answer:
                  "Yes, we welcome students of all ages and provide age-appropriate teaching methods for both children and adults.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white text-black border-0">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg mb-3 text-yellow-600">{faq.question}</h4>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
