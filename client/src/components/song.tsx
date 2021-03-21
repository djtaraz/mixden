import React from "react"
import { Accordion, AccordionTitleProps, Icon } from "semantic-ui-react"

type Props = {
    name: string
    addedOn: string
    link: string //temp
    index: number
    activeIndex: string | number
    handleClick: (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        data: AccordionTitleProps
    ) => void
}

export default function Song({
    name,
    addedOn,
    link,
    index,
    activeIndex,
    handleClick,
}: Props): React.ReactElement {
    return (
        <>
            <Accordion.Title
                active={activeIndex === index}
                index={index}
                onClick={handleClick}>
                <Icon name="play" />
                {name}, added on {addedOn}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === index}>
                <p>{link}</p>
            </Accordion.Content>
        </>
    )
}
