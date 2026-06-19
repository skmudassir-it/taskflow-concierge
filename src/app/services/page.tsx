import type { Metadata } from "next";
import { ServicesClient } from "./ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional virtual assistant services — admin support, calendar management, email, travel planning, research, customer support, and project coordination.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
