import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../constants";
import styles from "../styles";

const TextInput = styled.TextInput``;

const SearchBar = ({ onChange, value, onSubmit }) => {
  return (
    <TextInput
      style={{
        width: constants.width - 40,
        height: 35,
        backgroundColor: styles.lightGreyColor,
        padding: 8,
        borderRadius: 4,
        textAlign: "center",
      }}
      returnKeyType="search"
      onChangeText={onChange}
      onEndEditing={onSubmit}
      value={value}
      placeholder={"Search"}
      placeholderTextColor={styles.darkGreyColor}
    />
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
