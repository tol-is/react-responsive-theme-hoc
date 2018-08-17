import styled from "styled-components";

const MainWrap = styled.main`
  width: 100%;
  margin: 0 auto;
  padding-top: ${({ theme }) => theme.mainWrapPaddingTop};
  padding-bottom: ${({ theme }) => theme.mainWrapPaddingBottom};
`;

export default MainWrap;
