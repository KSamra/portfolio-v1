import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../section";
import { colors, breakpoints } from "../styles/theme";
import { useStaticQuery, graphql } from "gatsby";
import { useWorkExperience } from "../../hooks/use_work_experience";
import { ProjectImage } from "../projects/images";

const WorkExperience = () => {
  const { company,
          description,
          year_start, 
          year_end, 
          title, 
          month_start} = useWorkExperience();

  return (
      <Section id="experience" child="last">
        <SectionTitle>
          Experience
          <SectionTitle.Line/>
        </SectionTitle>
        <Section.Spacer />

        <JobContainer key={1}>
          <div>
            <JobTitle>
              Software Engineer 
              <ExternalLink href="https://abby.com/" rel="noreferrer noopener nofollow" aria-label="Abby Connect"> <span>@{company}</span> </ExternalLink>
              | Dec 2020 - June 2023
            </JobTitle>
          </div>

          <UL>
            <li>Planned, designed, and developed solutions to support business operations. </li>
            <li>Promoted to Lead Software Engineer in my second year.</li>
            <li>Collaborated with Sales, Marketing, and Customer Success departments to ensure product development timelines and customer needs were in sync.</li>
            <li>Provided mentorship to others seeking a position in the Software department.</li>
            <li>Built custom integrations for VIP clients, allowing them to integrate our products with their specific tech stack.</li>
            
          </UL>
          
          {/* <FlexContainer>
            <ImageContainer>
              {ProjectImage("SYA.png")}
            </ImageContainer>
            <Description>
              <p>Testing</p>
            </Description>
          </FlexContainer> */}
        </JobContainer>
      </Section>
  )
}

export default WorkExperience;

const UL = styled.ul`
  position: relative;
  list-style: none;
  margin-left: 0;
  padding-left: 1.2em;
  list-style-type: square;
    li {
      margin: 20px;
    }
    
`;

// li:before {
//   content: ">";
//   position: absolute;
//   color: ${colors.primary};
//   font-weight: bold;
//   left: 0;
// }

const JobTitleContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;

const JobContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;
`

const JobTitle = styled.h3`
  /* color: rgb(204, 214, 246); */
  display: inline;
  color: ${colors.subtext};
  transition: color 100ms ease;
  font-weight: 600;

`

const FlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${breakpoints.lg} {
    flex-direction: row;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  align-self: center;

  @media ${breakpoints.lg} {
    width: 50%;
    align-self: center;
  }
`

const Description = styled.div`
  width: 100%;
  line-height: 1.5;

  @media ${breakpoints.lg} {
    width: 50%;
    margin-left: 5rem;
  }
`

const TechContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 1.2rem;
    color: whitesmoke;

    @media ${breakpoints.md} {
      font-size: 1.4rem;
    }
  }
`

const ExternalLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${colors.primary};

  :hover span{
    border-bottom: 1px solid ${colors.primary};
  }
`