import styled from 'styled-components';
import { Resources } from '../../../resources';

const InputStyled = styled.input`
  width: 100%;
  outline: none;
  border-radius: 4px;
  padding: 14px 8px;
  &:disabled {
    background-color: var(--cement-lightest);
    cursor: not-allowed;
  }
  &:focus {
    border: 1px solid var(--rug-light);
  }
  border: 1px solid var(--cement-light);
`;

const InputErrorStyled = styled(InputStyled)`
  &:focus {
    border: 1px solid var(--state-negative);
  }
  border: 1px solid var(--state-negative);
`;

export const Input = (props) => {
  const show = () => {
    if (props.hasError === true) return <InputErrorStyled {...props} />;
    return <InputStyled {...props} />;
  };
  return <>{show()}</>;
};

const InputWithIconStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  input {
    margin-bottom: 0px;
  }
  span {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const InputWithIconLeftStyled = styled(InputWithIconStyled)`
  input {
    padding-left: 36px;
  }
  span {
    left: 8px;
  }
`;
const InputWithIconRightStyled = styled(InputWithIconStyled)`
  input {
    padding-right: 36px;
  }
  span {
    right: 8px;
  }
`;
const InputWithIconDoubleLeftStyled = styled(InputWithIconStyled)`
  input {
    padding-left: 64px;
  }
  span {
    left: 8px;
  }
`;
const InputWithIconDoubleRightStyled = styled(InputWithIconStyled)`
  input {
    padding-right: 64px;
  }
  span {
    right: 8px;
  }
`;
const InputWithIconTripleLeftStyled = styled(InputWithIconStyled)`
  input {
    padding-left: 182px;
  }
  span {
    left: 8px;
  }
`;
const InputWithIconTripleRightStyled = styled(InputWithIconStyled)`
  input {
    padding-right: 182px;
  }
  span {
    right: 8px;
  }
`;

export const InputWithIcon = (props) => {
  const show = () => {
    switch (props.iconPosition) {
      case 'left':
        return (
          <InputWithIconLeftStyled {...props}>
            {props.children}
          </InputWithIconLeftStyled>
        );
      case 'right':
        return (
          <InputWithIconRightStyled {...props}>
            {props.children}
          </InputWithIconRightStyled>
        );
      case 'double-left':
        return (
          <InputWithIconDoubleLeftStyled {...props}>
            {props.children}
          </InputWithIconDoubleLeftStyled>
        );
      case 'double-right':
        return (
          <InputWithIconDoubleRightStyled {...props}>
            {props.children}
          </InputWithIconDoubleRightStyled>
        );
      case 'triple-left':
        return (
          <InputWithIconTripleLeftStyled {...props}>
            {props.children}
          </InputWithIconTripleLeftStyled>
        );
      case 'triple-right':
        return (
          <InputWithIconTripleRightStyled {...props}>
            {props.children}
          </InputWithIconTripleRightStyled>
        );
    }
  };
  return <>{show()}</>;
};

const InputIconStyled = styled.button`
  min-height: 24px;
  min-width: 24px;
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  outline: none;
  background-color: transparent;
  border: none;
  align-items: center;
  font-size: 14px;
  display: flex;
`;

const InputIconSearchStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.search}')
`;
const InputIconEditStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.edit}');
`;
const InputIconClearStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.clear}');
`;
const InputIconEyeStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.eye}');
`;
const InputIconEyeHideStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.eyeHide}');
`;
const InputIconVerifiedStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.verified}');
`;
const InputIconUnVerifiedStyled = styled(InputIconStyled)`
  background-image: url('${Resources.icon.form.unverified}');
`;
const InputIconTextSuccessStyled = styled(InputIconStyled)`
  font-weight: 700;
  color: var(--state-positive);
  width: 106px;
  margin-left: 4px;
  margin-right: 4px;
`;
const InputIconTextDangerStyled = styled(InputIconStyled)`
  font-weight: 700;
  color: var(--state-negative);
  width: 106px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const InputIcon = (props) => {
  const show = () => {
    switch (props.iconStyle) {
      case 'search':
        return <InputIconSearchStyled type="button" {...props} />;
      case 'edit':
        return <InputIconEditStyled type="button" {...props} />;
      case 'clear':
        return <InputIconClearStyled type="button" {...props} />;
      case 'eye':
        return <InputIconEyeStyled type="button" {...props} />;
      case 'eye-hide':
        return <InputIconEyeHideStyled type="button" {...props} />;
      case 'verified':
        return <InputIconVerifiedStyled type="button" {...props} />;
      case 'unverified':
        return <InputIconUnVerifiedStyled type="button" {...props} />;
      case 'text-success':
        return <InputIconTextSuccessStyled type="button" {...props} />;
      case 'text-danger':
        return <InputIconTextDangerStyled type="button" {...props} />;
      default:
        return <InputIconStyled type="button" {...props} />;
    }
  };
  return <>{show()}</>;
};
