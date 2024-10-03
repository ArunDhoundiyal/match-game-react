import './index.css'

const Header = ({score}) => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      alt="website logo"
      className="match-game-logo"
    />
    <div>
      <div className="score-timer-container">
        <div className="score">
          Score: <span>{score}</span>
        </div>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="count-timer">16 sec</p>
        </div>
      </div>
    </div>
  </div>
)

export default Header
