import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useAuth } from '../../context/AuthContext';
import api from '../../api/axios';
import { Loader2, Play, Copy, Check, Sparkles } from 'lucide-react';

const CodeTool = ({ title, description, endpoint, inputType, placeholders }) => {
    const { updateUserToken } = useAuth();
    const [input, setInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [provider, setProvider] = useState('openai');
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setOutput('');
        try {
            const payload = {
                provider,
                language,
                [inputType === 'fixer' ? 'code' : 'prompt']: input,
            };

            if (inputType === 'fixer') {
                payload.error = secondInput;
            } else if (inputType === 'corrector') {
                payload.code = input;
            }

            const { data } = await api.post(`/ai/${endpoint}`, payload);
            setOutput(data.result);
            updateUserToken(data.tokensRemaining);
        } catch (error) {
            console.error(error);
            setOutput(`Error: ${error.response?.data?.message || 'Something went wrong'}`);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col gap-6">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                        {title} <Sparkles className="text-primary animate-pulse" size={20} />
                    </h1>
                    <p className="text-gray-400">{description}</p>
                </div>
                <div className="flex items-center gap-3">
                    <select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-dark-lighter text-gray-200 text-sm font-medium focus:ring-2 focus:ring-primary/50 outline-none hover:bg-white/5 transition-colors"
                    >
                        <option value="openai">ChatGPT (OpenAI)</option>
                        <option value="gemini">Gemini (Google)</option>
                    </select>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="px-4 py-2 rounded-xl border border-white/10 bg-dark-lighter text-gray-200 text-sm font-medium focus:ring-2 focus:ring-primary/50 outline-none hover:bg-white/5 transition-colors"
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                        <option value="typescript">TypeScript</option>
                    </select>
                </div>
            </header>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
                {/* Input Section */}
                <div className="flex flex-col gap-4 bg-dark-lighter border border-white/5 p-4 rounded-2xl shadow-xl h-full relative overflow-hidden">
                    <div className="flex items-center justify-between z-10">
                        <h3 className="font-semibold text-gray-300">Input</h3>
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !input}
                            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                        >
                            {loading ? <Loader2 className="animate-spin" size={16} /> : <Play size={16} />}
                            Generate
                        </button>
                    </div>

                    {inputType === 'text' ? (
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="flex-1 w-full p-4 rounded-xl border border-white/10 bg-black/20 text-gray-200 resize-none outline-none focus:ring-2 focus:ring-primary/30 mb-auto placeholder-gray-600 font-mono text-sm leading-relaxed"
                            placeholder={placeholders.input}
                        />
                    ) : (
                        <div className="flex-1 border border-white/10 rounded-xl overflow-hidden shadow-inner">
                            <Editor
                                height="100%"
                                defaultLanguage={language}
                                theme="vs-dark"
                                value={input}
                                onChange={(value) => setInput(value)}
                                options={{ minimap: { enabled: false }, fontSize: 14, padding: { top: 16 } }}
                            />
                        </div>
                    )}

                    {inputType === 'fixer' && (
                        <div className="h-1/3 flex flex-col gap-2 mt-4 z-10">
                            <label className="text-sm font-medium text-red-400 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Error Log</label>
                            <textarea
                                value={secondInput}
                                onChange={(e) => setSecondInput(e.target.value)}
                                className="flex-1 w-full p-3 rounded-xl border border-red-500/20 resize-none outline-none focus:ring-2 focus:ring-red-500/30 bg-red-500/5 text-red-300 font-mono text-xs"
                                placeholder={placeholders.secondInput}
                            />
                        </div>
                    )}
                </div>

                {/* Output Section */}
                <div className="flex flex-col gap-4 bg-dark-lighter border border-white/5 p-4 rounded-2xl shadow-xl h-full relative overflow-hidden">
                    <div className="flex items-center justify-between z-10">
                        <h3 className="font-semibold text-gray-300">AI Output</h3>
                        {output && (
                            <button
                                onClick={handleCopy}
                                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                            >
                                {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                            </button>
                        )}
                    </div>
                    <div className={`flex-1 rounded-xl border border-white/10 overflow-hidden relative ${!output ? 'bg-black/20 flex items-center justify-center' : ''}`}>
                        {loading ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/50 blur-xl rounded-full animate-pulse" />
                                        <Loader2 className="animate-spin text-primary relative z-10" size={40} />
                                    </div>
                                    <p className="text-sm text-gray-300 font-medium animate-pulse">Generating magic...</p>
                                </div>
                            </div>
                        ) : output ? (
                            <Editor
                                height="100%"
                                defaultLanguage="markdown"
                                theme="vs-dark"
                                value={output}
                                options={{ readOnly: true, minimap: { enabled: false }, fontSize: 14, wordWrap: 'on', padding: { top: 16 } }}
                            />
                        ) : (
                            <div className="text-center text-gray-600">
                                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 border border-white/5">
                                    <Play size={24} className="opacity-50 ml-1" />
                                </div>
                                <p>Ready to generate content</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeTool;
