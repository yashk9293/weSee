export default function ActionButton({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
      >
        {label}
      </button>
    )
  }
  
  