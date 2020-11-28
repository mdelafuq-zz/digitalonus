import styled from "styled-components";
import logoSrc from "../../assets/logo.png";
import "./styles.css";

function Logo(props) {
    const { top, left } = props;

    return <DynamicLogo src={logoSrc} top={top} left={left} className="logo" />
}

const DynamicLogo = styled.img`
    top: ${ props => props.top < 0 ? props.top * 10 : 0 }px;
    bottom: ${ props => props.top > 0 ? props.top * -10 : 0 }px;
    left: ${ props => props.left < 0 ? props.left * 10 : 0 }px;
    right: ${ props => props.left > 0 ? props.left * -10 : 0 }px;
`;

export default Logo;