import React from "react";
import { Header } from "./styles";

const Home = (): JSX.Element => {
  return (
    <Header className="border-b-4 border-amber-600">
      <h1 className="font-mono font-bold">Memória, trauma e colonialismo</h1>
      <h2 className="font-mono font-bold">Sobre a página</h2>
      <p className="text-xl">
        Este ensaio explora como tecnologias digitais podem ser usadas para
        preservar memórias de traumas coloniais, inspirando-se nos trabalhos de
        Graça Kilomba e Rita Segato. O projeto propõe a criação de um site
        interativo como repositório de relatos pessoais e históricos, promovendo
        a conscientização, o diálogo e a reconciliação. Além disso, destaca o
        papel das redes sociais na ampliação da visibilidade dessas histórias e
        na união das comunidades na luta pela justiça social.
      </p>
    </Header>
  );
};

export default Home;
