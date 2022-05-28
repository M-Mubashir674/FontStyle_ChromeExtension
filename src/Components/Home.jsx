/*global chrome*/
import React, { useState } from 'react';

const Home = () => {
  const [filter,setFilter] = useState();  
  const [items,setItems] = useState(["Optima","Segoe UI","Avanta Garde","Trebuchet MS","Verdana","Helvetica","Tahoma","Georgia","Garamond","Brush Script MT","Courier New","Times New Roman","cursive","Arial"]);
  
  const setFont = (itm) => {
    chrome.runtime.sendMessage({font:itm}).then(result => console.log(result)).catch(er => console.log(er));
  }


  return (
    <div>
      {
        items.map(item => (
          <span className='btn btn-outline-dark m-2' style={{fontFamily:item}} onClick={() => setFont(item)}>{item}</span>
        ))
      }
      <div>
        <button className='btn btn-danger w-100' onClick={() => setFont(null)} >Clear</button>
      </div>
    </div>

  )
}

export default Home