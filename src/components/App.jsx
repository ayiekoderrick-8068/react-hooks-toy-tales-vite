import React, { useState } from "react";
import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import { useEffect } from "react";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((r) => r.json())
      .then(setToys);
  }, []);

  function handleAddToy(newToy) {
    setToys((toys) => [...toys, newToy]);
  }

  function handleDeleteToy(id) {
    setToys((toys) => toys.filter((t) => t.id !== id));
  }

  function handleLikeToy(updatedToy) {
    setToys((toys) => toys.map((t) => (t.id === updatedToy.id ? updatedToy : t)));
  }

  return (
    <div className="min-h-screen bg-gray-100 font-mono">
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="text-center py-4">
        <button
          onClick={() => setShowForm((s) => !s)}
          className="bg-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 text-white text-lg px-6 py-3 rounded cursor-pointer transition-colors"
        >
          Add a Toy
        </button>
      </div>
      <ToyContainer toys={toys} onDelete={handleDeleteToy} onLike={handleLikeToy} />
    </div>
  );
}

export default App;
