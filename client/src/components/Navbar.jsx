import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-dark/50">
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                        <Sparkles size={18} className="text-white" />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Imagi
                    </span>
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <Link to="/features" className="text-gray-400 hover:text-white font-medium transition-colors text-sm">Features</Link>
                <Link to="/pricing" className="text-gray-400 hover:text-white font-medium transition-colors text-sm">Pricing</Link>
                <Link to="/docs" className="text-gray-400 hover:text-white font-medium transition-colors text-sm">Docs</Link>
                <Link to="/blog" className="text-gray-400 hover:text-white font-medium transition-colors text-sm">Blog</Link>
            </div>
            <div className="flex items-center gap-6">
                <Link to="/login" className="text-gray-300 hover:text-white font-medium transition-colors text-sm">Log In</Link>
                <Link to="/register" className="bg-white text-dark px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg shadow-white/10 hover:shadow-white/20 text-sm transform hover:-translate-y-0.5">
                    Get Started
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
