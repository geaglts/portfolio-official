import Menu from '@components/Menu';
import MenuItem from '@components/MenuItem';

import logoImage from '@icons/logo.svg';

import styles from '@styles/Header.module.scss';

const Layout = () => {
	return (
		<header className={styles.Header}>
			<div className={styles.LogoContainer}>
				<img
					className={styles.LogoImage}
					src={logoImage}
					alt="logo de geaglts"
					loading="lazy"
				/>
				<Menu>
					<MenuItem
						title="GitHub"
						href="https://github.com/geaglts"
						target="_blank"
					/>
				</Menu>
			</div>
			<Menu>
				<MenuItem title="Projects" href="#" />
				<MenuItem
					title="Linktree"
					href="https://linktr.ee/gxlts"
					target="_blank"
				/>
			</Menu>
		</header>
	);
};

export default Layout;
