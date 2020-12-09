import React from 'react';
import TheHeader from './components/TheHeader';
import FormMessage from './components/FormMessage';
import storeMessages from '../store/messages';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContact: '',
      messages: [],
    };
    this.contacts = [
      {
        name: 'Vue',
        code: 'vue',
      },
      {
        name: 'Svelte',
        code: 'svelte',
      },
    ];

    this.onClickContact = this.onClickContact.bind(this);
    this.onChangeMessages = this.onChangeMessages.bind(this);

    storeMessages.subscribe(this.onChangeMessages);
  }

  onClickContact(e, contact) {
    e.preventDefault();
    this.setState({ activeContact: contact.code });
  }

  onChangeMessages() {
    this.setState({ messages: storeMessages.getState()});
  }

  render() {
    return (
      <div className="card">
        <TheHeader />

        <section className="card-content p-0" style={{ minHeight: 500 }}>
          {
            this.contacts.map(contact =>
              <button
                key={contact.code}
                className="button button-chat is-fullwidth py-5"
                onClick={e => this.onClickContact(e, contact)}
              >
                {contact.name} ({this.state.messages.filter(message => message.from === contact.code && message.to === 'react').length})
              </button>
            )
          }
        </section>

        {
          this.state.activeContact &&
          <footer className="card-footer p-3">
            <FormMessage to={this.state.activeContact} />
          </footer>
        }
      </div>
    );
  }
}
