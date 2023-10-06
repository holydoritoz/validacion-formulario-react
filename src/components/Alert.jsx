import PropTypes from 'prop-types'

const Alert = ({ successMessage, errorMessage }) => {
  return (
    <div>
      {successMessage && (
        <div className="alert alert-success mt-3">{successMessage}</div>
      )}
      {errorMessage && (
        <div className="alert alert-danger mt-3">{errorMessage}</div>
      )}
    </div>
  );
};

Alert.propTypes = {
  successMessage: PropTypes.string,
  errorMessage:PropTypes.string,
}

export default Alert;