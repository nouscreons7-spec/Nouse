// app/not-found.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-extrabold mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-xl md:text-2xl mb-6 text-gray-300"
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
