import React, { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, image, likes: 0 }),
    })
      .then((r) => r.json())
      .then((newToy) => {
        onAddToy(newToy);
        setName("");
        setImage("");
      });
  }

  return (
    <div className="bg-indigo-600/80 px-4 py-4">
      <form className="add-toy-form flex flex-wrap gap-2 items-center w-4/5" onSubmit={handleSubmit}>
        <h3 className="text-white text-xl font-bold w-full">Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="rounded h-9 w-3/5 text-lg px-2 font-mono"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="rounded h-9 w-3/5 text-lg px-2 font-mono"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 text-white text-lg px-4 h-9 rounded cursor-pointer font-mono transition-colors"
        />
      </form>
    </div>
  );
}

export default ToyForm;
