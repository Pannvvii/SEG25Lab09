import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';


const Home = () => {
	
  const [open, setOpen] = useState(false);
  return (
	
	<div  className="home" >
	  <Button onClick={() => setOpen(!open)}
        aria-controls="collapseExample"
        aria-expanded={open}>
        I'm a new user
      </Button>
	  <Collapse in={open}>
		<div id="collapseExample">
		<br/>
			Tutorials:
			Click&nbsp;
			<a href="/tutorial">
        	 here
			</a>
			&nbsp;to learn how to install mods.
			<br/>
        </div>
	  </Collapse>

	<br/><br/>
	<h1> Get Browsing with these mods below!</h1>
    </div>

  );
}
 
export default Home;
