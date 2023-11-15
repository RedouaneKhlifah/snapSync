import PropTypes from "prop-types";

function InputFile({ placeholder, name }) {
    return (
        <div className="text-sm">
            <input type="file" name={name} placeholder={placeholder} />
        </div>
    );
}

InputFile.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
};

export default InputFile;
