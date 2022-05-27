import React from 'react';

import Footer from '@fragments/Footer';
import Header from '@fragments/Header';

import styles from '@styles/Layout.module.scss';

type Props = {
	children?: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<main className={styles.Container}>
			<Header />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
