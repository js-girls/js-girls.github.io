import React from "react"
import MediaPartners from '../MediaPartners'
import PhenomicReference from '../PhenomicReference'
import styles from "./index.css"
import mediaPartners from '../../media-partners'
import Sponsors from '../Sponsors'
import sponsors from '../../sponsors'

const Footer = () => (
  <footer className={ styles.footer }>
      <Sponsors sponsors={sponsors}/>
    <MediaPartners mediaPartners={mediaPartners}/>
    <PhenomicReference/>
  </footer>
)

export default Footer
