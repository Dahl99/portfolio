import React from 'react'
import InfoCard from './InfoCard'

const ShowInfoCards = ({InfoCardData}) => (
    <>
    {InfoCardData.map(entry => (
        <InfoCard title={entry.title} icon={entry.icon} text={entry.text}/>
    ))}
    </>
)

export default ShowInfoCards
