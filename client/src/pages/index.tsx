import * as React from "react"
import {
    Grid,
    Icon,
    Button,
    Divider,
    Accordion,
    AccordionTitleProps,
} from "semantic-ui-react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import SEO from "../components/seo"
import Mix from "../components/mix"
import Song from "../components/song"

const FETCH_MIXES = gql`
    query {
        getMixes {
            id
            title
            addedOn
            username
            songs {
                id
                title
                link
                username
                addedOn
            }
        }
    }
`
export default function IndexPage() {
    const { loading, data } = useQuery(FETCH_MIXES)
    const [nextDisabled, setNextDisabled] = React.useState(false)
    const [prevDisabled, setPrevDisabled] = React.useState(false)
    const [selectedMix, setSelectedMix] = React.useState(0)
    const [activeIndex, setActiveIndex] = React.useState(0)

    const nextMix = () => {
        if (selectedMix === data.getMixes.length - 2) {
            setSelectedMix(selectedMix + 1)
            setActiveIndex(-1)
            setNextDisabled(true)
            setPrevDisabled(false)
        } else {
            setSelectedMix(selectedMix + 1)
            setPrevDisabled(false)
            setActiveIndex(-1)
        }
    }
    const prevMix = () => {
        if (selectedMix === 0) {
            setPrevDisabled(true)
            setNextDisabled(false)
            setActiveIndex(-1)
        } else if (selectedMix === 1) {
            setSelectedMix(selectedMix - 1)
            setPrevDisabled(true)
            setNextDisabled(false)
            setActiveIndex(-1)
        } else {
            setSelectedMix(selectedMix - 1)
            setNextDisabled(false)
            setActiveIndex(-1)
        }
    }

    React.useEffect(() => {
        if (loading) {
            setNextDisabled(true)
            setPrevDisabled(true)
        } else {
            setNextDisabled(false)
            setPrevDisabled(false)
            console.log(data)
        }
    }, [data])

    const handleClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        data: AccordionTitleProps
    ) => {
        const index = data.index
        const newIndex = activeIndex === index ? -1 : index
        const finalVal = Number(newIndex)
        setActiveIndex(finalVal)
    }

    const nextSong = () => {
        if (activeIndex !== data.getMixes[selectedMix].songs.length - 1) {
            setActiveIndex(activeIndex + 1)
        }
    }

    const prevSong = () => {
        if (activeIndex !== 0) {
            setActiveIndex(activeIndex - 1)
        }
    }

    return (
        <>
            <SEO title="Mixes" />
            <div
                style={{
                    height: "88.75%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 2rem 0 0",
                }}>
                <Grid
                    divided={false}
                    style={{
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
                            <Button
                                icon
                                onClick={prevMix}
                                disabled={prevDisabled}>
                                <Icon name="angle left" />
                            </Button>
                        </Grid.Column>
                        <Grid.Column textAlign="center" width={12}>
                            {loading ? (
                                <h1>loading</h1>
                            ) : (
                                <h1>{data.getMixes[selectedMix].title}</h1>
                            )}
                        </Grid.Column>
                        <Grid.Column
                            width={2}
                            style={{
                                borderRadius: "0 2rem 0 0",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                            <Button
                                icon
                                onClick={nextMix}
                                disabled={nextDisabled}>
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
                            {loading ? (
                                loading
                            ) : (
                                <Mix
                                    songs={data.getMixes[selectedMix].songs}
                                    activeIndex={activeIndex}
                                    handleClick={handleClick}
                                />
                            )}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <Divider fitted />
            <div
                style={{
                    height: "11%",
                    marginTop: -2,
                    marginLeft: -1,
                    display: "flex",
                    background:
                        "linear-gradient(to left, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4)",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 0 2rem 0",
                }}>
                <div
                    style={{
                        width: "30%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                    }}>
                    <Button icon onClick={prevSong}>
                        <Icon name="backward" size="big" />
                    </Button>
                    <Button icon>
                        <Icon name="play" size="big" />
                    </Button>
                    <Button icon onClick={nextSong}>
                        <Icon name="forward" size="big" />
                    </Button>
                </div>
            </div>
        </>
    )
}
