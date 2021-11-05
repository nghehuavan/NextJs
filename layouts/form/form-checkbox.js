import styled from 'styled-components';
import { Resources } from '../../../resources';

const CheckBoxStyled = styled.input`
  background-color: var(--state-white);
  border: 1px solid var(--cement-light);
  appearance: none;
  margin: 0px 4px 0px 0px;
  padding: 0;
  outline: none !important;
  border-radius: 4px;
  &:hover {
    border-color: var(--rug-light);
  }
  &:checked {
    background-image: url("${Resources.icon.form.checkbox}");
    background-color: var(--rug-light);
    border-color: var(--rug-light);
  }
  &:disabled {
    border-color: var(--cement-light);
    background-color: var(--cement-lighter) !important;
    cursor: not-allowed;
  }
  width: 16px;
  height: 16px;
`;
const CheckBoxBigStyled = styled(CheckBoxStyled)`
  width: 24px;
  height: 24px;
`;
export const CheckBox = (props) => {
  return <CheckBoxStyled type="checkbox" {...props} />;
};
export const CheckBoxBig = (props) => {
  return <CheckBoxBigStyled type="checkbox" {...props} />;
};
