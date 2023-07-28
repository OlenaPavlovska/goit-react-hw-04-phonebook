import { useState } from "react";
import css from './contactform.module.css'

export const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    
    const setState = {
        name: setName,
        number: setNumber
    }

    const handleChange = e => {
        const { name, value } = e.target
        setState[name](value)
    }
    const reset = () => {
        setName('')
        setNumber('')
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!onSubmit({ name, number })) return reset()
    }

 return (
            <>
                <div className={css.contactForm} >
                    <form className={css.form} onSubmit={handleSubmit}>
                        <label className={css.label}
                            htmlFor="name">
                            Name
                            <input className={css.input}
                                type="text"
                                value={name}
                                name="name"
                                onChange={handleChange}
                                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                required
                            />
                        </label>

                        <label className={css.label} htmlFor="number">
                            Number
                            <input className={css.input}
                                type="tel"
                                value={number}
                                name="number"
                                onChange={handleChange}
                                pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
                                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                required
                            />
                        </label>
                        <button className={css.btnAddContacts}
                            type="submit" disabled={!name || !Number(number)}>Add Contact</button>
                    </form>
                </div>
            </>
        )
    }








//     render() {
//         const { name, number } = this.state;
//         return (
//             <>
//                 <div className={css.contactForm} >
//                 <form  className={css.form} onSubmit={this.handleSubmit}>
//                         <label  className={css.label}
//                  htmlFor="name">
//                         Name
//                         <input  className={css.input}
//                             type="text"
//                             value={name}
//   name="name"
//   onChange={this.handleChange}
//  pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />
//                     </label>

//                         <label className={css.label} htmlFor="number">
//                             Number
//                         <input className={css.input}
//                             type="tel"
//                             value={number}
//                             name="number"
//                             onChange={this.handleChange}
//   pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
// title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />
//                     </label>
//                         <button className={css.btnAddContacts}
//                             type="submit" disabled={!name || !Number(number)}>Add Contact</button>
//                     </form>
//                     </div>
//             </>
//         )
//    }
// }






// export class ContactForm extends Component{
//     state = {
//         name: '',
//         number:'',
//     }
//     handleChange=({ target: { value, name } } ) => {
//     this.setState({ [name]:value})
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//        const { name, number } = this.state;
//     this.props.onSubmit(name, number);
//     this.setState({ name: '', number: '' })
//     }