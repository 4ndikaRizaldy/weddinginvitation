// src/LandingPage.jsx
import React from "react";

const LandingPage = ({ onOpen }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50 text-center px-6">
      <div className="bg-white p-6 rounded-3xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Undangan Pernikahan
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Dengan penuh cinta, kami mengundang Anda untuk hadir dalam hari
          bahagia kami:
        </p>
        <h2 className="text-2xl font-semibold text-pink-600 mb-1">
          Nama Mempelai Pria
        </h2>
        <span className="text-lg text-gray-500">dan</span>
        <h2 className="text-2xl font-semibold text-pink-600 mt-1 mb-4">
          Nama Mempelai Wanita
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
          Bapak/Ibu/Saudara/i berkenan hadir.
        </p>
        <button
          onClick={onOpen}
          className="bg-pink-600 text-white font-medium py-2 px-6 rounded-full hover:bg-pink-700 transition"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
