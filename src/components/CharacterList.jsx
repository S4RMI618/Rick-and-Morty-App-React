import { useState, useEffect } from "react";
import Character from "./Character";

function NavPage( {url, setUrl} ) {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="h5">Page: {url}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setUrl(url + 1)
      }
      >
        Page {url + 1}
      </button>
    </div>
  );
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${url}`)
      .then((Response) => Response.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data);
        /* setUrl(data.info.next); */
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [url]);

  return (
    <>
      <NavPage url={url} setUrl={setUrl} />
      {loading ? (
        <h1 className="text-center">Loading...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => (
            <div
              className="col-12 col-md-6 col-lg-4 d-flex align-items-center justify-content-center my-4"
              key={character.id}
            >
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
      <NavPage url={url} setUrl={setUrl} />
    </>
  );
}

export default CharacterList;
