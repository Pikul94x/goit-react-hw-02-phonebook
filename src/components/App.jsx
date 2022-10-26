import { Component } from "react";
import { nanoid } from "nanoid";
import Phonebook from "./Phonebook/Phonebook";

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };


  render() {
    return (
      <>
      <Phonebook/>
      </>
    )
  }
}





















































// import { nanoid } from 'nanoid';
// import React, { Component } from 'react';
// // import { nanoid } from 'nanoid';

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     name: '',
//     number: '',
//   };

//   // state = {
//   //   contacts: [],
//   //   filter: ''
//   //   name: '',
//   //   number: '',
//   // };

//   renderContacts = (filterValue, contactsArray) => {
//     if (!filterValue)
//       return contactsArray.map(contact => {
//         return (
//           <li key={contact.id}>
//             {contact.name}: {contact.number}
//           </li>
//         );
//       });
//     return contactsArray
//       .filter((el, id) =>
//         el.name.toLowerCase().includes(filterValue.toLowerCase())
//       )
//       .map(contact => {
//         return (
//           <li key={contact.id}>
//             {contact.name}: {contact.number}
//           </li>
//         );
//       });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
//     this.setState({
//       ...this.state,
//       contacts: [...this.state.contacts, { id: nanoid(), name, number }],
//     });
//     form.reset();
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     return (
//       <>
//         <div>
//           {/* PRZENISESC DO KOMPONENTU CONTACTFORM, PRZEKAZAC FORME NA SUBMIT  \\ SUBMITHANDLER={THIS.HANDLEFORMSUBMIT}*/ }
//           <form onSubmit={this.handleFormSubmit}>
//             <label>Name</label>
//             <br />
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//             <br />
//             <label>Number</label>
//             <br />
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//             <br />
//             <button onClick={() => {}}>Add contact</button>
//           </form>
//           {/* PRZENISESC DO KOMPONENTU CONTACTFORM, PRZEKAZAC FORME NA SUBMIT */}
//         </div>
//         <div>
//           <h3>Contacts</h3>
//           <p>Find contacts by name</p>
//           <input
//             type="text"
//             onChange={e => {
//               this.setState({ ...this.state, filter: e.target.value });
//             }}
//           />
//           <ul>{this.renderContacts(filter, contacts)}</ul>
//         </div>
//       </>
//     );
//   }
// }
