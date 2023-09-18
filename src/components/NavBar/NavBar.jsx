import { useState } from "react";
import Link from "../Link/Link";

import { AiOutlineMenuUnfold, AiFillCloseSquare } from "react-icons/ai";
const NavBar = () => {
	const [open, setOpen] = useState(false);
	const routes = [
		{ id: 1, path: '/', name: 'Home' },
		{ id: 2, path: '/about', name: 'About' },
		{ id: 3, path: '/products', name: 'Products' },
		{ id: 4, path: '/contact', name: 'Contact' },
		{ id: 5, path: '*', name: 'NotFound' }
	];

	return (
		<nav>
			<div className="md:hidden bg-blue-900 cursor-pointer text-2xl py-4 px-8" onClick={() => setOpen(!open)}>
				{
					open === true ? 
					<AiFillCloseSquare></AiFillCloseSquare> 
					: <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
				}
			
			</div>
			<ul className={`md:flex p-6 duration-0 absolute md:static ${open ? 'top-8' : '-top-60'}`}>
				{
					routes.map(route => <Link key={route.id} route={route}></Link>)
				}
			</ul>
		</nav>
	);
};

export default NavBar;