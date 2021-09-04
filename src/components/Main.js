import './Main.css'

import Mug1 from '../images/mug1.jpg';
import Vase1 from '../images/vase1.jpg';
import Carvedcup1 from '../images/carvedcup1.jpg';


function Main(){


  return (
    <div className="Main">
      <div className="Main_paragraph">
        <p>Clay is a living material; it has energy, texture and temperature. Molding clay is a tactile, sensory experience that’s grounding and good for the soul. Like gardening, pottery is an activity that allows you to thoroughly enjoy getting dirty and reconnect with Mother Earth.

Local artist and facilitator of the Arte Sentido method, Javier Hernan Rubinstein explains, “When you come into contact with clay a dialogue takes place. As in every dialogue, you listen, ask and answer but you do it in your own language—by touching—you tell the clay what you feel and what you think by squeezing, caressing and playing ... The external vision is silenced, allowing a space of self-knowledge to open.”</p>

      </div>
      <div className="Main_pottery_examples">
        <div className="Main_individual_container">
        <img src={Mug1} />
        </div>
        <div className="Main_individual_container">
        <img src={Carvedcup1} />
        </div>
        <div className="Main_individual_container">
        <img src={Vase1} />
        </div>

      </div>
    </div>
  )
}

export default Main;