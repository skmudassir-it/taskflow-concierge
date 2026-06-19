"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTasks,
  faCalendarCheck,
  faEnvelopeOpen,
  faPlane,
  faMagnifyingGlass,
  faHeadset,
  faListCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faTasks,
    title: "Admin Support",
    slug: "admin-support",
    description:
      "Data entry, document preparation, CRM updates, transcription, and general administrative tasks. Our assistants are trained in major platforms including Salesforce, HubSpot, and Google Workspace.",
    features: ["Data Entry & CRM Updates", "Document Preparation", "Transcription", "File Organization", "Expense Tracking"],
  },
  {
    icon: faCalendarCheck,
    title: "Calendar Management",
    slug: "calendar-management",
    description:
      "Full calendar coordination — scheduling, rescheduling, meeting prep, and conflict resolution. We integrate with Google Calendar, Outlook, and Calendly to keep you on track.",
    features: ["Appointment Scheduling", "Meeting Coordination", "Calendar Optimization", "Reminder Systems", "Timezone Management"],
  },
  {
    icon: faEnvelopeOpen,
    title: "Email Management",
    slug: "email-management",
    description:
      "Inbox zero, every day. We filter, prioritize, draft responses, and organize your email so you only see what matters. Support for Gmail, Outlook, and custom domains.",
    features: ["Inbox Organization", "Spam Filtering", "Response Drafting", "Follow-up Tracking", "Newsletter Management"],
  },
  {
    icon: faPlane,
    title: "Travel Planning",
    slug: "travel-planning",
    description:
      "End-to-end travel coordination — flights, hotels, ground transportation, restaurant reservations, and detailed itineraries. Business or leisure, we handle every detail.",
    features: ["Flight & Hotel Booking", "Itinerary Creation", "Ground Transportation", "Restaurant Reservations", "Travel Insurance"],
  },
  {
    icon: faMagnifyingGlass,
    title: "Research & Data",
    slug: "research",
    description:
      "Market research, competitor analysis, lead generation, data compilation, and custom reports. We deliver actionable insights so you can make informed decisions.",
    features: ["Market Research", "Competitor Analysis", "Lead Generation", "Data Compilation", "Custom Reports"],
  },
  {
    icon: faHeadset,
    title: "Customer Support",
    slug: "customer-support",
    description:
      "Professional phone, email, and live chat support for your customers. We represent your brand with the same care and attention you would give personally.",
    features: ["Phone Support", "Email Support", "Live Chat", "Ticket Management", "FAQ Maintenance"],
  },
  {
    icon: faListCheck,
    title: "Project Coordination",
    slug: "project-coordination",
    description:
      "Task tracking, team coordination, milestone management, and status reporting. We use Asana, Trello, Monday.com, and Jira to keep projects moving forward.",
    features: ["Task Tracking", "Team Coordination", "Milestone Management", "Status Reporting", "Resource Planning"],
  },
];

export function ServicesClient() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Everything We Offer
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Seven dedicated service lines to cover every aspect of your administrative and operational needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="glass-card transition-shadow hover:shadow-lg h-full group cursor-pointer">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-3">
                    <FontAwesomeIcon icon={service.icon} className="size-5" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description.slice(0, 120)}...</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
