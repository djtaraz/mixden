import * as React from "react"
import PropTypes from "prop-types"
import { Grid } from "semantic-ui-react"

import "../layout.css"
import NavMenu from "./menu"

/* make use of siteTitelQuery as such

import { useStaticQuery, graphql } from "gatsby"s
const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/

const Layout = ({ children }) => {
    return (
        <>
            <div className="glass">
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "2rem",
                        display: "flex",
                        flexDirection: "row",
                    }}>
                    <div
                        style={{
                            height: "100%",
                            width: "20%",
                            border: "transparent 1px solid",
                            borderRadius: "2rem 0 0 2rem",
                        }}>
                        <NavMenu />
                    </div>
                    <div
                        style={{
                            height: "100%",
                            width: "80%",
                            borderRadius: "0 2rem 2rem 0",
                        }}>
                        <main
                            style={{
                                height: "100%",
                            }}>
                            {children}
                        </main>
                    </div>
                </div>
            </div>
            <div className="slab1"></div>
            <div className="slab2"></div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
