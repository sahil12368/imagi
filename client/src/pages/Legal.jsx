import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Legal = () => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl font-bold mb-6">Legal</h1>
                </div>

                <div className="prose prose-invert max-w-none">
                    <section className="mb-12">
                        <h2>Privacy Policy</h2>
                        <p className="text-sm text-gray-400 mb-4">Last Updated: October 24, 2026</p>
                        <p>
                            At Imagi, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website including any other media form, media channel, mobile website, or mobile application related or connected thereto.
                        </p>
                        <h3>Collection of Data</h3>
                        <p>
                            We collect personal data that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us.
                        </p>
                        <h3>Use of Your Data</h3>
                        <p>
                            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we use information collected about you via the website to:
                        </p>
                        <ul>
                            <li>Create and manage your account.</li>
                            <li>Process your payments and refunds.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Generate a personal profile about you to make future visits to the website more personalized.</li>
                        </ul>
                    </section>

                    <hr className="border-white/10 my-12" />

                    <section>
                        <h2>Terms of Service</h2>
                        <p className="text-sm text-gray-400 mb-4">Last Updated: October 24, 2026</p>
                        <p>
                            These Terms of Service ("Terms") cover your use of and access to our services, client software and websites ("Services"). By using our Services, you agree to be bound by these Terms as well as our Privacy Policy. If you are using our Services as the employee or agent of an organization, you are agreeing to these Terms on behalf of that organization.
                        </p>
                        <h3>Acceptable Use</h3>
                        <p>
                            You agree not to misuse the Services. For example, you must not, and must not attempt to do the following:
                        </p>
                        <ul>
                            <li>Probe, scan, or test the vulnerability of any system or network.</li>
                            <li>Breach or otherwise circumvent any security or authentication measures.</li>
                            <li>Access, tamper with, or use non-public areas or parts of the Services, or shared areas of the Services you have not been invited to.</li>
                        </ul>
                        <h3>Termination</h3>
                        <p>
                            You're free to stop using our Services at any time. We reserve the right to suspend or terminate your access to the Services with notice to you if you're in breach of these Terms, or if your use of the Services would cause a risk of harm or loss to us or other users.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Legal;
