// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App


// import { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar";
// import MemeGrid from "./components/MemeGrid";

// export default function App() {
//   const [memes, setMemes] = useState([]);
//   const [filtered, setFiltered] = useState([]);

//   useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((data) => {
//         setMemes(data.data.memes);
//         setFiltered(data.data.memes);
//       });
//   }, []);

//   const handleSearch = (query) => {
//     const q = query.toLowerCase();
//     const results = memes.filter(
//       (meme) => meme.name.toLowerCase().includes(q)
//     );
//     setFiltered(results);
//   };

//   return (
//     <div className="w-full flex flex-col items-center py-12">
//       <h1 className="text-4xl font-bold mb-10 text-gray-800">
//         Emoji Search
//       </h1>

//       <SearchBar onSearch={handleSearch} />

//       <MemeGrid memes={filtered} />
//     </div>
//   );
// }

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
