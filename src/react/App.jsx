import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { getMyContacts, CONTACT_CODE_REACT } from '../helpers/contacts';
import { getContactConversations, getContactConversationsLastMessage } from '../helpers/messages';
import TheHeader from './components/TheHeader';
import ContactList from './components/ContactList';
import ConversationWrapper from './components/ConversationWrapper';
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

  render() {
    return (
      <div className="card">
        <TheHeader />

        <section
          className="card-content p-0"
          style={{
            minHeight: 500,
            overflow: 'hidden',
          }}
        >
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={this.state.activeContact.code ? 'key-a' : 'key-b'}
              timeout={0}
              classNames="slide-fade-horizontal"
            >
              {
                !this.state.activeContact.code ?
                  <ContactList
                    messages={this.state.messages}
                    onClick={this.onClickContact}
                  />
                  :
                  <ConversationWrapper
                    to={this.state.activeContact.code}
                    messages={this.state.messages}
                  />
              }
            </CSSTransition>
          </SwitchTransition>
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
