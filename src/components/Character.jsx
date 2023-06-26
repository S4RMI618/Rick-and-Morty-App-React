import React from "react";

function Character({ character }) {
  return (
      <div className="d-flex flex-column align-items-center justify-content-center card p-4 bg-primary shadow-lg">
        <h2>{character.name}</h2>
        <img className="img-fluid rounded-circle" src={character.image} alt={character.name} />
        <div className="col-12 d-flex justify-content-between flex-md-column text-white">
        <p><strong>Origin: </strong>{character.origin.name}</p>
        <p><strong>Specie: </strong>{character.species}</p>
        <p><strong>Gender: </strong>{character.gender}</p>
        </div>
      </div>
  );
}

export default Character;
