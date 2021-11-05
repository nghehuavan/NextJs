import styled from 'styled-components';
import { Resources } from '../../../resources';

const SelectStyled = styled.select`
  width: 100%;
  outline: none;
  border-radius: 4px;
  padding: 14px 8px 14px 8px;
  background-image: url("${Resources.icon.form.select}");
  background-repeat: no-repeat;
  background-position: right 12px top 50%;
  background-size: 16px 12px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  appearance: none;
  &:disabled {
    background-color: var(--cement-lightest);
    cursor: not-allowed;
  }
  &:focus {
    border: 1px solid var(--rug-light);
  }
  border: 1px solid var(--cement-light);
`;

const SelectErrorStyled = styled(SelectStyled)`
  &:focus {
    border: 1px solid var(--state-negative);
  }
  border: 1px solid var(--state-negative);
`;

export const Select = (props) => {
  const show = () => {
    if (props.hasError === true) return <SelectErrorStyled {...props} />;
    return <SelectStyled {...props} />;
  };

  return <>{show()}</>;
};
