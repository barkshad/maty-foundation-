
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { PageRoute } from '../types';
import { Lock, ArrowRight, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const AdminLogin: React.FC<{ navigate: (page: PageRoute) => void }> = ({ navigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setError('');
    
    try {
      await login(email, password);
      navigate(PageRoute.ADMIN_DASHBOARD);
    } catch (err: any) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        setError('User not found. Please create an account in Firebase Console or use correct credentials.');
      } else {
        setError('Login failed. Please check email/password.');
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-blue-600 w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Admin Access</h1>
          <p className="text-slate-500">Sign in to manage website content</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="admin@matifoundation.org"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70"
          >
            {isLoggingIn ? <Loader className="animate-spin mr-2" /> : <ArrowRight size={18} className="mr-2" />}
            {isLoggingIn ? 'Signing in...' : 'Login'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
            <button onClick={() => navigate(PageRoute.HOME)} className="text-sm text-slate-400 hover:text-blue-500">Back to Website</button>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
