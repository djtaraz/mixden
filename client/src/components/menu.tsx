import React, { Props } from "react"
import { Icon, Menu, MenuItemProps } from "semantic-ui-react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "semantic-ui-css/semantic.min.css"

import "../layout.css"

export default function NavMenu(): React.ReactElement {
    const [tab, setTab] = React.useState({})

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        data: MenuItemProps
    ) => {
        setTab(data.name)
    }

    return (
        <Menu
            vertical
            style={{
                height: "100%",
                width: "100%",
                border: "none",
                borderRadius: "2rem 0 0 2rem",
                background:
                    "linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4)",
            }}>
            <Menu.Item
                name="logo"
                className="logo"
                style={{ height: "20%" }}
                onClick={handleClick}
                as={Link}
                to="/"
                activeClassName="active">
                <StaticImage
                    src="../images/mixden-logo-text-colourful.png"
                    style={{ marginTop: "-6vh" }}
                    width={250}
                    quality={95}
                    alt="Mixden"
                />
            </Menu.Item>
            <Menu.Item
                name="mymixes"
                active={tab === "mymixes" || tab === "logo"}
                onClick={handleClick}
                as={Link}
                to="/"
                activeClassName="active">
                <Icon name="life ring" />
                My Mixes
            </Menu.Item>
            <Menu.Item
                name="browse"
                className="borderless"
                style={{
                    marginBottom: "32vh",
                }}
                active={tab === "browse"}
                onClick={handleClick}
                as={Link}
                to="/browse"
                activeClassName="active">
                <Icon name="browser" />
                Browse Mixes
            </Menu.Item>
            <Menu.Item
                name="profile"
                active={tab === "profile"}
                onClick={handleClick}
                as={Link}
                to="/profile"
                activeClassName="active">
                <Icon name="user" />
                {/* make this sign in as from api */}
                Profile
            </Menu.Item>
            <Menu.Item
                name="logout"
                className="borderless corner"
                active={tab === "logout"}
                onClick={handleClick}
                as={Link}
                to="/login"
                activeClassName="active">
                <Icon name="sign out" />
                Logout
            </Menu.Item>
        </Menu>
    )
}
