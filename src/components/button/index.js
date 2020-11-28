import "./styles.css";

function Button(props) {
    const { direction, onClick } = props;

    return (
        <div className={`button button-${direction}`} onClick={onClick} />
    )
}

export default Button;