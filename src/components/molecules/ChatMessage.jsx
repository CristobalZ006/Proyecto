// Ubicación: src/components/molecules/ChatMessage.jsx
export const ChatMessage = ({ mensaje }) => {
  const esBot = mensaje.autor === 'bot';
  
  return (
    <div className={`d-flex mb-3 ${esBot ? 'justify-content-start' : 'justify-content-end'}`}>
      <div 
        className={`p-2 rounded ${esBot ? 'bg-secondary text-white' : 'bg-primary text-white'}`} 
        style={{ maxWidth: '85%' }}
      >
        <small className="d-block text-white-50 mb-1" style={{ fontSize: '0.75rem' }}>
          {esBot ? '🤖 Terminal Admin' : '👨‍💻 Tú'}
        </small>
        <span>{mensaje.texto}</span>
      </div>
    </div>
  );
};