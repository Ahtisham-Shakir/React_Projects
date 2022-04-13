import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Dynamically getting categories
// items file has same category multiple time so.... new Set get only unique category and resolve same occurence to 1
const allCategories = ['all', ...new Set(items.map(item=>item.category))];
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([...allCategories]);

  // Function to filter items
  function filterItems(category) {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;