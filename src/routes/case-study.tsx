import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";


export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "AI Insurance Claims Assistant — Case Study · Srihari Dasari" },
      { name: "description", content: "Case study: an AI-assisted claims workflow with structured extraction, confidence review, and cited policy Q&A. Prototype, not a production system." },
      { property: "og:title", content: "AI Insurance Claims Assistant — Case Study" },
      { property: "og:description", content: "Problem, MVP scope, architecture, roadmap, risks, and KPIs for an AI claims assistant prototype." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudy,
});

const Tag = ({ children }: { children: string }) => (
  <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{children}</span>
);

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-8 border-t border-border py-16 md:grid-cols-[220px_1fr]">
      <p className="eyebrow"><span className="text-accent">{n}</span> — {title}</p>
      <div className="space-y-5 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

const journey = ["Upload document", "Extract fields", "Review confidence & missing info", "Ask policy questions", "Inspect citations", "Handler verifies"];

const artifacts = [
  { t: "Functional requirements", b: ["FR-1: Accept PDF/image claim documents and parse text.", "FR-2: Extract policyholder, policy number, incident date, loss type, location, and description.", "FR-3: Show a confidence indicator per field and flag missing required fields.", "FR-4: Let handlers edit any extracted value; edits are retained over model output.", "FR-5: Answer policy questions only from ingested policy documents, with passage citations."] },
  { t: "Sample user stories", b: ["As a claims handler, I want key fields pre-filled from the claim form so I spend less time on data entry.", "As a claims handler, I want low-confidence fields highlighted so I know where to check.", "As a claims handler, I want policy answers with cited passages so I can verify coverage myself."] },
  { t: "Acceptance criteria", b: ["Given a parsed document, when a required field is not found, then it is labelled “Missing” and not auto-filled.", "Given a policy question, when no relevant passage is retrieved, then the assistant states it cannot answer rather than guessing.", "Given any extracted value, the handler must confirm it before the record is marked verified."] },
  { t: "Exception handling", b: ["Unreadable or low-quality scans → route to manual entry.", "Conflicting values across pages → show both, require handler choice.", "Out-of-scope question → decline and suggest escalation."] },
  { t: "Evaluation criteria", b: ["Field-level extraction accuracy against a labelled synthetic set.", "Citation faithfulness: answers supported by the cited passage.", "Refusal rate on unanswerable questions.", "Handler review time per routine claim in a controlled test."] },
];

const roadmap = [
  { p: "Discovery and Requirements", d: "2–3 weeks", tasks: "Workflow interviews (simulated), AS-IS / TO-BE maps, requirements, MVP scope", out: "BRD, user stories, process maps", dep: "Synthetic claim and policy samples" },
  { p: "Build Prototype", d: "3–4 weeks", tasks: "Upload, parsing, extraction UI, review screen", out: "Interactive prototype (Floot)", dep: "Phase 1 scope" },
  { p: "Add Core Capabilities and Integrations", d: "3–4 weeks", tasks: "Confidence display, missing-field logic, policy ingestion, RAG with citations", out: "End-to-end MVP flow", dep: "Prototype, policy corpus" },
  { p: "Evaluate and Refine", d: "2 weeks", tasks: "Run evaluation set, review citations, refine prompts and UX", out: "Evaluation report", dep: "Labelled test set" },
  { p: "Package the Portfolio", d: "1 week", tasks: "Case study write-up, demo walkthrough, artifact library", out: "This case study", dep: "Phases 1–4" },
];

const risks = [
  ["Hallucinations", "Answers restricted to retrieved passages; citations required; refusal when unsupported.", "Open"],
  ["Privacy / PII exposure", "Synthetic data only in prototype; access controls and redaction required before real data.", "Open"],
  ["Model bias", "Assistant does not make decisions; evaluate extraction across claim types.", "Open"],
  ["Handler over-reliance", "Mandatory human verification; confidence visible; no auto-approval.", "Open"],
  ["RAG degradation", "Re-index on policy updates; monitor retrieval quality over time.", "Open"],
  ["CMS integration limitations", "MVP is standalone; integration deferred to future phase.", "Open"],
  ["Regulatory compliance", "Legal / compliance review required before any production use.", "Open"],
];

const kpis = [
  ["Active handler effort per routine claim", "2.5 hrs (assumed)", "< 40 min"],
  ["End-to-end processing time", "4.5 hrs (assumed)", "Reduce; target TBD"],
  ["Routine-claim triage assistance", "—", "60%"],
  ["Data-entry error rate", "—", "< 5%"],
  ["Positive handler feedback", "—", "> 80%"],
  ["Customer turnaround", "—", "< 5 days"],
  ["NPS", "—", "+30"],
  ["Year 1 net savings", "—", "£850,000 after £180,000 running costs (estimate)"],
];

function CaseStudy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-sm"><ArrowLeft size={14} /> Back to portfolio</Link>
          <span className="font-display text-2xl">SD<span className="text-accent">•</span></span>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-20">
        <p className="eyebrow">Independent Project | AI Product Prototype | 2026</p>
        <h1 className="mt-6 text-6xl leading-[0.95] md:text-8xl">AI Insurance Claims Assistant</h1>
        <p className="mt-8 max-w-3xl text-lg text-muted-foreground">An AI-assisted claims workflow designed to extract structured information from claim documents, highlight missing fields, display extraction confidence, and answer policy questions using cited source passages.</p>
        <div className="mt-6 flex flex-wrap gap-2"><Tag>AI Product Management</Tag><Tag>Insurance Workflow Automation</Tag><Tag>Status: prototype in progress</Tag></div>
        <p className="mt-6 border-l-2 border-accent pl-4 text-sm text-muted-foreground">An interactive Floot prototype has been built to demonstrate the proposed experience. No production claims capability or measured outcome is claimed.</p>
        <a href="https://sriharidasari.floot.app" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-3 border border-foreground px-5 py-3 text-sm">View Prototype <ArrowUpRight size={14} /></a>


        <div className="mt-16">
          <Section n="01" title="Problem">
            <p>Claims handlers spend much of their time reading documents, re-keying claim data, looking up policy wording, and passing information between teams. Each handoff adds delay and a chance of error, and the effort falls on skilled people whose judgement is the real value.</p>
            <div className="grid gap-px bg-border sm:grid-cols-4">
              {[["~2,000", "claims / month"], ["4.5 hrs", "end-to-end processing"], ["2.5 hrs", "active handler effort"], ["40", "handler FTEs"]].map(([v, l]) => (
                <div key={l} className="bg-card p-5"><p className="font-display text-4xl text-foreground">{v}</p><p className="mt-1 text-xs">{l}</p></div>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Project assumptions; validation required</p>
          </Section>

          <Section n="02" title="MVP scope">
            <ol className="space-y-3">
              <li><b className="text-foreground">1. Upload and parse</b> a claim document.</li>
              <li><b className="text-foreground">2. Extract structured fields</b>, show confidence indicators, allow edits, and identify missing information.</li>
              <li><b className="text-foreground">3. Answer policy questions</b> using retrieval-augmented generation (RAG), with citations to source passages.</li>
            </ol>
            <p className="text-foreground">Human verification is required before any information is relied upon for claim decisions.</p>
            <div><p className="eyebrow mb-3">Future phase — not in MVP</p><div className="flex flex-wrap gap-2">{["Automated claim decisions", "Fraud scoring", "Automated communications", "Full CMS integration"].map((t) => <Tag key={t}>{t}</Tag>)}</div></div>
          </Section>

          <Section n="03" title="User journey">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-foreground">
              {journey.map((j, i) => <li key={j} className="flex items-center gap-2"><span className="border border-border bg-card px-3 py-2"><span className="mr-2 font-mono text-accent">{i + 1}</span>{j}</span>{i < journey.length - 1 && <span className="text-accent">→</span>}</li>)}
            </ol>
          </Section>

          <Section n="04" title="Product artifacts">
            {artifacts.map((a) => (
              <details key={a.t} className="group border border-border bg-card">
                <summary className="cursor-pointer list-none px-5 py-4 font-display text-2xl text-foreground">{a.t}<span className="float-right font-mono text-sm text-accent group-open:rotate-45 transition-transform">+</span></summary>
                <ul className="space-y-2 px-5 pb-5 text-sm">{a.b.map((x) => <li key={x}>— {x}</li>)}</ul>
              </details>
            ))}
          </Section>

          <Section n="05" title="Architecture">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Proposed design — specific technologies not yet chosen or implemented</p>
            <div className="grid gap-6 md:grid-cols-2">
              {[["Claim document path", ["Document upload", "Parsing / OCR", "Field extraction", "Validation & confidence", "Handler review"]], ["Policy knowledge path", ["Policy ingestion", "Chunking & indexing", "Retrieval", "RAG answer generation", "Cited answer to handler"]]].map(([t, steps]) => (
                <div key={t as string} className="border border-border p-5">
                  <p className="eyebrow mb-4">{t as string}</p>
                  {(steps as string[]).map((s, i, arr) => <div key={s}><div className="border border-border bg-card px-4 py-3 text-sm text-foreground">{s}</div>{i < arr.length - 1 && <div className="py-1 text-center text-accent">↓</div>}</div>)}
                </div>
              ))}
            </div>
            <p className="text-sm">Both paths converge at the handler review screen, where a person verifies extracted fields and cited answers.</p>
          </Section>

          <Section n="06" title="Roadmap">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Durations are planning estimates</p>
            <div className="space-y-px bg-border">
              {roadmap.map((r, i) => (
                <div key={r.p} className="grid gap-3 bg-background p-5 text-sm md:grid-cols-[1fr_2fr]">
                  <div><span className="font-mono text-accent">0{i + 1}</span><p className="font-display text-2xl text-foreground">{r.p}</p><p className="font-mono text-xs">{r.d}</p></div>
                  <div className="space-y-1"><p><b className="text-foreground">Tasks:</b> {r.tasks}</p><p><b className="text-foreground">Deliverables:</b> {r.out}</p><p><b className="text-foreground">Dependencies:</b> {r.dep}</p></div>
                </div>
              ))}
            </div>
          </Section>

          <Section n="07" title="Risks">
            <div className="overflow-x-auto"><table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border text-foreground"><th className="py-2 pr-4 font-medium">Risk</th><th className="py-2 pr-4 font-medium">Mitigation</th><th className="py-2 font-medium">Status</th></tr></thead>
              <tbody>{risks.map(([r, m, s]) => <tr key={r} className="border-b border-border align-top"><td className="py-3 pr-4 text-foreground">{r}</td><td className="py-3 pr-4">{m}</td><td className="py-3 font-mono text-xs">{s}</td></tr>)}</tbody>
            </table></div>
          </Section>

          <Section n="08" title="KPIs">
            <p className="font-mono text-[11px] uppercase tracking-widest text-accent">Proposed targets — not achieved results. Assumptions and financials need validation. Measured outcomes: none yet.</p>
            <div className="overflow-x-auto"><table className="w-full text-left text-sm">
              <thead><tr className="border-b border-border text-foreground"><th className="py-2 pr-4 font-medium">Metric</th><th className="py-2 pr-4 font-medium">Baseline</th><th className="py-2 pr-4 font-medium">Proposed target</th><th className="py-2 font-medium">Measured</th></tr></thead>
              <tbody>{kpis.map(([k, b, t]) => <tr key={k} className="border-b border-border"><td className="py-3 pr-4 text-foreground">{k}</td><td className="py-3 pr-4">{b}</td><td className="py-3 pr-4">{t}</td><td className="py-3">—</td></tr>)}</tbody>
            </table></div>
            <p className="text-sm">Active handler effort (time a person spends working the claim) is tracked separately from end-to-end processing time (elapsed time including waiting).</p>
          </Section>

          <Section n="09" title="Limitations & next steps">
            <p>This is not a production claims decision engine. It is a bounded prototype exploring how AI can assist — not replace — claims handlers.</p>
            <div className="flex flex-wrap gap-2">{["Security review", "Access controls", "Audit logging", "CMS integration", "Monitoring", "Controlled handler evaluation"].map((t) => <Tag key={t}>{t}</Tag>)}</div>
            <p className="text-sm">All listed items are future work.</p>
          </Section>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/" className="bg-primary px-5 py-3 text-sm text-primary-foreground">Back to portfolio</Link>
          <a href="mailto:sdasari1229@gmail.com" className="border border-foreground px-5 py-3 text-sm">Discuss this project</a>
        </div>
      </main>
    </div>
  );
}
