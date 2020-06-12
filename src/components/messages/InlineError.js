import React from 'react';
import PropTypes from 'prop-types';


const InlineError = ({ text }) => <span style={{ color: "rgb(145, 45, 43)" }}>{text}</span>;

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;