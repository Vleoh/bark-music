import React from 'react';
import { X } from 'lucide-react';

interface TutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Cómo usar BarkMusic Chat</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <p>
            Bienvenido a BarkMusic Chat, tu asistente para generar música y voces con IA. Sigue estos pasos para comenzar:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Escribe una descripción detallada de la música que deseas generar en el campo de chat.</li>
            <li>Selecciona el estilo musical y el tipo de voz que prefieras usando los botones en el panel derecho.</li>
            <li>Haz clic en el botón de enviar o presiona Enter para generar la música.</li>
            <li>Una vez generada, podrás reproducir la música, pausarla y descargarla usando los controles del reproductor.</li>
            <li>Puedes seguir conversando con el asistente para refinar tu solicitud o generar nuevas piezas musicales.</li>
          </ol>
          <p>
            Consejos para obtener mejores resultados:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Sé específico en tus descripciones, incluyendo detalles sobre el género, instrumentos, ritmo y emoción que buscas.</li>
            <li>Experimenta con diferentes combinaciones de estilos musicales y tipos de voz.</li>
            <li>Si no estás satisfecho con el resultado, intenta reformular tu descripción o pide al asistente sugerencias para mejorarla.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;