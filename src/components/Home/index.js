import {useState, useEffect, useRef} from 'react'
import Header from '../Header'
import RandomImage from '../RandomImage'
import TabIcon from '../TabIcon'
import DisplayImageList from '../DisplayImageList'
import GameOver from '../GameOver'

import './index.css'

const Home = ({imagesList, tabsList}) => {
  const [tabId, setTabId] = useState(tabsList[0].tabId)
  const [randomImg, setRandomImg] = useState(imagesList[0].imageUrl)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [second, setSecond] = useState(60)
  const [stopTimer, setStopTimer] = useState(true)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (stopTimer) {
      intervalRef.current = setInterval(() => {
        setSecond(preSecond => preSecond - 1)
      }, 1000)
    }
    return () => clearInterval(intervalRef.current)
  }, [stopTimer])

  useEffect(() => {
    if (second === 0) {
      clearInterval(intervalRef.current)
      setGameOver(preState => !preState)
    }
  }, [second])

  const filterImageList = imagesList.filter(
    eachImageList => eachImageList.category === tabId,
  )
  const clickOnTabIcon = id => {
    setTabId(id)
  }

  const generateRandomImage = () => {
    const randomImage =
      imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl
    setRandomImg(randomImage)
  }

  const ThumbnailButton = imgUrl => {
    if (randomImg === imgUrl) {
      generateRandomImage()
      setScore(prevScore => prevScore + 1)
    } else {
      setGameOver(preState => !preState)
      setStopTimer(preState => !preState)
    }
  }

  return (
    <div className="home-bg-container">
      <Header score={score} second={second} />
      {gameOver ? (
        <GameOver score={score} />
      ) : (
        <>
          <RandomImage randomImg={randomImg} />
          <ul className="tab-icon-container">
            {tabsList.map(tabItem => (
              <TabIcon
                key={tabItem.tabId}
                tabItem={tabItem}
                clickTabIcon={clickOnTabIcon}
                isActive={tabId === tabItem.tabId}
              />
            ))}
          </ul>
          <ul className="display-image-container">
            {filterImageList.map(eachImageItem => (
              <DisplayImageList
                key={eachImageItem.id}
                eachImageItem={eachImageItem}
                onClickThumbnail={ThumbnailButton}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Home
