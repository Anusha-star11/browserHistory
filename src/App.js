import './App.css'

// These are the list used in the application. You can move them to any component needed.

// Replace your code here
const App = props => {
  const {historyList, onDeleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyList

  const onClickDeleteButton = () => {
    onDeleteItem(id)
  }
  return (
    <li>
      <div className="main-container">
        <p>{timeAccessed}</p>
        <div className="middle-part">
          <img src={logoUrl} alt="" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button type="button" onClick={onClickDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default App
