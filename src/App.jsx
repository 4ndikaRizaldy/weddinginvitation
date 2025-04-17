import React, { useState, useRef } from "react";
import LandingPage from "./LandingPage";
import InvitationContent from "./InvitationContent";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpen(true);
    // Autoplay setelah klik
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Autoplay error:", err));
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 via-white to-indigo-100">
      <audio ref={audioRef} loop src="/background.mp3" />
      {!isOpen ? <LandingPage onOpen={handleOpen} /> : <InvitationContent />}
    </div>
  );
}

export default App;
