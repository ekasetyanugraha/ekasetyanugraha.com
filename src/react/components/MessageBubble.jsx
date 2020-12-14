import React from 'react';
import { toShortTime } from '../../helpers/date';

export default class MessageBubble extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.isFromSelf ? 'level-right' : ''}
      >
        <div
          className={`box is-inline-block p-2 mb-2 ${this.props.isFromSelf ? 'has-background-info' : ''}`}
          style={{
            minWidth: 100,
            maxWidth: 300,
          }}
        >
          {
            !this.props.isFromSelf &&
            <div className="has-text-link has-text-weight-bold is-capitalized">
              { this.props.title }
            </div>
          }
          <div
            className={this.props.isFromSelf ? 'has-text-white' : ''}
            style={{
              wordBreak: 'break-word',
            }}
          >
            { this.props.message }
          </div>
          <div
            className={`is-size-7 ${!this.props.isFromSelf ? 'has-text-grey-light' : ''} ${this.props.isFromSelf ? 'has-text-white-ter' : ''}`}
          >
            { toShortTime(this.props.time) }
          </div>
        </div>
      </div>
    );
  }
}
