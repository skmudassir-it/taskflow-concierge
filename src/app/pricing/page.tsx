import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for virtual assistant services. Choose the plan that fits your needs — from hourly support to dedicated concierge packages.",
};

const plans = [
  {
    name: "Starter",
    price: "$25",
    unit: "/hour",
    description: "Perfect for occasional admin tasks and one-off projects.",
    features: [
      "Dedicated assistant (shared)",
      "48-hour turnaround",
      "Email & calendar support",
      "Basic research & data entry",
      "Monthly usage report",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    unit: "/month",
    description: "For busy professionals who need consistent, reliable support.",
    features: [
      "Dedicated concierge (1:1)",
      "24-hour turnaround",
      "All admin & calendar services",
      "Travel planning included",
      "Research & data compilation",
      "Weekly status calls",
      "Priority support channel",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "",
    description: "For teams and organizations needing multi-concierge coverage.",
    features: [
      "Team of 2-5 concierges",
      "Same-day turnaround",
      "Full service suite",
      "Customer support coverage",
      "Project coordination",
      "Dedicated account manager",
      "Custom integrations & workflows",
      "24/7 availability",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "How quickly can I get started?",
    a: "Most clients are matched with a concierge within 24 hours of signing up. We take time to understand your needs and pair you with the right person.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No long-term contracts. Our Starter plan is pay-as-you-go. Professional and Enterprise plans are month-to-month with 30 days' notice.",
  },
  {
    q: "How do you ensure data security?",
    a: "All concierges sign NDAs and undergo background checks. We use enterprise-grade encryption, password managers, and secure communication channels.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade at any time. We'll adjust your concierge assignment and service levels accordingly.",
  },
  {
    q: "What platforms do you support?",
    a: "Google Workspace, Microsoft 365, Slack, Asana, Trello, Monday.com, Salesforce, HubSpot, Zendesk, and most major business platforms.",
  },
];

export default function PricingPage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Pricing
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.highlighted
                  ? "glass-card ring-2 ring-primary shadow-xl scale-[1.02]"
                  : "glass-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm ml-1">{plan.unit}</span>
                </div>
                <CardDescription className="mt-2">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Separator className="mb-6" />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="size-3.5 text-primary mt-0.5 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex w-full">
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="glass-card group p-0 overflow-hidden">
                <summary className="cursor-pointer list-none p-4 font-medium flex items-center justify-between">
                  {faq.q}
                  <svg
                    className="size-4 transition-transform group-open:rotate-180 shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <p className="px-4 pb-4 text-muted-foreground text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
