import React from "react"
import { Accordion, AccordionTitleProps } from "semantic-ui-react"

import Song from "../components/song"

type Props = {
    songs: [
        {
            id: string
            title: string
            link: string
            username: string
            addedOn: string
        }
    ]
    activeIndex: number
    handleClick: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        data: AccordionTitleProps
    ) => void
}

export default function Mix({
    songs,
    activeIndex,
    handleClick,
}: Props): React.ReactElement {
    return (
        <Accordion styled>
            {songs.map((song, index) => (
                <Song
                    name={song.title}
                    addedOn={song.addedOn}
                    link={song.link}
                    index={index}
                    activeIndex={activeIndex}
                    handleClick={handleClick}
                />
            ))}
        </Accordion>
    )
}
