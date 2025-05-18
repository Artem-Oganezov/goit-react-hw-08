import { TextField } from '@mui/material';
import { changeFilter } from '../../redux/filters/slice';
import s from './SearchBox.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={s.search}>
      <TextField
        id="standard-textarea"
        label="Find contacts by name"
        placeholder="Name"
        multiline
        variant="standard"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
      />
    </div>
  );
};

export default SearchBox;
