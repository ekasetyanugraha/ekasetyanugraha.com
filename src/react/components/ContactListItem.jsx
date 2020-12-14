import React from 'react';
import { CONTACT_CODE_REACT } from '../../helpers/contacts';
import { toShortTime } from '../../helpers/date';
import { getContactConversationsLastMessage } from '../../helpers/messages';

export default class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  get lastConversation() {
    return getContactConversationsLastMessage(this.props.messages, CONTACT_CODE_REACT, this.props.contact.code);
  }

  get lastMessage() {
    return this.lastConversation.message;
  }

  get lastMessageTime() {
    return this.lastConversation.time;
  }

  get lastMessageFromSelf() {
    return this.lastConversation.from === CONTACT_CODE_REACT;
  }

  render() {
    return (
      <div
        className="p-4 is-clickable"
        style={{
          borderBottom: '1px solid hsl(0, 0%, 86%)',
        }}
        onClick={() => this.props.onClick(this.props.contact)}
      >
        <div className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src={this.props.contact.img} className="is-rounded" />
            </figure>
          </div>
          <div className="media-content">
            <div>
              { this.props.contact.name }
              {
                !!this.lastMessageTime &&
                <span
                  className="is-pulled-right has-text-grey-light is-size-7"
                >
                  { toShortTime(this.lastMessageTime) }
                </span>
              }
            </div>
            <div className="has-text-grey-light is-text-ellipsis">
              { this.lastMessageFromSelf && <span>You: </span> }{ this.lastMessage }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
