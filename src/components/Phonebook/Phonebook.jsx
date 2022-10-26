import { nanoid } from 'nanoid';
import { Component } from 'react';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts, { name: name, id: nanoid() }],
    });
    form.reset();
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <br />
            <label htmlFor="number">Number</label>
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <br />
            <button onClick={() => {}}>Add contact</button>
          </form>
        </div>
        <div>
          <p>Contacts</p>
          <ul>
            {this.state.contacts.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default Phonebook;
