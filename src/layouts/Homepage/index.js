import React from "react"

import PageWithSidebar from "../PageWithSidebar"
import UpcomingEvents from '../../components/UpcomingEvents'
import events from '../../events'

const Homepage = (props) => {
  return (
    <PageWithSidebar { ...props }>
        <UpcomingEvents events={events}/>
    </PageWithSidebar>
  )
}

export default Homepage
