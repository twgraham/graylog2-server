import React from 'react';

const DocumentTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.element),
      React.PropTypes.element,
    ]).isRequired,
  },

  componentDidMount() {
    this.originalTitle = document.title;
    document.title = `${document.title} - ${this.props.title}`;
  },

  componentWillUnmount() {
    document.title = this.originalTitle;
  },

  originalTitle: undefined,

  render() {
    return this.props.children;
  },
});

export default DocumentTitle;
