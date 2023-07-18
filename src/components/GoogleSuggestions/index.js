// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onClickChanger = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteSearch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const reasultList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-container">
        <img
          alt="google logo"
          className="google-image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
        />
        <div className="mini-search-con">
          <div className="search-con">
            <div className="mt-3">
              <img
                alt="search icon"
                className="imageUrl"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
            </div>
            <input
              type="search"
              placeholder="Search"
              onChange={this.onClickChanger}
              className="googleInput"
              value={searchInput}
            />
          </div>
          <ul>
            {reasultList.map(eachSuggestion => (
              <SuggestionItem
                suggestions={eachSuggestion}
                key={eachSuggestion.id}
                onDeleteSearch={this.onDeleteSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
