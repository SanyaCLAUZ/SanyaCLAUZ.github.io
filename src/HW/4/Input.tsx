type InputPropsType = {
	currentText: string;
	setCurrentText: (text: string) => void;
};

export const Input = (props: InputPropsType) => {
	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		// НУЖНО ДОПИСАТЬ
		props.setCurrentText(event.target.value);
	};

	return (
		<input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
	);
};