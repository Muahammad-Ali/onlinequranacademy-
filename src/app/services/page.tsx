"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Clock, Award, Star, CheckCircle, Headphones, Globe } from "lucide-react"

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive Quran learning services designed to meet your spiritual and educational needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our comprehensive range of services ensures that every student receives personalized attention and quality
              education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Quran Reading",
                description:
                  "Learn to read the Holy Quran with proper pronunciation and fluency from beginner to advanced levels.",
                features: ["Basic Arabic letters", "Word formation", "Sentence structure", "Fluent reading"],
              },
              {
                icon: <Headphones className="w-12 h-12" />,
                title: "Tajweed Classes",
                description:
                  "Master the art of Quranic recitation with proper Tajweed rules and beautiful pronunciation.",
                features: [
                  "Makharij (pronunciation)",
                  "Sifaat (characteristics)",
                  "Rules of recitation",
                  "Melodious recitation",
                ],
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Quran Memorization",
                description:
                  "Systematic Hifz program to help you memorize the Holy Quran with proper retention techniques.",
                features: [
                  "Structured memorization",
                  "Revision techniques",
                  "Progress tracking",
                  "Completion certificates",
                ],
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Quran Translation",
                description:
                  "Understand the meaning and context of Quranic verses with detailed translation and explanation.",
                features: [
                  "Word-by-word translation",
                  "Contextual meanings",
                  "Historical background",
                  "Practical application",
                ],
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Flexible Scheduling",
                description:
                  "Choose your preferred time slots that fit your busy schedule with our flexible timing options.",
                features: ["24/7 availability", "Weekend classes", "Multiple time zones", "Rescheduling options"],
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Certification Programs",
                description: "Earn recognized certificates upon completion of various Quranic studies programs.",
                features: [
                  "Course completion certificates",
                  "Ijazah programs",
                  "Progress certificates",
                  "Achievement recognition",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-black mb-6 flex justify-center group-hover:text-yellow-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-yellow-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Special Programs</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Specialized courses designed for specific learning needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Kids Quran Program",
                description: "Fun and engaging Quran learning program specially designed for children aged 4-12 years.",
                features: [
                  "Interactive learning methods",
                  "Colorful learning materials",
                  "Games and activities",
                  "Parent progress reports",
                  "Flexible short sessions",
                ],
              },
              {
                title: "Adult Beginner Program",
                description:
                  "Comprehensive program for adults who are starting their Quran learning journey from scratch.",
                features: [
                  "Basic Arabic alphabet",
                  "Step-by-step progression",
                  "Patient and understanding teachers",
                  "Flexible pacing",
                  "Cultural sensitivity",
                ],
              },
              {
                title: "Advanced Tajweed Course",
                description: "Intensive course for students who want to perfect their Quranic recitation skills.",
                features: [
                  "Advanced Tajweed rules",
                  "Voice modulation techniques",
                  "Different Qira'at styles",
                  "Performance evaluation",
                  "Certification upon completion",
                ],
              },
              {
                title: "Weekend Intensive",
                description: "Concentrated learning sessions for busy professionals and students during weekends.",
                features: [
                  "Saturday and Sunday classes",
                  "Extended session duration",
                  "Accelerated learning pace",
                  "Group and individual options",
                  "Progress tracking",
                ],
              },
            ].map((program, index) => (
              <Card key={index} className="bg-white text-black border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-yellow-600 mb-4">{program.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                  <ul className="space-y-3">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Join thousands of students who have transformed their lives through Quran learning with our expert teachers
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            Register for Free Trial
          </Button>
        </div>
      </section>
    </div>
  )
}
