import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLike }) {
  return (
    <div className="mx-8 my-8 flex flex-wrap gap-8 justify-center">
      {toys.map((toy) => (
        <ToyCard key={toy.id} toy={toy} onDelete={onDelete} onLike={onLike} />
      ))}
    </div>
  );
}

export default ToyContainer;
