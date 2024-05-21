import styled from "styled-components";

export const Section = styled.section`
  margin: 5rem 0;
  width: 100%;
  min-height: ${({ child }) => (child === "last" ? "25vh" : "85vh")};
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    /* font-size: 4rem; */
    /* Need to test to see if clamp works on Mobile Safari and Safari */
    font-size: clamp(3.5rem, 2vw, 4rem);
    width: 100%;
  }

  span {
    width: min(25rem, 50%);
  }

  p {
    /* replace with a better method */
    font-size: clamp(1.6rem, 2vw, 1.7rem);
    line-height: 1.6;
  }
`

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  /* font-size: 4rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionLine = styled.span`
  background: #303c55;
  height: 1px;
  display: inline-block;
  margin: 0 1rem;
`

const SectionSpacer = styled.div`
  margin-top: 2rem;
`

SectionTitle.Line = SectionLine
Section.Spacer = SectionSpacer
