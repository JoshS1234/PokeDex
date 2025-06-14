import "./MainPage.scss"
import React from 'react'

type MainPageProps = {
  pokeData: String
}

const MainPage = ({pokeData}: MainPageProps) => {
  return (
    <div className="mainPageContainer">
        <h1 className="headerContainer">MainPageHeader</h1>
        <p className="contentContainer">{pokeData}</p>
    </div>
  )
}

export default MainPage