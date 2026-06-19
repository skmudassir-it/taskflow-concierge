import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = {
  Services: [
    { href: "/services/admin-support", label: "Admin Support" },
    { href: "/services/calendar-management", label: "Calendar Management" },
    { href: "/services/email-management", label: "Email Management" },
    { href: "/services/travel-planning", label: "Travel Planning" },
    { href: "/services/research", label: "Research & Data" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <img src="/logo.svg" alt="TaskFlow Concierge" className="h-7 w-auto" />
            </Link>
            <p className="text-slate-400 text-sm max-w-sm mb-6">
              Professional virtual assistant services helping busy professionals and businesses
              reclaim their time. Admin support, scheduling, research, and more.
            </p>
            <div className="flex gap-3">
              {[faLinkedin, faTwitter, faInstagram].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-primary hover:text-white transition-colors"
                >
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-semibold text-white mb-4 text-sm">{heading}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid gap-4 sm:grid-cols-3 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="size-3.5 text-primary" />
            <span>(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="size-3.5 text-primary" />
            <span>hello@taskflowconcierge.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="size-3.5 text-primary" />
            <span>Remote — Serving Clients Worldwide</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} TaskFlow Concierge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
