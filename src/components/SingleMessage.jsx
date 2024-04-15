import PropTypes from "prop-types";

export default function SingleMessage({ message, isSender }) {
  return (
    <div className={`w-9/12 my-1 ${isSender ? "flex justify-end" : ""}`}>
      <p className="inline-block text-white bg-gray-400 px-2 py-1 rounded-lg max-w-[400px]">
        {message}
      </p>
    </div>
  );
}

SingleMessage.propTypes = {
  message: PropTypes.string,
  isSender: PropTypes.bool,
};
