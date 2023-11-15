import PropTypes from "prop-types";

function Button({ name, bgColor, onSubmit }) {
    return (
        <button
            className={`${bgColor} w-full text-white rounded-md py-[4px]   `}
            type="submit"
            name={name}
            onClick={onSubmit}
        >
            {name}
        </button>
    );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Button;
