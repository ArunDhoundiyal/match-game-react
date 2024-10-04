import './index.css'

const GameOver = ({score}) => {
  const onClickPlayAgainButton = () => {
    window.location.reload()
  }
  return (
    <div className="game-over-bg-container">
      <div className="game-over-container">
        <div className="game-over-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt=" trophy"
            className="trophy"
          />
          <h1 className="your-score-heading">YOUR SCORE</h1>
          <h1 className="score-heading">{score}</h1>
          <button
            className="play-again-button"
            type="button"
            onClick={onClickPlayAgainButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default GameOver
