import './index.css'

const DisplayImageList = ({eachImageItem, onClickThumbnail}) => {
  const {id, thumbnailUrl, imageUrl} = eachImageItem
  const onClickThumbnailButton = () => {
    onClickThumbnail(imageUrl)
  }
  return (
    <li className="style-thumbnail" onClick={onClickThumbnailButton}>
      <img src={thumbnailUrl} alt={id} className="thumbnail-url-style" />
    </li>
  )
}

export default DisplayImageList
