import * as React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.StatelessComponent<Props> = (props) => (
	<button type="text" {...props} />
);

export default Button;
