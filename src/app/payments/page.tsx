"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Shield, CheckCircle, DollarSign, Globe, Lock, RefreshCw } from "lucide-react"

export default function PaymentsPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Payment Options</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Secure, flexible, and convenient payment methods for your Quran learning journey
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Accepted Payment Methods</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer multiple secure payment options to make your learning experience hassle-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CreditCard className="w-12 h-12" />,
                title: "Credit & Debit Cards",
                description: "Visa, MasterCard, American Express, and other major cards accepted worldwide",
                features: [
                  "Instant processing",
                  "Secure encryption",
                  "Auto-renewal option",
                  "International cards accepted",
                ],
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "PayPal",
                description: "Safe and secure payments through your PayPal account with buyer protection",
                features: ["Buyer protection", "No card details shared", "Quick checkout", "Refund protection"],
              },
              {
                icon: <DollarSign className="w-12 h-12" />,
                title: "Bank Transfer",
                description: "Direct bank transfers for those who prefer traditional payment methods",
                features: ["Wire transfers", "ACH payments", "International transfers", "Bank-to-bank security"],
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Digital Wallets",
                description: "Apple Pay, Google Pay, and other digital wallet solutions",
                features: ["One-click payments", "Biometric security", "No card entry needed", "Mobile-friendly"],
              },
              {
                icon: <Globe className="w-12 h-12" />,
                title: "Cryptocurrency",
                description: "Bitcoin, Ethereum, and other major cryptocurrencies accepted",
                features: ["Decentralized payments", "Lower fees", "Global accessibility", "Privacy protection"],
              },
              {
                icon: <RefreshCw className="w-12 h-12" />,
                title: "Installment Plans",
                description: "Flexible payment plans to spread costs over multiple months",
                features: ["0% interest options", "Flexible terms", "Auto-debit setup", "Early payment discounts"],
              },
            ].map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-black mb-6 flex justify-center group-hover:text-yellow-600 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{method.description}</p>
                  <ul className="space-y-2 text-left">
                    {method.features.map((feature, idx) => (
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

      {/* Payment Security Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Payment Security</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              We take your financial security seriously with industry-leading protection measures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SSL Encryption",
                description:
                  "All payment data is encrypted using 256-bit SSL encryption, the same level used by banks.",
                features: [
                  "Bank-level encryption",
                  "Secure data transmission",
                  "Protected personal information",
                  "Industry standard security",
                ],
              },
              {
                title: "PCI DSS Compliance",
                description: "We are fully compliant with Payment Card Industry Data Security Standards.",
                features: [
                  "Certified secure systems",
                  "Regular security audits",
                  "Secure card processing",
                  "Data protection protocols",
                ],
              },
              {
                title: "Fraud Protection",
                description: "Advanced fraud detection systems monitor all transactions for suspicious activity.",
                features: [
                  "Real-time monitoring",
                  "Suspicious activity alerts",
                  "Transaction verification",
                  "Account protection",
                ],
              },
              {
                title: "Refund Policy",
                description: "Fair and transparent refund policy with easy refund processing for eligible cases.",
                features: [
                  "30-day refund window",
                  "Pro-rated refunds",
                  "Easy refund process",
                  "Customer satisfaction guarantee",
                ],
              },
            ].map((security, index) => (
              <Card key={index} className="bg-white text-black border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Lock className="w-8 h-8 text-yellow-600 mr-4" />
                    <h3 className="text-2xl font-bold text-black">{security.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">{security.description}</p>
                  <ul className="space-y-3">
                    {security.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0" />
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

      {/* Payment Terms Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Payment Terms & Policies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Clear and transparent terms to help you understand our payment policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Billing & Payments</h3>
              <ul className="space-y-4">
                {[
                  "Monthly packages are billed at the beginning of each month",
                  "Annual subscriptions are billed upfront with significant savings",
                  "Auto-renewal can be enabled for convenience (can be disabled anytime)",
                  "Payment confirmation is sent via email within 24 hours",
                  "Late payment grace period of 7 days before service suspension",
                ].map((term, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black mb-6">Refunds & Cancellations</h3>
              <ul className="space-y-4">
                {[
                  "Full refund available within 30 days of first payment",
                  "Pro-rated refunds for unused classes in monthly packages",
                  "Cancellation can be done anytime with 7 days notice",
                  "Refunds processed within 5-7 business days",
                  "No cancellation fees or hidden charges",
                ].map((term, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Payment FAQs</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">Common questions about payments and billing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Is my payment information secure?",
                answer:
                  "Yes, we use bank-level SSL encryption and are PCI DSS compliant. Your payment information is never stored on our servers.",
              },
              {
                question: "Can I change my payment method?",
                answer:
                  "Yes, you can update your payment method anytime through your account settings or by contacting our support team.",
              },
              {
                question: "Do you offer family discounts?",
                answer:
                  "Yes, we offer 25% discount for families with 2 or more students. Contact us to set up your family account.",
              },
              {
                question: "What happens if my payment fails?",
                answer:
                  "We'll notify you immediately and give you 7 days to update your payment method before any service interruption.",
              },
              {
                question: "Can I get a receipt for my payments?",
                answer:
                  "Yes, you'll receive an email receipt for every payment, and you can download invoices from your account dashboard.",
              },
              {
                question: "Do you accept international payments?",
                answer:
                  "Yes, we accept payments from anywhere in the world through various international payment methods.",
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

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-8">
            Choose your preferred payment method and begin your Quran learning journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
              View Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
