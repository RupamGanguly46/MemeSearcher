import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 300));

    onSearch(query);
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mb-12 w-full max-w-3xl items-center"
    >
      <div
        className="
          w-full
          rounded-lg
          p-[2px]

          border-[2px] border-transparent   /* transparent thickness → prevents movement */
          focus-within:border-gray-400      /* slightly darker, subtle border */
          transition-all duration-150
        "
      >
        <input
          type="text"
          placeholder="Search emojis..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="
            w-full h-[44px]
            px-4
            bg-white
            rounded-lg
            shadow-md
            border border-transparent
            focus:outline-none
          "
        />
      </div>

      <div className="w-4" />

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
