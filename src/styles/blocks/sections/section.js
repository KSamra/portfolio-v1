import styled from 'styled-components';



export const Section = styled.section`
  margin: 5rem 0;
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;


  h2 {
    /* font-size: 4rem; */
    font-size: clamp(3rem, 2vw ,4rem );
    width: 100%;
  }

  span {
    width: min(25rem, 50%);
  }


  
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  /* font-size: 4rem; */
  display: flex;
  justify-content: center;
  align-items: center;

`;

const SectionLine = styled.span`
  background: #303C55;
  height: 1px;
  display: inline-block;
  margin: 0 1rem;
`;

const SectionSpacer = styled.div`
  margin-top: 2rem;
`;

SectionTitle.Line = SectionLine;
Section.Spacer = SectionSpacer;