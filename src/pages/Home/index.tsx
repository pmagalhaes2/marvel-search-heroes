import { useCallback, useEffect, useState } from "react";
import { ICharacterInfo, getAllCharacters } from "../../services/MarveAPI";

export const Home = () => {
  const [characters, setCharacters] = useState<ICharacterInfo[]>([]);

  const fetchData = useCallback(() => {
    getAllCharacters().then((response: ICharacterInfo[]) =>
      setCharacters(response)
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      {characters.map((character) => (
        <div key={character.id}>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
          <p>{character.name}</p>
        </div>
      ))}
    </>
  );
};
