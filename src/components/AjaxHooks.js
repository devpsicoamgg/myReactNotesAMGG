import React, { useState, useEffect } from 'react';

function Personaje ({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}


function AjaxHooks() {
    const [characters, setCharacters] = useState([]);

/*  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/?page=1";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        const characters = json.results.map((character) => ({
          id: character.id,
          name: character.name,
          avatar: character.image,
        }));

        setCharacters(characters);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);
*/
  
    useEffect(() => {
      const getCharacters = async () => {
        try {
          const url = "https://rickandmortyapi.com/api/character/?page=1";
          const res = await fetch(url);
          const json = await res.json();
  
          const characters = await Promise.all(json.results.map(async (character) => {
            const characterRes = await fetch(character.url);
            const characterData = await characterRes.json();
  
            return {
              id: characterData.id,
              name: characterData.name,
              avatar: characterData.image,
            };
          }));
  
          setCharacters(characters);
        } catch (error) {
          console.log('Error:', error);
        }
      };
  
      getCharacters();
    }, []);
  
    return (
      <>
        <h2>Personajes de Rick and Morty</h2>
        <div className="character-hooks">
          {characters.length === 0 ? (
            <h3>Loading</h3>
          ) : (
            characters.map((character) => (
              <Personaje key={character.id} name={character.name} avatar={character.avatar} />
            ))
          )}
        </div>
      </>
    );
  }
  
  export default AjaxHooks;
  