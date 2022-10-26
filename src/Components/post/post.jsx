import "./post.css"

export default function Post() {
  return (
    <div className="post">
    
      <img className="postImg" src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" alt=""></img>
    
    <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Duis est excepteur consequat exercitation excepteur </span>
        <hr></hr>
        <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">Veniam minim excepteur anim fugiat esse sint. Minim reprehenderit excepteur amet nulla minim 
    excepteur ad eu proident. Adipisicing ut est veniam amet aliquip in occaecat fugiat tempor. 
    Voluptate irure et sunt exercitation sunt officia nulla laboris occaecat ad Lorem aute. Duis 
    et nisi commodo mollit ut quis qui irure laborum nisi amet. Eiusmod esse est excepteur sunt elit 
    incididunt nulla excepteur ad. Culpa ad excepteur labore deserunt fugiat dolor deserunt magna proident 
    exercitation magna.</p>

    </div>
  )
}
