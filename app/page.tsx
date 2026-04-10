"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Server,
  GitBranch,
  Activity,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Mail,
  Download,
  Award,
  Briefcase,
  Boxes,
  Terminal,
  BarChart3,
  Workflow,
  X,
  Phone,
  Link,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const rotatingTitles = [
  "Kubernetes • Terraform • GitOps • Observability",
  "AWS • GCP • Azure • Platform Engineering",
  "CI/CD • Reliability • Automation • AI Platforms",
];

const metrics = [
  { label: "Cloud Platforms", value: "AWS / GCP / Azure" },
  { label: "Orchestration", value: "Kubernetes / GitOps" },
  { label: "Infrastructure", value: "Terraform / CI/CD" },
  { label: "Observability", value: "Prometheus / Grafana / ELK" },
  { label: "AI Systems", value: "FastAPI / LLMs / Vertex AI" },
  { label: "MLOps Platforms", value: "MLFlow / Kubeflow" }
];

const projects = [
  {
    id: "mlops",
    title: "Smart Building Operations Intelligence MLOps Platform",
    period: "May 2024",
    summary:
      "Built an end-to-end MLOps platform for telemetry, predictive maintenance, and operational recommendations.",
    stack: ["Python", "FastAPI", "scikit-learn", "MLflow", "MLOps"],
    problem:
      "Operational teams needed a reproducible pipeline to predict equipment failures and estimate utility usage from telemetry data.",
    solution:
      "Designed data pipelines for synthetic telemetry generation, validation, preprocessing, and feature engineering. Trained classification and regression models and exposed inference through FastAPI. Added MLflow experiment tracking, model metadata management, and drift-detection hooks.",
    outcome:
      "Demonstrates production-minded model lifecycle design, reproducible experimentation, and deployable ML inference workflows.",
    visual: [
      "Telemetry Generation",
      "Validation & Features",
      "Training & Tracking",
      "Inference & Drift Checks",
    ],
  },
  {
    id: "game",
    title: "Cloud Native Game Discovery Platform",
    period: "Dec 2024",
    summary:
      "Built and deployed an AI-powered game discovery platform with semantic search and cloud-native deployment.",
    stack: [
      "Vertex AI",
      "PostgreSQL",
      "pgvector",
      "FastAPI",
      "Next.js",
      "Docker",
      "GKE",
    ],
    problem:
      "Users needed a better way to search for games using natural language instead of exact title matching or rigid filters.",
    solution:
      "Created a data pipeline to ingest game data, generate embeddings with Vertex AI, store vectors in PostgreSQL with pgvector, and serve retrieval through FastAPI. Deployed the stack on GKE with Workload Identity and GitHub Actions.",
    outcome:
      "Showcases AI search, secure cloud-native deployment, CI/CD automation, and production-style service design.",
    visual: [
      "Query Input",
      "Embedding Generation",
      "Vector Search",
      "Top Matches Returned",
    ],
  },
];

const experience = [
  {
    company: "CareSource",
    role: "DevOps Engineer",
    period: "Jan 2025 – Present",
    highlights: [
      "Designed and managed cloud-native infrastructure across AWS and GCP using Terraform and Helm.",
      "Managed multi-cluster Kubernetes platforms with Argo CD and GitOps workflows.",
      "Built and optimized CI/CD pipelines using Jenkins and GitHub Actions.",
      "Designed observability stacks using Prometheus, Grafana, and ELK.",
      "Developed Python and Bash automation for platform operations and deployment workflows.",
    ],
  },
  {
    company: "Tailwinds Cloud Services",
    role: "DevOps Engineer",
    period: "Nov 2020 – Jul 2023",
    highlights: [
      "Standardized multi-cloud infrastructure across AWS, Azure, and GCP.",
      "Built reusable Terraform modules and Helm templates.",
      "Designed and operated Kubernetes platforms with GitOps delivery.",
      "Implemented observability using Prometheus, Grafana, and OpenTelemetry.",
      "Delivered an Internal Developer Platform for self-service environments.",
    ],
  },
  {
    company: "Wishtree Eximm",
    role: "DevOps Engineer",
    period: "Apr 2016 – Sep 2020",
    highlights: [
      "Built Jenkins-based CI/CD pipelines for containerized applications.",
      "Automated infrastructure provisioning with Terraform and Ansible.",
      "Implemented centralized logging and monitoring using ELK, Prometheus, and Grafana.",
      "Developed Python automation scripts for operational tasks and alert integrations.",
      "Supported hybrid infrastructure across on-prem systems and AWS.",
    ],
  },
];

const platformMap = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    items: ["AWS", "GCP", "Azure"],
    detail:
      "Designed and operated cloud-native systems across all three major cloud providers.",
  },
  {
    title: "Infrastructure as Code",
    icon: Boxes,
    items: ["Terraform", "Helm", "Ansible"],
    detail:
      "Built reusable modules and templates to standardize environments and automate provisioning.",
  },
  {
    title: "Containers & Orchestration",
    icon: Server,
    items: ["Docker", "Kubernetes", "EKS", "GKE", "AKS"],
    detail:
      "Managed Kubernetes platforms and delivered multi-cluster GitOps-based deployments.",
  },
  {
    title: "CI/CD & GitOps",
    icon: GitBranch,
    items: ["Jenkins", "GitHub Actions", "Argo CD", "Azure DevOps"],
    detail:
      "Improved release workflows with automated pipelines and version-controlled delivery systems.",
  },
  {
    title: "Observability",
    icon: Activity,
    items: ["Prometheus", "Grafana", "ELK", "OpenTelemetry"],
    detail:
      "Built monitoring and logging systems for production visibility, alerting, and troubleshooting.",
  },
  {
    title: "Security & Reliability",
    icon: ShieldCheck,
    items: ["IAM", "Encryption", "Image Scanning", "Incident Response"],
    detail:
      "Applied least-privilege access, secrets protection, and cloud security controls for production systems.",
  },
];

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "HashiCorp Certified Terraform Associate",
];

function useRotatingText(items: string[], interval = 2400) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(id);
  }, [items.length, interval]);

  return items[index];
}

function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="rounded-2xl border-white/10 bg-white/5 backdrop-blur">
        <CardContent className="p-6">
          <div className="text-2xl font-bold tracking-tight text-white">{value}</div>
          <div className="mt-2 text-sm text-zinc-300">{label}</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-3 max-w-3xl text-zinc-300">{subtitle}</p> : null}
    </div>
  );
}

export default function DevOpsPortfolioHomepage() {
  const rotating = useRotatingText(rotatingTitles);
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const [activeSkill, setActiveSkill] = useState(platformMap[0].title);
  const [showContact, setShowContact] = useState(false);

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === activeProject) ?? projects[0],
    [activeProject]
  );

  const selectedSkill = useMemo(
    () => platformMap.find((item) => item.title === activeSkill) ?? platformMap[0],
    [activeSkill]
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_25%),radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_30%)]" />

      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-6 shadow-2xl">
            <button
              onClick={() => setShowContact(false)}
              className="absolute right-4 top-4 rounded-full p-1 text-zinc-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close contact popup"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <p className="mt-2 text-sm text-zinc-400">
              Reach out through any of the options below.
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:saisravanmeduri97@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Mail className="h-5 w-5 text-cyan-300" />
                <div>
                  <div className="text-sm text-zinc-400">Email</div>
                  <div className="text-white">saisravanmeduri97@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+12099902091"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5 text-cyan-300" />
                <div>
                  <div className="text-sm text-zinc-400">Phone</div>
                  <div className="text-white">+1 209-990-2091</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sai-sravan-meduri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
              >
                <Link className="h-5 w-5 text-cyan-300" />
                <div>
                  <div className="text-sm text-zinc-400">LinkedIn</div>
                  <div className="text-white">https://www.linkedin.com/in/sai-sravan-meduri</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">Sai Sravan Meduri</div>
            <div className="text-sm text-zinc-300">Platform & DevOps Engineer</div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setShowContact(true)}
              className="rounded-2xl bg-cyan-400 text-zinc-950 hover:bg-cyan-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            <a href="/Sravan-DevOps.pdf" target="_blank" rel="noopener noreferrer">
              <OutlineButton
                className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/10"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </OutlineButton>
            </a>
            <a
              href="https://github.com/saisravanmeduri97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <OutlineButton
                className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/10"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                GitHub
              </OutlineButton>
            </a>
          </div>
        </header>

        <section className="grid items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-cyan-200 hover:bg-cyan-400/10">
                Available for DevOps, Platform, SRE, Infrasructure, Cloud Engineer Roles
              </Badge>
              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                Building scalable,
                <span className="block text-cyan-300">reliable cloud-native systems.</span>
              </h1>
              <div className="mt-5 h-8 text-lg text-zinc-300 md:text-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rotating}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                  >
                    {rotating}
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
                Platform & DevOps Engineer with hands-on experience designing Kubernetes-based infrastructure,
                automating delivery pipelines, improving observability, and building cloud-native platforms across AWS,
                GCP, and Azure.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects">
                  <Button className="rounded-2xl bg-cyan-400 px-6 text-zinc-950 hover:bg-cyan-300">
                    View Projects
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-medium text-zinc-300">Platform Overview</div>
              <Badge className="rounded-full bg-emerald-400/15 text-emerald-300 hover:bg-emerald-400/15">
                Active
              </Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { icon: Cloud, title: "Cloud", value: "AWS / GCP / Azure" },
                { icon: Server, title: "Kubernetes", value: "EKS / GKE / AKS" },
                { icon: Workflow, title: "GitOps", value: "Argo CD" },
                { icon: BarChart3, title: "Observability", value: "Prometheus / Grafana" },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4"
                >
                  <item.icon className="h-6 w-6 text-cyan-300" />
                  <div className="mt-4 text-sm text-zinc-400">{item.title}</div>
                  <div className="mt-1 font-semibold text-white">{item.value}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-4">
              <div className="flex items-center gap-2 text-cyan-200">
                <Terminal className="h-4 w-4" />
                <span className="text-sm font-medium">Production mindset</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Focused on scalable infrastructure, automated delivery, platform reliability, and operational visibility.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="pb-20">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </section>

        <section id="projects" className="py-12">
          <SectionTitle
            eyebrow="Featured Work"
            title="Projects that show how I build"
            subtitle="Cloud-native systems, MLOps pipelines, and AI-backed platform engineering work."
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {projects.map((project) => (
                <motion.button
                  key={project.id}
                  whileHover={{ y: -3 }}
                  onClick={() => setActiveProject(project.id)}
                  className={`w-full rounded-3xl border p-5 text-left transition ${
                    activeProject === project.id
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-lg font-semibold text-white">{project.title}</div>
                      <div className="mt-1 text-sm text-zinc-400">{project.period}</div>
                    </div>
                    <ChevronRight className="mt-1 h-5 w-5 text-zinc-400" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">{project.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} className="rounded-full bg-white/10 text-zinc-200 hover:bg-white/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </motion.button>
              ))}
            </div>

            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{selectedProject.title}</CardTitle>
                <div className="text-sm text-zinc-400">{selectedProject.period}</div>
              </CardHeader>
              <CardContent className="space-y-6 text-zinc-300">
                <div>
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-300">Problem</div>
                  <p className="leading-7">{selectedProject.problem}</p>
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-300">Solution</div>
                  <p className="leading-7">{selectedProject.solution}</p>
                </div>
                <div>
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-300">Outcome</div>
                  <p className="leading-7">{selectedProject.outcome}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                  <div className="mb-3 text-sm font-medium text-zinc-200">
                    {selectedProject.id === "game" ? "Semantic Search Flow" : "MLOps Lifecycle View"}
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedProject.visual.map((stage) => (
                      <div
                        key={stage}
                        className="rounded-xl border border-white/10 bg-zinc-950 p-3 text-sm text-zinc-300"
                      >
                        {stage}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <SectionTitle
            eyebrow="Career Path"
            title="Experience timeline"
            subtitle="Progression across platform engineering, Kubernetes operations, CI/CD, and observability."
          />

          <div className="space-y-5">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-cyan-300" />
                      <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    </div>
                    <div className="mt-1 text-zinc-300">{item.company}</div>
                  </div>
                  <Badge className="rounded-full bg-white/10 text-zinc-200 hover:bg-white/10">
                    {item.period}
                  </Badge>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 text-sm leading-6 text-zinc-300"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-12">
          <SectionTitle
            eyebrow="Core Capabilities"
            title="Interactive platform map"
            subtitle="Navigate the areas where I design, automate, and operate production systems."
          />

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {platformMap.map((item) => (
                <motion.button
                  key={item.title}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveSkill(item.title)}
                  className={`rounded-3xl border p-5 text-left transition ${
                    activeSkill === item.title
                      ? "border-cyan-400/40 bg-cyan-400/10"
                      : "border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <item.icon className="h-6 w-6 text-cyan-300" />
                  <div className="mt-4 font-semibold text-white">{item.title}</div>
                  <div className="mt-2 text-sm text-zinc-400">{item.items.slice(0, 3).join(" • ")}</div>
                </motion.button>
              ))}
            </div>

            <Card className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <selectedSkill.icon className="h-6 w-6 text-cyan-300" />
                  {selectedSkill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-zinc-300">{selectedSkill.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {selectedSkill.items.map((item) => (
                    <Badge key={item} className="rounded-full bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/10">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12">
          <SectionTitle
            eyebrow="Credentials"
            title="Certifications"
            subtitle="Cloud and infrastructure certifications aligned with hands-on platform engineering work."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((cert) => (
              <Card key={cert} className="rounded-3xl border-white/10 bg-white/5 backdrop-blur">
                <CardContent className="flex items-center gap-4 p-6">
                  <Award className="h-6 w-6 text-cyan-300" />
                  <div className="font-medium text-white">{cert}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16">
          <Card className="rounded-[2rem] border-white/10 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 backdrop-blur">
            <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white">Let’s build reliable systems at scale.</h3>
                <p className="mt-3 max-w-2xl text-zinc-300">
                  I enjoy building platforms that help teams ship faster, operate safely, and scale with confidence.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={() => setShowContact(true)}
                  className="rounded-2xl bg-cyan-400 text-zinc-950 hover:bg-cyan-300"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <a
                  href="https://github.com/saisravanmeduri97"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OutlineButton
                    className="rounded-2xl border-white/15 bg-transparent text-white hover:bg-white/10"
                  >
                    GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </OutlineButton>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

