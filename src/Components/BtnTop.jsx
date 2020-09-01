import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import {animateScroll} from 'react-scroll'

export const ToTop = () => {
    return(
        <div className="toTop" onClick={animateScroll.scrollToTop}>
            <FontAwesomeIcon icon={faArrowAltCircleUp}/>
        </div>
    )
}