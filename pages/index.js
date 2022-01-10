import Head from "next/head";
import { Navbar } from "../components/Navbar/Navbar";
import { Hero } from "../components/Hero/Hero";
import { Container } from "../styles/globalStyle";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>الوسطاء العرب</title>
        <meta
          name="description"
          content="الوُسطاء العرب خادم عربي يوفر خدمة الوساطة ، يقوم الخادم بجمع كل الوسطاء العرب الموثوقين لجعل الديسكورد بيئة آمنة ، حيث يعمل الوسيط على ترتيب المعاملات والعمليات الخاصة بالصفقات بين طرفي الصفقة ."
        />
        <meta name="Keywords" content="الوسطاء العرب, البحث عن نصاب, الوسطاء" />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/905155453028302889/905895470730199100/--1.png"
        />
      </Head>

      <Navbar />
      <Hero />
      <Services />
    </Container>
  );
}
