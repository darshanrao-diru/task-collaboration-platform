import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiUsers, FiCheckCircle, FiZap } from 'react-icons/fi';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const features = [
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Team Collaboration',
      description: 'Invite team members and collaborate on tasks in real-time',
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: 'Task Management',
      description: 'Organize tasks with Kanban boards and drag-and-drop interface',
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Real-time Updates',
      description: 'Get instant notifications when tasks are updated',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-white">TaskFlow</h1>
        <div className="flex gap-4">
          {isLoggedIn ? (
            <Link href="/dashboard" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/auth/login" className="px-6 py-2 text-white hover:text-gray-300 transition">
                Login
              </Link>
              <Link href="/auth/register" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-8 py-20 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Collaborate with Your Team
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          TaskFlow is a modern platform for managing team tasks with real-time collaboration, 
          intuitive Kanban boards, and seamless communication.
        </p>
        <div className="flex justify-center gap-4">
          {!isLoggedIn && (
            <>
              <Link href="/auth/register" className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                Get Started <FiArrowRight />
              </Link>
              <Link href="/auth/login" className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-slate-900 transition">
                Login
              </Link>
            </>
          )}
        </div>
      </motion.div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/50 backdrop-blur p-6 rounded-lg border border-slate-700"
            >
              <div className="text-blue-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
