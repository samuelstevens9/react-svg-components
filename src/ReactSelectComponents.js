import React from 'react'
import Icons from './Icons'

class IconOption extends React.Component {
  handleMouseDown(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.onSelect(this.props.option, event);
  }
  handleMouseEnter(event) {
    this.props.onFocus(this.props.option, event);
  }
  handleMouseMove(event) {
    if (this.props.isFocused) return;
    this.props.onFocus(this.props.option, event);
  }
  render() {

    return (
      <div className={this.props.className + " Select-option-label"}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
        title={this.props.option.title}>
        <Icons icon_name={this.props.option.icon} className="Select-Icon" />
        <span>{this.props.children}</span>
      </div>
    );
  }
}
class IconValue extends React.Component {
  render() {
    return (
      <div className="Select-value" title={this.props.value.title}>
        <span className="Select-value-label">
          <Icons icon_name={this.props.value.icon} className="Select-Icon" />
          <span>{this.props.children}</span>
        </span>
      </div>
    )
  }
}


module.exports = {
  IconOption,
  IconValue
}