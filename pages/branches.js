import Head from "next/head";
import { Title } from "@mantine/core";
import { CommingContainer } from "../components/Comming/Styles";
import { Container } from "../styles/globalStyle";
import { Navbar } from "../components/Navbar/Navbar";

export default function Branches() {
  return (
    <Container>
      <Head>
        <title>الوسطاء العرب</title>
        <meta name="description" content="الفروع" />
        <meta name="Keywords" content="الوسطاء العرب, البحث عن نصاب, الوسطاء" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/905155453028302889/905895470730199100/--1.png"
        />
      </Head>

      <Navbar />
      <CommingContainer>
        <Title>Comming Soon</Title>
      </CommingContainer>
    </Container>
  );
}
