import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { getMyContacts, CONTACT_CODE_REACT } from '../helpers/contacts';
import { scrollElementToBottom } from '../helpers/element';
import { getContactConversations, getContactConversationsLastMessage } from '../helpers/messages';
import TheHeader from './components/TheHeader';
import ContactList from './components/ContactList';
import MessageBubble from './components/MessageBubble';
import FormMessage from './components/FormMessage';
import storeMessages from '../store/messages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContact: {},
      messages: [],
    };
    this.contacts = getMyContacts(CONTACT_CODE_REACT);

    this.onClickContact = this.onClickContact.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.onChangeMessages = this.onChangeMessages.bind(this);

    this.refMessageContainer = React.createRef();

    storeMessages.subscribe(this.onChangeMessages);
  }

  getContactConversations(contact) {
    return getContactConversations(this.state.messages, CONTACT_CODE_REACT, contact.code);
  }

  getContactConversationsLastMessage(contact) {
    return getContactConversationsLastMessage(this.state.messages, CONTACT_CODE_REACT, contact.code);
  }

  onClickBack(e) {
    e.preventDefault();
    this.setState({ activeContact: {} });
  }

  onClickContact(contact) {
    this.setState({ activeContact: contact });
  }

  onChangeMessages() {
    this.setState({ messages: storeMessages.getState() });
  }

  componentDidUpdate() {
    scrollElementToBottom(this.refMessageContainer.current);
  }

  render() {
    return (
      <div className="card">
        <TheHeader />

        {
          this.state.activeContact.code &&
          <button
            className="button is-fullwidth level-left"
            onClick={this.onClickBack}
          >
            <span className="icon is-small">
              <i className="fas fa-chevron-left" />
            </span>
            <span>Back</span>
          </button>
        }

        <section
          ref={this.refMessageContainer}
          className="card-content p-0"
          style={{
            minHeight: 500,
            maxHeight: 500,
            overflowY: 'auto',
          }}
        >
          {
            this.state.activeContact.code ?
              <div className="p-4">
                <TransitionGroup>
                  {
                    this.getContactConversations(this.state.activeContact).map(message =>
                      <CSSTransition
                        key={message.time}
                        timeout={0}
                        classNames="slide-fade"
                      >
                        <MessageBubble
                          isFromSelf={message.from === CONTACT_CODE_REACT}
                          title={message.from}
                          message={message.message}
                          time={message.time}
                        />
                      </CSSTransition>
                    )
                  }
                </TransitionGroup>
              </div>
              :
              <ContactList
                messages={this.state.messages}
                onClick={this.onClickContact}
              />
          }
        </section>

        {
          this.state.activeContact.code &&
          <footer className="card-footer p-3">
            <FormMessage to={this.state.activeContact.code} />
          </footer>
        }
      </div>
    );
  }
}
