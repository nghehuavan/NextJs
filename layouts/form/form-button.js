import styled from 'styled-components';

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  border: 1px solid var(--cement-light);
  padding: 14px 8px;
  span {
    margin-left: 14px;
    margin-right: 14px;
  }
  &.--spinner {
    position: relative;
  }
  &.--spinner * {
    visibility: hidden;
  }
  &.--spinner::after {
    visibility: visible;
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spinner-rotate 1s ease infinite;
  }
  @keyframes spinner-rotate {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`;

const ButtonOutline = styled(ButtonStyled)`
  background-color: var(--state-white);
  border: 1px solid var(--cement-light);
  &:hover {
    background-color: var(--cement-lightest);
  }
  &:disabled {
    background-color: var(--cement-lighter) !important;
    cursor: not-allowed;
  }
`;

const ButtonDefault = styled(ButtonStyled)`
  background-color: var(--default);
  border: 1px solid var(--default);
  font-weight: 700;
  color: var(--state-white);
  &:hover {
    background-color: var(--dark);
    border-color: var(--dark);
  }
  &:disabled {
    background-color: var(--lighter);
    border-color: var(--lighter);
    cursor: not-allowed;
  }
`;

const ButtonPrimary = styled(ButtonStyled)`
  background-color: var(--rug-default);
  font-weight: 700;
  color: var(--state-white);
  &:hover {
    background-color: var(--rug-dark);
  }
  &:disabled {
    background-color: var(--rug-lighter) !important;
    cursor: not-allowed;
  }
`;

const ButtonPrimaryOutline = styled(ButtonStyled)`
  background-color: var(--state-white);
  border: 1px solid var(--rug-default);
  &:hover {
    background-color: var(--cement-lightest);
  }
  &:disabled {
    background-color: var(--cement-lighter) !important;
    cursor: not-allowed;
  }
`;

export const Button = (props) => {
  const show = () => {
    const colorStyle = props.colorStyle;
    const spinner = props.spinner;
    switch (colorStyle) {
      case 'outline':
        return (
          <ButtonOutline
            className={spinner === true ? '--spinner' : ''}
            {...props}
          >
            {props.children}
          </ButtonOutline>
        );

      case 'primary':
        return (
          <ButtonPrimary
            className={spinner === true ? '--spinner' : ''}
            {...props}
          >
            {props.children}
          </ButtonPrimary>
        );

      case 'primary-outline':
        return (
          <ButtonPrimaryOutline
            className={spinner === true ? '--spinner' : ''}
            {...props}
          >
            {props.children}
          </ButtonPrimaryOutline>
        );

      default:
        return (
          <ButtonDefault
            className={spinner === true ? '--spinner' : ''}
            {...props}
          >
            {props.children}
          </ButtonDefault>
        );
    }
  };

  return <>{show()}</>;
};
