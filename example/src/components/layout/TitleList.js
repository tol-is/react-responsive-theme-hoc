import styled from "styled-components";

const TitleList = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TitleListItem = styled.li`
  flex: 0 0 auto;
  margin-bottom: ${({ theme }) => theme.listItemMarginBottom};

  &:last-child {
    margin: 0;
  }
`;

export { TitleList, TitleListItem };
