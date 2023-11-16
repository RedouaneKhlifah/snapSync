import Header from "../Components/Header";
import Post from "../Components/Post";
import imageTest from "../assets/img/test.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts, CreatePost ,UpdatePost,LikePost,DeletePost} from "../services/redux/actions/PostActions";
import Form from "../Components/Form";

function Posts() {
    const PostsReducer = useSelector((state) => state.PostsReducer);
    const posts = PostsReducer.posts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);



    const [FormType, SetFormType] = useState("create");
	const [SelectedPostId ,SetselectedPostId ] = useState(null)

    function handelFormType(postId) {
		const post  = posts.find((post) => (post._id === postId))
		if(post) {
		SetselectedPostId(post._id)
        SetFormType("update");
		setForm({
         title:post.title,
         message:post.message,
         creator:post.creator,
		 tags : post.tags.join(','),
         image:"test"
		})	
		}else {
			console.log('record not exist');
		}

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
		dispatch(UpdatePost(form ,SelectedPostId));
		setForm({
            title: "",
            image: "test",
            creator: "",
            message: "",
            tags: ""
        });
		SetFormType("create")
	}
	function ClearForm(){
		setForm({
            title: "",
            image: "",
            creator: "",
            message: "",
            tags: ""
        });
		SetFormType("create")
	}

	function likePost(postId){
		dispatch(LikePost(postId))
	}
	function handleDelete(postId){
		dispatch(DeletePost(postId))
	}
    return (
        <div className=" m-4">
            <Header />
            <div className=" grid xl:grid-cols-[60%_40%] lg:grid-cols-[60%_40%]  m-6 ">
                <div className="xl:w-11/12 lg:w-11/12 md:w-12/12   ">
                    <div className=" grid  xl:grid-cols-2 lg:grid-cols-2  md:grid-cols-3 sm:grid-cols-2  gap-4 ">
                        {posts.map((post,index) => {
                            return (
                                <Post
                                    key={index}
									id = {post._id}
                                    title={post.title}
                                    image={imageTest}
                                    date="3 hours ago"
                                    creator={post.creator}
                                    message={post.message}
                                    likeNumber={post.like}
                                    tags={post.tags}
                                    updatefunc={handelFormType}
									like={likePost}
									handleDelete={handleDelete}
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
							ClearForm={ClearForm}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;
