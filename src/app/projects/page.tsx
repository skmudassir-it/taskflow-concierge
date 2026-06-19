import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and success stories — see how TaskFlow Concierge has helped professionals and businesses save time and scale operations.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
