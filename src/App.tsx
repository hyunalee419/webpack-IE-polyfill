import * as React from 'react';
import ProfileContainer from 'containers/ProfileContainer';
import './App.scss';

type Props = {
  children: any;
}

export default class App extends React.Component<Props> {
  static defaultProps = {
    children: 'default'
  }

  render() {
    const { children } = this.props;
    return (
      <div id="app">
        <div>{children}</div>
        <ProfileContainer/>
      </div>
    )
  }
}
