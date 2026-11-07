import { useState, useRef, useEffect } from 'react';
import { ChatButton } from '../atoms/ChatButton.jsx';
import { ChatInput } from '../atoms/ChatInput.jsx';
import { ChatMessage } from '../molecules/ChatMessage.jsx';

export const AdminChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [mensajes, setMensajes] = useState([
    { autor: 'bot', texto: 'Sistema de administración listo. ¿Qué acción deseas ejecutar?' }
  ]);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes]);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const nuevoHistorial = [...mensajes, { autor: 'admin', texto: input }];
    setMensajes(nuevoHistorial);
    setInput('');

    // Simulación temporal mientras armamos el backend
    setTimeout(() => {
      setMensajes(prev => [...prev, { autor: 'bot', texto: `Simulando conexión a MongoDB para el comando: "${input}"...` }]);
    }, 800);
  };

  return (
    <>
      <ChatButton isOpen={isOpen} toggleChat={() => setIsOpen(!isOpen)} />
      
      {isOpen && (
        <div 
          className="card shadow position-fixed d-flex flex-column" 
          style={{ 
            bottom: '90px', right: '20px', 
            width: '350px', height: '450px', 
            zIndex: 1040, overflow: 'hidden' 
          }}
        >
          <div className="card-header bg-dark text-white">
            <h6 className="mb-0">Terminal Administrativa</h6>
          </div>
          
          <div className="card-body bg-light overflow-auto flex-grow-1 p-3">
            {mensajes.map((msg, index) => (
              <ChatMessage key={index} mensaje={msg} />
            ))}
            <div ref={chatEndRef} />
          </div>
          
          <ChatInput input={input} setInput={setInput} onSubmit={manejarEnvio} />
        </div>
      )}
    </>
  );
};