import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Rocket, Code, Zap, Settings, Shield, Globe, Cpu, Terminal, Layout } from 'lucide-react';

const Features = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Supercharged <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Capabilities</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the tools that make Imagi the fastest way to build software.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                            <Rocket size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Project Generator</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Generate full-stack React applications with a single prompt. Imagi handles file structure, dependencies, and initial boilerplate.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                            <Code size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Smart Snippets</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Need a specific component? Describe it, and get production-ready code instantly—styled and functional.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-green-500/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Instant Fixes</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Paste your error logs or buggy code. Imagi analyzes the issue and provides an explained solution in seconds.
                        </p>
                    </div>

                    {/* Feature 4 */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
                            <Settings size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Code Refactoring</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Automatically clean up messy code, improve performance, and enforce consistent coding standards across your project.
                        </p>
                    </div>

                    {/* Feature 5 */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
                            <Shield size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Security First</h3>
                        <p className="text-gray-400 leading-relaxed">
                            All generated code is screened for common vulnerabilities, ensuring your applications are safe by default.
                        </p>
                    </div>

                    {/* Feature 6 */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all group">
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                            <Globe size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Multi-Language</h3>
                        <p className="text-gray-400 leading-relaxed">
                            While we specialize in React & Node, Imagi understands Python, Java, Go, and more for broad support.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Features;
