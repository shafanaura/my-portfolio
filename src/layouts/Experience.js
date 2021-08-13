import CardList from "../components/CardList";
import { GridContainer } from "../components/GridContainer";
import dataExperience from "../utils/experience.json";

const Experience = () => {
  return (
    <GridContainer>
      {dataExperience.map((item) => (
        <CardList
          key={item.id}
          date={item.date}
          title={item.position}
          text1={item.company}
          text2={item.location}
          description={item.description}
        />
      ))}
    </GridContainer>
  );
};

export default Experience;
