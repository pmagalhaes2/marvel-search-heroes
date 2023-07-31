// import { useParams } from "react-router-dom";
// import { Card } from "../../components/Card";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container/styles";
import { Paragraph } from "../../components/Paragraph";
import characterInfos from "./character";
import {
  Header,
  CharacterContainer,
  DetailsContainer,
  InfosContainer,
  ComicsContainer,
  Content,
  // ComicsContainer,
} from "./styles";
// import { useEffect, useState } from "react";
// import { getCharacterById } from "../../services/MarveAPI";

export interface ICharacterInfos {
  id: number;
  name: string;
  description: string;
  modified: string;
  comics: {
    available: number;
    items: [resourceURI: string, name: string];
  };
  series: {
    available: number;
  };
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const Character = () => {
  // const { characterId } = useParams();

  // const [characterInfos, setCharacterInfos] = useState<ICharacterInfos[]>([]);

  // useEffect(() => {
  //   getCharacterById(characterId as string).then((response) =>
  //     setCharacterInfos(response)
  //   );
  // }, [characterId]);

  return (
    <Container>
      <Header>
        <img
          src="/images/Logo.svg"
          alt="Imagem do logo Marvel com texto lateral escrito Search Heros"
        />
      </Header>
      {characterInfos.map((character) => {
        const { id, name, description, modified, comics, series, thumbnail } =
          character;

        return (
          <Content key={id}>
            <CharacterContainer>
              <DetailsContainer>
                <h1>{name}</h1>
                <Paragraph>{description}</Paragraph>
                <InfosContainer>
                  <div>
                    <Paragraph variant={"grey"}>Quadrinhos</Paragraph>
                    <Paragraph variant={"grey"}>
                      <img src="/images/Book.svg" alt="" />
                      <p>{comics.available}</p>
                    </Paragraph>
                  </div>
                  <div>
                    <Paragraph variant={"grey"}>Filmes</Paragraph>
                    <Paragraph variant={"grey"}>
                      <img src="/images/Video.svg" alt="" />
                      <p>{series.available}</p>
                    </Paragraph>
                  </div>

                  <InfosContainer>
                    <div>
                      <Paragraph variant={"grey"}>
                        Avaliação: <img src="/images/Rating.svg" alt="" />
                      </Paragraph>
                    </div>
                  </InfosContainer>

                  <InfosContainer>
                    <div>
                      <Paragraph variant={"grey"}>
                        Último quadrinho:{" "}
                        {modified.slice(0, 10).split("-").reverse().join("/")}
                      </Paragraph>
                    </div>
                  </InfosContainer>
                </InfosContainer>
              </DetailsContainer>
              <img
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt={`Imagem do personagem ${name}`}
              />
            </CharacterContainer>
            <ComicsContainer>
              <h3>Últimos lançamentos</h3>
              <div>
                <Card>
                  <img
                    src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg"
                    alt=""
                  />
                  <h4>Free Comic Book Day</h4>
                </Card>
                <Card>
                  <img
                    src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg"
                    alt=""
                  />
                  <h4>Free Comic Book Day</h4>
                </Card>
                <Card>
                  <img
                    src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg"
                    alt=""
                  />
                  <h4>Free Comic Book Day</h4>
                </Card>
                <Card>
                  <img
                    src="http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg"
                    alt=""
                  />
                  <h4>Free Comic Book Day</h4>
                </Card>
              </div>
            </ComicsContainer>
          </Content>
        );
      })}
    </Container>
  );
};
