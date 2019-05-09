import * as React from 'react';

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
      <div>{children}</div>
    )
  }
}
