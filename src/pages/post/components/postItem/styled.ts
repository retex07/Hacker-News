import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
  gap: 8px;
`;

export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  
  align-items: center;
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

export const Comments = styled.section`
  display: flex;
  flex-direction: column;
  
  margin: 12px;
  max-width: 1024px;
`;
