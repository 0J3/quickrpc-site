import { Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './os.css';
export default class OS extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={style.os}>
        <img
          src={this.props.icon}
          alt={`ICON_${this.props.short.toUpperCase()}`}
          class={style.icon}
        />
        <p class={style.name}>{this.props.name}</p>
        <Link href={`/download?platform=${this.props.short}`}>
          <button
            class={'button ' + style.btn}
            active={this.props.active || 'no'}
          >
            Download
          </button>
        </Link>
      </div>
    );
  }
}
