export function ButtonToggle({ onClick, children }) {
  return (
    <button
      className="btn-toggle"
      onClick={onClick}
    >
      {children}
    </button>
  );

}
