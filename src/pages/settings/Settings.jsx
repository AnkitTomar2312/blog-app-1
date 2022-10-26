import SideBar from "../../Components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapped">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg" alt=""></img>
              
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}></input>
                </div>
                <label >Username</label>
                <input type="text" placeholder="Ankit Tomar"></input>
                <label >Email</label>
                <input type="email" placeholder="ankittomar@gmail.com"></input>
                <label >Password</label>
                <input type="password" ></input>
                <buton className='settingsSubmit'>Update</buton>

            </form>
      </div>
      <SideBar />
    </div>
  )
}
