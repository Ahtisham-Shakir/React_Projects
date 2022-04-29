import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = React.useRef(null);

  const handleSubmit = (e)=>{
    e.preventDefault();
  }

  // When ever search component render it will focus input tag
  React.useEffect(()=>{
searchValue.current.focus();
  },[]);

  const searchCocktail = ()=>{
    setSearchTerm(searchValue.current.value);
    // console.log(searchValue.current.value)
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input type='text' id='name' ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm