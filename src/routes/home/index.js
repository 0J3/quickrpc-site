import { h } from 'preact';
import { Link } from 'preact-router';
import style from './style.css';

const Home = () => {
  if (typeof window !== 'undefined') {
    document.title = 'QuickRPC | Home';
  }
  return (
    <div class={style.home}>
      <h1>QuickRPC</h1>
      <h3>An fast-and-easy-to-setup Discord Rich-Presence Tool</h3>
      <p>
        To get started with QuickRPC, click <Link href="/download">here</Link>!
        <br />
        <br />
      </p>
      <p
        style={{
          position: 'fixed',
          left: 50 + '%',
          bottom: 0,
          transform: 'translate(-50%,0)',
          display: 'block',
          width: '95vw',
          textAlign: 'center',
        }}
      >
        Notice: This site is not going to look asd good as I wanted, as I just
        can't be bothered. At the end of the day, I made QuickRPC for myself,
        and made it public for the Discord Community. I am not selling a
        product, nor necesarily actively trying to get new users.
        <br />
        However, if you want a new feature, or need support, or wish to
        contribute, I encourage you to look at the{' '}
        <a href="https://github.com/0J3/QuickRPC">Source</a>, or file an issue{' '}
        <a href="https://github.com/0J3/QuickRPC/issues/new">here</a>
      </p>
    </div>
  );
};

export default Home;
