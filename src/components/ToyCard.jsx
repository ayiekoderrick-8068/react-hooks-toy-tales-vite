import React from "react";

function ToyCard({ toy, onDelete, onLike }) {
  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((r) => r.json())
      .then(onLike);
  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, { method: "DELETE" }).then(
      () => onDelete(toy.id)
    );
  }

  return (
    <div
      className="flex flex-col items-center text-center border border-gray-300 rounded-lg p-4 w-56 shadow-[3px_4px_0px_#e04b52] bg-white"
      data-testid="toy-card"
    >
      <h2 className="text-xl font-bold mb-2">{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="h-44 w-auto object-contain mb-2" />
      <p className="mb-3 text-gray-700">{toy.likes} Likes </p>
      <button
        className="bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 text-white text-base px-4 py-2 rounded cursor-pointer mb-2 w-full transition-colors"
        onClick={handleLike}
      >
        Like {"<3"}
      </button>
      <button
        className="bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 text-white text-base px-4 py-2 rounded cursor-pointer w-full transition-colors"
        onClick={handleDelete}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
