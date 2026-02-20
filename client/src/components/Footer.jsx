import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black/50 border-t border-white/5 pt-20 pb-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                                <Sparkles size={18} className="text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Imagi</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Empowering developers with AI superpowers. Build, debug, and ship faster than ever before.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/features" className="hover:text-white cursor-pointer transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-white cursor-pointer transition-colors">Pricing</Link></li>
                            <li><Link to="/changelog" className="hover:text-white cursor-pointer transition-colors">Changelog</Link></li>
                            <li><Link to="/docs" className="hover:text-white cursor-pointer transition-colors">Docs</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-white cursor-pointer transition-colors">About</Link></li>
                            <li><Link to="/blog" className="hover:text-white cursor-pointer transition-colors">Blog</Link></li>
                            <li><Link to="/careers" className="hover:text-white cursor-pointer transition-colors">Careers</Link></li>
                            <li><Link to="/legal" className="hover:text-white cursor-pointer transition-colors">Legal</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
                            <li className="hover:text-white cursor-pointer transition-colors">GitHub</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Discord</li>
                            <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
                    <p>&copy; 2026 Imagi AI. All rights reserved.</p>
                    <p>Developed by Sahil</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
