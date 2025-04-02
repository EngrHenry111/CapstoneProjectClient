import "./write.css"

export const Write = () => {
  return (
    <div className='write'>
        <img src="/images/image.jpg" alt="" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i class=" writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput"
                autoFocus={true} />
            </div>

            <div className="writeFormGroup">
                <textarea placeholder="tell your story...." 
                type="text"
                className="writeInput writeText">

                </textarea>

            </div>
            <button className="writeSub">
                Publish
            </button>
        </form>
    </div>
  )
}
