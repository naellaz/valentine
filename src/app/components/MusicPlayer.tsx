import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Music metadata - replace the src with your own music file
  const musicData = {
    title: "Best Part",
    artist: "Daniel Caesar & H.E.R.",
    // Replace this URL with your own music file
    // You can host an MP3 file or use a URL to a romantic song
    src: "bestpart.mp3" // Placeholder - replace with actual music
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Attempt to play - handle potential autoplay restrictions
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
          // User interaction required - button click will work
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      setIsPlaying(false);
      // Loop the audio
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    };

    audio.addEventListener('ended', handleEnded);
    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={musicData.src}
        preload="metadata"
        loop
      />

      {/* Floating music player */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="relative">
          {/* Pulse ring effect when playing */}
          <AnimatePresence>
            {isPlaying && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A0354B] to-[#D4AF77]"
                />
                <motion.div
                  initial={{ scale: 1, opacity: 0.4 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: 0.5
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFB6C1] to-[#A0354B]"
                />
              </>
            )}
          </AnimatePresence>

          {/* Main player container */}
          <motion.div
            animate={{
              width: isExpanded ? 'auto' : '64px',
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative bg-white/95 backdrop-blur-lg rounded-full shadow-2xl border-2 border-[#FFE4E1] overflow-hidden"
          >
            <div className="flex items-center gap-3 p-3">
              {/* Play/Pause button */}
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#A0354B] to-[#8B2635] flex items-center justify-center shadow-lg group"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                <motion.div
                  animate={{
                    rotate: isPlaying ? 360 : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: isPlaying ? Infinity : 0,
                    ease: "linear"
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, rgba(212, 175, 119, 0.3) 100%)'
                  }}
                />
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white relative z-10" fill="white" />
                ) : (
                  <Play className="w-5 h-5 text-white relative z-10 ml-0.5" fill="white" />
                )}
              </motion.button>

              {/* Song info - visible when expanded */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-3 pr-2 min-w-0"
                  >
                    <div className="min-w-0 flex-1">
                      <motion.p
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        className="font-['Playfair_Display'] text-sm text-[#8B2635] truncate whitespace-nowrap"
                      >
                        {musicData.title}
                      </motion.p>
                      <motion.p
                        initial={{ x: -10 }}
                        animate={{ x: 0 }}
                        transition={{ delay: 0.05 }}
                        className="font-['Inter'] text-xs text-[#A0354B] opacity-70 truncate whitespace-nowrap"
                      >
                        {musicData.artist}
                      </motion.p>
                    </div>

                    {/* Mute button */}
                    <motion.button
                      onClick={toggleMute}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFE4E1] flex items-center justify-center hover:bg-[#FFB6C1] transition-colors"
                      aria-label={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-[#8B2635]" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#8B2635]" />
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Compact music icon - visible when not expanded and playing */}
          <AnimatePresence>
            {!isExpanded && isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -top-2 -right-2"
              >
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-gradient-to-br from-[#D4AF77] to-[#FFB6C1] rounded-full p-1.5 shadow-lg"
                >
                  <Music className="w-3 h-3 text-white" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover hint text */}
        <AnimatePresence>
          {!isExpanded && !isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 2 }}
              className="absolute -top-12 right-0 bg-[#8B2635] text-white px-3 py-1.5 rounded-lg text-xs font-['Inter'] whitespace-nowrap shadow-lg"
            >
              Play romantic music
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-[#8B2635] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Mobile version - bottom center */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="relative">
          {/* Pulse ring effect when playing */}
          <AnimatePresence>
            {isPlaying && (
              <>
                <motion.div
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ scale: 1, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A0354B] to-[#D4AF77]"
                />
              </>
            )}
          </AnimatePresence>

          {/* Mobile player */}
          <div className="relative bg-white/95 backdrop-blur-lg rounded-full shadow-2xl border-2 border-[#FFE4E1] px-5 py-3">
            <div className="flex items-center gap-3">
              {/* Play/Pause button */}
              <motion.button
                onClick={togglePlay}
                whileTap={{ scale: 0.95 }}
                className="relative flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#A0354B] to-[#8B2635] flex items-center justify-center shadow-lg"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" fill="white" />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                )}
              </motion.button>

              {/* Song info */}
              <div className="min-w-0 flex-1">
                <p className="font-['Playfair_Display'] text-sm text-[#8B2635] truncate">
                  {musicData.title}
                </p>
                <p className="font-['Inter'] text-xs text-[#A0354B] opacity-70 truncate">
                  {musicData.artist}
                </p>
              </div>

              {/* Mute button */}
              <motion.button
                onClick={toggleMute}
                whileTap={{ scale: 0.95 }}
                className="flex-shrink-0 w-9 h-9 rounded-full bg-[#FFE4E1] flex items-center justify-center active:bg-[#FFB6C1] transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-[#8B2635]" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#8B2635]" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
