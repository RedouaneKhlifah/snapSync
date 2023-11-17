import PropTypes from "prop-types";

function InputFile({ placeholder, name, onChange }) {
    return (
        <div className="text-sm">
            <input
                onChange={onChange}
                id="imageInput"
                type="file"
                name={name}
                placeholder={placeholder}
                accept=".jpeg,.png,.jpg"
            />
        </div>
    );
}

InputFile.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputFile;
