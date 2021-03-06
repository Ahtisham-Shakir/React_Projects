import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

// Function that get items from local storage and set the list state on reload
const getLocalStorage = () => {
  const items = localStorage.getItem('list');
  if (items) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else {
    return [];
  }
}
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  // Every time list change it will be set to local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, 'please enter value', 'danger');
    }
    else if (name && isEditing) {
      // deal with edit
      setList(list.map(item => {
        if (editId === item.id) {
          return { ...item, title: name }
        }
        return item
      }))
      setIsEditing(false);
      setName('');
      setEditId(null);
      showAlert(true, 'value changed', 'success');
    }
    else {
      // show alert
      showAlert(true, 'item added to the list', 'success');
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
    // above line is es6 syntax equals to setAlert({show:show, msg:msg, type:type});
  }


  // Function to clear the list
  const clearList = () => {
    showAlert(true, 'Empty List', 'danger');
    setList([]);
  }


  // Function to remove single item from the list
  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter(item => item.id !== id));
  }


  // Function to edit items
  const editItem = (id) => {
    const specificItem = list.find(item => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  }


  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input type='text' className='grocery' placeholder='e.g. eggs' value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button className='submit-btn' type='submit'>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      {list.length > 0 &&
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>clear items</button>
        </div>
      }
    </section>
  )
}

export default App