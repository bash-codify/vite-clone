import React, { useEffect, useRef} from 'react';
import { FiSearch } from "react-icons/fi";
import './search.css'

const Search = ({searchToggle})=> {
   
    const container = useRef();

useEffect(() => {
  let handler = (e)=>{
    
    if(container.current.contains(e.target)){
      
        searchToggle(false)
    }
    if(!container.current.contains(e.target)){

      searchToggle(true)

    }
   

  }

  document.addEventListener('click', handler)

  return () => {
    document.removeEventListener('click', handler)
  }
}, [])



  return (
   
        <section className='search-container' >
            <article className='search-wrapper'ref={container} >
                <div className='search-content-container' >


                  <form>
                      <div>
                          <input type="search" name="search" id="search" autoFocus={true} placeholder='Search docs'/>

                          <div className='searchIcon'>
                          <FiSearch/>
                          </div>
                      </div>
                  </form>

                </div>

                <div>

                  <button className='search-btn' type="submit" onClick={()=> searchToggle(false)}>Cancel</button>

                </div>

            </article>
        </section>
    
  )
}

export default Search