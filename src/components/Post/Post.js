import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import M from 'materialize-css'
import './Post.css';

function Post() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption,setCaption] = useState("")
  const [text, setText] = useState('');
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [url,setUrl] = useState("")

  const navigate = useNavigate();
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setImage(file);
  };  

  const handleTagChange = (event) => {
    if (event.key === 'Enter') {
      const tag = event.target.value.trim();
      if (tag) {
        setTags([...tags, tag]);
        event.target.value = '';
      }
    }
  };

  const handleTagRemove = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submit logic here
  };

  // ...

useEffect(() => {
  if (url) {
    fetch("/createpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        caption,
        tags,
        pic: url
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: "Created post Successfully", classes: "#43a047 green darken-1" });
          navigate('/');
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}, [url]);

const postDetails = () => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "brushstrokes");
  data.append("cloud_name", "bhavya-grover");

  fetch("https://api.cloudinary.com/v1_1/bhavya-grover/image/upload", {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      setUrl(data.url);
    })
    .catch((err) => {
      console.log(err);
    });
};

// ...

  return (
    <div className="FullPageContainer">
  <div className="UploadContainer">
    <label htmlFor="imageUpload" className="UploadButton">
      Upload Image
    </label>
    <input
      type="file"
      id="imageUpload"
      className="UploadInput"
      onChange={handleImageUpload}
      accept="image/*"
    />
    {selectedImage && (
      <div className="PreviewContainer">
        <div className="PreviewImageContainer">
          <img src={selectedImage} alt="Preview" className="PreviewImage" />
        </div>
        <div className="CaptionTagsContainer">
          <textarea
            type="text"
            className="CaptionInput"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e)=>setCaption(e.target.value)}
          ></textarea>
          <div className="TagsContainer">
            {tags.map((tag, index) => (
              <div className="Tag" key={index}>
                <span>{tag}</span>
                <button
                  className="TagRemoveButton"
                  onClick={() => handleTagRemove(index)}
                >
                  &#x2716;
                </button>
              </div>
            ))}
            <input
              type="text"
              className="TagInput"
              placeholder="Add a tag..."
              onKeyPress={handleTagChange}
            />
          </div>
        </div>
      </div>
    )}
    <button className="SubmitButton" onClick={()=>postDetails()}>
          Submit
    </button>
  </div>
</div>

  );
}

export default Post;
