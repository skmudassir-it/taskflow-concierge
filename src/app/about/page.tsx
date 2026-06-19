import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckCircle,
  faUsers,
  faGlobe,
  faAward,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TaskFlow Concierge is a team of professional virtual assistants dedicated to helping busy professionals and businesses reclaim their time.",
};

const stats = [
  { icon: faUsers, value: "500+", label: "Clients Served" },
  { icon: faGlobe, value: "12", label: "Countries" },
  { icon: faAward, value: "98%", label: "Satisfaction Rate" },
  { icon: faHeart, value: "50K+", label: "Hours Saved" },
];

const values = [
  { title: "Reliability", desc: "We show up, every time. Our clients trust us to deliver consistently and on schedule." },
  { title: "Discretion", desc: "Your data and communications are handled with the utmost confidentiality and security." },
  { title: "Excellence", desc: "We hold ourselves to the highest standards. Every task, no matter how small, gets our full attention." },
  { title: "Partnership", desc: "We don't just complete tasks — we become an extension of your team, invested in your success." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-teal-50/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">About Us</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              We Help You Focus on What Matters
            </h1>
            <p className="text-muted-foreground text-lg">
              TaskFlow Concierge was founded on a simple belief: your time is your most valuable asset.
              Our team of professional virtual assistants handles the details so you can focus on the big picture.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto mb-3">
                  <FontAwesomeIcon icon={s.icon} className="size-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                From One Assistant to a Full Team
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TaskFlow started in 2019 when our founder, after years in executive operations,
                  realized how many professionals were drowning in administrative tasks that kept
                  them from doing their best work.
                </p>
                <p>
                  What began as a solo virtual assistant operation quickly grew as word spread.
                  Today, we&apos;re a team of 30+ trained concierges serving clients across
                  industries — from startups to Fortune 500 executives.
                </p>
                <p>
                  Every concierge on our team undergoes rigorous training, background checks,
                  and ongoing professional development to ensure the highest quality of service.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 sm:p-12 text-center">
              <div className="text-primary text-6xl font-bold mb-2">30+</div>
              <div className="text-lg font-medium">Professional Concierges</div>
              <div className="text-sm text-muted-foreground mt-1">Ready to support your business</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <Card key={v.title} className="glass-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FontAwesomeIcon icon={faCheckCircle} className="size-5 text-primary" />
                    <h3 className="font-semibold text-lg">{v.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Ready to see how TaskFlow Concierge can transform your workflow? Get in touch today.
          </p>
          <Link href="/contact" className="inline-flex">
            <Button size="lg" variant="secondary">
              Contact Us
              <FontAwesomeIcon icon={faArrowRight} className="size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
