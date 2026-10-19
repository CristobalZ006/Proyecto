export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      className="form-control bg-dark text-white"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}