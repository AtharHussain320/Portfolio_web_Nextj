'use client'


import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';








export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2025 Athar Hussain. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};





