import styled from "styled-components";

const TitleButton = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
  font-size: ${({ theme }) => theme.titleFontSize};
  color: ${({ theme }) => theme.titleButtonColor};
  background-color: ${({ theme }) => theme.titleButtonBgColor};
  padding: ${({ theme }) => theme.titleButtonPadding};
  max-width: ${({ theme }) => theme.titleMaxWidth};
`;

export default TitleButton;
