import './index.css'

const RandomImage = ({randomImg}) => (
  <div className="random-image-container">
    <img src={randomImg} alt="random-img" className="style-random-image" />
  </div>
)

export default RandomImage
