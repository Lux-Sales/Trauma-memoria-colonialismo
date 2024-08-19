import React from "react";
import {
  Body,
  Content,
  ContentColum,
  Header,
  TextBox,
  VerticalDivider,
} from "./styles";
import photo from "../../assets/banner.png";

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
            <img src={photo} alt="" />
            <TextBox>
              <h3>Algum titulo aqui</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
                maiores dolorem expedita fuga doloribus odio asperiores tempora
                exercitationem autem nesciunt non quasi ad reprehenderit vero,
                dolores officiis veniam rem! Aut totam sunt aspernatur magnam
                veniam dolor odio odit. A accusantium repudiandae quam mollitia
                ex earum natus illum consequatur qui, molestiae officiis
                deleniti nisi fugiat dicta consectetur voluptas quos nihil!
              </p>
            </TextBox>
          </ContentColum>
          <VerticalDivider />
          <ContentColum>
            <TextBox>
              <h3>Algum titulo aqui</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eos
                maiores dolorem expedita fuga doloribus odio asperiores tempora
                exercitationem autem nesciunt non quasi ad reprehenderit vero,
                dolores officiis veniam rem! Aut totam sunt aspernatur magnam
                veniam dolor odio odit. A accusantium repudiandae quam mollitia
                ex earum natus illum consequatur qui, molestiae officiis
                deleniti nisi fugiat dicta consectetur voluptas quos nihil!
              </p>
            </TextBox>
            <img src={photo} alt="" />
          </ContentColum>
        </Content>
      </Body>
    </>
  );
};

export default Home;
