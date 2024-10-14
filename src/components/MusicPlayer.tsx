import React, { useState, useRef } from 'react';
import { Play, Pause, Download } from 'lucide-react';

interface MusicPlayerProps {
  musicUrl: string | null;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ musicUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    if (musicUrl) {
      const link = document.createElement('a');
      link.href = musicUrl;
      link.download = 'generated_music.mp3';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  if (!musicUrl) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mt-4">
      <h3 className="text-lg font-semibold mb-2">Música Generada</h3>
      <audio ref={audioRef} src={musicUrl} />
      <div className="flex justify-between items-center">
        <button
          onClick={togglePlay}
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span className="ml-2">{isPlaying ? 'Pausar' : 'Reproducir'}</span>
        </button>
        <button
          onClick={handleDownload}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
        >
          <Download size={20} />
          <span className="ml-2">Descargar</span>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;