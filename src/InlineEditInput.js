import React from 'react';

export default class InlineEditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      value: props.value,
    }
    //console.log("InlineEditInput",props);
  }
  componentDidMount() {
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      value: newProps.value,
      //isEditing:(newProps.value == "")
    });
  }
  onInputChange(event) {
    this.setState({ value: event.target.value });
  }
  onInputKeyPress(event) {
    if (event.key == "Enter") {
      this.setState({ isEditing: false })
      if (this.props.onInputChange) {
        this.props.onInputChange(event);
      }
    }
  }
  onSave() {
    this.setState({ isEditing: false });
    if (this.props.onInputChange) {
      this.props.onInputChange(this.state.value);
    }
  }
  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.setState({ isEditing: false })
      if (this.props.onInputChange) {
        this.props.onInputChange(this.state.value);
      }
    }
  }
  handleKeyDown(event) {
    //console.log("event.key",event,event.keyCode);
    if (event.keyCode === 27) {
      this.setState({ isEditing: false, value: this.props.value });
    }
  }
  onInputBlur(event) {
    this.setState({ isEditing: false })
    if (this.props.onInputChange) {
      this.props.onInputChange(event.target.value);
    }
  }
  render() {
    var inpt = (<span onClick={() => { this.setState({ isEditing: true }); }}>{this.state.value}</span>);
    if (this.state.isEditing) {
      var sizeWidth = this.state.value.length == 0 ? '200px' : this.state.value.length * 15;
      inpt = (<input autoFocus type="text" style={{ width: sizeWidth + 'px', 'minWidth': '300px', 'maxWidth': '80%' }} value={this.state.value} onChange={this.onInputChange.bind(this)} onKeyPress={this.onInputKeyPress.bind(this)} onBlur={this.onInputBlur.bind(this)} />)
    }
    return (
      <span className={(this.props.className ? this.props.className : "")}>
        {this.state.isEditing ?
          <div className="input-group input-group-clear">
            <input className="form-control" type="text" value={this.state.value}
              autoFocus
              onKeyPress={this.handleKeyPress.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
              onChange={(evt) => { this.setState({ value: evt.target.value }) }} />
            <div className="input-group-append">
              <a className="input-group-text input-group-clear" style={{ marginRight: "3px" }} href="#" onClick={this.onSave.bind(this)}><i className="material-icons">save</i></a>
              <a className="input-group-text input-group-clear" href="#" onClick={() => this.setState({ isEditing: false, value: this.props.value })}><i className="material-icons">close</i></a>
            </div>
          </div>
          : <div>
            <div className="right">
              <a href="#" onClick={() => this.setState({ isEditing: true })}><i className="material-icons">mode_edit</i></a>
            </div>
            {this.props.children ? this.props.children : this.state.value}
          </div>
        }
      </span>
    );
  }
}
module.exports = InlineEditInput;