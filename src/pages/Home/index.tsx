import { CardsContainer, Header } from "./styles";
// import data from "./characters";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { ICharacterInfo, getAllCharacters } from "../../services/MarveAPI";
import { Input } from "../../components/Input";
import { Container } from "../../components/Container/styles";
import { Card } from "../../components/Card";
import { Paragraph } from "../../components/Paragraph";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [characters, setCharacters] = useState<ICharacterInfo[]>([]);

  const [search, setSearch] = useState("");

  const [filtered, setFiltered] = useState<ICharacterInfo[]>([]);

  const [favorite, setFavorite] = useState(false);

  const [ordered, setOrdered] = useState(false);

  const [originalCharacters, setOriginalCharacters] = useState<
    ICharacterInfo[]
  >([]);

  const navigate = useNavigate();

  const fetchData = useCallback(() => {
    getAllCharacters().then((response: ICharacterInfo[]) =>
      setCharacters(response)
    );
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOrdered = () => {
    setOrdered(!ordered);
    if (!ordered) {
      setOriginalCharacters([...characters]);
    } else {
      setFiltered([...originalCharacters]);
    }
  };

  useEffect(() => {
    setFiltered(
      characters.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [characters, search]);

  useEffect(() => {
    if (ordered) {
      setFiltered([...filtered].sort((a, b) => a.name.localeCompare(b.name)));
    }
  }, [ordered]);

  return (
    <Container>
      <Header>
        <img
          src="/images/Logo.svg"
          alt="Imagem do logo Marvel com texto lateral escrito Search Heros"
        />
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
        <Paragraph variant={"red"}>
          <img
            src="/images/Superhero.svg"
            alt="Ícone super heroi com dor de fundo vermelha"
          />
          Ordenar por nome - A/Z
          <img
            src={ordered ? "/images/Toggle-on.svg" : "/images/Toggle-off.svg"}
            alt={`Ícone toggle ${ordered ? "ativado" : "desativado"}`}
            onClick={handleOrdered}
          />
        </Paragraph>
        <Paragraph variant={"red"}>
          <img
            src="/images/Full-heart.svg"
            alt="Ícone coração com cor de fundo vermelha"
          />
          Somente favoritos
        </Paragraph>
        {filtered.map((character) => (
          <Card key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={`Imagem do personagem ${character.name}`}
              title={`More details about character ${character.name}`}
              onClick={() => navigate(`/character/${character.id}`)}
            />
            <div>
              <h4
                onClick={() => navigate(`/character/${character.id}`)}
                title={`More details about character ${character.name}`}
              >
                {character.name}
              </h4>
              <img
                src={favorite ? "/images/Full-heart.svg" : "/images/Heart.svg"}
                id={character.id.toString()}
                alt="Ícone coração com borda vermelha e sem cor de fundo"
                onClick={() => setFavorite(!favorite)}
              />
            </div>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
};
