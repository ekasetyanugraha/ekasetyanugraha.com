import React from 'react';
import { CONTACT_CODE_REACT } from '../../helpers/contacts';
import { sendMessage } from '../../store/messages';

export default class FormMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMessage(e) {
    this.setState({ message: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.message) return;

    sendMessage({
      from: CONTACT_CODE_REACT,
      to: this.props.to,
      message: this.state.message,
    });

    this.setState({ message: '' });
  }

  render() {
    return (
      <form className="is-flex-grow-1" onSubmit={this.onSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              value={this.state.message}
              onChange={this.onChangeMessage}
              placeholder="Put your message here.."
              className="input is-rounded"
              type="text"
              autoFocus
            />
          </div>
          <div className="control">
            <button className="button is-info is-rounded">
              <span className="icon is-small">
                <i className="fas fa-comment"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
