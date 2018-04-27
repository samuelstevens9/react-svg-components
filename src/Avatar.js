import React from "react"
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() { }
  componentWillReceiveProps(nextprops) { }
  renderInitialsAvatar() {
    const { user, displayName, first_name, last_name } = this.props;
    //console.log("renderInitialsAvatar", user, displayName, first_name, last_name);
    var fi = "";
    var li = "";
    if (displayName) {
      var fl = displayName.split(" ");
      fi = fl[0][0];
      if (fl[1]) {
        li = fl[1][0]
      }
      return [fi, li];
    }
    if (first_name && last_name) {
      fi = first_name[0];
      li = last_name[0];
      return [fi, li];
    }
    if (user.first_name) {
      fi = user.first_name[0];
    }
    if (user.firstName) {
      fi = user.firstName[0];
    }
    if (user.last_name) {
      li = user.last_name[0];
    }
    if (user.lastName) {
      li = user.lastName[0];
    }
    if (fi || li) {
      return [fi, li];
    }
    if (!fi && !li && user.displayName) {
      var fl = user.displayName.split(" ");
      fi = fl[0][0];
      if (fl[1]) {
        li = fl[1][0]
      }
      return [fi, li];
    }
    if (!fi && !li && user.userDisplayName) {
      var fl = user.userDisplayName.split(" ");
      fi = fl[0][0];
      if (fl[1]) {
        li = fl[1][0]
      }
      return [fi, li];
    }
    return [fi, li];
  }
  render() {
    let [fi, li] = this.renderInitialsAvatar();
    return (
      <div id={this.props.id ? this.props.id : ""} className={(this.props.className ? this.props.className : "") + " avatar"}>
        <div className="first-initial">{fi}</div>
        <div className="last-initial">{li}</div>
      </div>
    );
  }
}