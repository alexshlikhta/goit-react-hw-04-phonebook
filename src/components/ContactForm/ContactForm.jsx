import { useState } from 'react';
import s from './contactForm.module.scss';

export default function ContactForm({onSubmit}) {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const clearFields = () => {
		setName('');
		setNumber('');
	};
 
	const handleChange = (e) => {
		const {name, value} = e.target;

		switch (name) {
			case 'name':
				setName(value);

				break;

			case 'number':
				setNumber(value);
				
				break;
		
			default:
				break;
		}
	};

	const handleSubmitForm = (event) => {
		event.preventDefault();
		onSubmit({
			name, number 
		});
		clearFields();
	};

	return (
		<form onSubmit={handleSubmitForm}>
			<label>
				Name
				<input
					type='text'
					name='name'
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					value={name}
					onChange={handleChange}
				/>
			</label>

			<label>
				Phone
				<input
					type='tel'
					name='number'
					pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
					title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
					required
					value={number}
					onChange={handleChange}
				/>
			</label>

			<button type='submit'>Add contact</button>
		</form>
	);
};


// export default class ContactForm extends Component {
// 	state = {
// 		name: '',
// 		number: '',
// 	};

// 	clearFields = () => {
// 		this.setState({
// 			name: '',
// 			number: '',
// 		});
// 	};

// 	handleChange = (e) => {
// 		this.setState({
// 			[e.target.getAttribute('name')]: e.target.value,
// 		});
// 	};

// 	handleSubmit = (event) => {
// 		event.preventDefault();
// 		this.props.onSubmit(this.state);
// 		this.clearFields();
// 	};

// 	render() {
// 		return (
// 			<form onSubmit={this.handleSubmit}>
// 				<label>
// 					Name
// 					<input
// 						type='text'
// 						name='name'
// 						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// 						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
// 						required
// 						value={this.state.name}
// 						onChange={this.handleChange}
// 					/>
// 				</label>

// 				<label>
// 					Phone
// 					<input
// 						type='tel'
// 						name='number'
// 						pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
// 						title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
// 						required
// 						value={this.state.number}
// 						onChange={this.handleChange}
// 					/>
// 				</label>

// 				<button type='submit'>Add contact</button>
// 			</form>
// 		);
// 	}
// }
