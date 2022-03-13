import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const CssJs = () => {
  return <Title>Styled Components</Title>;
};

export default CssJs;
