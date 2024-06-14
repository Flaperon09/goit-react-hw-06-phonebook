import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/actions";
import { FilterTitle, FilterInput } from './Filter.styled';

export const Filter = ({value}) => {
    // Получаем ссылку на функцию отправки экшенов
    const dispatch = useDispatch();

    // Вызываем генератор экшена и передаём идентификатор задачи
    // Отправляем результат - экшен удаления задачи
    // const handleFilter = (event) => dispatch(filterContact(event.currentTarget.value));
    const handleFilter = (event) => {
        const normalizedValue = event.target.value.toLowerCase();
        dispatch(filterContact(normalizedValue))
    };

    return (
        <div>
            <FilterTitle>Find contacts by name</FilterTitle>
            {/* <FilterInput type="text" name="filter" value={value} onChange={onChange}></FilterInput> */}
            <FilterInput type="text" name="filter" value={value} onChange={handleFilter}></FilterInput>
        </div>
    )
};