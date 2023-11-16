import { AiFillLike } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import PropTypes from "prop-types";

function Post({
    title,
    image,
    date,
    creator,
    message,
    likeNumber,
    tag,
    updatefunc
}) {
    return (
        <div className="rounded-lg border overflow-hidden">
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
                                    updatefunc("655353b4cac0f8a67ecc51a3")
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
                    <span className=" text-sm text-gray-500  ">{tag}</span>
                    <span className=" text-xl font-medium text-gray-800">
                        {title}
                    </span>
                    <span className=" text-sm text-gray-500">{message}</span>
                    <div className=" w-11/12 flex justify-between pb-5 ">
                        <div className=" text-blue-700 flex items-center gap-1 cursor-pointer ">
                            <AiFillLike className="text-xl  " />
                            <span className=" text-sm ">LIKE {likeNumber}</span>
                        </div>
                        <div className="text-blue-700 text-xl flex items-center gap-1 cursor-pointer">
                            <IoMdTrash />
                            <span className=" text-sm ">DELETE</span>
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
    tag: PropTypes.string.isRequired,
    updatefunc: PropTypes.func.isRequired
};

export default Post;
