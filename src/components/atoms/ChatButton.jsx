export const ChatButton = ({ isOpen, toggleChat }) => {
  return (
    <button 
      onClick={toggleChat} 
      className={`btn ${isOpen ? 'btn-danger' : 'btn-dark'} position-fixed rounded-circle shadow`}
      style={{ bottom: '20px', right: '20px', width: '60px', height: '60px', zIndex: 1050 }}
    >
      {isOpen ? 'X' : '💬'}
    </button>
  );
};