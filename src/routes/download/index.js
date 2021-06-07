import style from './style.css';
import win from './win.png';
import snap from './snapcraft.svg';
import deb from './deb.webp';
import OS from './os';

const script = () => {
  const format = {
    win: 'https://github.com/0J3/QuickRPC/releases/download/VERSION/QuickRPC.Setup.VERSION.exe',
    deb: 'https://github.com/0J3/QuickRPC/releases/download/VERSION/quickrpc_VERSION_amd64.deb',
    snap: 'https://github.com/0J3/QuickRPC/releases/download/VERSION/quickrpc_VERSION_amd64.snap',
  };

  const url = new URL(document.location.href);

  const platform = url.searchParams.get('platform');

  let version = url.searchParams.get('version');

  if (!platform || platform == null) return 'noPlat';
  if (!format[platform]) return 'invalidPlat';
  (async () => {
    if (!version) {
      const versions = await (
        await fetch(
          'https://api.github.com/repos/0J3/QuickRPC/git/refs/tags',
          {}
        )
      ).json();
      version = versions[versions.length - 1].ref.replace('refs/tags/', '');
    }
    setTimeout(() => {
      if (
        document.referrer &&
        !(
          document.referrer.startsWith('https://quickrpc') ||
          !document.referrer.startsWith('https://localhost')
        )
      ) {
        window.history.back();
      } else {
        document.location.replace('/installation-guide');
      }
    }, 3000);

    document.location.replace(format[platform].split('VERSION').join(version));
    // window.open(format[platform].split('VERSION').join(version));
  })();

  return 'success';
};

const Download = () => {
  const s = script();
  if (s == 'noPlat') {
    if (typeof window !== 'undefined')
      document.title = 'QuickRPC | Select a Platform';

    return (
      <div className={style.download}>
        <h2>Select your OS</h2>
        <OS
          name="Windows"
          icon={win}
          short="win"
          active={
            navigator.platform.toLowerCase().startsWith('win') ? 'yes' : 'no'
          }
        />
        <OS
          name="Linux (.deb)"
          icon={deb}
          short="deb"
          active={navigator.platform.startsWith('Linux') ? 'yes' : 'no'}
        />
        <OS name="Linux (.snap)" icon={snap} short="snap" />
      </div>
    );
  } else if (s == 'invPlat') {
    if (typeof window !== 'undefined')
      document.title = 'QuickRPC | Invalid Platform Argument';

    return (
      <div className={style.download}>
        <h2>400: Invalid Platform</h2>
        <p>
          Please go to the <a href="/download">download page</a> and select a
          platform again.
        </p>
      </div>
    );
  } else {
    if (typeof window !== 'undefined')
      document.title = 'QuickRPC | Downloading...';

    return (
      <div className={style.download}>
        <h2>Downloading QuickRPC</h2>
        <p>
          If your download does not start, click{' '}
          <a href="#" onClick={script}>
            here
          </a>
        </p>
      </div>
    );
  }
};

export default Download;
