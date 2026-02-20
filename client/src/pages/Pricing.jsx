import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Pricing</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. No hidden fees.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Free Tier */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Free Starter</h3>
                        <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                        <p className="text-gray-400 mb-8 text-sm">Perfect for hobbyists and trying out Imagi.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> 1,000 AI Tokens / month</li>
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> Basic Component Generator</li>
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> Community Support</li>
                            <li className="flex gap-3 text-sm text-gray-500"><X size={18} /> Project Generator</li>
                            <li className="flex gap-3 text-sm text-gray-500"><X size={18} /> Advanced Code Fixer</li>
                        </ul>

                        <Link to="/register" className="block w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-center transition-colors">
                            Start for Free
                        </Link>
                    </div>

                    {/* Pro Tier */}
                    <div className="p-8 rounded-[2rem] bg-gradient-to-b from-blue-600/10 to-purple-600/10 border border-purple-500/50 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-purple-900/20">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Most Popular</div>
                        <h3 className="text-xl font-bold mb-2 text-white">Pro Developer</h3>
                        <div className="text-4xl font-bold mb-6 text-white">$29<span className="text-lg text-gray-400 font-normal">/mo</span></div>
                        <p className="text-blue-200 mb-8 text-sm">For serious developers building real apps.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-white"><Check size={18} className="text-purple-400" /> 50,000 AI Tokens / month</li>
                            <li className="flex gap-3 text-sm text-white"><Check size={18} className="text-purple-400" /> Unlimited Component Generation</li>
                            <li className="flex gap-3 text-sm text-white"><Check size={18} className="text-purple-400" /> Full Project Generator Access</li>
                            <li className="flex gap-3 text-sm text-white"><Check size={18} className="text-purple-400" /> Advanced Code Fixer & Refactoring</li>
                            <li className="flex gap-3 text-sm text-white"><Check size={18} className="text-purple-400" /> Priority Email Support</li>
                        </ul>

                        <Link to="/register" className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white rounded-xl font-bold text-center transition-opacity shadow-lg shadow-purple-500/25">
                            Get Pro
                        </Link>
                    </div>

                    {/* Enterprise Tier */}
                    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col">
                        <h3 className="text-xl font-bold mb-2">Team & Enterprise</h3>
                        <div className="text-4xl font-bold mb-6">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
                        <p className="text-gray-400 mb-8 text-sm">For teams requiring power and security.</p>

                        <ul className="space-y-4 mb-8 flex-1">
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> Unlimited AI Tokens</li>
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> SSO & Team Management</li>
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> Custom Model Fine-tuning</li>
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> Dedicated Account Manager</li>
                            <li className="flex gap-3 text-sm text-gray-300"><Check size={18} className="text-green-400" /> SLA Guarantees</li>
                        </ul>

                        <Link to="/register" className="block w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-center transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-32 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What counts as an AI Token?", a: "An AI token roughly corresponds to 4 characters of code or text generated or processed by our models." },
                            { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period." },
                            { q: "Do you offer student discounts?", a: "Yes! Students with a valid .edu email can get 50% off the Pro plan. Contact support to apply." },
                            { q: "Is my code private?", a: "Absolutely. We do not use your private code snippets to train our public models without your explicit permission. Enterprise plans offer addition data residency options." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
