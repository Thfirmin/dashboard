import React, { ReactNode } from 'react';

interface PropInput {
	className?: string
	children?: ReactNode,
};

export default function Layout({className, children}: PropInput): ReactNode {
	return (
		<div className={className}>
			{children}
		</div>
	);
}