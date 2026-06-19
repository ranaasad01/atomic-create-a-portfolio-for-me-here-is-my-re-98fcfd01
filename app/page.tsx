"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, Mail, Phone, ExternalLink, ChevronRight, Star, Trophy, Brain, Code, Layers, Cpu, Globe, Terminal, ArrowRight, Check, Sparkles, Activity } from 'lucide-react';
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
    color: "from-pink-500 to-rose-600",
    skills: ["LLMs", "LangGraph", "LangChain", "CrewAI", "GPT-4", "Claude", "Llama", "RAG", "MCP"],
  },
  {
    category: "NLP",
    icon: "globe",
    color: "from-emerald-500 to-teal-600",
    skills: ["Transformers", "Hugging Face", "SpaCy", "Gensim"],
  },
  {
    category: "Backend & APIs",
    icon: "terminal",
    color: "from-orange-500 to-amber-600",
    skills: ["FastAPI", "Streamlit", "RESTful APIs"],
  },
  {
    category: "Frontend",
    icon: "layers",
    color: "from-sky-500 to-indigo-600",
    skills: ["React", "Next.js"],
  },
  {
    category: "Deployment & Tools",
    icon: "activity",
    color: "from-violet-500 to-purple-600",
    skills: ["Git", "Azure", "AWS SageMaker", "Docker", "Kubernetes", "MLflow"],
  },
];

const achievements = [
  {
    title: "Data Science Lead",
    org: "ACM Chapter IUB",
    description: "Led data science initiatives and workshops at the ACM student chapter of Islamia University of Bahawalpur.",
    icon: "star",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Ranked 72nd",
    org: "MIT Informatics Tournament — Winter Contest",
    description: "Achieved a top-100 ranking in the prestigious MIT Informatics Tournament Winter Contest.",
    icon: "trophy",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Ranked 102nd Globally",
    org: "UC Berkeley CALICO Coding Competition",
    description: "Secured a top-200 global ranking in the UC Berkeley CALICO Coding Competition.",
    icon: "trophy",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Hackathon Winner",
    org: "Stable Video 24-Hour Hackathon",
    description: "Won the Stable Video 24-hour hackathon, building an innovative AI-powered video solution.",
    icon: "star",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Hackathon Winner",
    org: "Gemini Ultra 1.0 Hackathon",
    description: "Won the Gemini Ultra 1.0 Hackathon, demonstrating cutting-edge use of Google's latest AI model.",
    icon: "star",
    color: "from-pink-500 to-rose-600",
  },
];

// ─── Icon Resolver ───────────────────────────────────────────────────────────

function ProjectIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "brain": return <Brain className={className} />;
    case "activity": return <Activity className={className} />;
    case "cpu": return <Cpu className={className} />;
    case "layers": return <Layers className={className} />;
    case "terminal": return <Terminal className={className} />;
    default: return <Code className={className} />;
  }
}

function SkillIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "brain": return <Brain className={className} />;
    case "cpu": return <Cpu className={className} />;
    case "sparkles": return <Sparkles className={className} />;
    case "globe": return <Globe className={className} />;
    case "terminal": return <Terminal className={className} />;
    case "layers": return <Layers className={className} />;
    case "activity": return <Activity className={className} />;
    default: return <Code className={className} />;
  }
}

function AchievementIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "trophy": return <Trophy className={className} />;
    default: return <Star className={className} />;
  }
}

// ─── Contact Form ────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
        <p className="text-slate-400 max-w-xs">
          Thanks for reaching out. I'll get back to you as soon as possible.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all duration-200 text-sm resize-none"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 flex items-center justify-center gap-2"
      >
        Send Message <ArrowRight className="w-4 h-4" />
      </motion.button>
    </form>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-[#0f172a] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-3xl" />
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Open to Opportunities
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

            {/* Tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-slate-300 font-medium max-w-2xl"
            >
              {brandTagline}
            </motion.p>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              BS in Artificial Intelligence from IUB · Associate Software Engineer at Datics AI ·
              Passionate about LLMs, Agentic AI, and building production-grade intelligent systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mt-2">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-200"
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Mail className="w-4 h-4" /> Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`tel:${socialLinks.phone}`}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all duration-200"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          >
            <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8 bg-gradient-to-b from-indigo-400/60 to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <div>
                <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
                <h2 className="mt-2 text-4xl font-extrabold text-white leading-tight">
                  Turning Ideas Into{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Intelligent Systems
                  </span>
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed text-base">
                I'm an AI/ML Engineer with a Bachelor's in Artificial Intelligence from The Islamia University of
                Bahawalpur (CGPA 3.42/4.0). Currently working as an Associate Software Engineer (AI) at Datics AI,
                I specialize in building agentic AI systems, LLM-powered applications, and full-stack AI products.
              </p>
              <p className="text-slate-400 leading-relaxed text-base">
                My expertise spans the full AI stack — from fine-tuning transformer models and building RAG pipelines
                to deploying production-grade APIs with FastAPI and crafting interactive frontends with Next.js.
                I'm passionate about the intersection of Generative AI and real-world product engineering.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { label: "CGPA", value: "3.42 / 4.0" },
                  { label: "Degree", value: "BS in AI" },
                  { label: "University", value: "IUB" },
                  { label: "Status", value: "Available" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-white/3 border border-white/8">
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-white font-semibold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Education Card */}
            <motion.div variants={slideInRight} className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/30">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">The Islamia University of Bahawalpur</h3>
                    <p className="text-indigo-300 text-sm font-medium mt-0.5">Bachelor of Science in Artificial Intelligence</p>
                    <p className="text-slate-500 text-sm mt-1">Feb 2021 – Jan 2025 · Bahawalpur, Pakistan</p>
                  </div>
                </div>
                <div className="mt-5 pt-5 border-t border-white/8">
                  <p className="text-slate-400 text-sm font-medium mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Programming Fundamentals",
                      "Programming for AI",
                      "Knowledge Representation",
                      "Artificial Neural Networks",
                      "Machine Learning",
                      "Computer Vision",
                      "Natural Language Processing",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "5+", label: "Projects Built" },
                  { value: "2×", label: "Hackathon Winner" },
                  { value: "Top 100", label: "Global Rankings" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-white/3 border border-white/8 text-center"
                  >
                    <p className="text-2xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Work History</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">
              Professional{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto"
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 shadow-xl hover:border-indigo-500/30 transition-all duration-300"
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${exp.color} opacity-60`} />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className={`text-sm font-semibold mt-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                      {exp.period}
                    </span>
                    <p className="text-slate-500 text-xs mt-1.5">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              A selection of AI/ML projects spanning agentic systems, NLP, computer vision, and data analytics.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={scaleIn}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative flex flex-col rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 overflow-hidden shadow-xl hover:border-indigo-500/30 hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent" />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                    <ProjectIcon name={project.icon} className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Expertise</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">
              Technical{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              A comprehensive toolkit spanning the full AI/ML stack — from research to production deployment.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.category}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <SkillIcon name={cat.icon} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-3">{cat.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/8 text-slate-400 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section id="achievements" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-amber-600/6 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Recognition</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">
              Achievements &{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Awards
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {achievements.map((ach) => (
              <motion.div
                key={`${ach.title}-${ach.org}`}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${ach.color} opacity-60`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ach.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <AchievementIcon name={ach.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg">{ach.title}</h3>
                <p className={`text-sm font-semibold mt-1 bg-gradient-to-r ${ach.color} bg-clip-text text-transparent`}>
                  {ach.org}
                </p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">{ach.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h2 className="mt-2 text-4xl font-extrabold text-white">
              Let's{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Work Together
              </span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Whether you have a project in mind, an opportunity to discuss, or just want to connect — I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
          >
            {/* Contact Info */}
            <motion.div variants={slideInLeft} className="space-y-6">
              <h3 className="text-white font-bold text-xl">Contact Information</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently open to full-time roles, freelance projects, and research collaborations in AI/ML engineering.
                Feel free to reach out through any of the channels below.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: socialLinks.email, href: `mailto:${socialLinks.email}` },
                  { icon: Phone, label: "Phone", value: socialLinks.phone, href: `tel:${socialLinks.phone}` },
                  { icon: Github, label: "GitHub", value: "github.com/asadishfaq", href: socialLinks.github },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/asadishfaq", href: socialLinks.linkedin },
                ].map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-indigo-500/30 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20">
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wider">{contact.label}</p>
                      <p className="text-white text-sm font-medium group-hover:text-indigo-300 transition-colors duration-200">
                        {contact.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 ml-auto transition-colors duration-200" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={slideInRight}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 shadow-xl"
            >
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}