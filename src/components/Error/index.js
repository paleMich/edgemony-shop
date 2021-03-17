import { PropTypes } from "prop-types";

import "./styles.scss";

function ErrorBanner({ message, retry, close }) {
  return (
    <div className="Error">
      <p>{message}</p>
      <span onClick={() => retry()}>
        Retry
      </span>
      <p className="Error__close" onClick={() => close()}>
        x
      </p>
    </div>
  );
}

ErrorBanner.propTypes = {
  message: PropTypes.string.isRequired,
  retry: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ErrorBanner;