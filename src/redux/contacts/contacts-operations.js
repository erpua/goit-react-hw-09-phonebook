import axios from 'axios';
import contactsActions from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

const addContact = ({ name, number }) => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  const contact = { name, number };
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(contactsActions.addContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

const updateContact = ({ name, number, id }) => async dispatch => {
  dispatch(contactsActions.updateContactRequest());
  const update = { name, number };
  try {
    const { data } = await axios.patch(`/contacts/${id}`, update);
    dispatch(contactsActions.updateContactSuccess(data));
  } catch (error) {
    dispatch(contactsActions.updateContactError(error.message));
  }
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error.message));
  }
};

const contactsOperations = {
  addContact,
  deleteContact,
  fetchContacts,
  updateContact,
};

export default contactsOperations;
