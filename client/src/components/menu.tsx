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
            <Link to="/" className="navLink">
                <Menu.Item
                    name="logo"
                    className="logo"
                    style={{ height: "20%" }}
                    onClick={handleClick}>
                    <StaticImage
                        style={{ marginTop: "-25%" }}
                        src="../images/mixden-logo-text-colourful.png"
                        width={250}
                        quality={95}
                        alt="Mixden"
                    />
                </Menu.Item>
            </Link>

            <Link to="/" className="navLink">
                <Menu.Item
                    name="mymixes"
                    active={tab === "mymixes" || tab === "logo"}
                    onClick={handleClick}>
                    <Icon name="life ring" />
                    My Mixes
                </Menu.Item>
            </Link>
            <Link to="/browse" className="navLink">
                <Menu.Item
                    name="browse"
                    className="borderless"
                    style={{
                        marginBottom: "32vh",
                    }}
                    active={tab === "browse"}
                    onClick={handleClick}>
                    <Icon name="browser" />
                    Browse Mixes
                </Menu.Item>
            </Link>
            <Link to="/profile" className="navLink">
                <Menu.Item
                    name="profile"
                    active={tab === "profile"}
                    onClick={handleClick}>
                    <Icon name="user" />
                    {/* make this sign in as from api */}
                    Profile
                </Menu.Item>
            </Link>
            <Link to="/login" className="navLink">
                <Menu.Item
                    name="signup"
                    className="borderless corner"
                    active={tab === "signup"}
                    onClick={handleClick}>
                    {" "}
                    <Icon name="sign out" />
                    Logout
                </Menu.Item>
            </Link>
        </Menu>
    )
}
