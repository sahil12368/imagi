import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import {
    Code,
    Wrench,
    CheckCircle,
    Image as ImageIcon,
    Zap,
    Clock,
    Sparkles,
    X,
    Rocket
} from 'lucide-react';
import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const Dashboard = () => {
    const { user } = useAuth();

    const tools = [
        {
            name: 'Project Generator',
            description: 'Build full React apps instantly with AI.',
            icon: <Rocket className="text-white" size={24} />,
            color: 'bg-gradient-to-br from-blue-600 to-purple-600',
            path: '/generate'
        },
        {
            name: 'Code Generator',
            description: 'Turn natural language into production-ready code.',
            icon: <Code className="text-white" size={24} />,
            color: 'bg-blue-600',
            path: '/tools/code-generator'
        },
        {
            name: 'Code Fixer',
            description: 'Debug and fix errors instantly.',
            icon: <Wrench className="text-white" size={24} />,
            color: 'bg-green-600',
            path: '/tools/code-fixer'
        },
        {
            name: 'Code Corrector',
            description: 'Optimize and clean your code.',
            icon: <CheckCircle className="text-white" size={24} />,
            color: 'bg-purple-600',
            path: '/tools/code-corrector'
        },
        {
            name: 'Image Generator',
            description: 'Create stunning visuals from text.',
            icon: <ImageIcon className="text-white" size={24} />,
            color: 'bg-pink-600',
            path: '/tools/image-generator'
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const [showPlanModal, setShowPlanModal] = useState(false);
    const plansRef = useRef(null);

    const plans = [
        {
            name: 'Free Tier',
            price: '$0',
            features: ['1,000 AI Tokens', 'Basic Code Generation', 'Community Support'],
            color: 'bg-gray-700',
            current: true
        },
        {
            name: 'Pro',
            price: '$29',
            features: ['50,000 AI Tokens', 'Advanced Code Fixer', 'Priority Support', 'Private Projects'],
            color: 'bg-gradient-to-br from-blue-600 to-purple-600',
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$99',
            features: ['Unlimited Tokens', 'Custom AI Models', 'Dedicated Support', 'SSO & Security'],
            color: 'bg-gray-700'
        }
    ];

    return (
        <div className="max-w-7xl mx-auto relative">
            {/* Plan Details Modal */}
            <AnimatePresence>
                {showPlanModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setShowPlanModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowPlanModal(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Current Plan Usage</h3>
                                    <p className="text-gray-400">Free Tier</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-300">AI Tokens</span>
                                        <span className="text-white font-mono">{user?.tokensRemaining} / 1,000</span>
                                    </div>
                                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-green-500 rounded-full transition-all duration-500"
                                            style={{ width: `${Math.min((user?.tokensRemaining / 1000) * 100, 100)}%` }}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">Resets on March 1, 2026</p>
                                </div>

                                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                    <h4 className="font-semibold text-white mb-2">Included Features</h4>
                                    <ul className="space-y-2">
                                        {plans[0].features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <CheckCircle size={14} className="text-green-400" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => {
                                        setShowPlanModal(false);
                                        plansRef.current?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Upgrade Plan
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                        Dashboard <Sparkles className="text-primary animate-pulse" size={24} />
                    </h1>
                    <p className="text-gray-400 mt-2">Welcome back, <span className="text-gray-200 font-semibold">{user?.name}</span>. Ready to build something amazing?</p>
                </div>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-dark-lighter border border-white/5 flex items-center gap-4 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/20">
                        <Zap size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Available Tokens</p>
                        <h3 className="text-3xl font-bold text-white">{user?.tokensRemaining}</h3>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    onClick={() => setShowPlanModal(true)}
                    className="p-6 rounded-2xl bg-dark-lighter border border-white/5 flex items-center gap-4 relative overflow-hidden group cursor-pointer hover:border-green-500/50 transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/20">
                        <Clock size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Current Plan</p>
                        <h3 className="text-2xl font-bold text-white">Free Tier</h3>
                    </div>
                    <div className="absolute top-4 right-4">
                        <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/20">active</div>
                    </div>
                </motion.div>
            </div>

            {/* Tools Grid */}
            <h2 className="text-xl font-bold text-white mb-6 pl-1 border-l-4 border-primary">AI Tools</h2>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
                {tools.map((tool) => (
                    <motion.div key={tool.name} variants={item}>
                        <Link
                            to={tool.path}
                            className="group block p-6 rounded-2xl bg-dark-lighter border border-white/5 hover:border-primary/50 hover:bg-dark-lighter/80 transition-all hover:-translate-y-1 h-full relative overflow-hidden"
                        >
                            <div className={`w-12 h-12 rounded-xl ${tool.color} flex items-center justify-center mb-6 shadow-lg shadow-${tool.color.split('-')[1]}/30 ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                {tool.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{tool.description}</p>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Available Plans Section */}
            <div className="mb-20" ref={plansRef}>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-white mb-3">Upgrade your Creativity</h2>
                    <p className="text-gray-400">Unlock more power, speed, and features.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, idx) => (
                        <div key={idx} className={`relative rounded-3xl p-8 border ${plan.popular ? 'border-purple-500 bg-gray-800/80' : 'border-gray-800 bg-dark-lighter'}`}>
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-lg font-semibold text-gray-300 mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-bold text-white">{plan.price}</span>
                                <span className="text-gray-500">/month</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-400">
                                        <CheckCircle size={16} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-purple-400' : 'text-gray-500'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.current
                                ? 'bg-gray-700 text-gray-400 cursor-default'
                                : plan.popular
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 shadow-lg shadow-purple-900/20'
                                    : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'
                                }`}>
                                {plan.current ? 'Current Plan' : 'Upgrade'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
