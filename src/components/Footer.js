import "./footer.css"
import twittericon from "../imgs/Twitter-Icon.png"
import facebookicon from "../imgs/Facebook-Icon.png"
import instagramicon from "../imgs/Instagram-Icon.png"
import githubicon from "../imgs/GitHub-Icon.png"

export default function Footer () {
  return (
    <div className="footer-container">
      <a href="https://google.com"> <img src={twittericon}/> </a>
      <a href="https://google.com"> <img src={facebookicon}/> </a>
      <a href="https://google.com"> <img src={instagramicon}/> </a>
      <a href="https://google.com"> <img src={githubicon}/> </a>
    </div>
  )
}