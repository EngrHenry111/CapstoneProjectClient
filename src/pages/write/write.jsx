import { useState } from "react"
import "./write.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Write = () => {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState(null);
    const [previewImage, setPreviewImage] = useState(null)


    const navigate = useNavigate();

    const handlePostsImage = (e) => {
        const file = e.target.files[0];
        setImageUrl(file);
        if (file){
            setPreviewImage(URL.createObjectURL(file));
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("subtitle", subtitle);
        formData.append("content", content);
        formData.append("imageUrl", imageUrl);

        axios.post("https://capstoneprojectserver-1.onrender.com/posts/UploadPosts", formData,{
            headers: {"Content-Type": "multipart/form-data"},
        })
        .then(response =>{
            console.log(response.data)
            alert("post successful")
            navigate("/")
        })
        .catch((error) =>{
            console.error("Error uploading post", error);
            alert("Failed to upload post. please try again")
        })

    };

  return (
    <div className='write'>
        {/*Image Preview*/}
       { previewImage && <img src="{previewImage}" alt="imagePreview" />}

        <form onSubmit={handleSubmit} action="" className = "writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input accept="image/*" 
                onChange={handlePostsImage}
                 type="file" id="fileInput" 
                 style={{display: "none"}}/>

                <input value={title} 
                onChange={(e) => setTitle(e.target.value)}
                 type="text" placeholder="Title"
                  className="writeInput"
                autoFocus={true} />
          

                <input value={subtitle}
                 onChange={(e) =>
                     setSubtitle(e.target.value)}
                      type="text" placeholder="SubTitle" 
                      className="writeInput"
                 />

                               
            </div>

            <div className="writeFormGroup">
                <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="tell your story...." 
                type="text"
                className="writeInput writeText">

                </textarea>

            </div>
            <button type="submit" className="writeSub">
                Post
            </button>
        </form>
    </div>
  )
}
