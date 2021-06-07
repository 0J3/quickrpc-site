import { Component } from 'preact';
import Guide from '../../components/Guide';
import guide from './guide.md';

export default class InstallGuide extends Component {
  render() {
    return <Guide articleName="Installation Guide" page={guide} />;
  }
}
