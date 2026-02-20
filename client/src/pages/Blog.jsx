import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Introducing Imagi 2.0: The Future of AI Development",
            excerpt: "We've rebuilt Imagi from the ground up to be faster, smarter, and more intuitive. Here's what's new.",
            date: "Oct 24, 2026",
            author: "Sahil",
            category: "Product"
        },
        {
            id: 2,
            title: "How to Build a SaaS in a Weekend",
            excerpt: "A step-by-step guide to using Imagi's Project Generator to launch your next big idea in record time.",
            date: "Oct 15, 2026",
            author: "Alex J.",
            category: "Tutorial"
        },
        {
            id: 3,
            title: "The State of AI in 2026",
            excerpt: "Our analysis of the latest trends in artificial intelligence and what they mean for software engineers.",
            date: "Sep 28, 2026",
            author: "Sarah K.",
            category: "Industry"
        },
        {
            id: 4,
            title: "Optimizing React Performance with Imagi",
            excerpt: "Learn how to use our Code Corrector to identify and fix performance bottlenecks in your React apps.",
            date: "Sep 10, 2026",
            author: "Mike R.",
            category: "Engineering"
        }
    ];

    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        The Imagi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Blog</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Insights, tutorials, and news from the team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col group cursor-pointer">
                            <div className="aspect-video rounded-2xl bg-gray-800 mb-6 overflow-hidden border border-white/10 group-hover:border-primary/50 transition-all relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                {/* Placeholder for blog image */}
                                <div className="w-full h-full bg-white/5 flex items-center justify-center text-gray-600">
                                    No Image
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                                <span className="px-2 py-1 rounded-full bg-white/5 font-medium text-white">{post.category}</span>
                                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                            </div>

                            <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                            <p className="text-gray-400 leading-relaxed mb-4 flex-1">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <User size={14} /> <span>{post.author}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Blog;
