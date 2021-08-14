import CardList from "../components/CardList";
import { FlexContainer, GridContainer } from "../components/Container";
import { Tag } from "../components/Tag";
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

export default Education;
