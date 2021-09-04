import './Footer.css'
import Instagram from '../images/brand_instagram-72.png'
import Email from '../images/email_icons-72.png'
import Etsy from '../images/Etsy_icon-72.png'

function Footer(){

  return (
    <div className="Footer">
      <div>
      <h3>Please feel free to reach out to me!</h3>
      </div>
      <div>
      <ul className="Icon-navigation">
          <li>
         <a href="https://www.instagram.com/olivia_hoffman/?hl=en"><img src={Instagram}/></a>
          </li>
          <li>
            {/* ADD EMAIL HERE */}
          <a href="mailto:"><img src={Email}/></a>
          </li>
          <li>
            <a href="https://www.etsy.com/shop/OliviaHoffmanArt"><img src={Etsy}/></a>
          </li>
        </ul>
      
      </div>
    </div>
  )
}

export default Footer;