import styles from '@styles/Footer.module.scss';

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className={styles.Container}>
			<p className={styles.Text}>
				{year} &copy; &bull; @gxlts &bull; Miguel Angel Toledo Santiago
			</p>
			<p className={styles.Text}>Hecho con amor para todos los visitantes ♥</p>
		</footer>
	);
};

export default Footer;
