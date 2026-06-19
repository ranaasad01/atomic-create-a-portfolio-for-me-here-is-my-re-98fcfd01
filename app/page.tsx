"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, Mail, Phone, ExternalLink, ChevronRight, Star, Trophy, Brain, Code, Layers, Cpu, Globe, Terminal, ArrowRight, Check, Sparkles, Activity, Briefcase } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { socialLinks, brandName, brandTagline } from "@/lib/data";

// ─── Inline Data ────────────────────────────────────────────────────────────

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
    color: "from-indigo-500 to-purple-600",
  },
];

const projects = [
  {
    title: "Full-Stack AI Agent App with LangGraph",
    description:
      "End-to-end AI app with LangGraph agent backend using FastAPI (data APIs as tools) and Next.js frontend integrated with CopilotKit CoAgents for intelligent UI-Agent interaction.",
    tags: ["LangGraph", "FastAPI", "Next.js", "CopilotKit", "Python"],
    icon: "brain",
    color: "from-indigo-500 to-purple-600",
    image: "https://i.redd.it/that-feeling-when-it-says-your-human-written-text-is-ai-v0-2zwd2w7nubqe1.png?width=344&format=png&auto=webp&s=19e31a07082e962344b809d2a96af834631824da",
  },
  {
    title: "AI-Generated vs. Human Written Text Detection",
    description:
      "Fine-tuned BERT models to distinguish between AI-generated and human-written text with high accuracy using Hugging Face Transformers.",
    tags: ["Python", "Hugging Face", "Transformers", "Streamlit"],
    icon: "activity",
    color: "from-purple-500 to-pink-600",
    image: "https://i.ytimg.com/vi/LzPgmmqpBk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDdICcgm7NRNlp7GwaLWhjjcMQJQw",
  },
  {
    title: "Research PDF Bot",
    description:
      "AI chatbot for interactive research paper exploration, supporting PDF uploads and precise Q&A powered by Google Gemini and LangChain.",
    tags: ["LangChain", "Google Gemini", "Chroma", "Gradio", "FPDF"],
    icon: "file",
    color: "from-cyan-500 to-blue-600",
    image: "https://cecas.clemson.edu/cvel/auto/systems/images/Sauras_TSR_system.png",
  },
  {
    title: "Traffic Sign Recognition System",
    description:
      "Traffic sign recognition system using Histogram of Oriented Gradients (HOG) for feature extraction and SVM for classification.",
    tags: ["Python", "Scikit-learn", "OpenCV", "HOG", "SVM"],
    icon: "cpu",
    color: "from-emerald-500 to-teal-600",
    image: "https://i.postimg.cc/15qvTdG4/task-23-c.jpg",
  },
  {
    title: "Movie Analytics Dashboard",
    description:
      "Interactive dashboard for exploring movie datasets with dynamic search and visualization using Pandas, Streamlit, and Plotly Express.",
    tags: ["Python", "Pandas", "Streamlit", "Plotly Express"],
    icon: "layers",
    color: "from-orange-500 to-amber-600",
    image: "https://i.postimg.cc/15qvTdG4/task-23-c.jpg",
  },
];

const skillCategories = [
  {
    category: "Programming Languages",
    icon: "code",
    color: "from-indigo-500 to-purple-600",
    skills: ["Python", "JavaScript"],
  },
  {
    category: "Machine Learning",
    icon: "brain",
    color: "from-purple-500 to-pink-600",
    skills: ["Regression", "SVM", "Decision Trees", "K-Means", "KNN"],
  },
  {
    category: "Deep Learning",
    icon: "cpu",
    color: "from-cyan-500 to-blue-600",
    skills: ["CNN", "RNN", "LSTMs", "Data Augmentation", "Model Optimization"],
  },
  {
    category: "Generative AI",
    icon: "sparkles",
    color: "from-violet-500 to-indigo-600",
    skills: ["LLMs", "LangGraph", "LangChain", "CrewAI", "GPT-4", "Claude", "Llama", "Stable Diffusion", "RAG", "MCP"],
  },
  {
    category: "NLP",
    icon: "terminal",
    color: "from-emerald-500 to-teal-600",
    skills: ["Transformers", "Hugging Face", "SpaCy", "Gensim"],
  },
  {
    category: "Backend & APIs",
    icon: "globe",
    color: "from-orange-500 to-amber-600",
    skills: ["FastAPI", "Streamlit", "RESTful APIs"],
  },
  {
    category: "Frontend",
    icon: "layers",
    color: "from-pink-500 to-rose-600",
    skills: ["React", "Next.js"],
  },
  {
    category: "ML/DL Frameworks",
    icon: "cpu",
    color: "from-blue-500 to-cyan-600",
    skills: ["TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    category: "Deployment & Tools",
    icon: "terminal",
    color: "from-slate-500 to-gray-600",
    skills: ["Git", "Microsoft Azure", "AWS SageMaker", "Docker", "Kubernetes", "Model Serving", "MLflow"],
  },
];

const achievements = [
  {
    title: "Data Science Lead",
    org: "ACM Chapter IUB",
    icon: "star",
    color: "from-indigo-500 to-purple-600",
    type: "leadership",
  },
  {
    title: "Ranked 72nd",
    org: "MIT Informatics Tournament Winter Contest",
    icon: "trophy",
    color: "from-yellow-500 to-orange-600",
    type: "competition",
  },
  {
    title: "Ranked 102nd Globally",
    org: "UC Berkeley CALICO Coding Competition",
    icon: "trophy",
    color: "from-blue-500 to-cyan-600",
    type: "competition",
  },
  {
    title: "Winner",
    org: "Stable Video 24-hour Hackathon",
    icon: "trophy",
    color: "from-emerald-500 to-teal-600",
    type: "hackathon",
  },
  {
    title: "Winner",
    org: "Gemini Ultra 1.0 Hackathon",
    icon: "trophy",
    color: "from-purple-500 to-pink-600",
    type: "hackathon",
  },
];

// ─── Icon Helper ─────────────────────────────────────────────────────────────
function getIcon(name: string, className = "w-5 h-5") {
  switch (name) {
    case "brain": return <Brain className={className} />;
    case "activity": return <Activity className={className} />;
    case "cpu": return <Cpu className={className} />;
    case "layers": return <Layers className={className} />;
    case "code": return <Code className={className} />;
    case "globe": return <Globe className={className} />;
    case "terminal": return <Terminal className={className} />;
    case "sparkles": return <Sparkles className={className} />;
    case "star": return <Star className={className} />;
    case "trophy": return <Trophy className={className} />;
    default: return <Code className={className} />;
  }
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(socialLinks.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Status badge */}
            <motion.div variants={fadeInUp} className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Looking for new opportunities?
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
            >
              <span className="text-white">Muhammad </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Asad Ishfaq
              </span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-slate-300 font-medium"
            >
              AI/ML Engineer &amp; Associate Software Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
            >
              Building intelligent systems with LLMs, LangGraph, and full-stack AI.
              Turning cutting-edge research into production-ready applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                View Resume <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 pt-2"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent" />
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">About Me</span>
              <h2 className="mt-2 text-4xl font-bold text-white">Who I Am</h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={slideInLeft} className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  I&apos;m <span className="text-white font-semibold">Muhammad Asad Ishfaq</span>, an AI/ML Engineer
                  passionate about building intelligent systems that solve real-world problems. Currently working as an
                  Associate Software Engineer (AI) at <span className="text-indigo-400 font-semibold">Datics AI</span>.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  My expertise spans the full AI stack — from classical machine learning and deep learning to
                  cutting-edge Generative AI with LLMs, LangGraph, and multi-agent systems. I love turning
                  research papers into production-ready applications.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["LLMs", "LangGraph", "Computer Vision", "NLP", "Full-Stack AI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={slideInRight}>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4 backdrop-blur-sm">
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" />
                    </span>
                    Education
                  </h3>
                  <div className="space-y-2">
                    <p className="text-white font-medium">The Islamia University of Bahawalpur</p>
                    <p className="text-indigo-300 text-sm">B.Sc. in Artificial Intelligence — CGPA: 3.42/4.0</p>
                    <p className="text-slate-400 text-sm">Feb 2021 – Jan 2025 · Bahawalpur, Pakistan</p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Relevant Coursework</p>
                    <div className="flex flex-wrap gap-2">
                      {["Programming Fundamentals", "AI Programming", "Knowledge Representation", "Neural Networks", "Machine Learning", "Computer Vision", "NLP"].map((course) => (
                        <span key={course} className="px-2 py-1 rounded bg-white/5 text-slate-300 text-xs">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
      <section id="experience" className="py-24 bg-[#0a0f1e] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Work History</span>
              <h2 className="mt-2 text-4xl font-bold text-white">Experience</h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div key={i} variants={fadeInUp} className="relative pl-20">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg shadow-indigo-500/30 -translate-x-1/2`}>
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>

                    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/[0.07] hover:border-indigo-500/20 transition-all duration-300 backdrop-blur-sm">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-white font-bold text-xl">{exp.role}</h3>
                          <p className="text-indigo-400 font-semibold">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                            {exp.period}
                          </span>
                          <p className="text-slate-500 text-xs mt-1">{exp.location}</p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
      <section id="projects" className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">My Work</span>
              <h2 className="mt-2 text-4xl font-bold text-white">Projects</h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                        {getIcon(project.icon, "w-4 h-4 text-white")}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-white font-bold text-base mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────────── */}
      <section id="skills" className="py-24 bg-[#0a0f1e] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Expertise</span>
              <h2 className="mt-2 text-4xl font-bold text-white">Technical Skills</h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillCategories.map((cat, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-indigo-500/20 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}>
                      {getIcon(cat.icon, "w-4 h-4 text-white")}
                    </div>
                    <h3 className="text-white font-semibold text-sm">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-colors duration-200"
                      >
                        <Check className="w-3 h-3 text-indigo-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────────────────────── */}
      <section id="achievements" className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Recognition</span>
              <h2 className="mt-2 text-4xl font-bold text-white">Achievements</h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-indigo-500/20 hover:bg-white/[0.07] transition-all duration-300 backdrop-blur-sm text-center"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ach.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(ach.icon, "w-7 h-7 text-white")}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">{ach.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ach.org}</p>
                  <span className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    ach.type === "hackathon"
                      ? "bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      : ach.type === "competition"
                      ? "bg-yellow-500/10 border border-yellow-500/20 text-yellow-300"
                      : "bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                  }`}>
                    {ach.type.charAt(0).toUpperCase() + ach.type.slice(1)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-[#0a0f1e] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
              <h2 className="mt-2 text-4xl font-bold text-white">Contact Me</h2>
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
              <p className="mt-6 text-slate-400 text-lg">
                I&apos;m currently <span className="text-indigo-300 font-medium">looking for new opportunities</span>.
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Email */}
              <button
                onClick={copyEmail}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300 text-left w-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Email</p>
                  <p className="text-white text-sm font-medium truncate">{socialLinks.email}</p>
                  <p className="text-indigo-400 text-xs mt-0.5">
                    {copiedEmail ? (
                      <span className="flex items-center gap-1"><Check className="w-3 h-3" /> Copied!</span>
                    ) : "Click to copy"}
                  </p>
                </div>
              </button>

              {/* Phone */}
              <a
                href={`tel:${socialLinks.phone}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">Phone</p>
                  <p className="text-white text-sm font-medium">{socialLinks.phone}</p>
                  <p className="text-indigo-400 text-xs mt-0.5">Click to call</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">LinkedIn</p>
                  <p className="text-white text-sm font-medium">Muhammad Asad Ishfaq</p>
                  <p className="text-indigo-400 text-xs mt-0.5">View profile</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <Github className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">GitHub</p>
                  <p className="text-white text-sm font-medium">View repositories</p>
                  <p className="text-indigo-400 text-xs mt-0.5">Open source work</p>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// Need Briefcase icon for experience timeline
;
