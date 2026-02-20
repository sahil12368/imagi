import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Changelog = () => {
    const changes = [
        {
            version: "v2.1.0",
            date: "October 24, 2026",
            title: "Project Generator 2.0 & Gemini 1.5 Pro",
            items: [
                "Integration with Gemini 1.5 Pro for faster, more accurate code generation.",
                "New Project Generator UI with multi-file preview.",
                "Improved error handling in Code Fixer.",
                "Dark mode refinements."
            ]
        },
        {
            version: "v2.0.5",
            date: "October 10, 2026",
            title: "Performance Improvements",
            items: [
                "Reduced latency for snippet generation by 40%.",
                "Fixed a bug where auth tokens were not persisting correctly.",
                "Added 'Copy to Clipboard' button for all code blocks."
            ]
        },
        {
            version: "v2.0.0",
            date: "September 15, 2026",
            title: "Major UI Overhaul",
            items: [
                "Complete redesign of the Dashboard and Landing page.",
                "Introduced the 'Bento Grid' layout for features.",
                "Added dedicated tools for Image Generation.",
                "New pricing tiers: Free, Pro, Enterprise."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Changelog</h1>
                    <p className="text-xl text-gray-400">
                        Stay up to date with the latest improvements.
                    </p>
                </div>

                <div className="space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10 md:left-1/2 md:-ml-[1px]"></div>

                    {changes.map((change, i) => (
                        <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 md:text-right">
                                <div className={`hidden md:block ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-2">{change.date}</span>
                                </div>
                            </div>

                            <div className="absolute left-4 w-4 h-4 rounded-full bg-primary border-4 border-dark -translate-x-1/2 mt-1.5 md:left-1/2 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>

                            <div className="flex-1 pl-12 md:pl-0">
                                <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors ${i % 2 !== 0 ? 'md:text-right' : ''}`}>
                                    <div className="md:hidden mb-4">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono">{change.date}</span>
                                    </div>
                                    <div className={`flex items-center gap-3 mb-4 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <h3 className="text-xl font-bold text-white">{change.title}</h3>
                                        <span className="px-2 py-0.5 rounded bg-primary/20 text-primary text-xs font-bold">{change.version}</span>
                                    </div>
                                    <ul className={`space-y-2 text-gray-400 text-sm ${i % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                        {change.items.map((item, j) => (
                                            <li key={j} className="leading-relaxed text-left">• {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Changelog;
