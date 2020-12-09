import React from 'react';
import storeMessages, { ACTION_ADD_MESSAGE } from '../../store/messages';

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

    storeMessages.dispatch({
      type: ACTION_ADD_MESSAGE,
      payload: {
        from: 'react',
        to: this.props.to,
        message: this.state.message,
      },
    });

    console.log(storeMessages.getState())

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
