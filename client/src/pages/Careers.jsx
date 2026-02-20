import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const jobs = [
        {
            title: "Senior Full Stack Engineer",
            department: "Engineering",
            location: "Remote (Global)",
            type: "Full-time"
        },
        {
            title: "AI Research Scientist",
            department: "R&D",
            location: "San Francisco / Remote",
            type: "Full-time"
        },
        {
            title: "Product Designer",
            department: "Design",
            location: "Remote (Europe)",
            type: "Full-time"
        },
        {
            title: "Developer Advocate",
            department: "Community",
            location: "New York / Remote",
            type: "Full-time"
        }
    ];

    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Revolution</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Help us build the next generation of developer tools.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {jobs.map((job, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                    <span className="flex items-center gap-1.5"><Briefcase size={14} /> {job.department}</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                                </div>
                            </div>
                            <Link to="#" className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors text-center">
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center text-gray-400">
                    <p>Don't see the right role? Email us at <a href="mailto:careers@imagi.ai" className="text-primary hover:underline">careers@imagi.ai</a></p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Careers;
