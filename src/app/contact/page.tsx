"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faCheckCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Please tell us about your needs"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setSending(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // fall through
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-xl px-4 text-center">
          <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto mb-6">
            <FontAwesomeIcon icon={faCheckCircle} className="size-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Message Received!
          </h1>
          <p className="text-muted-foreground mb-8">
            Thank you for reaching out. A member of our team will get back to you
            within 24 hours to discuss how we can help.
          </p>
          <Button onClick={() => setSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Get Started
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tell us about your needs and we&apos;ll match you with the perfect concierge.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-3 max-w-5xl mx-auto">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Name <span className="text-destructive">*</span>
                      </label>
                      <Input {...register("name")} placeholder="Jane Smith" />
                      {errors.name && (
                        <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <Input {...register("email")} type="email" placeholder="jane@company.com" />
                      {errors.email && (
                        <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone</label>
                      <Input {...register("phone")} placeholder="(555) 123-4567" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Service Interest</label>
                      <Select onValueChange={(v: string | null) => setValue("service", v || "")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin-support">Admin Support</SelectItem>
                          <SelectItem value="calendar-management">Calendar Management</SelectItem>
                          <SelectItem value="email-management">Email Management</SelectItem>
                          <SelectItem value="travel-planning">Travel Planning</SelectItem>
                          <SelectItem value="research">Research & Data</SelectItem>
                          <SelectItem value="customer-support">Customer Support</SelectItem>
                          <SelectItem value="project-coordination">Project Coordination</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Tell Us About Your Needs <span className="text-destructive">*</span>
                    </label>
                    <Textarea
                      {...register("message")}
                      placeholder="Describe the tasks you'd like help with, estimated volume, and any specific requirements..."
                      rows={5}
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  <Button type="submit" disabled={sending} className="w-full sm:w-auto">
                    <FontAwesomeIcon icon={faPaperPlane} className="size-4 mr-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="pt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <FontAwesomeIcon icon={faPhone} className="size-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Phone</p>
                    <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} className="size-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-sm text-muted-foreground">hello@taskflowconcierge.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="size-4" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">Remote — Serving Clients Worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">1.</span>
                    We review your needs and match you with a concierge.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">2.</span>
                    You have a free 30-minute consultation call.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-primary">3.</span>
                    Start delegating tasks within 24 hours.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
