import React from 'react';

const List = ({people}) => {
  return (
    <>
      {
        people.map(({id,name,age,image})=>(
          <article key={id} className='person'>
            <img src={image} alt='person'/>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        ))
      }
    </>
  );
};

export default List;