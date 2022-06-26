import styled, { css } from 'styled-components';
interface ButtonInterface {
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

const Button = styled.button<ButtonInterface>`
  ${(props: ButtonInterface) =>
    props.primary
      ? css``
      : props.secondary
      ? css``
      : props.tertiary
      ? css``
      : css``}
`;
