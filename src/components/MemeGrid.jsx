import MemeCard from "./MemeCard";

export default function MemeGrid({ memes }) {
  return (
    <div className="w-full max-w-5xl">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>

      <p className="text-center mt-8 text-gray-700">
        Found {memes.length} emojis
      </p>
    </div>
  );
}
