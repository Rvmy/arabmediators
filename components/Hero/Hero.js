import {
  HeroContainer,
  InfoColumn,
  InfoRow,
  ImgWrapper,
  Img,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  HeroImg,
} from "./Styles";
import { ContainerStyle } from "../../styles/globalStyle";

export function Hero() {
  return (
    <>
      <HeroContainer>
        <ContainerStyle>
          <InfoRow imgStart={true}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>مكانك المثالي للضمان في التعامل</TopLine>
                <Heading color="#B0404E">الوُسطاء العرب</Heading>
                <Subtitle color="#7a6670">
                  الوُسطاء العرب خادم عربي يوفّر حماية لك وذلك بتقديم خدمة
                  الوساطه اذ يجمع الخادم افضل واضمن الوسطاء لجعل تعاملك مع
                  البائع سليم وضامناً لحقك وأيضاً خدمة لتشهير المُحتالين لغرض
                  التحذير منهم و عدم التعامل معهم يوجد لدينا فرع اخر يختص
                  بالتسوّق وعرض مُنتجاتك الخاصة بك لغرض الإستبدال بنُقاط
                  الكريدتس او غيرها و وغير مُختص بالبيع والشراء
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={true}>
                <Img>
                  <HeroImg src="https://cdn.discordapp.com/attachments/905155453028302889/906249645552963584/15.png" />
                </Img>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </ContainerStyle>
      </HeroContainer>
    </>
  );
}
