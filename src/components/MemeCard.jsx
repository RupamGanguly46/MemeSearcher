export default function MemeCard({ meme }) {
  return (
    <div className="p-4 rounded-xl bg-white shadow-md flex flex-col items-center text-center">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-20 h-20 object-cover mb-3 rounded-lg"
      />
      <h2 className="font-semibold text-gray-900">{meme.name}</h2>
      <p className="text-gray-500 text-sm mt-1">
        meme, fun, imgflip
      </p>
    </div>
  );
}
