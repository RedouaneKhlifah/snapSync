import { AiFillLike } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PropTypes from "prop-types";

function Post({
    id,
    title,
    image,
    date,
    creator,
    message,
    likeNumber,
    tags,
    updatefunc,
    like,
    handleDelete
}) {
    return (
        <div className="rounded-lg border overflow-hidden shadow-xl">
            <div className=" h-40 border-b-[1px] mb-4 overflow-hidden relative ">
                <img className=" h-full w-full " src={image} alt="test" />
                <div className="absolute left-0 top-0 bg-black  w-full h-full bg-opacity-50 "></div>
                <div className="absolute left-0 top-3 w-full">
                    <div className="flex justify-center">
                        <div className="flex justify-between items-center w-10/12 text-white">
                            <span className="text">title{creator}</span>
                            <div
                                className=" cursor-pointer "
                                onClick={() =>
                                    updatefunc({
                                        id,
                                        title,
                                        image,
                                        creator,
                                        message,
                                        tags
                                    })
                                }
                            >
                                <HiOutlineDotsHorizontal />
                            </div>
                        </div>
                    </div>
                    <span className="text-white text-xs pl-5 font-light">
                        {date}
                    </span>
                </div>
            </div>
            <div>
                <div className="flex justify-start flex-col gap-y-4 pl-5">
                    <span className=" text-sm text-gray-500  ">{tags}</span>
                    <span className=" text-xl font-medium text-gray-800">
                        {title}
                    </span>
                    <span className=" text-sm text-gray-500">{message}</span>
                    <div className=" w-11/12 flex justify-between pb-5 ">
                        <div
                            className=" text-blue-700 flex items-center gap-1 cursor-pointer "
                            onClick={() => like(id)}
                        >
                            <AiFillLike className="text-xl  " />
                            <span className=" text-sm select-none ">
                                LIKE {likeNumber}
                            </span>
                        </div>
                        <div
                            className="text-blue-700 text-xl flex items-center gap-1 cursor-pointer"
                            onClick={() => handleDelete(id)}
                        >
                            <IoMdTrash />
                            <span className=" text-sm select-none ">
                                DELETE
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    creator: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likeNumber: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    updatefunc: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default Post;
