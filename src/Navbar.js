import book from './booking.png'
import { Button } from 'react-bootstrap';
import {useState} from 'react';

const Navbar = () => {
	let eng = "T";
	const title = "Plugin Palace";
	const titleFR = "Palais des Plugins";
	const [titleCR, setTitleCR] = useState("Plugin Palace");
	const games = "Games";
	const gamesFR = "Jeux";
	const [gamesCR, setGamesCR] = useState("Games");
	const rmod = "Random Mod";
	const rmodFR = "Mod aleatoire";
	const [rmodCR, setRmodCR] = useState("Random Mod");
	const tut = "Tutorials";
	const tutFR = "Tutoriels";
	const [tutCR, setTutCR] = useState("Tutorials");
	
	const handleClick = () =>{
		if (eng == "T"){
			eng = "F";
			setTitleCR(titleFR);
			setGamesCR(gamesFR);
			setRmodCR(rmodFR);
			setTutCR(tutFR);
		} else if (eng == "F"){
			eng = "F";
			setTitleCR(title);
			setGamesCR(games);
			setRmodCR(rmod);
			setTutCR(tut);
		}
}
	
  return (
    <nav className="navbar">
      <h1>{titleCR}&nbsp;&nbsp;</h1>
	  <button onClick={handleClick}>FR | ENG</button>
      <div className="links">
        <a href="/">{gamesCR}</a>
		<a href="/mod">{rmodCR}</a>
        <a href="/tutorial" style={{ 
          color: 'white', 
          backgroundColor: '#228B22',
          borderRadius: '8px' 
        }}><img src={book} alt="book" width = "24"/>&nbsp;{tutCR}</a>
		
      </div>
    </nav>
  );
}
export default Navbar;