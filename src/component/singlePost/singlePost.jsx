import  './singlePost.css'

export const SinglePost = () => {
  return (
    <div className='singglePost'>
       <div className="singlePostWrapper">
        <img src="/images/image.jpg" alt="" className="singlePostImg" />

        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet ed velit?
          <div className="singlePostEdit">
          <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
          <i class="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>

        <h1 className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Henry</b>
          </span>
          <span className="singlePostDate">
            1 hour ago
          </span>
        </h1>
        <p className="singlePostDes">
          Lorem ipsum dolor, sit amet consectetur adipisicing
           elit. Error, magni, necessitatibus repellat temporibus 
           rem quidem et impedit asperiores at molestias laboriosam fuga.
            Libero ducimus maiores dolores nostrum eveniet atque dolor.
            Lorem ipsum dolor, sit amet consectetur adipisicing
           elit. Error, magni, necessitatibus repellat temporibus 
           rem quidem et impedit asperiores at molestias laboriosam fuga.
            Libero ducimus maiores dolores nostrum eveniet atque dolor.
            Lorem ipsum dolor, sit amet consectetur adipisicing
           elit. Error, magni, necessitatibus repellat temporibus 
           rem quidem et impedit asperiores at molestias laboriosam fuga.
            Libero ducimus maiores dolores nostrum eveniet atque dolor.
            Lorem ipsum dolor, sit amet consectetur adipisicing
           elit. Error, magni, necessitatibus repellat temporibus 
           rem quidem et impedit asperiores at molestias laboriosam fuga.
            Libero ducimus maiores dolores nostrum eveniet atque dolor. 
        </p>
       </div>

    </div>
  )
}
