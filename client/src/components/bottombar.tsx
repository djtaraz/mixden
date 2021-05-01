import React from "react"
import { Menu, Icon, Button } from "semantic-ui-react"

export default function BottomBar(): React.ReactElement {
    const [activeItem, setActiveItem] = React.useState("gamepad")
    const handleClick = (e) => {
        setActiveItem(e.target.name)
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                // border: "2px dashed red",
                width: "30%",
            }}>
            <Button icon>
                <Icon name="backward" size="big" />
            </Button>
            <Button icon>
                <Icon name="play" size="big" />
            </Button>
            <Button icon>
                <Icon name="forward" size="big" />
            </Button>
        </div>
    )
}
