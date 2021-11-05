import styled from 'styled-components';

const RadioStyled = styled.input`
  background-color: var(--state-white);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid var(--cement-light);
  appearance: none;
  margin: 0px 4px 0px 0px;
  padding: 0;
  border-radius: 50%;
  &:hover {
    border-color: var(--rug-light);
  }
  &:checked {
    background-color: var(--rug-light);
    border-color: var(--state-white);
    outline: 1px solid var(--rug-light) !important;
    border: 4px solid var(--state-white) !important;
    &:disabled {
      outline-color: var(--cement-light) !important;
    }
  }
  &:disabled {
    border-color: var(--cement-light);
    background-color: var(--cement-lighter) !important;
    cursor: not-allowed;
  }
  width: 16px;
  height: 16px;
`;
const RadioBigStyled = styled(RadioStyled)`
  width: 24px;
  height: 24px;
`;

export const Radio = (props) => {
  return <RadioStyled type="radio" {...props}></RadioStyled>;
};

export const RadioBig = (props) => {
  return <RadioBigStyled type="radio" {...props}></RadioBigStyled>;
};
