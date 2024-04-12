import React from "react";
import styled from "styled-components";
import { Section, SectionTitle } from "../section";
import { colors, breakpoints } from "../styles/theme";
import { useStaticQuery, graphql } from "gatsby";
import { useWorkExperience } from "../../hooks/use_work_experience";

const WorkExperience = () => {
  const { company } = useWorkExperience();

  return (
      <h1>{company}</h1>
  )
}

export default WorkExperience;