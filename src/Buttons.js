
import React from 'react';
import Icons from './Icons'
/**
 * Properties:
 *  className
 *  id
 *  onClick
 *  text
 */
class CardButton extends React.Component {
  render() {
    return (
      <div id={this.props.id ? this.props.id : ""} className={(this.props.className ? this.props.className : "") + " card card-btn"} onClick={this.props.onClick}>
        <div className="row">
          <div className="btn-icon col-sm-2">
            <i class="material-icons">add_circle_outline</i>
          </div>
          <div className="btn-text col-sm-10">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}
/**
 * Properties:
 *  className
 *  id
 *  onClick
 *  text
 */
class CircleAdd extends React.Component {
  render() {
    return (
      <div id={this.props.id ? this.props.id : ""} className={(this.props.className ? this.props.className : "")} onClick={this.props.onClick}>
        <div className="btn-icon"><i class="material-icons">add</i></div>
        <div className="btn-text">{this.props.text}</div>
      </div>
    )
  }
}
class CircleIcon extends React.Component {
  render() {
    return (
      <div id={this.props.id ? this.props.id : ""} className={(this.props.className ? this.props.className : "")} onClick={this.props.onClick}>
        <Icons className="w100" icon_name={this.props.icon_name} />
        {this.props.text ? <div className="btn-text">{this.props.text}</div> : ""}
      </div>
    )
  }
}

module.exports = { CircleAdd, CardButton, CircleIcon }