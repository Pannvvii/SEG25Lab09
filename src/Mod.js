import mod from './mod.jpeg'
import { Button } from 'react-bootstrap';

const Mod = () => {
	return (
		<div className="mod">
		
			<div class="parent-div">
			
			<div class="left">
				<h2>Glorious Doors	</h2>
				Games: <br/>Skyrim, Monster Hunter
				<br/><br/>
				Made By: <br/>
				SillySalamander666
			</div>
			
			<div class="right">
				<p class="center"><br/>
				<a href="/mod"><img src={mod} alt="book" width = "120"/>
				<img src={mod} alt="book" width = "120"/>
</a></p>
			</div>
			
			<div class="desc">
				Description: <br/><br/>
				This mod is about doors. If you like doors, then get this mod!<br/>
				Do not contact me about the doors. I do not care if you have glitches with your doors.
			</div>	
			<div class="download">	
				<h2>Download Now:</h2>
				<Button>
        		Download
      			</Button>
			</div>
		
		</div>
		
		</div>
	);
}

export default Mod;