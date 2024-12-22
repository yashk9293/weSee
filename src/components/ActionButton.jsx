export default function ActionButton({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors border border-purple-400"
      >
        {label}
      </button>
    )
  }
  
  