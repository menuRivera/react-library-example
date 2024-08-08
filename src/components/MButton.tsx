import React, { ReactNode } from 'react'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}
const MButton: React.FC<IProps> = ({ children, ...props }) => {
	return <button style={{
		color: 'blue',
		cursor: 'pointer',
		backgroundColor: 'yellowgreen',
		padding: '5px',
		fontSize: '20px',
		borderRadius: '10px',
		border: '0px',
	}} {...props}>
		{children}
	</button>
}

export default MButton
