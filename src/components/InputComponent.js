function InputComponent(props){

    return(
        <div>
            <button onClick={props.decrease}>Decrease</button>
            <input text='text' value={props.count} readOnly={true}/>
            <button onClick={props.increase}>Increase</button>
        </div>
    )

}

export default InputComponent;
