import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
    LayoutDashboard,
    Code,
    Wrench,
    CheckCircle,
    Image as ImageIcon,
    LogOut,
    Menu,
    X,
    User,
    Sparkles
} from 'lucide-react';

const Layout = ({ children }) => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
        { name: 'Project Generator', path: '/generate', icon: <Sparkles size={20} /> },
        { name: 'Snippet Generator', path: '/tools/code-generator', icon: <Code size={20} /> },
        { name: 'Code Fixer', path: '/tools/code-fixer', icon: <Wrench size={20} /> },
        { name: 'Code Corrector', path: '/tools/code-corrector', icon: <CheckCircle size={20} /> },
        { name: 'Image Generator', path: '/tools/image-generator', icon: <ImageIcon size={20} /> },
    ];

    // Zen Mode for Project Generator (No Sidebar, Full Screen)
    if (location.pathname === '/generate') {
        return children;
    }

    return (
        <div className="min-h-screen bg-dark flex text-gray-100">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-lighter border-r border-white/5 shadow-xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 h-screen flex flex-col`}>
                <div className="p-6 border-b border-white/5 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                            <Sparkles size={18} className="text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">Imagi</span>
                    </Link>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/25 font-medium' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/5 bg-black/20">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-600 flex items-center justify-center text-white border border-white/10">
                            <User size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white truncate">{user?.name}</p>
                            <p className="text-xs text-secondary truncate">{user?.tokensRemaining} tokens</p>
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-colors"
                    >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>
                </div>

                <div className="p-4 text-center text-xs text-gray-600 border-t border-white/5">
                    Developed by Sahil
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden bg-dark">
                {/* Mobile Header */}
                <header className="md:hidden bg-dark-lighter border-b border-white/5 p-4 flex justify-between items-center z-40">
                    <Link to="/" className="text-xl font-bold text-white">Imagi</Link>
                    <button onClick={() => setIsMobileMenuOpen(true)} className="text-gray-400">
                        <Menu size={24} />
                    </button>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
