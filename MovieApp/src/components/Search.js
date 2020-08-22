 import React from 'react';
 
 function Search(props) {
     return (
         <div>
             <section>
                 <input type="text" placeholder="search for a movie..." 
                 className="searchbox"
                 onChange={props.handleInput}
                 onKeyPress={props.search}
                 />
             </section>
         </div>
     );
 }
 
 export default Search;