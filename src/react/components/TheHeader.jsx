import React from 'react';
import { CONTACT_NAME_REACT, CONTACT_IMAGE_SRC_REACT } from '../../helpers/contacts';

export default class TheHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="card-image has-background-info has-text-white p-5 is-size-4">
        <figure className="image is-32x32 is-pulled-right">
          <img src={this.props.activeContact.img || CONTACT_IMAGE_SRC_REACT} className="is-rounded has-background-white" />
        </figure>
        {
          this.props.activeContact.code &&
          <span
            className="icon is-clickable"
            onClick={this.props.onClickBack}
          >
            <i className="fas fa-chevron-left" />
          </span>
        }
        <span className="ml-2">{ this.props.activeContact.name || CONTACT_NAME_REACT }</span>
      </header>
    );
  }
}
