import style from './style.css';

const Download = () => {
  return (
    <div className={style.download}>
      <title>Downloading QuickRPC</title>
      <h2>Downloading QuickRPC</h2>
      <p>
        If your download does not start, click{' '}
        <a
          href="#"
          onClick={async () => {
            const format = {
              win: 'https://github.com/0J3/QuickRPC/releases/download/VERSION/QuickRPC.Setup.VERSION.exe',
              deb: 'https://github.com/0J3/QuickRPC/releases/download/VERSION/quickrpc_VERSION_amd64.deb',
              snap: 'https://github.com/0J3/QuickRPC/releases/download/VERSION/quickrpc_VERSION_amd64.snap',
            };

            const url = new URL(document.location.href);

            const platform = url.searchParams.get('platform');

            if (!platform) throw alert('No Platform Specified');
            if (!format[platform]) throw alert('Invalid Platform');

            let version = url.searchParams.get('version');

            if (!version) {
              const versions = await (
                await fetch(
                  'https://api.github.com/repos/0J3/QuickRPC/git/refs/tags',
                  {}
                )
              ).json();
              version = versions[versions.length - 1].ref.replace(
                'refs/tags/',
                ''
              );
            }

            // document.location.replace(format[platform].split('VERSION').join(version));
            window.open(format[platform].split('VERSION').join(version));

            setTimeout(() => {
              window.history.back();
            }, 200);
          }}
        >
          here
        </a>
      </p>
    </div>
  );
};

export default Download;
