
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MemeGrid from "./components/MemeGrid";

export default function App() {
  const [memes, setMemes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemes(data.data.memes);
      });
  }, []);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    const results = memes.filter((meme) =>
      meme.name.toLowerCase().includes(q)
    );

    setFiltered(results);
    setHasSearched(true); 
  };

  return (
    <div className="w-full flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Emoji Search
      </h1>

      <SearchBar onSearch={handleSearch} />

      {hasSearched && <MemeGrid memes={filtered} />}
    </div>
  );
}
