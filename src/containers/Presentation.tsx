import logo from '@icons/logo.svg';
import styles from '@styles/Presentation.module.scss';

const Presentation = () => {
	return (
		<div className={styles.Presentation}>
			<div className={styles.Circle}>
				<img src={logo} className={styles.Logo} alt="logo" />
				<p>Hola, soy Geaglts</p>
				<p>Portafolio en construcción.</p>
			</div>
		</div>
	);
};

export default Presentation;
