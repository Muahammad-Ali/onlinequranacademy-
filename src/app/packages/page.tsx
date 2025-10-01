"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star, Clock, Users, BookOpen, Award } from "lucide-react"

export default function PackagesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Learning Packages</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Choose the perfect learning package that suits your needs and budget
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Learning Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Flexible and affordable packages designed to meet different learning goals and schedules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Package",
                price: "$40",
                period: "per month",
                popular: false,
                description: "Perfect for beginners starting their Quran learning journey",
                features: [
                  "2 classes per week",
                  "30 minutes per class",
                  "Basic Quran reading",
                  "Qualified teacher",
                  "Progress tracking",
                  "Free trial class",
                  "Flexible scheduling",
                ],
              },
              {
                name: "Standard Package",
                price: "$70",
                period: "per month",
                popular: true,
                description: "Most popular choice for comprehensive Quran learning",
                features: [
                  "3 classes per week",
                  "45 minutes per class",
                  "Quran reading + Tajweed",
                  "Experienced teacher",
                  "Monthly assessments",
                  "Free trial class",
                  "Homework assignments",
                  "Progress certificates",
                ],
              },
              {
                name: "Premium Package",
                price: "$100",
                period: "per month",
                popular: false,
                description: "Intensive program for serious learners and memorization",
                features: [
                  "5 classes per week",
                  "60 minutes per class",
                  "Complete Quran curriculum",
                  "Expert teacher",
                  "Memorization support",
                  "Translation & Tafseer",
                  "Weekly assessments",
                  "Completion certificates",
                  "24/7 support",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-lg ${
                  pkg.popular ? "ring-2 ring-yellow-600 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-600 text-black px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {pkg.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-yellow-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      pkg.popular
                        ? "bg-yellow-600 hover:bg-yellow-700 text-black"
                        : "bg-black hover:bg-gray-800 text-white"
                    }`}
                  >
                    Choose This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Take advantage of our limited-time offers and family discounts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Family Package",
                discount: "25% OFF",
                description: "Special discount for families with multiple students",
                features: [
                  "2 or more family members",
                  "Individual class schedules",
                  "Shared progress tracking",
                  "Family progress reports",
                  "Flexible payment options",
                ],
              },
              {
                title: "Annual Subscription",
                discount: "2 Months FREE",
                description: "Pay for 10 months and get 12 months of learning",
                features: [
                  "12 months of classes",
                  "Pay for only 10 months",
                  "Priority scheduling",
                  "Free course materials",
                  "Guaranteed teacher consistency",
                ],
              },
              {
                title: "Student Discount",
                discount: "15% OFF",
                description: "Special rates for full-time students",
                features: [
                  "Valid student ID required",
                  "Flexible class timings",
                  "Study-friendly schedules",
                  "Exam period adjustments",
                  "Academic calendar alignment",
                ],
              },
              {
                title: "Senior Citizen Package",
                discount: "20% OFF",
                description: "Discounted rates for learners aged 60 and above",
                features: [
                  "Age verification required",
                  "Patient and caring teachers",
                  "Slower-paced learning",
                  "Health consideration breaks",
                  "Respectful learning environment",
                ],
              },
            ].map((offer, index) => (
              <Card key={index} className="bg-white text-black border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-black">{offer.title}</h3>
                    <div className="bg-yellow-600 text-black px-3 py-1 rounded-full text-sm font-bold">
                      {offer.discount}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{offer.description}</p>
                  <ul className="space-y-3">
                    {offer.features.map((feature, idx) => (
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

      {/* Package Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">What's Included in All Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Every package comes with these essential features to ensure quality learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Qualified Teachers",
                description: "Certified and experienced Quran teachers",
              },
              {
                icon: <Clock className="w-10 h-10" />,
                title: "Flexible Timing",
                description: "Choose your preferred class schedule",
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Learning Materials",
                description: "Free digital Quran and learning resources",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Progress Tracking",
                description: "Regular assessments and progress reports",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-yellow-600 mb-4 flex justify-center">{feature.icon}</div>
                <h4 className="text-xl font-bold text-black mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Free Trial Today</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Experience our teaching quality with a completely free trial class before choosing your package
          </p>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
            Book Free Trial Class
          </Button>
        </div>
      </section>
    </div>
  )
}
