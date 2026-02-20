import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Zap, Shield, Sparkles, Check, Terminal, Cpu, Globe, Rocket, Layout, MessageSquare, Settings, Star, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CodeDemo = () => {
    const [code, setCode] = useState('');
    const fullCode = `// AI-Powered Code Generation
function calculateFibonacci(n) {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// Optimized with Memoization
const memo = {};
function fib(n) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fib(n - 1) + fib(n - 2);
}`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setCode(fullCode.substring(0, i));
            i++;
            if (i > fullCode.length) clearInterval(interval);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto bg-dark-lighter rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="ml-2 text-xs text-gray-400 font-mono">script.js</div>
            </div>
            <div className="p-4 overflow-hidden">
                <pre className="font-mono text-sm text-gray-300">
                    <code dangerouslySetInnerHTML={{
                        __html: code.replace(/function/g, '<span class="text-secondary">function</span>')
                            .replace(/return/g, '<span class="text-accent">return</span>')
                            .replace(/const/g, '<span class="text-primary">const</span>')
                            .replace(/\/\/.*/g, '<span class="text-gray-500">$&</span>')
                    }} />
                    <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse" />
                </pre>
            </div>
        </div>
    );
};

const Landing = () => {
    return (
        <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white relative overflow-hidden font-sans">
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000 mix-blend-screen" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px]" />
            </div>

            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="py-12 lg:py-16 relative">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="text-left relative z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-primary mb-4 hover:bg-white/10 transition-colors cursor-pointer group"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Now with Gemini 1.5 Pro Support
                                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4"
                            >
                                Build Software <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient-x">
                                    at Warp Speed
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-400 mb-6 max-w-lg leading-relaxed"
                            >
                                Describe your dream app, and our AI builds it instantly. From concept to code to deployment—streamlined for modern manufacturing.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-center gap-3"
                            >
                                <Link to="/register" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
                                    Start Building Free <Rocket size={18} />
                                </Link>
                                <Link to="/login" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm group">
                                    View Demo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 flex items-center gap-6 text-gray-500 text-xs font-medium"
                            >
                                <div className="flex items-center gap-2">
                                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                                    <span>loved by 10k+ devs</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield size={14} className="text-green-500" />
                                    <span>Enterprise Security</span>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative lg:h-[400px] flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/20 rounded-[2rem] blur-3xl opacity-30 animate-pulse-slow" />
                            <div className="relative w-full max-w-md transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 scale-90Origin-center">
                                <CodeDemo />

                                {/* Floating Badges */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-8 -right-8 bg-gray-800/90 backdrop-blur-xl p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 scale-90"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                        <Check size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400">Status</p>
                                        <p className="font-bold text-sm text-white">Bug Fixed</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 bg-gray-800/90 backdrop-blur-xl p-3 rounded-xl border border-white/10 shadow-xl flex items-center gap-3 scale-90"
                                >
                                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                        <Zap size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400">Speed</p>
                                        <p className="font-bold text-sm text-white">Optimized</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Trusted By */}
                <section className="py-6 border-y border-white/5">
                    <p className="text-center text-gray-600 text-xs font-semibold uppercase tracking-widest mb-4">Powering next-gen teams at</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-500 scale-90">
                        {/* Simple text placeholders for logos */}
                        <div className="text-lg font-bold flex items-center gap-2 text-white"><Globe size={20} /> OpenAI</div>
                        <div className="text-lg font-bold flex items-center gap-2 text-white"><Cpu size={20} /> Google Deepmind</div>
                        <div className="text-lg font-bold flex items-center gap-2 text-white"><Terminal size={20} /> Vercel</div>
                        <div className="text-lg font-bold flex items-center gap-2 text-white"><Layout size={20} /> Figma</div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">From Idea to App in Minutes</h2>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto">Three simple steps to bring your vision to reality.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent dashed-line" />

                        {[
                            {
                                icon: <MessageSquare size={24} />,
                                step: "01",
                                title: "Describe",
                                desc: "Tell Imagi what you want.",
                                color: "text-blue-400",
                                bg: "bg-blue-400/10"
                            },
                            {
                                icon: <Sparkles size={24} />,
                                step: "02",
                                title: "Create",
                                desc: "AI generates the code.",
                                color: "text-purple-400",
                                bg: "bg-purple-400/10"
                            },
                            {
                                icon: <Rocket size={24} />,
                                step: "03",
                                title: "Launch",
                                desc: "Deploy instantly.",
                                color: "text-green-400",
                                bg: "bg-green-400/10"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative z-10 text-center group"
                            >
                                <div className={`w-20 h-20 mx-auto rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 border border-white/5 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                    {item.icon}
                                </div>
                                <div className="inline-block px-2 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-gray-400 mb-3 border border-white/5">Step {item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed px-4">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Features BENTO GRID */}
                <section className="py-12">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for Modern Developers</h2>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto">Everything you need to ship faster.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {/* Large Card */}
                        <div className="md:col-span-2 p-8 rounded-[2rem] bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Rocket size={32} className="text-blue-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Project Generator</h3>
                            <p className="text-gray-400 text-base mb-6 max-w-sm">Generate full multi-file projects with a single prompt. Context-aware iterations.</p>
                            <div className="w-full h-32 bg-gray-950/50 rounded-xl border border-white/5 overflow-hidden relative">
                                <div className="absolute top-3 left-3 flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center font-mono text-gray-600 text-xs">
                                    &lt;ProjectPreview /&gt;
                                </div>
                            </div>
                        </div>

                        {/* Small Card */}
                        <div className="p-8 rounded-[2rem] bg-gray-900 border border-white/10 hover:border-purple-500/50 transition-all group">
                            <Code size={32} className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Smart Snippets</h3>
                            <p className="text-gray-400 text-sm">Generate isolated components instantly.</p>
                        </div>

                        {/* Small Card */}
                        <div className="p-8 rounded-[2rem] bg-gray-900 border border-white/10 hover:border-green-500/50 transition-all group">
                            <Zap size={32} className="text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-white mb-2">Instant Fixes</h3>
                            <p className="text-gray-400 text-sm">Paste error logs, get instant fixes.</p>
                        </div>

                        {/* Large Card */}
                        <div className="md:col-span-2 p-8 rounded-[2rem] bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Settings size={32} className="text-pink-400 mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">Code Correction</h3>
                            <p className="text-gray-400 text-base mb-6 max-w-sm">Refactor messy code, optimize performance, and ensure best practices automatically.</p>
                        </div>
                    </div>
                </section>

                {/* Pricing Preview */}
                <section className="py-12 border-t border-white/5">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple Pricing</h2>
                        <p className="text-lg text-gray-400">Start for free, scale as you grow.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {/* Free */}
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                            <h3 className="text-lg font-bold text-white mb-1">Free Tier</h3>
                            <div className="text-3xl font-bold text-white mb-4">$0<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                            <ul className="space-y-3 mb-6 text-gray-400 text-xs">
                                <li className="flex gap-2"><Check size={14} className="text-green-400" /> 1,000 AI Tokens</li>
                                <li className="flex gap-2"><Check size={14} className="text-green-400" /> Basic Generators</li>
                                <li className="flex gap-2"><Check size={14} className="text-green-400" /> Community Support</li>
                            </ul>
                            <Link to="/register" className="block w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm text-center transition-colors">Start Free</Link>
                        </div>

                        {/* Pro */}
                        <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-600/20 to-purple-600/20 border border-purple-500/50 relative transform md:-translate-y-2">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-0.5 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Popular</div>
                            <h3 className="text-lg font-bold text-white mb-1">Pro</h3>
                            <div className="text-3xl font-bold text-white mb-4">$29<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                            <ul className="space-y-3 mb-6 text-gray-300 text-xs">
                                <li className="flex gap-2"><Check size={14} className="text-purple-400" /> 50,000 AI Tokens</li>
                                <li className="flex gap-2"><Check size={14} className="text-purple-400" /> Advanced Code Fixer</li>
                                <li className="flex gap-2"><Check size={14} className="text-purple-400" /> Priority Messaging</li>
                            </ul>
                            <Link to="/register" className="block w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-sm text-center hover:opacity-90 transition-opacity box-shadow-glow">Get Pro</Link>
                        </div>

                        {/* Enterprise */}
                        <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                            <h3 className="text-lg font-bold text-white mb-1">Enterprise</h3>
                            <div className="text-3xl font-bold text-white mb-4">$99<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                            <ul className="space-y-3 mb-6 text-gray-400 text-xs">
                                <li className="flex gap-2"><Check size={14} className="text-green-400" /> Unlimited Tokens</li>
                                <li className="flex gap={14}"><Check size={14} className="text-green-400" /> Custom AI Models</li>
                                <li className="flex gap={14}"><Check size={14} className="text-green-400" /> Dedicated Support</li>
                            </ul>
                            <Link to="/register" className="block w-full py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-sm text-center transition-colors">Contact Sales</Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="py-12">
                    <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-10 md:p-16 text-center">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to build?</h2>
                            <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">Join thousands of developers turning ideas into reality with Imagi today.</p>
                            <Link to="/register" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 active:scale-95">
                                Get Started Now
                            </Link>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Landing;
