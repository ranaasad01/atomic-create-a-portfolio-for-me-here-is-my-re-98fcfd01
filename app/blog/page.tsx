"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Clock, Tag, ArrowRight, Sparkles, Search, Brain, Code2, Layers, FlaskConical } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const categories = ["All", "Generative AI", "Machine Learning", "NLP", "Computer Vision", "Tutorials", "Research"];

const posts = [
  {
    id: 1,
    title: "Building a Full-Stack AI Agent with LangGraph and CopilotKit",
    excerpt:
      "A deep dive into architecting an end-to-end AI agent application using LangGraph for stateful agent workflows, FastAPI for the backend, and CopilotKit CoAgents for seamless UI-Agent interaction in Next.js.",
    category: "Generative AI",
    tags: ["LangGraph", "CopilotKit", "FastAPI", "Next.js"],
    readTime: "12 min read",
    date: "June 2025",
    icon: Brain,
    color: "from-indigo-500 to-purple-600",
    featured: true,
  },
  {
    id: 2,
    title: "Fine-Tuning BERT for AI Text Detection: A Practical Guide",
    excerpt:
      "How I fine-tuned a BERT model using Hugging Face Transformers to classify text as AI-generated or human-written — covering dataset preparation, training strategies, and evaluation metrics.",
    category: "NLP",
    tags: ["BERT", "Hugging Face", "Transformers", "Python"],
    readTime: "10 min read",
    date: "May 2025",
    icon: FlaskConical,
    color: "from-purple-500 to-pink-600",
    featured: true,
  },
  {
    id: 3,
    title: "RAG Systems Explained: Building a Research PDF Bot with LangChain & Gemini",
    excerpt:
      "Step-by-step walkthrough of building a Retrieval-Augmented Generation chatbot that lets users upload research PDFs and ask precise questions, powered by Google Gemini and ChromaDB.",
    category: "Generative AI",
    tags: ["RAG", "LangChain", "Google Gemini", "Chroma"],
    readTime: "14 min read",
    date: "April 2025",
    icon: BookOpen,
    color: "from-cyan-500 to-blue-600",
    featured: false,
  },
  {
    id: 4,
    title: "Traffic Sign Recognition with HOG Features and SVM",
    excerpt:
      "An exploration of classical computer vision techniques — using Histogram of Oriented Gradients for feature extraction and Support Vector Machines for robust traffic sign classification.",
    category: "Computer Vision",
    tags: ["OpenCV", "HOG", "SVM", "Scikit-learn"],
    readTime: "8 min read",
    date: "March 2025",
    icon: Layers,
    color: "from-emerald-500 to-teal-600",
    featured: false,
  },
  {
    id: 5,
    title: "Getting Started with LangChain: Chains, Agents, and Memory",
    excerpt:
      "A beginner-friendly tutorial covering the core abstractions in LangChain — how to build chains, create tool-using agents, and add conversational memory to your LLM applications.",
    category: "Tutorials",
    tags: ["LangChain", "LLMs", "Python", "Agents"],
    readTime: "11 min read",
    date: "February 2025",
    icon: Code2,
    color: "from-orange-500 to-amber-600",
    featured: false,
  },
  {
    id: 6,
    title: "Understanding Transformer Architecture: Attention Is All You Need",
    excerpt:
      "A visual and intuitive breakdown of the Transformer architecture — self-attention mechanisms, positional encoding, multi-head attention, and why this design revolutionized NLP and beyond.",
    category: "Research",
    tags: ["Transformers", "Attention", "NLP", "Deep Learning"],
    readTime: "15 min read",
    date: "January 2025",
    icon: Brain,
    color: "from-rose-500 to-pink-600",
    featured: false,
  },
  {
    id: 7,
    title: "MLflow for ML Experiment Tracking: A Practical Walkthrough",
    excerpt:
      "Learn how to integrate MLflow into your machine learning workflow to track experiments, log metrics, compare model runs, and manage model versions — all from a clean UI.",
    category: "Machine Learning",
    tags: ["MLflow", "Python", "Experiment Tracking", "MLOps"],
    readTime: "9 min read",
    date: "December 2024",
    icon: FlaskConical,
    color: "from-violet-500 to-indigo-600",
    featured: false,
  },
  {
    id: 8,
    title: "Deploying ML Models with Docker and AWS SageMaker",
    excerpt:
      "A production-focused guide to containerizing machine learning models with Docker and deploying them at scale using AWS SageMaker endpoints — with real configuration examples.",
    category: "Tutorials",
    tags: ["Docker", "AWS SageMaker", "MLOps", "Deployment"],
    readTime: "13 min read",
    date: "November 2024",
    icon: Layers,
    color: "from-sky-500 to-cyan-600",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = filtered.filter((p) => p.featured);
  const regular = filtered.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-[#0f172a] pt-24 pb-20">
      {/* Background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── HERO ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            AI/ML Articles & Tutorials
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent leading-tight"
          >
            The AI/ML Blog
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Deep dives, tutorials, and research notes on Generative AI, LLMs, machine learning,
            computer vision, and building intelligent systems — written by Muhammad Asad Ishfaq.
          </motion.p>

          {/* Search */}
          <motion.div variants={fadeInUp} className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles, tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
            />
          </motion.div>
        </motion.div>

        {/* ── CATEGORY FILTERS ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={scaleIn}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* ── FEATURED POSTS ── */}
        {featured.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Featured
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post) => {
                const Icon = post.icon;
                return (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer overflow-hidden"
                  >
                    {/* Gradient accent */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${post.color} opacity-80`} />

                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${post.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-slate-500 text-xs">{post.date}</span>
                        </div>
                        <h3 className="text-white font-bold text-lg leading-snug group-hover:text-indigo-300 transition-colors duration-200">
                          {post.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs"
                          >
                            <Tag className="w-2.5 h-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-slate-500 text-xs flex-shrink-0">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── ALL POSTS ── */}
        {regular.length > 0 && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {featured.length > 0 && (
              <motion.h2 variants={fadeInUp} className="text-xl font-bold text-white mb-6">
                Portfolio
              </motion.h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regular.map((post) => {
                const Icon = post.icon;
                return (
                  <motion.article
                    key={post.id}
                    variants={fadeInUp}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-indigo-500/30 transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${post.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-indigo-300 transition-colors duration-200 flex-1">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 text-xs"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-slate-500 text-xs pt-3 border-t border-white/5">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center py-20"
          >
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg font-medium">No articles found</p>
            <p className="text-slate-500 text-sm mt-1">Try a different category or search term.</p>
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-6 px-5 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium hover:bg-indigo-500/20 transition-all duration-200"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* ── NEWSLETTER CTA ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-20 text-center bg-white/5 border border-white/10 rounded-2xl p-10"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Want to collaborate or discuss AI?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            I'm always open to discussing AI research, projects, and opportunities. Reach out and let's build something intelligent together.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}