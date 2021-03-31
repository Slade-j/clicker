// frontend/components/LinkList/LinkList.js

import React from 'react';
import { NavLink } from 'react-router-dom';

// dynamic render of links to be re used. navArray must have to:label pares
function LinkList({ navArray }) {
  return (
    <div className="linklist">
			{navArray.map((item, idx) => {
				if (idx === 0) {
					return <NavLink exact to={item}>{navArray[1]}</NavLink>
				} else if (idx % 2 === 0) {
					return <NavLink to={item}>{navArray[idx + 1]}</NavLink>
				}
			})}
    </div>
  )
}

export default LinkList;
