import { PropTypes } from "prop-types";

import "./Error.css";

function ErrorBanner({ message, retry, close }) {
  return (
    <div className="ErrorBanner">
      <span className="ErrorBanner__message">{message}</span>
      <button
        type="button"
        className="ErrorBanner__retry"
        onClick={() => retry()}
      >
        Retry
      </button>
      <button
        type="button"
        className="ErrorBanner__close"
        onClick={() => close()}
      >
        X
      </button>
    </div>
  );
}

ErrorBanner.propTypes = {
  message: PropTypes.string.isRequired,
  retry: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default ErrorBanner;