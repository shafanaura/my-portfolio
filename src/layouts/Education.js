import CardList from "../components/CardList";
import { GridContainer } from "../components/Container";
import dataEducation from "../utils/education.json";

const Education = () => {
  return (
    <GridContainer>
      {dataEducation.map((item) => (
        <CardList
          key={item.id}
          date={item.date}
          title={item.major}
          text1={item.school}
          text2={item.location}
          description={item.description}
        />
      ))}
    </GridContainer>
  );
};

export default Education;
