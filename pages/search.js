import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { Container } from "../styles/globalStyle";
import { SearchPage } from "../components/SearchPage/SearchPage";
import { PrismaClient } from "@prisma/client";

export default function Search({ users }) {
  const data = users.map((user) => ({
    image: user.avatar_url,
    value: user.id,
    label: user.id,
    description: user.name,
  }));

  return (
    <Container>
      <Head>
        <title>الوسطاء العرب</title>
        <meta name="description" content="البحث عن نصاب" />
        <meta name="Keywords" content="الوسطاء العرب, البحث عن نصاب, الوسطاء" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/905155453028302889/905895470730199100/--1.png"
        />
      </Head>

      <Navbar />
      <SearchPage data={data} />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const users = await prisma.users.findMany();

  return {
    props: {
      users,
    },
  };
}
