import './header.css'


export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitlesSm'>React & Node</span>
        <span className='headerTitlesLg'>Blog</span>
        
      </div>

      <img className='headerImg' src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' alt=''></img>
    </div>
  )
}
