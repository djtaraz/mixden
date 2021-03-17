import * as React from "react"
import {
    Accordion,
    AccordionTitleProps,
    Grid,
    Icon,
    Button,
} from "semantic-ui-react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Song from "../components/song"

export default function IndexPage() {
    const [activeIndex, setActiveIndex] = React.useState<string | number>(0)
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
        {
            id: 4,
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
        {
            id: 4,
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
        {
            id: 4,
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
        {
            id: 4,
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
        {
            id: 4,
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
        {
            id: 4,
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
                    height: "88.5%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 2rem 0 0",
                }}>
                <Grid
                    celled="internally"
                    divided={false}
                    style={{
                        //border: "2px dashed orange",
                        borderRadius: "0 2rem 0 0",
                        maxWidth: "100%",
                        height: "100%",
                    }}>
                    <Grid.Row
                        columns={3}
                        style={{
                            height: "15%",

                            borderRadius: "0 2rem 0 0",
                        }}>
                        <Grid.Column
                            width={2}
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                            <Button icon>
                                <Icon name="angle left" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column textAlign="center" width={12}>
                            <h1>Playlist title</h1>
                        </Grid.Column>
                        <Grid.Column
                            width={2}
                            style={{
                                borderRadius: "0 2rem 0 0",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                            <Button icon>
                                <Icon name="angle right" />
                            </Button>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row
                        columns={1}
                        style={{
                            height: "85%",
                        }}>
                        <Grid.Column
                            width={16}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                position: "relative",
                                maxHeight: "100%",
                                overflow: "auto",
                            }}>
                            <Accordion styled>
                                {songs.map((song, index) => (
                                    <Song
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
                    </Grid.Row>
                </Grid>
            </div>
            <div
                style={{
                    height: "11.5%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 0 2rem 0",
                }}>
                menu
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
