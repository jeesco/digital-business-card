import "./Info.css";
import emailicon from "../imgs/email-Icon.png";
import linkedinicon from "../imgs/linkedin-white-icon.png"


function Info () {
  return (
    <section className="Info-container">
      <div className="img-container">

      </div>
      <div className="info">
        <h2>Juan Esteban E</h2>
        < h3>Frontend Developer</h3>
        <a className="info-link" href="https://github.com/jeesco">https://github.com/jeesco</a>

          <div className="info-btns">
            <button className="info-btn" href="#"> <img src={emailicon} /> Email</button>
            <button className="info-btn linkedin" href="#"> <img src={linkedinicon} /> LinkedIn</button>
          </div>
      </div>
    </section>
  )
}

export default Info;