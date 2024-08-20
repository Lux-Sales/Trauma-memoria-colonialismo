import React from "react";
import {
  Body,
  Content,
  ContentColum,
  Footer,
  Header,
  Member,
  SocialMedia,
  Team,
  TeamList,
  TextBox,
  VerticalDivider,
} from "./styles";
import banner from "../../assets/banner.png";
import lucas from "../../assets/lucas.png";
import marina from "../../assets/marina.jpeg";
import davi from "../../assets/davi.jpeg";
import pedro from "../../assets/pedro.jpg";
import thiago from "../../assets/thiago.jpeg";
import instagramLogo from "../../assets/instagramLogo.svg";
import spotifyLogo from "../../assets/spotifyLogo.svg";
import unbLogo from "../../assets/unbLogo.jpeg";
import escravidao from "../../assets/escravidao.jpg";
import igualdade from "../../assets/igualdade.jpeg";

const Home = (): JSX.Element => {
  return (
    <>
      <Header className="border-b-4 border-amber-600">
        <h1 className="font-mono font-bold">Memória, trauma e colonialismo</h1>
        <h2 className="font-mono font-bold">Sobre a página</h2>
        <p className="text-xl">
          Este ensaio explora como tecnologias digitais podem ser usadas para
          preservar memórias de traumas coloniais, inspirando-se nos trabalhos
          de Graça Kilomba e Rita Segato. O projeto propõe a criação de um site
          interativo como repositório de relatos pessoais e históricos,
          promovendo a conscientização, o diálogo e a reconciliação. Além disso,
          destaca o papel das redes sociais na ampliação da visibilidade dessas
          histórias e na união das comunidades na luta pela justiça social.
        </p>
      </Header>
      <Body>
        <h1>Ao que se refere memória, trauma e colonialismo?</h1>
        <Content>
          <ContentColum>
            <img src={escravidao} />
            <TextBox>
              <h3>Nossa luta</h3>
              <p>
                A luta para mitigar o trauma colonial ocorre desde que o trauma
                propriamente nasceu. Nesse contexto, quando o Brasil
                encontrava-se na condição de colônia, houve o desenvolvimento de
                uma narrativa pautada na diferença racial. Em primeira
                instância, houve a separação da população em sujeito e objetos
                de acordo com bell hooks.
              </p>
            </TextBox>
          </ContentColum>
          <VerticalDivider />
          <ContentColum>
            <TextBox>
              <h3>O trauma colonial</h3>
              <p>
                Segundo o IBGE em 2023, 56,1% da população brasileira é composta
                por pessoas pretas. Apesar disso, somente 48,3% desse grupo
                estão no curso superior e menos. Em outro cenário, 65,1% da
                população preta brasileira está desempregada. Além disso, a
                grande maioria não conhece a sua origem cultural. Os dados
                expostos mostram a desigualdade racial que ocorre no Brasil,
                consequência do trauma colonial.
              </p>
            </TextBox>
            <img src={igualdade} />
          </ContentColum>
        </Content>
      </Body>
      <Team>
        <h1>Nosso time</h1>
        <TeamList>
          <Member>
            <img src={davi} />
            <span>
              Davi
              <br />
              Camilo
            </span>
          </Member>
          <Member>
            <img src={lucas} />
            <span>
              Lucas
              <br />
              Sales
            </span>
          </Member>
          <Member title="A mais calma">
            <img src={marina} />
            <span>
              Marina
              <br />
              Galdi
            </span>
          </Member>
          <Member>
            <img src={pedro} />
            <span>
              Pedro
              <br />
              Dionísio
            </span>
          </Member>
          <Member>
            <img src={thiago} />
            <span>
              Thiago
              <br />
              Alves
            </span>
          </Member>
        </TeamList>
      </Team>
      <SocialMedia>
        <h1>Nos sigam nas redes sociais!</h1>
        <div>
          <img
            src={instagramLogo}
            onClick={() => {
              window.open(
                "https://www.instagram.com/cicatrizesdigitais/",
                "_blank",
              );
            }}
          />
          <img
            src={spotifyLogo}
            onClick={() => {
              window.open(
                "https://open.spotify.com/show/00tA5N1DyJmbanlvM0R1Eu",
                "_blank",
              );
            }}
          />
        </div>
      </SocialMedia>
      <Footer>
        <div>
          <img src={unbLogo} />
          <div>
            <a
              href="https://www.instagram.com/cicatrizesdigitais/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://open.spotify.com/show/00tA5N1DyJmbanlvM0R1Eu"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
          </div>
        </div>
        <span>
          Developed by{" "}
          <a
            href="https://github.com/Lux-Sales/"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Sales
          </a>
        </span>
      </Footer>
    </>
  );
};

export default Home;
