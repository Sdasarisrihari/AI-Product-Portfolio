import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { feedbackProject } from "@/lib/feedback-project";

const projectAreas = [
  "Feedback import and exploration",
  "BM25 search and AI themes",
  "Opportunity prioritization",
  "Citation-checked PRDs and stories",
  "Human review and task decisions",
];

export function FeedbackProjectCard() {
  return (
    <article className="mt-10 grid min-w-0 border border-border md:grid-cols-2">
      <div className="flex flex-col justify-between bg-card p-8">
        <div>
          <p className="eyebrow">Independent AI project / 2026</p>
          <h3 className="mt-5 text-4xl sm:text-5xl">{feedbackProject.name}</h3>
          <p className="mt-5 font-display text-3xl">Feedback → insight → requirements</p>
        </div>
        <div className="mt-10 border-t border-border pt-5">
          <p className="eyebrow mb-3">Reported evaluation status</p>
          <p className="text-sm leading-relaxed text-muted-foreground">{feedbackProject.evaluation}</p>
        </div>
      </div>
      <div className="min-w-0 p-8">
        <p className="eyebrow">{feedbackProject.subtitle}</p>
        <p className="mt-5 leading-relaxed text-muted-foreground">{feedbackProject.description}</p>
        <ul className="mt-7 space-y-3 text-sm leading-relaxed text-muted-foreground">
          {projectAreas.map((area) => <li key={area} className="flex gap-3"><span className="text-accent">—</span>{area}</li>)}
        </ul>
        <p className="mt-7 border-l-2 border-accent pl-3 font-mono text-[11px] text-accent">Prototype status: {feedbackProject.status}.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild className="rounded-none"><a href={feedbackProject.demoUrl} target="_blank" rel="noopener noreferrer">View Live Demo <ArrowUpRight aria-hidden="true" size={14} /></a></Button>
          <Button asChild variant="outline" className="rounded-none"><a href={feedbackProject.projectDocumentation.url} download={feedbackProject.projectDocumentation.original_filename}><Download aria-hidden="true" size={14} /> Project Documentation</a></Button>
        </div>
      </div>
    </article>
  );
}