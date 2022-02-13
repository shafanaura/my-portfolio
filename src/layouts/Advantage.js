import styled from "styled-components";
import { CardAdvantage } from "../components/CardAdvantage";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Advantage = () => {
  return (
    <Container>
      <CardAdvantage
        title="Javascript"
        icon="https://img.icons8.com/color/480/000000/javascript.png"
        width={70}
      />
      <CardAdvantage
        title="HTML"
        icon="https://img.icons8.com/color/480/000000/html-5--v1.png"
        width={70}
      />
      <CardAdvantage
        title="React"
        icon="https://img.icons8.com/color/480/000000/react-native.png"
        width={70}
      />
      <CardAdvantage
        title="Express JS"
        icon="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
        width={70}
      />
      <CardAdvantage
        title="Figma"
        icon="https://img.icons8.com/color/480/000000/figma--v1.png"
        width={70}
      />
      <CardAdvantage
        title="Adobe XD"
        icon="https://img.icons8.com/color/480/000000/adobe-xd--v2.png"
        width={70}
      />
      <CardAdvantage
        title="Framer"
        icon="https://raw.githubusercontent.com/podo/awesome-framer/master/logo.png"
        height={70}
      />
    </Container>
  );
};
