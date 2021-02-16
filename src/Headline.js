import styled from 'styled-components';

export default function Headline({ title }) {
  return <H2>{title}</H2>;
}

const H2 = styled.h2`
  color: plum;
  font-weight: 300;
`;
