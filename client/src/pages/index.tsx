import * as React from "react"
import {
    Accordion,
    AccordionTitleProps,
    Grid,
    GridColumn,
} from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Song from "../components/song"

export default function IndexPage() {
    const [activeIndex, setActiveIndex] = React.useState<string | number>(0)
    const [visible, setVisible] = React.useState<boolean>(true)
    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        data: AccordionTitleProps
    ) => {
        const index = data.index
        const active = activeIndex
        const newIndex = active === index ? -1 : index
        setActiveIndex(newIndex)
    }

    const songs = [
        {
            id: 1,
            title: "who dat girl",
            addedOn: "21/03/2021",
            playback: "lorem ipsum lorem one two three",
        },
        {
            id: 2,
            title: "timber",
            addedOn: "21/03/2021",
            playback: "lorem impsum lorem ipsum of course",
        },
        {
            id: 3,
            title: "timber",
            addedOn: "21/03/2021",
            playback: "lorem impsum lorem ipsum of course",
        },
        {
            id: 4,
            title: "timber",
            addedOn: "21/03/2021",
            playback: "lorem impsum lorem ipsum of course",
        },
    ]

    return (
        <Layout>
            <SEO title="Mixes" />
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <Grid centered>
                    <Grid.Row columns={1}>
                        <Grid.Column width={5}>
                            <h1>Playlist Title</h1>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={3}>
                        <Grid.Column floated="left" width={1}>
                            previous
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Accordion styled>
                                {songs.map((song, index) => (
                                    <Song
                                        key={song.id}
                                        name={song.title}
                                        addedOn={song.addedOn}
                                        playback={song.playback}
                                        index={index}
                                        activeIndex={activeIndex}
                                        handleClick={handleClick}
                                    />
                                ))}
                            </Accordion>
                        </Grid.Column>
                        <Grid.Column floated="right" width={1}>
                            next
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Layout>
    )
}

/* image syntax gatsby 

    import { StaticImage } from "gatsby-plugin-image"
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />*/
