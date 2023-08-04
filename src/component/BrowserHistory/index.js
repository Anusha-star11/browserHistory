import './index.css'

// These are the list used in the application. You can move them to any component needed.

// Replace your code here
const BrowserHistory = props => {
  const {item} = props

  const {timeAccessed, logoUrl, title, domainUrl} = item

  return (
    <li>
      <div className="item-section">
        <p>{timeAccessed}</p>
        <div className="logo-section">
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
