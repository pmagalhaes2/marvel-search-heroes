import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container/styles";
import { Paragraph } from "../../components/Paragraph";
import {
  Header,
  CharacterContainer,
  DetailsContainer,
  InfosContainer,
  ComicsContainer,
  Content,
} from "./styles";
import { useEffect, useState } from "react";
import {
  ICharacterInfos,
  IComicsInfos,
  getCharacterById,
  getComicsByCharacterId,
} from "../../services/MarveAPI";

export const Character = () => {
  const { characterId } = useParams();

  const [characterInfos, setCharacterInfos] = useState<ICharacterInfos[]>([]);
  const [comicsInfos, setComicsInfos] = useState<IComicsInfos[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const characterData = await getCharacterById(characterId as string);
        setCharacterInfos(characterData);

        const comicsData = await getComicsByCharacterId(
          characterId as string,
          10
        );
        setComicsInfos(comicsData);

        if (characterData && comicsData) {
          setLoading(false);
        }
      } catch (err: unknown) {
        setError("Houve algum erro para carregar os dados!");
      }
    };
    fetchData();
  }, [characterId]);

  return (
    <>
      {characterInfos && comicsInfos && (
        <Container>
          <Header>
            <img
              src="/images/Logo.svg"
              alt="Imagem do logo Marvel com texto lateral escrito Search Heros"
            />
          </Header>
          {error && <p className="message">Ops, ocorreu um erro..</p>}
          {loading && <p className="message">Carregando dados..</p>}
          {characterInfos &&
            characterInfos.map((character: ICharacterInfos) => {
              const {
                id,
                name,
                description,
                modified,
                comics,
                series,
                thumbnail,
              } = character;

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
                            <img
                              src="/images/Book.svg"
                              alt="Ícone livro com cor de fundo vermelho"
                            />
                            <p>{comics.available}</p>
                          </Paragraph>
                        </div>
                        <div>
                          <Paragraph variant={"grey"}>Filmes</Paragraph>
                          <Paragraph variant={"grey"}>
                            <img
                              src="/images/Video.svg"
                              alt="Ícone vídeo com cor de fundo vermelho"
                            />
                            <p>{series.available}</p>
                          </Paragraph>
                        </div>

                        <InfosContainer>
                          <div>
                            <Paragraph variant={"grey"}>
                              Avaliação:{" "}
                              <img
                                src="/images/Rating.svg"
                                alt="Ícones estrelas com cor de fundo vermelho"
                              />
                            </Paragraph>
                          </div>
                        </InfosContainer>

                        <InfosContainer>
                          <div>
                            <Paragraph variant={"grey"}>
                              Último quadrinho:{" "}
                              {modified
                                .slice(0, 10)
                                .split("-")
                                .reverse()
                                .join("/")}
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
                      {comicsInfos.length > 0 ? (
                        comicsInfos.map((comicInfo: IComicsInfos) => {
                          const { id, title, thumbnail } = comicInfo;

                          return (
                            <Card key={id}>
                              <img
                                src={`${thumbnail.path}.${thumbnail.extension}`}
                                alt={`Imagem do quadrinho ${title}`}
                              />
                              <h4>{title}</h4>
                            </Card>
                          );
                        })
                      ) : (
                        <p>Nenhum quadrinho foi encontrado :(</p>
                      )}
                    </div>
                  </ComicsContainer>
                </Content>
              );
            })}
        </Container>
      )}
    </>
  );
};
