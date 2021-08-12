import styled from "styled-components";
import { theme } from "../../theme/color";

const Card = styled.div`
  background-color: ${theme.inputbg};
  border-radius: 45px;
  height: 120px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
`;

export const CardAdvantage = (props) => {
  return (
    <div>
      <Card>
        <img src={props.icon} {...props} alt="icon" />
      </Card>
      <Title>{props.title}</Title>
    </div>
  );
};
