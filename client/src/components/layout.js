import * as React from "react"
import PropTypes from "prop-types"

import "../layout.css"

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
            <div
                style={{
                    margin: "0 auto",
                }}>
                <main>{children}</main>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
