import styled from 'styled-components';

const LabelStyled = styled.label`
  display: inline-block;
  font-weight: 700;
`;

const LabelBigStyled = styled(LabelStyled)`
  font-size: 24px;
`;

export const Label = (props) => {
  return <LabelStyled {...props}>{props.children}</LabelStyled>;
};

export const LabelBig = (props) => {
  return <LabelBigStyled {...props}>{props.children}</LabelBigStyled>;
};

const LabelErrorStyled = styled.span`
  color: var(--state-negative);
  font-size: 12px;
`;

export const LabelError = (props) => {
  const show = () => {
    if (props.visible === true)
      return <LabelErrorStyled {...props}>{props.children}</LabelErrorStyled>;
  };

  return <>{show()}</>;
};
