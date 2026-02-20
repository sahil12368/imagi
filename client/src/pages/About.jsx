import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        We are building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Future of Code</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Imagi was founded on the belief that software creation should be accessible, fast, and enjoyable for everyone.
                    </p>
                </div>

                {/* Mission / Vision / Values */}
                <div className="grid md:grid-cols-3 gap-8 mb-32">
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                        <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To democratize software development by providing AI tools that amplify human creativity and eliminate repetitive tasks.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                        <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-6">
                            <Users size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We are a diverse group of engineers, designers, and researchers form top tech companies, united by a passion for dev tools.
                        </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                        <div className="w-16 h-16 mx-auto bg-pink-500/10 rounded-full flex items-center justify-center text-pink-400 mb-6">
                            <Heart size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We believe in open source, privacy-first AI, and putting the developer experience above all else.
                        </p>
                    </div>
                </div>

                {/* Team Grid (Placeholders) */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Makers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="text-center group">
                                <div className="w-32 h-32 mx-auto rounded-full bg-gray-700 mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary transition-all">
                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                </div>
                                <h4 className="font-bold text-lg">Alex Johnson</h4>
                                <p className="text-sm text-primary">Co-Founder & CEO</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
