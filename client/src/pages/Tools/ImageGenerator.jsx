import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../api/axios';
import { Loader2, Zap, Image as ImageIcon, Download, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageGenerator = () => {
    const { updateUserToken } = useAuth();
    const [prompt, setPrompt] = useState('');
    const [provider, setProvider] = useState('openai');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setImage('');
        try {
            const { data } = await api.post('/ai/generate-image', {
                prompt,
                provider
            });
            setImage(data.imageUrl);
            updateUserToken(data.tokensRemaining);
        } catch (error) {
            console.error(error);
            alert(`Error: ${error.response?.data?.message || 'Something went wrong'}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto flex flex-col gap-8 h-[calc(100vh-100px)]">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        Image Generator <Sparkles className="text-secondary animate-pulse" size={20} />
                    </h1>
                    <p className="text-gray-400">Turn your imagination into reality with AI.</p>
                </div>
                <select
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                    className="px-4 py-2 rounded-xl border border-white/10 bg-dark-lighter text-gray-200 text-sm font-medium focus:ring-2 focus:ring-primary/50 outline-none hover:bg-white/5 transition-colors"
                >
                    <option value="openai">DALL-E 2 (OpenAI)</option>
                    <option value="gemini">Gemini (Placeholder)</option>
                </select>
            </header>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-0">
                {/* Controls */}
                <div className="lg:col-span-1 bg-dark-lighter p-6 rounded-2xl shadow-xl border border-white/5 flex flex-col h-full relative overflow-hidden">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Prompt</label>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="w-full h-40 p-4 rounded-xl border border-white/10 bg-black/20 text-gray-200 resize-none outline-none focus:ring-2 focus:ring-primary/30 mb-6 placeholder-gray-600 font-medium"
                        placeholder="A cyberpunk city with flying cars at sunset..."
                    />

                    <button
                        onClick={handleGenerate}
                        disabled={loading || !prompt}
                        className="w-full bg-primary hover:bg-primary/90 text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:shadow-none hover:-translate-y-0.5"
                    >
                        {loading ? <Loader2 className="animate-spin" size={20} /> : <><Zap size={20} /> Generate Image</>}
                    </button>

                    <div className="mt-auto pt-6 border-t border-white/5 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                            <Zap size={12} /> Cost: 20 tokens
                        </div>
                    </div>
                </div>

                {/* Preview */}
                <div className="lg:col-span-2 bg-black/40 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner border border-white/5">
                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    {loading ? (
                        <div className="flex flex-col items-center gap-4 relative z-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-secondary/50 blur-xl rounded-full animate-pulse" />
                                <Loader2 className="animate-spin text-white relative z-10" size={48} />
                            </div>
                            <p className="text-gray-400 font-medium animate-pulse">Dreaming up pixels...</p>
                        </div>
                    ) : image ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative group w-full h-full p-4 flex items-center justify-center"
                        >
                            <img src={image} alt="Generated" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm rounded-xl">
                                <a href={image} download target="_blank" rel="noreferrer" className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">
                                    <Download size={20} /> Download Image
                                </a>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="text-center text-white/10 relative z-10">
                            <ImageIcon size={64} className="mx-auto mb-4 opacity-50" />
                            <p className="text-xl font-medium text-gray-500">Image Preview</p>
                            <p className="text-sm text-gray-600 mt-2">Generated images will appear here</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageGenerator;
