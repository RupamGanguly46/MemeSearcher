import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-12 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search emojis..."
        className="flex-1 p-3 rounded-l-xl bg-white shadow-lg outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-black text-white px-4 rounded-r-xl shadow-lg flex items-center justify-center"
      >
        🔍
      </button>
    </form>
  );
}
