import React from 'react';

export default class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const value = this.input.value;
    this.props.onSubmit(value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="text-center">
        <label className='form-label'>Message à envoyer</label>
        <input className='form-control' type="text" ref={(input) => this.input = input} />
        <input type="submit" value="Envoi" className='btn btn-primary mt-2'/>
      </form>
    );
  }
}
