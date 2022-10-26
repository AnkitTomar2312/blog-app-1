import "./write.css"

export default function write() {
  return (
    <div className="write">
    <img className="writeImg" src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" alt="" ></img>
      <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput">
        <i className="writeIcon fa-solid fa-plus"></i>
        </label>
            <input type="file" id="fileInput" style={{display: "none"}} />
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
