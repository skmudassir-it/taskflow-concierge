import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  faCheckCircle,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const services: Record<string, {
  title: string;
  icon: typeof faTasks;
  description: string;
  features: string[];
  image: string;
  benefits: string[];
  ideal: string[];
}> = {
  "admin-support": {
    title: "Admin Support",
    icon: faTasks,
    description:
      "Comprehensive administrative support for busy professionals. From data entry and document preparation to CRM updates and transcription, our assistants handle the routine so you can focus on strategy and growth.",
    features: [
      "Data entry & database management",
      "Document preparation & formatting",
      "CRM updates (Salesforce, HubSpot, Zoho)",
      "Transcription (audio/video to text)",
      "File organization & digital filing",
      "Expense tracking & receipt management",
      "Presentation creation",
      "Invoicing support",
    ],
    image: "/images/services/admin-support.jpg",
    benefits: [
      "Fewer late nights catching up on paperwork",
      "Clean, organized digital workspace",
      "Accurate, up-to-date CRM records",
      "Professional documents every time",
    ],
    ideal: [
      "Executives drowning in paperwork",
      "Small business owners without admin staff",
      "Sales teams needing CRM maintenance",
      "Consultants managing client deliverables",
    ],
  },
  "calendar-management": {
    title: "Calendar Management",
    icon: faCalendarCheck,
    description:
      "Full-service calendar coordination that keeps your schedule optimized and conflict-free. We manage appointments, coordinate across time zones, prepare meeting materials, and ensure you never double-book.",
    features: [
      "Appointment scheduling & rescheduling",
      "Meeting coordination (internal & external)",
      "Calendar optimization & decluttering",
      "Automated reminder systems",
      "Timezone management for global teams",
      "Meeting agenda preparation",
      "Travel time buffering",
      "Recurring meeting management",
    ],
    image: "/images/services/calendar-management.jpg",
    benefits: [
      "Zero double-bookings",
      "Buffer time built into every day",
      "Meeting materials ready in advance",
      "Seamless coordination across time zones",
    ],
    ideal: [
      "Executives with back-to-back meetings",
      "Consultants juggling multiple clients",
      "Remote teams spanning time zones",
      "Entrepreneurs losing track of commitments",
    ],
  },
  "email-management": {
    title: "Email Management",
    icon: faEnvelopeOpen,
    description:
      "Achieve and maintain inbox zero with professional email management. We filter, prioritize, categorize, draft responses, and flag action items — so you only touch what truly needs your attention.",
    features: [
      "Inbox triage & prioritization",
      "Spam & newsletter filtering",
      "Response drafting & template creation",
      "Follow-up tracking & reminders",
      "Folder/label organization",
      "Email analytics & reporting",
      "Unsubscribe management",
      "VIP sender highlighting",
    ],
    image: "/images/services/email-management.jpg",
    benefits: [
      "Inbox zero maintained daily",
      "Never miss an important message",
      "Response times cut in half",
      "Clear separation of signal from noise",
    ],
    ideal: [
      "Professionals receiving 100+ emails/day",
      "Customer-facing roles with high volume",
      "Founders managing multiple inboxes",
      "Anyone overwhelmed by email backlog",
    ],
  },
  "travel-planning": {
    title: "Travel Planning",
    icon: faPlane,
    description:
      "End-to-end travel coordination for business and leisure. Flights, hotels, ground transportation, restaurant reservations, and detailed day-by-day itineraries — all handled with meticulous attention to detail.",
    features: [
      "Flight search & booking (best rates)",
      "Hotel & accommodation research",
      "Ground transportation (car, train, rideshare)",
      "Restaurant & activity reservations",
      "Detailed day-by-day itineraries",
      "Travel insurance coordination",
      "Visa & documentation assistance",
      "24/7 travel support during trips",
    ],
    image: "/images/services/travel-planning.jpg",
    benefits: [
      "Save 3-5 hours per trip on planning",
      "Best rates across all travel providers",
      "Detailed itineraries in your pocket",
      "Support available during your trip",
    ],
    ideal: [
      "Frequent business travelers",
      "Executives planning multi-city tours",
      "Teams coordinating offsites & retreats",
      "Anyone who dreads travel logistics",
    ],
  },
  research: {
    title: "Research & Data",
    icon: faMagnifyingGlass,
    description:
      "In-depth research and data compilation services to power your business decisions. Market analysis, competitor intelligence, lead generation, and custom reports delivered with speed and accuracy.",
    features: [
      "Market research & trend analysis",
      "Competitor intelligence & benchmarking",
      "Lead generation & list building",
      "Data compilation & cleaning",
      "Custom research reports",
      "Industry landscape mapping",
      "Product & pricing comparisons",
      "Survey design & analysis",
    ],
    image: "/images/services/research.jpg",
    benefits: [
      "Actionable insights in 48 hours",
      "Data-backed decision making",
      "Comprehensive competitor visibility",
      "Qualified leads ready for outreach",
    ],
    ideal: [
      "Startups validating new markets",
      "Sales teams building prospect lists",
      "Product managers researching features",
      "Consultants preparing client deliverables",
    ],
  },
  "customer-support": {
    title: "Customer Support",
    icon: faHeadset,
    description:
      "Professional customer support that represents your brand with excellence. Phone, email, and chat support with ticket management, FAQ maintenance, and escalation handling — as if we were your own team.",
    features: [
      "Phone support (inbound & outbound)",
      "Email & ticket-based support",
      "Live chat coverage",
      "Ticket triage & prioritization",
      "FAQ & knowledge base maintenance",
      "Escalation management",
      "Customer satisfaction tracking",
      "Multilingual support available",
    ],
    image: "/images/services/customer-support.jpg",
    benefits: [
      "24/7 coverage without hiring",
      "Consistent brand voice across channels",
      "Reduced response times",
      "Higher customer satisfaction scores",
    ],
    ideal: [
      "SaaS companies scaling support",
      "E-commerce businesses managing volume",
      "Service businesses after hours",
      "Startups needing professional first impression",
    ],
  },
  "project-coordination": {
    title: "Project Coordination",
    icon: faListCheck,
    description:
      "Keep your projects on track with professional coordination services. Task tracking, team follow-ups, milestone management, and status reporting — we ensure nothing falls through the cracks.",
    features: [
      "Task assignment & tracking",
      "Team follow-ups & reminders",
      "Milestone & deadline management",
      "Status reports & dashboards",
      "Meeting notes & action items",
      "Resource allocation tracking",
      "Risk & issue logging",
      "Project documentation",
    ],
    image: "/images/services/project-coordination.jpg",
    benefits: [
      "Projects delivered on time",
      "Clear visibility for stakeholders",
      "Reduced meeting overhead",
      "Nothing falls through the cracks",
    ],
    ideal: [
      "Project managers with overloaded plates",
      "Agencies managing multiple clients",
      "Remote teams needing coordination",
      "Product teams tracking complex releases",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    return (
      <section className="py-20 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link href="/services" className="inline-flex mt-4">
          <Button variant="outline">
            <FontAwesomeIcon icon={faArrowLeft} className="size-4 mr-2" />
            Back to Services
          </Button>
        </Link>
      </section>
    );
  }

  const IconComponent = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="size-3 mr-2" />
            All Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shrink-0">
              <FontAwesomeIcon icon={IconComponent} className="size-7" />
            </div>
            <div>
              <Badge variant="secondary" className="mb-3">Service</Badge>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {service.title}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features + Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Features */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="size-4 text-primary mt-0.5 shrink-0"
                    />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-3.5 text-primary mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Ideal For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.ideal.map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="size-3.5 text-secondary mt-0.5 shrink-0"
                        />
                        <span className="text-sm text-muted-foreground">{i}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Link href="/contact" className="inline-flex w-full">
                <Button className="w-full">
                  Get Started
                  <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
