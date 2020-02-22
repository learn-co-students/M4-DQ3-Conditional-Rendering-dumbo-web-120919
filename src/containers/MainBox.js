import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { BlankPage, Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    currentActive: BlankPage,
  }

  handleMenuClick = (pageName) => {
    this.setState({
      currentActive: pageName
    })
  }

  render() {

    let ActivePage;

    switch (this.state.currentActive) {
      case "profile":
        ActivePage = Profile
        break;
      case "photo":
        ActivePage = Photos
        break;
      case "cocktail":
        ActivePage = Cocktails
        break;
      case "pokemon":
        ActivePage = Pokemon
        break;
      default:
        ActivePage = BlankPage
    }

    return (
      <div>
        <MenuBar handleMenuClick={this.handleMenuClick} currentActive={this.state.currentActive} />
        <ActivePage />
      </div>
    )
  }

}

export default MainBox
