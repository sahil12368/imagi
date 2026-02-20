import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Book, FileText, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const Docs = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white flex flex-col">
            <Navbar />

            <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 flex gap-12">
                {/* Sidebar */}
                <aside className="w-64 hidden md:block shrink-0">
                    <div className="sticky top-32">
                        <div className="relative mb-8">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                                type="text"
                                placeholder="Search docs..."
                                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>

                        <nav className="space-y-8">
                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Getting Started</h3>
                                <ul className="space-y-3 text-sm">
                                    <li><Link to="#" className="text-white font-medium border-l-2 border-primary pl-4 -ml-[18px]">Introduction</Link></li>
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Quick Start</Link></li>
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Installation</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Core Concepts</h3>
                                <ul className="space-y-3 text-sm">
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Project Structure</Link></li>
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">AI Configuration</Link></li>
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Deployment</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">API Reference</h3>
                                <ul className="space-y-3 text-sm">
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Authentication</Link></li>
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Endpoints</Link></li>
                                    <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Errors</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="flex-1 min-w-0">
                    <div className="prose prose-invert max-w-none">
                        <h1>Introduction to Imagi</h1>
                        <p className="lead text-xl text-gray-300">
                            Imagi is an AI-powered development platform that helps you build, debug, and deploy full-stack applications in minutes.
                        </p>

                        <hr className="border-white/10 my-8" />

                        <h2>What is Imagi?</h2>
                        <p>
                            Imagi combines state-of-the-art Large Language Models (LLMs) with a robust build system to automate the tedious parts of software engineering. From generating boilerplate to refactoring legacy code, Imagi acts as your intelligent pair programmer.
                        </p>

                        <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4">
                                <Rocket className="text-blue-400 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-white mb-1">Project Generator</h3>
                                    <p className="text-sm text-gray-400">Create entire apps from a single prompt.</p>
                                </div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex gap-4">
                                <Zap className="text-yellow-400 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-white mb-1">Instant Fixes</h3>
                                    <p className="text-sm text-gray-400">Debug errors automatically.</p>
                                </div>
                            </div>
                        </div>

                        <h2>Key Features</h2>
                        <ul>
                            <li><strong>Context Awareness</strong>: Imagi understands your entire project structure, not just individual files.</li>
                            <li><strong>Security Scanning</strong>: All generated code is checked for common vulnerabilities.</li>
                            <li><strong>Multi-Language Support</strong>: Works with JavaScript, Python, Go, Rust, and more.</li>
                        </ul>

                        <h2>Next Steps</h2>
                        <p>
                            Ready to dive in? Check out the <Link to="#" className="text-primary hover:text-primary-light">Quick Start Guide</Link> to build your first application.
                        </p>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default Docs;
