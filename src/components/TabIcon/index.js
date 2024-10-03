import './index.css'

const TabIcon = ({tabItem, clickTabIcon, isActive}) => {
  const {tabId, displayText} = tabItem
  const onClickTabIcon = () => {
    clickTabIcon(tabId)
  }
  return (
    <li
      className={isActive ? 'style-clicked-tab-icon' : 'style-tab-icon'}
      onClick={onClickTabIcon}
    >
      {displayText}
    </li>
  )
}

export default TabIcon
