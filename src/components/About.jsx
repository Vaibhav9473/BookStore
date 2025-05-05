import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8 text-gray-800 dark:text-white">
        <h1 className="text-4xl font-bold text-center text-indigo-600 dark:text-yellow-400 mb-6">
          About Us
        </h1>

        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-indigo-700 dark:text-yellow-300">bookStore</span> — your one-stop destination for all your reading needs.
          Our mission is to make books easily accessible and enjoyable for everyone.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Whether you're a student, a casual reader, or a book lover, we have something for everyone.
          From fiction to non-fiction, educational to inspirational, we bring together a wide range of books at your fingertips.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Our platform is designed to be simple, fast, and user-friendly so that you can explore, learn, and grow through books — anytime, anywhere.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Thank you for being a part of our journey.
          <span className="ml-2 text-indigo-600 dark:text-yellow-300 font-semibold">Happy reading! 📚</span>
        </p>

        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-black px-6 py-2 rounded-md transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
