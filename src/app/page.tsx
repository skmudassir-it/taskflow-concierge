"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faEnvelopeOpen,
  faPlane,
  faMagnifyingGlass,
  faHeadset,
  faListCheck,
  faTasks,
  faArrowRight,
  faCheckCircle,
  faClock,
  faShield,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faTasks,
    title: "Admin Support",
    description: "Data entry, document prep, CRM updates, and general administrative tasks handled efficiently.",
    href: "/services/admin-support",
    image: "/images/services/admin-support.jpg",
  },
  {
    icon: faCalendarCheck,
    title: "Calendar Management",
    description: "Schedule appointments, coordinate meetings, and keep your calendar optimized and conflict-free.",
    href: "/services/calendar-management",
    image: "/images/services/calendar-management.jpg",
  },
  {
    icon: faEnvelopeOpen,
    title: "Email Management",
    description: "Inbox organization, filtering, drafting responses, and keeping your communications streamlined.",
    href: "/services/email-management",
    image: "/images/services/email-management.jpg",
  },
  {
    icon: faPlane,
    title: "Travel Planning",
    description: "Flight bookings, hotel reservations, itinerary creation, and complete trip coordination.",
    href: "/services/travel-planning",
    image: "/images/services/travel-planning.jpg",
  },
  {
    icon: faMagnifyingGlass,
    title: "Research & Data",
    description: "Market research, competitor analysis, data compilation, and insightful reports for your business.",
    href: "/services/research",
    image: "/images/services/research.jpg",
  },
  {
    icon: faHeadset,
    title: "Customer Support",
    description: "Phone, email, and chat support — professional representation for your brand around the clock.",
    href: "/services/customer-support",
    image: "/images/services/customer-support.jpg",
  },
  {
    icon: faListCheck,
    title: "Project Coordination",
    description: "Task tracking, team coordination, deadline management, and status reporting for smooth execution.",
    href: "/services/project-coordination",
    image: "/images/services/project-coordination.jpg",
  },
];

const benefits = [
  { icon: faClock, title: "Save 20+ Hours/Week", desc: "Reclaim time for strategic work while we handle the day-to-day." },
  { icon: faShield, title: "Vetted Professionals", desc: "Every concierge is background-checked and trained to the highest standards." },
  { icon: faChartLine, title: "Scalable Support", desc: "Start small and scale up as your needs grow — no long-term contracts." },
];

const testimonials = [
  { quote: "TaskFlow transformed how I run my business. My inbox has never been so manageable.", name: "Sarah K.", role: "Startup Founder" },
  { quote: "Having a dedicated concierge for travel planning saves me hours every trip. Game changer.", name: "Marcus T.", role: "Management Consultant" },
  { quote: "The research team delivered a comprehensive market analysis in 48 hours. Incredible turnaround.", name: "Priya M.", role: "Product Manager" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <Badge className="mb-6 text-sm px-4 py-1.5" variant="secondary">
              Virtual Assistant &amp; Concierge Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Your Time,<br />
              <span className="text-primary">Amplified.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-8">
              Professional virtual assistant services for busy executives, entrepreneurs, and teams.
              We handle the details so you can focus on what matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex">
                <Button size="lg">
                  Get Started
                  <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services" className="inline-flex">
                <Button variant="outline" size="lg">
                  View Services
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
              {["No long-term contracts", "Dedicated concierge", "48-hour turnaround"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faCheckCircle} className="size-3.5 text-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">What We Do</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Concierge Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From inbox management to travel planning, our team handles every detail with precision and care.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.title} href={service.href}>
                <Card className="glass-card transition-shadow hover:shadow-lg h-full group cursor-pointer">
                  <CardHeader>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-3">
                      <FontAwesomeIcon icon={service.icon} className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="inline-flex">
              <Button variant="outline">
                View All Services
                <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Why TaskFlow</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Built for Busy Professionals
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to offload the busywork and focus on growth.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="text-center">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-5">
                  <FontAwesomeIcon icon={b.icon} className="size-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Trusted by Professionals
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="glass-card">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Let us handle the tasks that slow you down. Get a dedicated concierge in 24 hours.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" variant="secondary">
              Schedule a Consultation
              <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
