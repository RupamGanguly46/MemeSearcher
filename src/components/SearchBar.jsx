import { useState } from "react";
import { FiSearch } from "react-icons/fi";


export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // prevent empty searches if you want
    // if (!query.trim()) return;

    setIsLoading(true);

    // small delay so the animation is visible (remove if you don't want it)
    await new Promise((r) => setTimeout(r, 300));

    onSearch(query);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-12 w-full max-w-3xl items-center"
    >
      {/* INPUT */}
      <input
        type="text"
        placeholder="Search emojis..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`
          flex-1 py-3 px-5 bg-white shadow-md
          rounded-xl
          border border-transparent
          transition-all duration-150 ease-in-out
          focus:outline-none
          focus:border-gray-700
          focus:ring-0
        `}
      />

      <div className="w-4" />

      {/* BUTTON */}
        <button
        type="submit"
        disabled={isLoading}
        className={`
            flex items-center justify-center
            min-h-[44px]
            transition-all duration-300 ease-in-out
            ${isLoading ? "bg-gray-500 px-6" : "bg-black px-4"}
            text-white
            rounded-lg
            shadow-md
            select-none

            hover:bg-neutral-800
            hover:brightness-110
            hover:backdrop-blur-sm
        `}
        >
        {isLoading ? (
            "Searching..."
        ) : (
            <FiSearch size={16} className="text-white" />
        )}
        </button>



    </form>
  );
}
