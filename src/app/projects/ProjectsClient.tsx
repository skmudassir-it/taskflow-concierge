"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faClock, faStar } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    category: "admin",
    title: "CRM Overhaul for Sales Team",
    client: "Tech startup, 25-person sales team",
    challenge: "Disorganized CRM with duplicate records, missing data, and outdated contact information slowing down the sales pipeline.",
    solution: "Our team cleaned 15,000+ records, standardized data entry protocols, and set up automated enrichment workflows.",
    results: ["60% faster lead-to-contact conversion", "98% data accuracy achieved", "15 hours/week saved for sales reps"],
    image: "/images/projects/crm-overhaul.jpg",
  },
  {
    category: "calendar",
    title: "Executive Calendar Optimization",
    client: "Fortune 500 C-suite executive",
    challenge: "Back-to-back meetings with no buffer time, frequent double-bookings, and travel coordination across 3 time zones.",
    solution: "Implemented a structured scheduling protocol with buffer zones, priority-based slot allocation, and automated travel coordination.",
    results: ["4 hours/week reclaimed", "Zero double-bookings in 12 months", "Seamless cross-timezone coordination"],
    image: "/images/projects/calendar-optimization.jpg",
  },
  {
    category: "email",
    title: "Inbox Zero for 3 Founders",
    client: "VC-backed startup founding team",
    challenge: "Three co-founders collectively receiving 800+ emails per day across 6 inboxes, with critical investor messages being missed.",
    solution: "Set up unified inbox management with priority filtering, response templates, and a triage system that escalated only high-priority items.",
    results: ["Inbox zero maintained daily", "Investor response time cut from 48h to 4h", "2,000+ hours saved annually"],
    image: "/images/projects/inbox-zero.jpg",
  },
  {
    category: "travel",
    title: "Global Conference Tour Planning",
    client: "Keynote speaker & author",
    challenge: "Planning a 12-city speaking tour across 3 continents with conflicting venue requirements, visa logistics, and tight turnaround.",
    solution: "Coordinated all flights, hotels, ground transport, and venue liaison. Built detailed day-by-day itineraries with contingency plans.",
    results: ["12 events delivered flawlessly", "$8,400 saved on travel costs", "100% on-time arrival across all events"],
    image: "/images/projects/conference-tour.jpg",
  },
  {
    category: "research",
    title: "Market Entry Research Package",
    client: "SaaS company expanding to APAC",
    challenge: "Needed comprehensive market intelligence on 5 APAC countries including competitor landscape, regulatory requirements, and pricing benchmarks.",
    solution: "Delivered a 120-page research package with competitor profiles, pricing analysis, regulatory summaries, and 200+ qualified leads.",
    results: ["Market entry accelerated by 3 months", "200+ qualified leads generated", "Competitive pricing strategy validated"],
    image: "/images/projects/market-research.jpg",
  },
  {
    category: "support",
    title: "24/7 Customer Support Launch",
    client: "E-commerce brand during holiday season",
    challenge: "Scaling customer support from business-hours-only to 24/7 coverage for the holiday rush with a 2-week timeline.",
    solution: "Deployed a 10-person support team covering all time zones, set up Zendesk workflows, created a knowledge base, and trained on brand voice.",
    results: ["4,200+ tickets resolved", "92% CSAT score", "Average 8-minute first response time"],
    image: "/images/projects/customer-support.jpg",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "admin", label: "Admin Support" },
  { value: "calendar", label: "Calendar" },
  { value: "email", label: "Email" },
  { value: "travel", label: "Travel" },
  { value: "research", label: "Research" },
  { value: "support", label: "Support" },
];

export function ProjectsClient() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Case Studies
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Proven Results
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real projects, real outcomes. See how we&apos;ve helped clients save time,
            scale operations, and achieve more.
          </p>
        </div>

        <Tabs defaultValue="all">
          <TabsList className="mb-8 flex flex-wrap justify-center">
            {categories.map((c) => (
              <TabsTrigger key={c.value} value={c.value}>
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="grid gap-8 lg:grid-cols-2">
                {projects
                  .filter((p) => cat.value === "all" || p.category === cat.value)
                  .map((project) => (
                    <Card key={project.title} className="glass-card overflow-hidden">
                      <div className="w-full h-48 bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Challenge</h4>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-1">Solution</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Results</h4>
                          <div className="space-y-2">
                            {project.results.map((r) => (
                              <div key={r} className="flex items-center gap-2 text-sm">
                                <FontAwesomeIcon icon={faArrowTrendUp} className="size-3.5 text-primary" />
                                {r}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
