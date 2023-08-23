import styled from "styled-components";

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Description = styled.b`
  &::after {
    content: ":";
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  gap: 8px;
`;
