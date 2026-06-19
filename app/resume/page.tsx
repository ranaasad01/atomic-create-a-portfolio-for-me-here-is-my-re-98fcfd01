"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Calendar, GraduationCap, Briefcase, Code2, Trophy, Star, Sparkles, ArrowLeft } from 'lucide-react';
import { fadeInUp, staggerContainer } from "@/lib/motion";

const education = {
  institution: "The Islamia University of Bahawalpur",
  degree: "Bachelor of Science in Artificial Intelligence",
  cgpa: "3.42 / 4.0",
  location: "Bahawalpur, Pakistan",
  period: "Feb 2021 – Jan 2025",
  coursework: [
    "Programming Fundamentals",
    "Programming for AI",
    "Knowledge Representation and Reasoning",
    "Artificial Neural Networks",
    "Machine Learning",
    "Computer Vision",
    "Natural Language Processing",
  ],
};

const experience = [
  {
    role: "Associate Software Engineer (AI)",
    company: "Datics AI",
    period: "May 2025 – Present",
    location: "Lahore, Pakistan",
    bullets: [
      "Worked on Marketverse — integrated CopilotKit for intelligent UI interactions and Chat Iris Experience, enabling dynamic chat experiences.",
      "Worked on Tito Project of AI agents, implemented CopilotKit shared state for frontend and backend integration.",
      "Contributed to the integration of AWS Strands in AGUI.",
    ],
  },
];

const projects = [
  {
    title: "Full-Stack AI Agent App with LangGraph",
    tags: ["LangGraph", "FastAPI", "Next.js", "CopilotKit", "Python"],
    bullet:
      "Built an end-to-end AI app with LangGraph agent backend using FastAPI (data APIs as tools) and Next.js frontend integrated with CopilotKit CoAgents for intelligent UI-Agent interaction.",
  },
  {
    title: "AI-Generated vs. Human Written Text Detection",
    tags: ["Python", "Hugging Face Transformers", "Streamlit"],
    bullet:
      "Fine-tuned BERT models to distinguish between AI-generated and human-written text with high accuracy.",
  },
  {
    title: "Research PDF Bot",
    tags: ["Python", "LangChain", "Google Gemini", "Chroma", "Gradio", "FPDF"],
    bullet:
      "Built an AI chatbot for interactive research paper exploration, supporting PDF uploads and precise Q&A.",
  },
  {
    title: "Traffic Sign Recognition System",
    tags: ["Python", "Scikit-learn", "OpenCV"],
    bullet:
      "Developed a traffic sign recognition system using Histogram of Oriented Gradients (HOG) for feature extraction and SVM for classification.",
  },
  {
    title: "Movie Analytics Dashboard",
    tags: ["Python", "Pandas", "Streamlit", "Plotly Express"],
    bullet:
      "Developed an interactive dashboard for exploring movie datasets with dynamic search and visualization.",
  },
];

const skillCategories = [
  { label: "Programming Languages", skills: "Python, JavaScript" },
  { label: "Machine Learning", skills: "Regression, SVM, Decision Trees, K-Means, KNN" },
  { label: "Deep Learning", skills: "CNN, RNN, LSTMs, Data Augmentation, Model Optimization" },
  {
    label: "Generative AI",
    skills:
      "LLMs, LangGraph, LangChain, CrewAI, GPT-4, Claude, Llama, Stable Diffusion, Runway, OpenAI, RAG, MCP",
  },
  { label: "NLP", skills: "Transformers, Hugging Face, SpaCy, Gensim" },
  { label: "Backend & APIs", skills: "FastAPI, Streamlit, RESTful APIs" },
  { label: "Frontend", skills: "React, Next.js" },
  { label: "ML/DL Frameworks", skills: "TensorFlow, PyTorch, Hugging Face" },
  {
    label: "Deployment & Tools",
    skills: "Git, Microsoft Azure, AWS SageMaker, Docker, Kubernetes, Model Serving, MLflow",
  },
];

const achievements = [
  "Data Science Lead at ACM Chapter IUB",
  "Ranked 72nd in MIT Informatics Tournament Winter Contest",
  "Ranked 102nd Globally in UC Berkeley CALICO Coding Competition",
  "Winner of the Stable Video 24-hour Hackathon",
  "Winner of the Gemini Ultra 1.0 Hackathon",
];

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-6">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 flex-shrink-0">
        {icon}
      </div>
      <h2 className="text-xl font-bold text-white tracking-tight">{title}</h2>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      {/* Print styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media print {
              body { background: white !important; color: black !important; }
              .no-print { display: none !important; }
              .print-card { background: white !important; border: 1px solid #e2e8f0 !important; box-shadow: none !important; }
              .print-text { color: #1e293b !important; }
              .print-muted { color: #475569 !important; }
              .print-badge { background: #e0e7ff !important; color: #3730a3 !important; }
            }
          `,
        }}
      />

      <main className="min-h-screen bg-[#0f172a] pt-24 pb-20">
        {/* Background glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── HERO ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 no-print"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Curriculum Vitae
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent leading-tight"
            >
              Muhammad Asad Ishfaq
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-slate-300 font-medium mb-6"
            >
              Associate Software Engineer (AI) · AI/ML Engineer
            </motion.p>

            {/* Contact row */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 mb-8"
            >
              <a
                href="tel:+923088600653"
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +923088600653
              </a>
              <a
                href="mailto:ranaasad36793@gmail.com"
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                ranaasad36793@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-300 transition-colors"
              >
                <Code2 className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RESUME DOCUMENT ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 print-card space-y-10"
          >
            {/* ── EDUCATION ── */}
            <motion.section variants={fadeInUp}>
              <SectionHeader
                icon={<GraduationCap className="w-4 h-4 text-white" />}
                title="Education"
              />
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-white font-semibold text-lg print-text">
                      {education.institution}
                    </h3>
                    <p className="text-indigo-300 font-medium">
                      {education.degree}
                    </p>
                    <p className="text-slate-400 text-sm print-muted">
                      CGPA: {education.cgpa}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm justify-end print-muted">
                      <MapPin className="w-3.5 h-3.5" />
                      {education.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm justify-end mt-1 print-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {education.period}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-sm mb-2 print-muted">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium print-badge"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* ── EXPERIENCE ── */}
            <motion.section variants={fadeInUp}>
              <SectionHeader
                icon={<Briefcase className="w-4 h-4 text-white" />}
                title="Experience"
              />
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.company} className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="text-white font-semibold text-lg print-text">
                          {exp.role}
                        </h3>
                        <p className="text-indigo-300 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm justify-end print-muted">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm justify-end mt-1 print-muted">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed print-muted">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── PROJECTS ── */}
            <motion.section variants={fadeInUp}>
              <SectionHeader
                icon={<Code2 className="w-4 h-4 text-white" />}
                title="Projects"
              />
              <div className="space-y-6">
                {projects.map((project) => (
                  <div key={project.title} className="space-y-2">
                    <h3 className="text-white font-semibold print-text">{project.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium print-badge"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed print-muted">
                      {project.bullet}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── TECHNICAL SKILLS ── */}
            <motion.section variants={fadeInUp}>
              <SectionHeader
                icon={<Code2 className="w-4 h-4 text-white" />}
                title="Technical Skills"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillCategories.map((cat) => (
                  <div key={cat.label} className="space-y-1">
                    <p className="text-white text-sm font-semibold print-text">{cat.label}</p>
                    <p className="text-slate-300 text-sm leading-relaxed print-muted">{cat.skills}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* ── ACHIEVEMENTS ── */}
            <motion.section variants={fadeInUp}>
              <SectionHeader
                icon={<Trophy className="w-4 h-4 text-white" />}
                title="Achievements"
              />
              <ul className="space-y-3">
                {achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed print-muted"
                  >
                    <Star className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.section>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center mt-10 no-print"
          >
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
          </motion.div>
        </div>
      </main>
    </>
  );
}