import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface VercelInviteUserEmailProps {
  name?: string;
  previeWText?: string;
}

export const VercelInviteUserEmail = ({
  name = "",
  previeWText = "Bem vindo",
}: VercelInviteUserEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        {name}, {previeWText}
      </Preview>
      <Tailwind>
        <Body className="bg-white my-2 mx-auto mx-auto font-sans pt-10">
          <Img
            className="mx-auto w-24 h-24  rounded-full"
            src="https://avatars.githubusercontent.com/u/135350341?v=4"
            alt="Foto de perfil"
          ></Img>
          <Container className="p-8 rounded-lg shadow-lg">
            <Heading className="text-xg ">Fala Dev 👋🏽</Heading>
            <Heading className="text-xl pt-3">
              Olá, me chamo Rodolpho Reis. 🧠
            </Heading>
            <Text className="text-lg font-medium text-gray-700">
              Sou um profissional apaixonado por números, desafios, lógica e
              problemas, formado em Matemática e Engenharia Civil. Minha jornada
              na programação começou durante a Engenharia Civil, onde me envolvi
              com lógica e linguagem de programação. Resido em Guimarães há
              cinco anos, dedicando meus dias à programação. Utilizo meu
              conhecimento em matemática e engenharia para solucionar problemas
              de forma prática, aplicando raciocínio lógico em meus projetos.
            </Text>
            <Text className="text-lg font-medium text-gray-700">
              Minhas habilidades incluem aprender rapidamente, resolução de
              problemas, princípios de design responsivo, otimização de sites e
              os métodos de organização de código. Tenho conhecimentos em ,
              JavaScript, TypeScript , React, Postgres, Node, HTML , CSS, Sass,
              Styles Components, Material UI entre outras tecnologias. Ainda
              estou me agarrando com entusiasmo a quaisquer outras linguagens de
              programação, frameworks ou princípios que posso integrar na web.
              📖 💻
            </Text>
            <Text className="text-lg font-medium text-gray-700">
              Estou sempre em busca de novos desafios e oportunidades para
              crescer, sempre buscando fazer as coisas com excelência e melhor a
              cada dia.
            </Text>
            <div className="flex justify-center pt-10">
              <Button
                href="https://www.linkedin.com/in/rodolphoreis/"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-4"
              >
                Linkedin
              </Button>
              <Button
                href="https://github.com/rodolphoreis"
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-4"
              >
                GitHub
              </Button>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VercelInviteUserEmail.PreviewProps = {
  name: "Rodolpho",
} as VercelInviteUserEmailProps;

export default VercelInviteUserEmail;
