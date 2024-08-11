type ButtonPropsType = {
  callBack: () => void; // НУЖНО ПРОТИПИЗИРОВАТЬ
  name: string; // НУЖНО ПРОТИПИЗИРОВАТЬ
};

const callBackHandler = (props: ButtonPropsType) => {
    props.callBack(); // Вызываем функцию, переданную в пропсах
  };

export const Button = (props: ButtonPropsType) => {
  return (
      <button id={'hw04-button'} onClick={props.callBack}>
        {props.name}
      </button>
  );
};