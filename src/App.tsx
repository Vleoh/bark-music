import React, { useState, useEffect } from 'react';
import { Music, Mic, Send, Play, Pause, Download, HelpCircle } from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import MusicPlayer from './components/MusicPlayer';
import StyleSelector from './components/StyleSelector';
import VoiceSelector from './components/VoiceSelector';
import TutorialModal from './components/TutorialModal';

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [generatedMusic, setGeneratedMusic] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState('pop');
  const [selectedVoice, setSelectedVoice] = useState('femenina');
  const [isLoading, setIsLoading] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    // Cargar historial de chat del almacenamiento local
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      setChatHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    // Guardar historial de chat en el almacenamiento local
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    setIsLoading(true);
    const newMessage = { type: 'user', content: currentMessage };
    setChatHistory([...chatHistory, newMessage]);

    try {
      // Aquí iría la llamada a la API de Bark
      // Por ahora, simularemos una respuesta
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = { type: 'bot', content: 'Música generada basada en tu descripción.' };
      setChatHistory(prevHistory => [...prevHistory, response]);
      setGeneratedMusic('URL_DE_LA_MUSICA_GENERADA');
    } catch (error) {
      console.error('Error al generar música:', error);
      setChatHistory(prevHistory => [...prevHistory, { type: 'bot', content: 'Hubo un error al generar la música. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsLoading(false);
      setCurrentMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600 flex items-center">
            <Music className="mr-2" /> BarkMusic Chat
          </h1>
          <button
            onClick={() => setShowTutorial(true)}
            className="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            <HelpCircle className="mr-1" /> Tutorial
          </button>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4 flex">
        <div className="flex-grow mr-4">
          <ChatInterface
            chatHistory={chatHistory}
            currentMessage={currentMessage}
            setCurrentMessage={setCurrentMessage}
            handleSendMessage={handleSendMessage}
            isLoading={isLoading}
          />
        </div>
        <div className="w-1/3">
          <StyleSelector selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
          <VoiceSelector selectedVoice={selectedVoice} setSelectedVoice={setSelectedVoice} />
          <MusicPlayer musicUrl={generatedMusic} />
        </div>
      </main>

      <TutorialModal isOpen={showTutorial} onClose={() => setShowTutorial(false)} />
    </div>
  );
}

export default App;