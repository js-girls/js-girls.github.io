import React from "react"

import PageWithSidebar from "../PageWithSidebar"
import UpcomingEvents from '../../components/UpcomingEvents'

const events = [
    {
        name: 'roma-2017',
        location: 'Rome',
        date:  'to be announced'
    },

    {
        name: 'barcellona-2017',
        location: 'Barcellona',
        date:  'to be announced'
    }
]

const Homepage = (props) => {
  return (
    <PageWithSidebar { ...props }>
        <UpcomingEvents events={events}/>
    </PageWithSidebar>
  )
}

export default Homepage
