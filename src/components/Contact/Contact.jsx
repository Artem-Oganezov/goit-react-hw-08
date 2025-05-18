import { MdDelete, MdPhoneInTalk } from 'react-icons/md';
import s from './Contact.module.css';
import { FaRegUser } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Button } from '@mui/material';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p>
        <FaRegUser />
        {name}
      </p>
      <p>
        <MdPhoneInTalk />
        {number}
      </p>

      <Button
        variant="outlined"
        onClick={() => dispatch(deleteContact(id))}
        startIcon={<MdDelete />}
      >
        Delete
      </Button>
    </li>
  );
};

export default Contact;
