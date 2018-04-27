import React from 'react';

export default class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      svg_icon: "",
    }
    this.static_url = props.static_url ? props.static_url : document.STATIC_URL ? document.STATIC_URL : 'https://raw.githubusercontent.com/samuelstevens9/react-svg-components/master/';
    this.icons = {
      'react': 'react-logo.svg',
    }
  }
  componentDidMount() {

    //console.log("TruthlabSVGIcons fetch",this.static_url+this.icons[this.props.icon_name]);
    this.fetchIcon(this.props.icon_name);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.icon_name != nextProps.icon_name) {
      this.fetchIcon(nextProps.icon_name);
    }
  }
  fetchIcon(icon_name) {
    if (this.icons[icon_name]) {
      fetch(this.static_url + this.icons[icon_name])
        .then((response) => {
          return response.text();
        })
        .then((responseText) => {
          //console.log("got icon", icon_name);
          this.setState({ svg_icon: responseText });
        })
        .catch((error) => {
          console.log("error getting icon", error);
        });
    }
  }
  render() {
    return (
      <span className={(this.props.className ? this.props.className : "") + " icon-svg icon-svg-" + this.props.icon_name} 
        style={this.props.style?this.props.style:""}
        dangerouslySetInnerHTML={{ __html: this.state.svg_icon }}>
      </span>
    )
  }
}