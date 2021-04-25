import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

const Contacts = ({
  contacts,
  deleteContact,
  isLoading,
  fetchContacts,
  updateContacts,
  totalContacts,
}) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [unitName, setUnitName] = useState(null);
  const [unitNumber, setUnitNumber] = useState(null);

  const onEdit = ({ id, currentUnitName, currentUnitNumber }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setUnitName(currentUnitName);
    setUnitNumber(currentUnitNumber);
  };

  const updateData = ({ name, number, id }) => {
    updateContacts({ name, number, id });
  };

  const onSave = ({ name, number, id }) => {
    const originName = contacts.find(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() && contact.id !== id,
    );
    const originNumber = contacts.find(
      contact => contact.number === number && contact.id !== id,
    );
    if (originName) {
      alert(`${name} is already used`);
      return;
    }
    if (originNumber) {
      alert(`${number} is already used`);
      return;
    }
    updateData({ name, number, id });
    onCancel();
  };

  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null,
    });
    setUnitName(null);
    setUnitNumber(null);
  };

  return (
    <ul>
      <p>Saved contacts {totalContacts}</p>
      {isLoading && <h1>Downloading ...</h1>}
      {contacts.map(({ name, number, id }) => (
        <li key={id} className={styles.link}>
          {inEditMode.status && inEditMode.rowKey === id ? (
            <div>
              <form>
                <input
                  className={styles.editInput}
                  value={unitName}
                  onChange={event => setUnitName(event.target.value)}
                  type="text"
                  name="name"
                  title="The name can only contain letters, apostrophes, dashes and spaces."
                  required
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
                <input
                  className={styles.editInput}
                  type="tel"
                  value={unitNumber}
                  name="number"
                  onChange={event => setUnitNumber(event.target.value)}
                  title="The phone number must be 11-12 digits and can contain numbers, spaces, dashes, bully brackets and can start with +"
                  required
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </form>

              <button
                className={styles.save}
                onClick={() =>
                  onSave({
                    id: id,
                    name: unitName,
                    number: unitNumber,
                  })
                }
              >
                Save
              </button>
              <button
                className={styles.cancel}
                style={{ marginLeft: 18 }}
                onClick={() => onCancel()}
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <p>{name}</p>
              <p>{number}</p>
              <div className={styles.btnContainer}>
                <button
                  className={styles.edit}
                  onClick={() =>
                    onEdit({
                      id: id,
                      currentUnitName: name,
                      currentUnitNumber: number,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  className={styles.delete}
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func,
};

export default Contacts;
