import Header from "../Components/Header/Header";
import Post from "../Components/Post";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
    fetchPosts,
    CreatePost,
    UpdatePost,
    LikePost,
    DeletePost
} from "../services/redux/actions/PostActions";
import Form from "../Components/Form/Form";
import { convertImageToBase64, emptyFileInpute } from "../utils/HelpesFunc";

function Posts() {
    const posts = useSelector((state) => state.PostsReducer.posts);
    const errorMessage = useSelector(
        (state) => state.PostsReducer.errorMessage
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const [form, setForm] = useState({
        title: "",
        image: "",
        creator: "",
        message: "",
        tags: ""
    });

    async function handleChange(e) {
        e.preventDefault();
        const { name, value, files } = e.target;

        try {
            const inputeValue =
                name === "image"
                    ? (await convertImageToBase64(files[0])) || ""
                    : value;
            setForm((prev) => ({
                ...prev,
                [name]: inputeValue
            }));
        } catch {
            console.log("error");
        }
    }

    const [SelectedPostId, SetselectedPostId] = useState(null);
    const [FormType, SetFormType] = useState("create");

    function handleFormType({ title, message, creator, tags, image, id }) {
        SetselectedPostId(id);
        SetFormType("update");
        setForm({
            title: title,
            message: message,
            creator: creator,
            tags: tags.join(""),
            image: image
        });
    }

    function handleSubmit(e) {
        dispatch(CreatePost(form))
        
            .then(() => {
                setForm({
                    title: "",
                    image: "",
                    creator: "",
                    message: "",
                    tags: ""
                });
                emptyFileInpute("imageInput");
                console.log("dispatch resolved");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleUpdate(e) {
        e.preventDefault();
        dispatch(UpdatePost(form, SelectedPostId));
        setForm({

            title: "",
            image: "",
            creator: "",
            message: "",
            tags: ""
        });
        emptyFileInpute("imageInput");
        SetFormType("create");
    }

    function ClearForm() {
        setForm({

            title: "",
            image: "",
            creator: "",
            message: "",
            tags: ""
        });

      emptyFileInpute("imageInput");
        SetFormType("create");
    }

    function likePost(postId) {
        dispatch(LikePost(postId));
    }

    function handleDelete(postId) {
        dispatch(DeletePost(postId));
    }

    console.log(errorMessage);
    return (
        <div className=" m-4" alt="Home">
            <Header />
            <div className=" grid xl:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]  m-6 ">
                <div className="w-12/12">
                    <div className=" grid  xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-3 sm:grid-cols-2  gap-4 ">
                        {posts?.map((post, index) => {
                            return (
                                <Post
                                    key={index}
                                    id={post._id}
                                    title={post.title}
                                    image={post.image}
                                    date="3 hours ago"
                                    creator={post.creator}
                                    message={post.message}
                                    likeNumber={post.like}
                                    tags={post.tags}
                                    updatefunc={handleFormType}
                                    like={likePost}
                                    handleDelete={handleDelete}

                                />
                            );
                        })}
                    </div>
                </div>

                <div className=" w-full flex justify-center">
                    <Form
                        type={FormType}
                        handleChange={handleChange}
                        handleSubmit={
                            FormType === "create" ? handleSubmit : handleUpdate
                        }
                        formData={form}
                        ClearForm={ClearForm}
                    />
                </div>
            </div>
        </div>
    );
}

export default Posts;
