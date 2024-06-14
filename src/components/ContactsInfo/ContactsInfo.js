import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/2actions";
import { ContactListItem, ButtonDelete } from './ContactsInfo.styled';

export const ContactsInfo = ({ contact }) => {
    // Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // Вызываем генератор экшена и передаём идентификатор задачи
    // Отправляем результат - экшен удаления задачи
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
            <ContactListItem key={contact.id}>{contact.name}: {contact.number}
                <ButtonDelete onClick={handleDelete}>Delete</ButtonDelete>
            </ContactListItem>
    )
}