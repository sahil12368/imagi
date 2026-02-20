

import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import PreviewEngine from '../components/PreviewEngine';
import { Loader2, Code, Laptop, Sparkles, CheckCircle, ArrowUp, User, Bot, Send, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectGenerator = () => {
    const navigate = useNavigate();
    const [prompt, setPrompt] = useState('');
    const [files, setFiles] = useState({});
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]); // { role: 'user' | 'assistant', content: string }
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        const userMessage = { role: 'user', content: prompt };
        setMessages(prev => [...prev, userMessage]);
        setPrompt('');
        setLoading(true);

        try {
            const token = localStorage.getItem('token');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };

            // Send current files for context if they exist
            const payload = {
                prompt: userMessage.content,
                currentFiles: Object.keys(files).length > 0 ? files : undefined
            };

            const res = await api.post('/ai/generate-project', payload, config);

            const generatedFiles = res.data.project.files;

            // Merge new files with existing ones
            // The backend now returns ONLY modified files, so we merge them.
            setFiles(prev => ({ ...prev, ...generatedFiles }));

            const aiMessage = {
                role: 'assistant',
                content: Object.keys(files).length > 0 ? 'I updated the project based on your request!' : 'I created a new project for you! Check out the preview.'
            };
            setMessages(prev => [...prev, aiMessage]);

        } catch (err) {
            console.error(err);
            console.error(err);
            const errorMessage = err.response?.data?.message || err.message || 'An unknown error occurred.';
            const errorDetails = err.response?.data?.details || '';
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Error: ${errorMessage} ${errorDetails ? `\nDetails: ${errorDetails}` : ''}`
            }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen bg-gray-900 text-white overflow-hidden font-sans">
            {/* Left Panel - Chat Interface */}
            <div className="w-1/3 flex flex-col border-r border-gray-800 bg-gray-900 relative z-10">
                {/* Header */}
                <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-gray-900/95 backdrop-blur z-20 shadow-sm">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="p-2 hover:bg-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors"
                            title="Back to Dashboard"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-blue-400" />
                            Imagi Project Chat
                        </h2>
                    </div>
                </div>

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar scroll-smooth pb-32">
                    {messages.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-6 opacity-60 mt-20">
                            <div className="w-24 h-24 bg-gray-800 rounded-3xl flex items-center justify-center shadow-xl border border-gray-700/50 rotate-6 transition-transform hover:rotate-0 duration-500">
                                <Sparkles className="w-10 h-10 text-purple-400" />
                            </div>
                            <div className="text-center space-y-2 max-w-xs">
                                <h3 className="text-lg font-medium text-gray-300">Start Building</h3>
                                <p className="text-sm">Describe your dream app, or ask for changes like "Make the background dark".</p>
                            </div>
                        </div>
                    ) : (
                        <AnimatePresence>
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    {msg.role === 'assistant' && (
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mt-1 shrink-0">
                                            <Bot size={16} className="text-white" />
                                        </div>
                                    )}

                                    <div className={`
                                        max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-md break-words overflow-hidden
                                        ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-tl-none'}
                                    `}>
                                        {msg.content}
                                        {msg.role === 'assistant' && idx === messages.length - 1 && (
                                            <div className="mt-3 pt-3 border-t border-gray-700/50 flex flex-col gap-2">
                                                <div className="flex items-center gap-2 text-green-400 text-xs font-semibold">
                                                    <CheckCircle size={12} />
                                                    <span>Changes Applied</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {msg.role === 'user' && (
                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center shadow-lg mt-1 shrink-0">
                                            <User size={16} className="text-gray-300" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    )}
                    {loading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex gap-3 justify-start"
                        >
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mt-1 shrink-0 animate-pulse">
                                <Bot size={16} className="text-white" />
                            </div>
                            <div className="bg-gray-800 border border-gray-700 p-4 rounded-2xl rounded-tl-none flex items-center gap-3 shadow-md">
                                <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                                <span className="text-sm text-gray-400 animate-pulse">Thinking & Coding...</span>
                            </div>
                        </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur absolute bottom-0 w-full z-30">
                    <div className="relative bg-gray-800 border border-gray-700 rounded-2xl shadow-xl focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500/50 transition-all group">
                        <textarea
                            className="w-full bg-transparent border-none p-4 pr-12 text-gray-200 focus:ring-0 resize-none text-sm min-h-[60px] max-h-[150px] placeholder-gray-500 scrollbar-hide"
                            placeholder="Type a message to change the code..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleGenerate();
                                }
                            }}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !prompt.trim()}
                            className="absolute right-2 bottom-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all disabled:opacity-50 disabled:bg-gray-700 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/20 active:scale-95"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Panel - Preview Engine */}
            <div className="w-2/3 bg-black relative border-l border-gray-800 shadow-2xl">
                {Object.keys(files).length > 0 ? (
                    <PreviewEngine
                        files={files}
                        onCodeUpdate={(newFiles) => setFiles(prev => ({ ...prev, ...newFiles }))}
                    />
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-gray-600 space-y-6 bg-gray-900/50 backdrop-blur-sm">
                        <div className="w-24 h-24 bg-gray-800/80 rounded-3xl flex items-center justify-center shadow-2xl border border-gray-700/50 rotate-3 animate-pulse-slow">
                            <Laptop className="w-12 h-12 opacity-40 text-blue-400" />
                        </div>
                        <div className="text-center">
                            <p className="font-medium text-lg text-gray-400">Preview Area</p>
                            <p className="text-sm text-gray-600">Your generated website will appear here live.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectGenerator;
