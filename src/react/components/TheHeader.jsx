import React from 'react';

export default class TheHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="card-image has-background-info has-text-white p-5 is-size-4">
        <span className="icon">
          <i className="fab fa-react"></i>
        </span>
        <span className="ml-2">React</span>
      </header>
    );
  }
}
