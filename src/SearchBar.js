const SearchBar = () => {
  return (
    <nav className="searchbar" >
      <div className="links" float= 'right'>
        
		<input type="text" placeholder="Search" />
		<a href="/" style={{ 
          color: 'white', 
		  fontSize: '12px',
          backgroundColor: '#228B22',
          borderRadius: '15px',
        }}>Search</a>
		<a style={{ 
		   paddingLeft: '5px'
        }}></a>
      </div>
    </nav>
	
  );
}
export default SearchBar;