import * as React from "react"
import { Grid, Icon, Button, Divider } from "semantic-ui-react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Mix from "../components/mix"
import BottomBar from "../components/bottombar"

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

    const nextMix = () => {
        if (selectedMix === data.getMixes.length - 2) {
            setSelectedMix(selectedMix + 1)
            setNextDisabled(true)
            setPrevDisabled(false)
        } else {
            setSelectedMix(selectedMix + 1)
            setPrevDisabled(false)
        }
    }
    const prevMix = () => {
        if (selectedMix === 0) {
            setPrevDisabled(true)
            setNextDisabled(false)
        } else if (selectedMix === 1) {
            setSelectedMix(selectedMix - 1)
            setPrevDisabled(true)
            setNextDisabled(false)
        } else {
            setSelectedMix(selectedMix - 1)
            setNextDisabled(false)
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

    return (
        <>
            <SEO title="Mixes" />
            <div
                style={{
                    height: "88.9%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "0 2rem 0 0",
                    // border: "2px dashed blue",
                }}>
                <Grid
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
                                <Mix songs={data.getMixes[selectedMix].songs} />
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
                <BottomBar />
            </div>
        </>
    )
}
