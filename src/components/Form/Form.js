import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/actions";

import { FormData, FormLabel, FormLabelName, FormInputName } from './Form.styled';
import shortid from 'shortid';

export default function Form({ onSubmit }) {
    // Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // ХУК состояния Redux
    // const state = useSelector(state => state.some.value);
    
    // === ХУКи состояния
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    // === Объект состояния
    const state = {
        id,
        name,
        number,
    };

    // === Обновление state при вводе в <input>
    const handleChange = event => {
        const { name, value } = event.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
        };
        setId(shortid.generate()); // Генерируем id контакта
    };
    
    // === Добавление нового контакта
    const handleSubmit = event => {
        event.preventDefault();
        // Возврат нового контакта в App
        dispatch(addContact(state));
        // Очистка формы после отправки данных
        reset();
    }

    // === Очистка формы
    const reset = () => {
        setName('');
        setNumber('');
    };

        return (
            <div>
                <FormData onSubmit={handleSubmit}>
                    <FormLabel>
                        <FormLabelName>Name</FormLabelName>
                        <FormInputName
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            value={name} onChange={handleChange}
                        />
                        <FormLabelName>Number</FormLabelName>
                        <FormInputName
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            value={number} onChange={handleChange}
                            />
                    </FormLabel>
                    <button type="submit">Add contact</button>
                </FormData>
            </div>
        )
};