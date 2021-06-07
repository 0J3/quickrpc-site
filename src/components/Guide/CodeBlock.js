import Code from '../Code';
import { Component } from 'preact';
import styles from './style.css';

export default class CodeBlock extends Component {
  render() {
    const data = (this.props.children[0] || 'No Text Available').toString();
    let i = 0;
    let i2 = 0;
    const l = data.split('\n');
    return (
      <code className={styles.code}>
        {data
          .split('\n')
          .map(str => {
            i++;
            if (i == 1 && str == '') {
              i--;
              return 'removeme';
            } else return str;
          })
          .reverse()
          .map(str => {
            i2++;
            if ((i2 == 1 && str == '') || str == 'removeme') {
              i2--;
              return;
            } else
              return (
                <span className={styles.line}>
                  {str}
                  <br />
                </span>
              );
          })
          .reverse()}
      </code>
    );
  }
}
