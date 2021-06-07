import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <h1>QuickRPC</h1>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/download">
        Download
      </Link>
      <Link activeClassName={style.active} href="/installation-guide">
        Installation Guide
      </Link>
      <Link activeClassName={style.active} href="/usage-guide">
        Using QuickRPC
      </Link>
    </nav>
  </header>
);

export default Header;
