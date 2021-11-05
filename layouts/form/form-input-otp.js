import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyled = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  gap: 2px;
  margin: 0 auto;
  width: 300px;
  position: relative;
  div {
    width: 46px;
    height: 46px;
    border-radius: 8px;
    font-size: 24px;
    margin-left: '2px';
    border: 1px solid var(--cement-light);
  }
  input {
    width: 100%;
    height: 46px;
    font-size: 24px;
    outline: none;
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    inset: 0px 0px 0px 15px;
    letter-spacing: 34px;
    font-family: courier;
  }
`;
export const InputOtp = (props) => {
  const [otp, setOtp] = React.useState('');
  const changeHandler = (e) => {
    e.preventDefault();
    const valid = /^\d*$/.test(e.target.value);
    if (valid) {
      setOtp(e.target.value);
      if (props.onChange) props.onChange(e);
    } else setOtp(otp);
  };

  return (
    <>
      <InputStyled>
        <div id={props.name + '___box_1'}></div>
        <div id={props.name + '___box_2'}></div>
        <div id={props.name + '___box_3'}></div>
        <div id={props.name + '___box_4'}></div>
        <div id={props.name + '___box_5'}></div>
        <div id={props.name + '___box_6'}></div>
        <input {...props} maxLength={6} onChange={changeHandler}></input>
      </InputStyled>
    </>
  );
};

InputOtp.propTypes = {
  onChange: PropTypes.func,
};
