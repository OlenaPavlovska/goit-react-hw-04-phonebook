import { useEffect, useState } from "react";
import { Section } from "./section/section.jsx";
import { Filter } from "./filter/filter.jsx";
import { nanoid } from 'nanoid';
import { ContactForm } from "./contactform/contactform.jsx";
import { ContactList } from "./contactList/contactList.jsx";



export const App=() => {
  const [contacts,setContacts] = useState([])
  const [filter,setFilter] = useState('')
 

useEffect(() => {
  const localData = localStorage.getItem('contacts')
  const dataParce = JSON.parse(localData)
   if (localData && dataParce.length > 0) setContacts(dataParce)
}, [])
  
  useEffect(() => {
  localStorage.setItem('contacts',JSON.stringify(contacts))
},[contacts])

  const addContact = contact => {
if (findContact(contact.name)){
     alert(`${contact.name} is already in contacts`);
     return
}
  return  setContacts(prevState => [...prevState, { id: nanoid(), ...contact }]
  )||true;
};   
  
const  filterChange = e => 
 setFilter(e.target.value );
;

  const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  const findContact = name => contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  
  const onDelete = (contactId) => {
  setContacts((prevState) => {
    return prevState.filter((contact) => contact.id !== contactId)
  }
  )
}
   return (
      <>
        <Section title="PHONEBOOK">
          <ContactForm onSubmit={addContact} />
        </Section>
         <Section title="CONTACTS">
        <Filter
          filter={filter}
          handleChange={filterChange}
          />
          <ContactList contacts={filterContacts} onDelete={onDelete} />
      </Section>
    </>
  );
  }
































   
//   handleChange = (e) => {

//      const { name, value } = e.target;
//      this.setState({ [name]: value });
//   };

//   handleSubmit = (e)  => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     const newContact = {
//             name:name,
//             id: nanoid(),
//             number:number,
//         }
//     this.setState((prev) => ({
//       contacts: [newContact, ...prev.contacts],
//       name: '',
//       number: ''
// 		}))
//   }
 




 




  











// export class App extends Component {
//   state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: ''
// }

//   componentDidMount() {
//      const localData = localStorage.getItem('contacts')
//   const dataParce = JSON.parse(localData)
//      if (localData && dataParce.length > 0) this.setState({contacts:dataParce})
//    }
//   componentDidUpdate(prevProp, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
//     }
//   }

//   addContact = (name, number) => {
//   const newContact = {
//     id: nanoid(),
//     name,
//     number,
//   };
  
//   if (this.findContact(name)) {
//     return alert(`${name} is already in contacts`);
//   }
  
//   this.setState((prevState) => ({
//     contacts: [...prevState.contacts, newContact],
//   }));
// };



//   filterChange = (e) => {
//   this.setState({ filter: e.target.value });
// };
//   filterContacts = () => this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
//   findContact = name => this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  // onDelete = (contactId) => {
  //   this.setState((prevState) => ({
  //     contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  //   }));
  // };
    // render() {
//     const { filter } = this.state;
//     const filteredContacts = this.filterContacts();
//     return (
//       <>
//         <Section title="PHONEBOOK">
//           <ContactForm onSubmit={this.addContact} />
//         </Section>
//          <Section title="CONTACTS">
//         <Filter
//           filter={filter}
//           handleChange={this.filterChange}
//           />
//           <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
//       </Section>
//     </>
//   );
//   }
// };