import { CardStyle, Content } from "./Styles";
import { Title, Text } from "@mantine/core";

export const Card = ({ number, title, description }) => {
  return (
    <CardStyle>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Content className="content">
        <h2>0{number}</h2>
        <Title order={3}>{title}</Title>
        <Text>{description}</Text>
      </Content>
    </CardStyle>
  );
};
