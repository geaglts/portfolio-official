import styles from '@styles/Menu.module.scss';
import React from 'react';

type Props = {
	children?: JSX.Element | JSX.Element[];
};

const Menu: React.FC<Props> = ({ children }) => {
	return (
		<nav className={styles.Container}>
			<ul className={styles.Content}>{children}</ul>
		</nav>
	);
};

export default Menu;
