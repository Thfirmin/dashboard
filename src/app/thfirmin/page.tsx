// Components
import Link from 'next/link';
import Layout from './_components/Layout';

// Styles
import	styles from "./styles.module.css";

export default function Thfirmin() {
	return (
		<Layout {...{className:styles.layout}}>
			<h1>Thfirmin's Dashboard</h1>
			<hr/>
			<Link href="/">
				&larr; Go back to home
			</Link>
		</Layout>
	);
}