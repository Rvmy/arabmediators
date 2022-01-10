import { HeroContainer, SearchStyle } from "./Styles";
import { ContainerStyle } from "../../styles/globalStyle";
import { Group, Avatar, Text, Select, Title } from "@mantine/core";
import { BsSearch } from "react-icons/bs";
import { forwardRef } from "react";

const SelectItem = forwardRef(
  ({ image, label, description, ...others }, ref) => {
    return <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  }
);


export function SearchPage({ data }) {
  return (
    <HeroContainer>
      <ContainerStyle>
        <SearchStyle>
          <Title
            order={1}
            align="center"
            style={{ marginBottom: 20 }}
            weight={700}
          >
            قم بالبحث عن النصاب بواسطة الايدي الخاص به
          </Title>
          <Text
            size="sm"
            color="red"
            align="center"
            style={{ marginBottom: 15 }}
          >
            في حال لم يكُن اسمه ضمن سجل المُحتالين هذا لا يجعله مضموناً إنما لم
            يأتِ أي بلاغ مُسبق عليه او قضيتهُ قيد التعامل
          </Text>
          <Select
            sx={{
              width: "60%",
              input: { backgroundColor: "#ffffff0d" },
            }}
            styles={{
              dropdown: {
                backgroundColor: "#ffffff0d",
                borderColor: "rgba(0, 0, 0, 0.3)",
              },
              hovered: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
              selected: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
            }}
            transition="pop"
            transitionDuration={80}
            transitionTimingFunction="ease"
            placeholder="User ID"
            size="md"
            searchable
            clearable
            icon={<BsSearch />}
            itemComponent={SelectItem}
            data={data}
            nothingFound="ليس مسجل بقائمه النصابيين"
          />
        </SearchStyle>
      </ContainerStyle>
    </HeroContainer>
  );
}
