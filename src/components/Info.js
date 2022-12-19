
import profile from '../Images/profile-pic.png'
import icon from '../Images/Icon.png'
import vector from '../Images/Vector.png'
export default function Info(){
    return (
        <div>
          <img src={profile} alt="profile" height="317px" className="profile"/>
          <h5>Faruk Ajibade</h5>
          <h6>Frontend Developer</h6>
          <small>FarukDev.website</small>
          <div className="button">
                <a href="#"><div className="mail">
                  <img src={icon} width="15px"/>
                  <h4>Email</h4>
                </div></a>
                <a href="#"><div className="linkedin">
                  <img src={vector} width="20px"/>
                  <h4>Linkedin</h4>
                </div></a>
            </div>           
        </div>
       
    )
}