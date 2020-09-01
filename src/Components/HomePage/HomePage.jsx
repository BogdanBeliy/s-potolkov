import React, { Suspense } from 'react'
// import Header from '../Header/Header'
// import Construct from '../Header/Construction/Construct'
// import Bonus from '../Bonus/Bonus'
import Garant from '../Garant/Garant'
// import LastProjects from '../LastProjects/LastProjects'
import MapBlock from '../Map/Map'
import Footer from '../Footer/Footer'
import CallbackForm from '../CalbackForm/CallbackForm'
import HowWeWork from '../HowWeWork/HowWeWork'
import { ToTop } from '../BtnTop'


const Header = React.lazy(() => import('../Header/Header'))
const Construct = React.lazy(() => import('../Header/Construction/Construct'))
const Bonus = React.lazy(() => import('../Bonus/Bonus'))
const LastProjects = React.lazy(() => import('../LastProjects/LastProjects'))




export default class HomePage extends React.Component {
    render() {
        return (
            <>

                <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                    <Construct />
                    <Bonus />
                    <Garant />
                    <LastProjects />
                    <HowWeWork />
                    <MapBlock />
                    <CallbackForm />
                    <Footer />
                    <ToTop />
                </Suspense>



            </>
        )
    }


}