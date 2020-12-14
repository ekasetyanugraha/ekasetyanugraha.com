import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { CONTACT_CODE_REACT } from '../../helpers/contacts';
import { scrollElementToBottom } from '../../helpers/element';
import { getContactConversations } from '../../helpers/messages';
import MessageBubble from './MessageBubble';

export default class ConversationWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.refMessageContainer = React.createRef();
  }

  get conversations () {
    return getContactConversations(this.props.messages, CONTACT_CODE_REACT, this.props.to);
  }

  componentDidUpdate() {
    scrollElementToBottom(this.refMessageContainer.current);
  }

  render() {
    return (
      <div
        ref={this.refMessageContainer}
        className={`p-4 ${!this.conversations.length && 'is-flex is-align-items-center'}`}
        style={{
          height: 500,
          overflowY: 'auto'
        }}
      >
        {
          !this.conversations.length ?
            <div className="has-text-centered">
              <img src="/images/empty-chat-blue.png" />
              <p className="has-text-info">Start chatting with <span className="is-capitalized">{ this.props.to }</span></p>
            </div>
            :
            <TransitionGroup>
              {
                this.conversations.map(conversation =>
                  <CSSTransition
                    key={conversation.time}
                    timeout={0}
                    classNames="slide-fade"
                  >
                    <MessageBubble
                      isFromSelf={conversation.from === CONTACT_CODE_REACT}
                      title={conversation.from}
                      message={conversation.message}
                      time={conversation.time}
                    />
                  </CSSTransition>
                )
              }
            </TransitionGroup>
        }
      </div>
    );
  }
}
