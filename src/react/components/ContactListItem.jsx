import React from 'react';
import { toShortTime } from '../../helpers/date';

export default class ContactListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="p-4 is-clickable"
        style={{
          borderBottom: '1px solid hsl(0, 0%, 86%)',
        }}
        onClick={this.props.onClick}
      >
        <div className="media">
          <div className="media-left">
            <span className="icon">
              <i className={this.props.iconClass} />
            </span>
          </div>
          <div className="media-content">
            <div>
              { this.props.name }
              {
                !!this.props.lastMessageTime &&
                <span
                  className="is-pulled-right has-text-grey-light is-size-7"
                >
                  { toShortTime(this.props.lastMessageTime) }
                </span>
              }
            </div>
            <div className="has-text-grey-light">
              { this.props.lastMessageFromSelf && <span>You: </span> }{ this.props.lastMessage }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
