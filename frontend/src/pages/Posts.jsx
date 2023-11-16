import Header from "../Components/Header";
import Post from "../Components/Post";
import imageTest from "../assets/img/test.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts, CreatePost ,UpdatePost} from "../services/redux/actions/PostActions";
import Form from "../Components/Form";

function Posts() {
    const PostsReducer = useSelector((state) => state.PostsReducer);
    const posts = PostsReducer.posts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const [FormType, SetFormType] = useState("create");
    function handelFormType(postId) {
		const post = posts.find((post) => (post.postId = postId));
        SetFormType("update");
		setForm({
         title:post.title,
         message:post.message,
         creator:post.creator,
		 tags : post.tags.join(','),
         image:"test"
		})

    }

    const [form, setForm] = useState({
        title: "",
        image: "test",
        creator: "",
        message: "",
        tags: ""
    });

    function handelChange(e) {
        const { name, value } = e.target;
        setForm((prv) => ({
            ...prv,
            [name]: value
        }));
    }


    function handleSubmit() {
        dispatch(CreatePost(form));
        setForm({
            title: "",
            image: "test",
            creator: "",
            message: "",
            tags: ""
        });
    }
	function Update(){
		dispatch(UpdatePost(form,"655353b4cac0f8a67ecc51a3"));
		setForm({
            title: "",
            image: "test",
            creator: "",
            message: "",
            tags: ""
        });
		SetFormType("create")
	}
    return (
        <div className=" m-4">
            <Header />
            <div className=" grid xl:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]  m-6 ">
                <div className="xl:w-11/12 lg:w-11/12 md:w-12/12   ">
                    <div className=" grid  xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-3 sm:grid-cols-2  gap-4 ">
                        {posts.map((post) => {
                            return (
                                <Post
                                    key={post.id}
                                    title={post.title}
                                    image={imageTest}
                                    date="3 hours ago"
                                    creator={post.creator}
                                    message={post.message}
                                    likeNumber={post.like}
                                    tag={post.tags.join("")}
                                    updatefunc={handelFormType}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="  flex justify-center ">
                    <div className=" w-11/12 flex justify-center">
                        <Form
                            type={FormType}
                            handelChange={handelChange}
                            handleSubmit={FormType === "create" ? handleSubmit : Update}
                            formData={form}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
