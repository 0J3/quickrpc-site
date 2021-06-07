import { Component } from 'preact';
import styles from './style.css';
export default class Title extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h1
        class={`${styles.Title} ${
          styles[`Size-${this.props.size || 'Default'}`]
        }`}
        style={{
          ...(this.props.styledSize
            ? {
                '--Size': this.props.styledSize,
              }
            : {}),
        }}
        id={this.props.children.toString().split(' ').join('-').toLowerCase()}
      >
        {this.props.children}
      </h1>
    );
  }
}
