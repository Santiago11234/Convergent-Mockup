import { Suspense } from "react";
import ProjectsPage from "@/components/projects-page";

export default function PastPageWrapper() {
  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      <ProjectsPage />
    </Suspense>
  )
}
