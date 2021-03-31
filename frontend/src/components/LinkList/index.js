// frontend/components/LinkList/index.js

import { container, list, link } from './LinkList.module.css';
import { NavLink } from 'react-router-dom';

// dynamic render of links to be re used. navArray must have to:label pares
function LinkList({ navArray }) {
  return (
    <ul id={container}>
			{navArray.map((item, idx) => {
				if (idx === 0) {
					return (
						<li className={list} key={item}>
							<NavLink className={link} key={item}exact to={item}>{navArray[1]}</NavLink>
						</li>)
				} else if (idx % 2 === 0) {
					return (
						<li className={list} key={item}>
							<NavLink className={link} key={item} to={item}>{navArray[idx + 1]}</NavLink>
						</li>)
				}
			})}
		</ul>
  )
}

export default LinkList;
