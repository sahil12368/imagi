import {
    SandpackProvider,
    SandpackLayout,
    SandpackPreview,
    SandpackCodeEditor,
    SandpackFileExplorer,
    useSandpack
} from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
import { RefreshCw, Smartphone, Monitor, Globe, ChevronLeft, ChevronRight, Lock, Code, Eye } from 'lucide-react';
import { useState } from 'react';

const BrowserHeader = ({ view, setView }) => {
    const { sandpack } = useSandpack();
    const [device, setDevice] = useState('desktop'); // desktop, mobile

    const handleRefresh = () => {
        sandpack.runSandpack();
    };

    return (
        <div className="bg-gray-800 border-b border-gray-700 p-2 flex items-center gap-3">
            {/* Window Controls */}
            <div className="flex gap-1.5 ml-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>

            {/* Navigation Controls */}
            <div className="flex gap-2 text-gray-400 ml-2">
                <ChevronLeft size={16} />
                <ChevronRight size={16} />
                <button onClick={handleRefresh} className="hover:text-white transition-colors">
                    <RefreshCw size={14} />
                </button>
            </div>

            {/* Address Bar */}
            <div className="flex-1 bg-gray-900 rounded-lg h-8 flex items-center px-3 gap-2 text-xs text-gray-400 font-mono overflow-hidden">
                <Lock size={10} className="text-green-500" />
                <span className="text-gray-500">https://</span>
                <span className="text-white">preview.imagi.ai</span>
                <span className="text-gray-600">/app</span>
            </div>

            {/* View Toggle */}
            <div className="flex bg-gray-900 rounded-lg p-0.5 mx-2">
                <button
                    onClick={() => setView('preview')}
                    className={`p-1.5 rounded-md transition-all ${view === 'preview' ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                    title="Live Preview"
                >
                    <Eye size={14} />
                </button>
                <button
                    onClick={() => setView('code')}
                    className={`p-1.5 rounded-md transition-all ${view === 'code' ? 'bg-gray-700 text-white shadow' : 'text-gray-400 hover:text-gray-200'}`}
                    title="View Code"
                >
                    <Code size={14} />
                </button>
            </div>

            {/* Device Toggles */}
            <div className="flex gap-2 text-gray-400 mr-2 border-l border-gray-700 pl-3">
                <Monitor size={16} className="text-white" />
                <Smartphone size={16} />
            </div>
        </div>
    );
};

const SandpackListener = ({ onCodeUpdate }) => {
    const { sandpack } = useSandpack();
    const { files } = sandpack;

    useEffect(() => {
        if (!onCodeUpdate) return;

        // Convert Sandpack files format back to simple map if needed
        // Sandpack files are objects { code, active, ... } or strings.
        // We normalize to simple strings for the parent state.
        const simpleFiles = {};
        Object.keys(files).forEach(path => {
            simpleFiles[path] = typeof files[path] === 'string' ? files[path] : files[path].code;
        });

        // Debounce updates to prevent excessive re-renders in parent
        const timer = setTimeout(() => {
            onCodeUpdate(simpleFiles);
        }, 1000);

        return () => clearTimeout(timer);
    }, [files, onCodeUpdate]);

    return null;
};

const PreviewEngine = ({ files, onCodeUpdate }) => {
    const [view, setView] = useState('preview');

    return (
        <SandpackProvider
            template="react"
            theme={monokaiPro}
            files={files}
            options={{
                activeFile: "/App.js",
                externalResources: ["https://cdn.tailwindcss.com"]
            }}
            customSetup={{
                dependencies: {
                    "lucide-react": "latest",
                    "framer-motion": "latest",
                    "clsx": "latest",
                    "tailwind-merge": "latest"
                },
            }}
            style={{ height: '100%' }} // Critical for height fix
        >
            <SandpackListener onCodeUpdate={onCodeUpdate} />
            <SandpackLayout className="!h-full !rounded-none !border-none !block" style={{ height: '100%' }}>
                <div className="flex flex-col h-full bg-gray-900" style={{ height: '100%' }}>
                    <BrowserHeader view={view} setView={setView} />
                    <div className="flex-1 relative bg-white overflow-hidden" style={{ height: 'calc(100% - 48px)' }}>
                        <div className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${view === 'preview' ? 'z-20 opacity-100 pointer-events-auto' : 'z-10 opacity-0 pointer-events-none'}`}>
                            <SandpackPreview
                                showNavigator={false}
                                showOpenInCodeSandbox={false}
                                showRefreshButton={false}
                                style={{ height: "100%" }}
                            />
                        </div>
                        <div className={`absolute inset-0 h-full w-full bg-[#2D2A2E] flex transition-opacity duration-300 ${view === 'code' ? 'z-20 opacity-100 pointer-events-auto' : 'z-10 opacity-0 pointer-events-none'}`}>
                            <div className="w-1/4 h-full border-r border-gray-700 overflow-y-auto">
                                <SandpackFileExplorer style={{ height: '100%' }} />
                            </div>
                            <div className="flex-1 h-full">
                                <SandpackCodeEditor
                                    showTabs
                                    showLineNumbers
                                    showInlineErrors
                                    wrapContent
                                    style={{ height: "100%" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </SandpackLayout>
        </SandpackProvider>
    );
};

export default PreviewEngine;
