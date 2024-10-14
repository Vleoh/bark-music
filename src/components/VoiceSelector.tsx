import React from 'react';

interface VoiceSelectorProps {
  selectedVoice: string;
  setSelectedVoice: (voice: string) => void;
}

const VoiceSelector: React.FC<VoiceSelectorProps> = ({ selectedVoice, setSelectedVoice }) => {
  const voices = ['femenina', 'masculina', 'infantil', 'robótica'];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">Tipo de Voz</h3>
      <div className="flex flex-wrap gap-2">
        {voices.map((voice) => (
          <button
            key={voice}
            onClick={() => setSelectedVoice(voice)}
            className={`px-3 py-1 rounded-full ${
              selectedVoice === voice
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {voice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VoiceSelector;