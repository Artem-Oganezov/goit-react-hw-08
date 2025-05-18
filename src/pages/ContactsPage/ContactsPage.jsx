import React, { useEffect } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import s from './ContactsPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operation';
import { selectIsRefreshing } from '../../redux/auth/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (!isRefreshing) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isRefreshing]);

  return isRefreshing ? null : (
    <div>
      <h1 className={s.book}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
