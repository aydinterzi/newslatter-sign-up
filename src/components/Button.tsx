function Button({ text, onClick }) {
  return (
    <button
      className="bg-charcoal-grey text-white p-4 rounded-lg hover:bg-tomato hover:bg-gradient-to-l"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
