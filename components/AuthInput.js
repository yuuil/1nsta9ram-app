import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 8px;
`;

const TextInput = styled.TextInput`
  width: ${constants.width / 2}px;
  padding: 8px;
  background-color: ${(props) => props.theme.greyColor};
  border: 1px solid ${(props) => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  onChange,
}) => {
  return (
    <Container>
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        value={value}
        onChangeText={onChange}
      />
    </Container>
  );
};

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]).isRequired,
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"])
    .isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AuthInput;
