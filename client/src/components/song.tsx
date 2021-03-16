import React from "react"
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react"

type Props = {
    key: number
    name: string
    addedOn: string
    playback: string //temp
    index: number
    activeIndex: string | number
    handleClick: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        data: AccordionTitleProps
    ) => void
}

export default function Song({
    key,
    name,
    addedOn,
    playback,
    index,
    activeIndex,
    handleClick,
}: Props): React.ReactElement {
    return (
        <>
            <Accordion.Title
                key={key}
                active={activeIndex === index}
                index={index}
                onClick={handleClick}>
                <Icon name="play" />
                {name}, added on {addedOn}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
                <p>{playback}</p>
            </Accordion.Content>
        </>
    )
}
