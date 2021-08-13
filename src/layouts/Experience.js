import CardList from "../components/CardList";
import { FlexContainer, GridContainer } from "../components/Container";
import { Tag } from "../components/Tag";
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
          jobdesc={
            <ul>
              {item.jobdesc.map((item) => (
                <li>{item.description}</li>
              ))}
            </ul>
          }
          tech={
            <FlexContainer>
              {item.tech.map((data) => (
                <Tag item={data.framework} />
              ))}
            </FlexContainer>
          }
        />
      ))}
    </GridContainer>
  );
};

export default Experience;
