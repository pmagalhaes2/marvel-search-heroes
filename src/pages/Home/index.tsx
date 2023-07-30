import { CardsContainer, Header } from "./styles";
import data from "./characters";
import { ChangeEvent, useEffect, useState } from "react";
import { ICharacterInfo } from "../../services/MarveAPI";
import { Input } from "../../components/Input";
import { Container } from "../../components/Container/styles";
import { Card } from "../../components/Card";
import { Paragraph } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  // const [characters, setCharacters] = useState<ICharacterInfo[]>(characters);

  // const fetchData = useCallback(() => {
  //   getAllCharacters().then((response: ICharacterInfo[]) =>
  //     setCharacters(response)
  //   );
  // }, []);

  //   useEffect(() => {
  //     fetchData();
  //   }, [fetchData]);

  const [characters] = useState<ICharacterInfo[]>(data);

  const [search, setSearch] = useState("");

  const [filtered, setFiltered] = useState<ICharacterInfo[]>([]);

  const [favorite, setFavorite] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFiltered(
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [characters, search]);

  return (
    <Container>
      <Header>
        <img src="src/assets/images/Logo.svg" alt="" />
        <h1>Explore o universo</h1>
        <Paragraph>
          Mergulhe no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </Paragraph>
        <Input placeholder={"Procure por heróis"} onChange={handleChange} />
      </Header>
      <CardsContainer>
        <Paragraph variant={"soft-grey"}>
          Encontrados {filtered.length} heróis
        </Paragraph>
        <p></p>
        <Paragraph variant={"red"}>Ordenar por nome - A/Z</Paragraph>
        <Paragraph variant={"red"}>
          <img src="src/assets/images/Full-heart.svg" alt="" />
          Somente favoritos
        </Paragraph>
        {filtered.map((character) => (
          <Card key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={`Imagem do personagem ${character.name}`}
            />
            <div>
              <h4>{character.name}</h4>
              <img
                src={
                  favorite
                    ? "src/assets/images/Full-heart.svg"
                    : "src/assets/images/Heart.svg"
                }
                id={character.id.toString()}
                alt="Imagem desenho coração com borda vermelha e sem cor de fundo"
                onClick={() => setFavorite(!favorite)}
              />
            </div>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};
