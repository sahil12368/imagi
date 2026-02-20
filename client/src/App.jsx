import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import ImageGenerator from './pages/Tools/ImageGenerator';
import CodeTool from './pages/Tools/CodeTool';
import ProjectGenerator from './pages/ProjectGenerator';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Changelog from './pages/Changelog';
import Docs from './pages/Docs';
import About from './pages/About';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Legal from './pages/Legal';
import Layout from './components/Layout';
import { useAuth, AuthProvider } from './context/AuthContext';
import { Loader2 } from 'lucide-react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return user ? <Layout>{children}</Layout> : <Navigate to="/login" />;
};

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-primary" size={40} />
      </div>
    );
  }

  return !user ? children : <Navigate to="/dashboard" />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Landing /></PublicRoute>} />
      <Route path="/features" element={<PublicRoute><Features /></PublicRoute>} />
      <Route path="/pricing" element={<PublicRoute><Pricing /></PublicRoute>} />
      <Route path="/changelog" element={<PublicRoute><Changelog /></PublicRoute>} />
      <Route path="/docs" element={<PublicRoute><Docs /></PublicRoute>} />
      <Route path="/about" element={<PublicRoute><About /></PublicRoute>} />
      <Route path="/blog" element={<PublicRoute><Blog /></PublicRoute>} />
      <Route path="/careers" element={<PublicRoute><Careers /></PublicRoute>} />
      <Route path="/legal" element={<PublicRoute><Legal /></PublicRoute>} />

      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

      <Route
        path="/tools/code-generator"
        element={
          <PrivateRoute>
            <CodeTool
              title="Snippet Generator"
              description="Convert your natural language ideas into clean code."
              endpoint="generate-code"
              inputType="text"
              placeholders={{ input: "Describe the function or component you want to build..." }}
            />
          </PrivateRoute>
        }
      />
      <Route
        path="/tools/code-fixer"
        element={
          <PrivateRoute>
            <CodeTool
              title="Code Fixer"
              description="Debug your code instantly with detailed explanations."
              endpoint="fix-code"
              inputType="fixer"
              placeholders={{ input: "// Paste your buggy code here...", secondInput: "Error: Unexpected token..." }}
            />
          </PrivateRoute>
        }
      />
      <Route
        path="/tools/code-corrector"
        element={
          <PrivateRoute>
            <CodeTool
              title="Code Corrector"
              description="Optimize and refactor your code for better performance."
              endpoint="correct-code"
              inputType="corrector"
              placeholders={{ input: "// Paste code to optimize..." }}
            />
          </PrivateRoute>
        }
      />
      <Route path="/tools/image-generator" element={<PrivateRoute><ImageGenerator /></PrivateRoute>} />
      <Route path="/generate" element={<PrivateRoute><ProjectGenerator /></PrivateRoute>} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
