import React from 'react'
import Banner from '../../components/Banner/Banner'
import Navigation from '../../components/Navigation/Navigation'
import Row from '../../components/Row/Row'
import requests from '../../Requests'

import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navigation/>
            <Banner/>
            <Row
                title="Netflix Originals"
                fetchUrl={requests.fetNetflixOriginals}
                isLargeRow
            />
            <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Documentary"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
    )
}

export default HomeScreen
