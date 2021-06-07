import { Component } from 'preact';
import Guide from '../../components/Guide';
import guide from './guide.md';

export default class UsageGuide extends Component {
  render() {
    return <Guide articleName="Using QuickRPC" page={guide} />;
  }
}
