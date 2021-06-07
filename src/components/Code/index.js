import { Component } from 'preact';
export default class Code extends Component {
  constructor() {
    super();
  }

  render() {
    return <code>{this.props.children}</code>;
  }
}
