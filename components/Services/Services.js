import { ServicesContainer, ServicesWrapper, ButtonWrapper } from "./Styles";
import { Card } from "../Card/Card";
import { FeaturesData } from "./Data";
import { Title, Button } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Services = () => {
  return (
    <ServicesContainer>
      <Title align="center">خدمات الوسطاء العرب</Title>
      <ServicesWrapper>
        {FeaturesData.map((feature, index) => (
          <Card
            number={index + 1}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </ServicesWrapper>

      <ButtonWrapper>
        <Link href="/search">
          <Button
            rightIcon={<BsSearch />}
            variant="light"
            size="md"
            style={{ marginBottom: 240 }}
          >
            البحث عن نصاب
          </Button>
        </Link>
      </ButtonWrapper>
    </ServicesContainer>
  );
};

export default Services;
