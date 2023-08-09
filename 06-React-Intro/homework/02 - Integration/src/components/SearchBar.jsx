import React from 'react'; 
export default function SearchBar(props) {
   const { onSearch } = props;
   const [searchValue, setSearchValue] = React.useState('');
 
   const handleSearch = () => {
     onSearch(searchValue);
     setSearchValue('');
   };
 
   return (
     <div>
       <input
         type="search"
         value={searchValue}
         onChange={(e) => setSearchValue(e.target.value)}
       />
       <button onClick={handleSearch}>Agregar</button>
     </div>
   );
 }
 