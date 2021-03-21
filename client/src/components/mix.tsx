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
}

export default function Mix({ songs }: Props): React.ReactElement {
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
