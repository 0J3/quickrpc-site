import { Component } from 'preact';
import { Link } from 'preact-router/match';
import guideStyle from './guide.css';
import Code from '../Code';
import Title from '../Title';
import CodeBlock from './CodeBlock';
import MarkdownView from 'react-showdown';
export default class Guide extends Component {
  constructor() {
    super();
  }

  render() {
    if (typeof window !== 'undefined') {
      document.title = 'QuickRPC | ' + this.props.articleName;
    }
    return (
      <div className={guideStyle.content}>
        <MarkdownView
          markdown={this.props.children || this.props.page}
          components={{ Code, Title, CodeBlock }}
          options={{
            simplifiedAutoLink: true,
            strikethrough: true,
            ghMentions: true,
            ghCodeBlocks: true,
            backslashEscapesHTMLTags: true,
            tables: true,
          }}
        />
      </div>
    );
  }
}
