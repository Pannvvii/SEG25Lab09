import mod from './mod.jpeg'

const Bottom = () => {
	
  return (
    <nav className="bottom">
		<p><a style={{ 
          color: 'white', 
		  fontSize: '20px',
        }}>Mods:</a></p>
		<p class="center"><br/>
		<a href="/mod"><img src={mod} alt="book" width = "120"/>
		<img src={mod} alt="book" width = "120"/>
		<img src={mod} alt="book" width = "120"/>
		<img src={mod} alt="book" width = "120"/></a></p>
    </nav>
  );
}
export default Bottom;