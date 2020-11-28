import { useState } from "react"
import { delimit } from "./helpers";
import "./styles.css";
import Button from "../button";
import Logo from "../logo";

function Playground() {

    const [ distanceFromTop, setDistanceFromTop ] = useState(0);
    const [ distanceFromLeft, setDistanceFromLeft ] = useState(0);
    const stepSize = 5;

    const moveLogoTo = side => {
        switch(side) {
            case "top":
                setDistanceFromTop(delimit(distanceFromTop - stepSize));
                break;
            case "bottom":
                setDistanceFromTop(delimit(distanceFromTop + stepSize));
                break;
            case "left":
                setDistanceFromLeft(delimit(distanceFromLeft - stepSize));
                break;
            case "right":
                setDistanceFromLeft(delimit(distanceFromLeft + stepSize));
                break;
        }
    }

    return (
        <div className="playground">
            <Button direction="up" onClick={() => moveLogoTo("top")} />
            <Button direction="down" onClick={() => moveLogoTo("bottom")} />
            <Button direction="left" onClick={() => moveLogoTo("left")} />
            <Button direction="right" onClick={() => moveLogoTo("right")} />
            <Logo top={distanceFromTop} left={distanceFromLeft} />
        </div>
    )
}

export default Playground;