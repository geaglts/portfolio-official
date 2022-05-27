import styles from '@styles/MenuItem.module.scss';
import React, { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	title: string;
}

const MenuItem: React.FC<Props> = ({ title, ...rest }) => {
	return (
		<li className={styles.Item}>
			<a {...rest}>{title}</a>
		</li>
	);
};

export default MenuItem;
