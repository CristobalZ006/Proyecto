export const ChatInput = ({ input, setInput, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="d-flex p-3 border-top bg-white">
      <input 
        type="text" 
        className="form-control me-2"
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Ej: respaldar ventas..."
      />
      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};