import React from 'react';
import { getMyContacts, CONTACT_CODE_REACT } from '../../helpers/contacts';
import ContactListItem from './ContactListItem';

export default class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.contacts = getMyContacts(CONTACT_CODE_REACT);
  }

  render() {
    return (
      <div>
        {
          this.contacts.map(contact =>
            <ContactListItem
              key={contact.name}
              contact={contact}
              messages={this.props.messages}
              onClick={this.props.onClick}
            />
          )
        }
      </div>
    );
  }
}
