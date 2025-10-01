"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Clock, Award, CheckCircle, Star, Heart, Globe, Target } from "lucide-react"

export default function AboutPage() {
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
            <div className="mb-8">
              <div className="text-4xl font-arabic text-yellow-400 mb-4 animate-fade-in">
                وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">About Us</h1>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              Dedicated to spreading the teachings of the Holy Quran with love, compassion, and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-black mb-6">
                Welcome to <span className="text-yellow-600">Quran Learn Academy</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Quran Learn Academy is an independent entity managed by a group of dedicated professionals. We welcome
                everyone to learn the teachings of the Holy Quran and the commandments of Islam, irrespective of race,
                color, or background.
              </p>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Our mission is to make Quran learning accessible to everyone around the world through flexible
                schedules, one-on-one sessions, and experienced teachers who are passionate about sharing the divine
                knowledge of the Holy Quran.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Users className="w-8 h-8" />, title: "Expert Teachers", desc: "Qualified & Experienced" },
                  { icon: <Clock className="w-8 h-8" />, title: "Flexible Timing", desc: "24/7 Availability" },
                  { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Students Worldwide" },
                  { icon: <Heart className="w-8 h-8" />, title: "Personal Care", desc: "Individual Attention" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="text-yellow-600 mb-3 flex justify-center">{item.icon}</div>
                    <h4 className="font-bold text-black mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="/islamic-calligraphy-and-quran-learning.jpg"
                  alt="About Quran Learn Academy"
                  className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Guided by Islamic principles, we strive to create a better Ummah through quality Quran education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white text-black border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-yellow-600 mb-6 flex justify-center">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  To make every Muslim understand and follow the basic principles of our religion so as to ensure we can
                  become a better Ummah as well as make this world a better place for everyone to live in.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white text-black border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-yellow-600 mb-6 flex justify-center">
                  <Star className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  To become the leading online platform for Quran education, connecting students worldwide with
                  qualified teachers and fostering a global community of Quran learners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The principles that guide everything we do at Quran Learn Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Excellence in Education",
                description:
                  "We maintain the highest standards in Quran teaching with proper Tajweed and understanding.",
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Compassionate Teaching",
                description:
                  "Our teachers approach every student with patience, kindness, and genuine care for their progress.",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Inclusive Community",
                description:
                  "We welcome students from all backgrounds, creating a diverse and supportive learning environment.",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Authentic Knowledge",
                description:
                  "All our teachings are based on authentic Islamic sources and traditional methods of Quran education.",
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Flexible Learning",
                description:
                  "We adapt to our students' schedules and learning pace, making Quran education accessible to all.",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Global Accessibility",
                description: "Through technology, we bring quality Quran education to students anywhere in the world.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-black mb-6 flex justify-center group-hover:text-yellow-600 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Quran Learn Academy?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Discover what makes us the preferred choice for thousands of students worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Easy to understand teaching process",
              "Equal attention to every student",
              "Timing that suits everyone's schedule",
              "One-to-one personalized sessions",
              "Free trial classes for new students",
              "Monthly progress assessment and feedback",
              "Expert teachers with English fluency",
              "Word by word Quran learning with Tajweed",
            ].map((item, index) => (
              <div key={index} className="flex items-center text-lg">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey Today
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Begin Your Quran Learning Journey?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
            Join thousands of students who have already started their journey with us. Experience the difference of
            learning with dedicated, qualified teachers who care about your progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Register for Free Trial
            </Button>
            <Button
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
