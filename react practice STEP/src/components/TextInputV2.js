import "../styles/textInputStyles.css";

const TextInputV2 = (props) => {
    return <input name={props.placeholder} type={props.type} className={props.className} placeholder={props.placeholder} value={props.value} onChange={(event) => props.onChange(event.target.value)}>
    </input>
}

export default TextInputV2;