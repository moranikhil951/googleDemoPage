// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestions, onDeleteSearch} = props
  const {suggestion} = suggestions

  const appearSearch = () => {
    onDeleteSearch(suggestion)
  }

  return (
    <li className="listed-items">
      <p className="single-line">{suggestion}</p>
      <button className="buttonImage" type="button">
        <img
          alt="arrow"
          className="arrow-image"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          onClick={appearSearch}
        />
      </button>
    </li>
  )
}
export default SuggestionItem
