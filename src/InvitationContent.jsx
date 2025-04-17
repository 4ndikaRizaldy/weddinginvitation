import React, { useState, useEffect, useRef } from "react";
import { RSVPSection, DoaSection, ClosingSection } from "./RSVPDoaSection";

function InvitationContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [copySuccess, setCopySuccess] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState("");

  const scrollIntervalRef = useRef(null);
  const audioRef = useRef(null);

  const photos = [
    "/photos/foto1.jpg",
    "/photos/foto2.jpg",
    "/photos/foto3.jpg",
    "/photos/foto4.jpg",
    "/photos/foto5.jpg",
    "/photos/foto6.jpg",
  ];

  const targetDate = new Date("2025-06-01T08:00:00");

  const googleCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Andika+dan+Sintya&dates=20250601T080000Z/20250601T110000Z&details=Kami+mengundang+Anda+untuk+hadir+di+acara+pernikahan+kami.&location=Jl.+Bahagia+No.+123,+Jakarta`;

  const gmapsLink =
    "https://www.google.com/maps?q=Jl.+Bahagia+No.+123,+Jakarta";

  // Auto scroll
  const toggleAutoScroll = () => {
    if (isScrolling) {
      clearInterval(scrollIntervalRef.current);
      setIsScrolling(false);
    } else {
      scrollIntervalRef.current = setInterval(() => {
        window.scrollBy({ top: 1, behavior: "smooth" });
      }, 30);
      setIsScrolling(true);
    }
  };

  // Toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // Handle copy rekening
  const handleCopy = () => {
    navigator.clipboard.writeText("1226984263").then(
      () => {
        setCopySuccess("Nomor Rekening berhasil disalin!");
        setTimeout(() => setCopySuccess(""), 3000);
      },
      () => {
        setCopySuccess("Gagal menyalin nomor rekening.");
        setTimeout(() => setCopySuccess(""), 3000);
      }
    );
  };

  const handleImageClick = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  // Countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
      } else {
        setTimeLeft({
          days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
            2,
            "0"
          ),
          minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    toggleAutoScroll();
    return () => clearInterval(scrollIntervalRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center bg-white-200 text-gray-00">
      <div className="w-full max-w-4xl px-7 space-y-8 py-10">
        {/* Bottom Navigation */}
        <section className="fixed bottom-0 left-0 w-full bg-pink-100 border-t-4 border-gray-200">
          <div className="w-full max-w-4xl mx-auto px-7">
            <div className="flex justify-center py-2">
              {[
                { href: "#home", icon: "🏠", label: "Home" },
                { href: "#profil", icon: "👤", label: "Profil" },
                { href: "#acara", icon: "📅", label: "Acara" },
                { href: "#galeri", icon: "📷", label: "Galeri" },
                { href: "#ucapan", icon: "💌", label: "Ucapan" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex flex-col items-center text-gray-700 hover:text-pink-600 transition text-lg mx-4"
                >
                  <span>{item.icon}</span>
                  <span className="text-sm">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Cover Undangan */}
        <section className="relative w-full">
          {/* Gambar Background */}
          <img
            src="/photos/pria.jpg"
            alt="Cover Undangan"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />

          {/* Overlay Hitam Transparan */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            {/* Konten Teks */}
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                Undangan Pernikahan
              </h1>

              <div className="mb-2">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Adit
                </h2>
                <p className="text-lg md:text-xl my-2 font-light">&</p>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Dina
                </h2>
              </div>

              <p className="text-lg md:text-xl font-medium mt-4">
                Sabtu, 1 Juni 2025
              </p>
            </div>
          </div>
        </section>

        {/* Section: Ayat Suci */}
        <section className="w-full bg-rose-50 py-10 px-6 rounded-lg shadow text-center">
          {/* Inisial Pasangan */}
          <div className="text-5xl font-vibes text-rose-500 mb-6 tracking-wide">
            A & R
          </div>

          <p className="text-gray-800 text-lg leading-relaxed max-w-2xl mx-auto">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan
            merasa tentram kepadanya, dan dijadikan-Nya di antaramu rasa kasih
            dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat
            tanda-tanda bagi kaum yang berpikir.”
            <br />
            <span className="italic text-rose-600 block mt-4">
              – QS. Ar-Rum: 21
            </span>
          </p>
        </section>
        {/* Section: Basmallah */}
        <section
          id="home"
          className="w-full bg-pink-100 py-8 px-6 rounded-lg shadow relative"
        >
          <audio ref={audioRef} src="/background.mp3" loop />
          <p className="text-2xl font-arabic text-green-700 mb-4 text-center">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p className="text-center text-gray-700 text-lg max-w-xl mx-auto">
            Assalamu'alaikum Warahmatullaahi Wabarakaatuh Maha Suci Allah yang
            telah menciptakan makhluk-Nya berpasang-pasangan. Ya Allah semoga
            ridho-Mu tercurah mengiringi pernikahan kami.
          </p>

          {/* Nama Mempelai */}
          <div className="mt-8 text-center flex flex-col items-center gap-6">
            {/* Mempelai Pria */}
            <div className="flex flex-col items-center">
              <img
                src="/photos/pria.jpg"
                alt="Mempelai Pria"
                className="w-32 h-32 rounded-full object-cover shadow mb-2"
              />
              <p className="text-lg font-medium text-pink-700 mb-1">Adit</p>{" "}
              {/* Nama Panggilan */}
              <h2 className="text-3xl font-bold text-gray-800">
                Muhammad Aditya Putra
              </h2>
              <p className="text-gray-600">Putra dari Bapak A & Ibu B</p>
            </div>

            <span className="text-2xl text-pink-600 my-2">&</span>

            {/* Mempelai Wanita */}
            <div className="flex flex-col items-center">
              <img
                src="/photos/wanita.jpg"
                alt="Mempelai Wanita"
                className="w-32 h-32 rounded-full object-cover shadow mb-2"
              />
              <p className="text-lg font-medium text-pink-700 mb-1">Dina</p>{" "}
              {/* Nama Panggilan */}
              <h2 className="text-3xl font-bold text-gray-800">
                Dina Maharani Putri
              </h2>
              <p className="text-gray-600">Putri dari Bapak C & Ibu D</p>
            </div>
          </div>

          {/* Floating Buttons */}
          <div className="fixed bottom-12 right-4 z-50 flex flex-col space-y-3 items-end">
            <button
              onClick={toggleMusic}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition text-xl"
            >
              {isPlaying ? "🔊" : "🔇"}
            </button>
            <button
              onClick={toggleAutoScroll}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition text-xl"
            >
              {isScrolling ? "⏸️" : "▶️"}
            </button>
          </div>
        </section>

        {/* Section: Akad & Resepsi dalam Satu Section */}
        <section
          className="w-full bg-rose-50 py-10 px-6 rounded-lg shadow text-center"
          id="acara"
        >
          <h2 className="text-3xl font-bold text-rose-800 mb-8">
            Waktu & Tempat
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card: Akad Nikah */}
            <div className="bg-white hover:bg-rose-100 transition-all duration-300 rounded-xl p-6 shadow-lg border border-rose-200">
              <h3 className="text-2xl font-semibold mb-2 text-black-800">
                Akad Nikah
              </h3>
              <p className="text-lg text-gray-700">
                Sabtu, 1 Juni 2025 | 08.00 WIB
              </p>
              <p className="text-gray-600 mb-4">Jl. Bahagia No. 123, Jakarta</p>

              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-400 hover:bg-rose-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Lihat Lokasi Akad
              </a>
            </div>

            {/* Card: Resepsi */}
            <div className="bg-white hover:bg-pink-100 transition-all duration-300 rounded-xl p-6 shadow-lg border border-pink-200">
              <h3 className="text-2xl font-semibold mb-2 text-black-800">
                Resepsi
              </h3>
              <p className="text-lg text-gray-700">
                Sabtu, 1 Juni 2025 | 11.00 - 14.00 WIB
              </p>
              <p className="text-gray-600 mb-4">Gedung Cinta Abadi, Jakarta</p>

              <a
                href={gmapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow transition"
              >
                Lihat Lokasi Resepsi
              </a>
            </div>
          </div>
        </section>

        {/* Section: Countdown */}
        <section className="w-full bg-pink-100 py-10 px-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold mb-6 text-pink-800">
            Waktu Tersisa Menuju Akad Nikah
          </h2>
          <div className="flex justify-center gap-4 text-white mb-6">
            {["days", "hours", "minutes", "seconds"].map((key) => (
              <div key={key} className="bg-pink-600 rounded-xl px-4 py-2 w-20">
                <p className="text-3xl font-bold">{timeLeft[key]}</p>
                <span className="text-sm capitalize">{key}</span>
              </div>
            ))}
          </div>
          <a
            href={googleCalendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-pink-600 text-white py-2 px-6 rounded-lg shadow hover:bg-pink-500 transition"
          >
            Tambahkan ke Google Calendar
          </a>
        </section>

        {/* Section: Galeri */}
        <section
          className="w-full bg-rose-100 py-8 px-6 rounded-lg shadow text-center"
          id="galeri"
        >
          <h3 className="text-2xl font-semibold mb-6">Galeri Kami</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Galeri ${i + 1}`}
                className="rounded-lg shadow-md w-full h-40 object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => handleImageClick(src)}
              />
            ))}
          </div>
        </section>

        {/* Modal Zoom Gambar */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white p-6 rounded-lg">
              <img
                src={currentImage}
                alt="Zoomed"
                className="max-w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full"
              >
                X
              </button>
            </div>
          </div>
        )}

        {/* Section: Cerita */}
        <section className="w-full bg-pink-100 py-8 px-6 rounded-lg shadow">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Journey Our Story</h2>
            <p className="text-gray-600 mt-2">
              Setiap perjalanan memiliki cerita, dan ini adalah kisah cinta
              kami.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Perkenalan",
                desc: "Kami pertama kali bertemu pada sebuah acara...",
                img: "/photos/perkenalan.jpg",
              },
              {
                title: "Momen Spesial",
                desc: "Setiap momen bersama selalu spesial...",
                img: "/photos/momen_spesial.jpg",
                reverse: true,
              },
              {
                title: "Melamar",
                desc: "Pada hari yang sangat spesial...",
                img: "/photos/melamar.jpg",
              },
              {
                title: "Persiapan Pernikahan",
                desc: "Kami bersama-sama mempersiapkan hari besar ini...",
                img: "/photos/persiapan.jpg",
                reverse: true,
              },
            ].map(({ title, desc, img, reverse }, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                } items-center gap-6`}
              >
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
                <img
                  src={img}
                  alt={title}
                  className="md:w-1/2 rounded-lg shadow object-cover h-64 w-full"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Doa */}
        <section className="w-full bg-rose-100 py-12 px-6 rounded-3xl shadow-xl text-center animate-fade-in">
          <div className="mb-4 text-4xl text-pink-600 animate-pulse">💖</div>
          <h2 className="text-2xl font-bold text-pink-800 mb-4">
            Doa untuk Pengantin
          </h2>
          <p className="text-3xl font-arabic text-green-700 mb-6 leading-relaxed">
            بَارَكَ اللَّهُ لَكُمْ وَبَارَكَ عَلَيْكُمْ وَجَمَعَ بَيْنَكُمَا فِي
            خَيْرٍ
          </p>
          <p className="text-lg text-gray-800 italic mb-2 px-4 md:px-20">
            “Semoga Allah memberkahimu, dan memberkahi atasmu, serta
            mempersatukan kalian dalam kebaikan.”
          </p>
          <p className="text-sm text-gray-600 mb-4">
            (HR. Abu Dawud no. 2130, Ahmad 3:50)
          </p>
        </section>

        {/* Section: Rekening */}
        <section className="w-full bg-pink-100 py-8 px-6 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold mb-4">Doa & Hadiah</h3>
          <p className="text-gray-700 mb-2">
            Bagi yang ingin memberikan doa atau hadiah:
          </p>
          <p className="text-lg font-semibold">1226984263 (A/N Mempelai)</p>
          <button
            onClick={handleCopy}
            className="mt-4 bg-pink-400 text-white py-2 px-6 rounded-lg hover:bg-pink-400 transition"
          >
            Salin Nomor Rekening
          </button>
          <p className="text-green-600 mt-2">{copySuccess}</p>
        </section>

        {/* Tambahan Section */}
        <DoaSection />
        <ClosingSection />
      </div>
    </div>
  );
}

export default InvitationContent;
