import React from 'react'

export default class MenuBar extends React.Component {

  initialMenuClick = (event) => {
    this.props.handleMenuClick(event.target.id)
  }

  render() {

    let currentActive = this.props.currentActive
    return (
      <div className="ui four item menu">
        <a className={"item " + (currentActive==="profile" ? "active" : null)} id="profile" onClick={this.initialMenuClick}>
          <i className="user large icon" id="profile"/>
        </a>

        <a className={"item " + (currentActive==="photo" ? "active" : null)} id="photo" onClick={this.initialMenuClick}>
          <i className="photo large icon" id="photo"/>
        </a>

        <a className={"item " + (currentActive==="cocktail" ? "active" : null)} id="cocktail" onClick={this.initialMenuClick}>
          <i className="cocktail large icon" id="cocktail"/>
        </a>

        <a className={"item " + (currentActive==="pokemon" ? "active" : null)} id="pokemon" onClick={this.initialMenuClick}> 
          <i className=" themeisle large icon" id="pokemon"/>
        </a>
      </div>
    )
  }

}
