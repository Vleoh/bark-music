import React from 'react';
import { Send } from 'lucide-react';

interface ChatInterfaceProps {
  chatHistory: Array<{ type: string; content: string }>;
  currentMessage: string;
  setCurrentMessage: (message: string) => void;
  handleSendMessage: () => void;
  isLoading: boolean;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  chatHistory,
  currentMessage,
  setCurrentMessage,
  handleSendMessage,
  isLoading,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md h-full flex flex-col">
      <div className="flex-grow overflow-y-auto p-4">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Describe la música que quieres generar..."
            className="flex-grow border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center"
          >
            {isLoading ? (
              <span className="animate-spin">⌛</span>
            ) : (
              <Send size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;