import InputDf from "../ui/inputs/InputDf";
import InputFile from "../ui/inputs/InputFile";
import TextareaDf from "../ui/inputs/TextareaDf";
import Button from "../ui/button/Button";
import PropTypes from "prop-types";

function Form({ type, handleChange, handleSubmit, formData, ClearForm }) {
    return (
        <div className="bg-white w-10/12 ">
            <div className="border-[1px] rounded-lg px-5 py-4 shadow-xl">
                <h1 className="text-center  text-base font-semibold">
                    {type === "create" ? "Creating a Memory" : "update "}
                </h1>

                <div className="flex flex-col gap-4 justify-center py-2">
                    <InputDf
                        label="creator"
                        name="creator"
                        onChange={handleChange}
                        value={formData.creator}
                    />
                    <InputDf
                        label="title"
                        name="title"
                        onChange={handleChange}
                        value={formData.title}
                    />
                    <TextareaDf
                        label="message"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                    />
                    <InputDf
                        label="tags"
                        name="tags"
                        onChange={handleChange}
                        value={formData.tags}
                    />
                    <InputFile
                        placeholder="choose a file"
                        name="image"
                        onChange={handleChange}
                    />
                    <Button
                        name="SUBMIT"
                        onSubmit={() => handleSubmit()}
                        bgColor=" bg-gradient-to-l from-blue-500 to-blue-600 "
                    />
                    <Button
                        name="CLEAR"
                        bgColor="  bg-gradient-to-l from-red-500 to-red-600 "
                        onSubmit={ClearForm}
                    />
                </div>
            </div>
        </div>
    );
}

Form.propTypes = {
    type: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    ClearForm: PropTypes.func.isRequired,
    formData: PropTypes.object
};

export default Form;
