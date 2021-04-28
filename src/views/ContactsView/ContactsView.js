/* import Section from '../../components/Section/Section';
import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import Contacts from '../../components/Contacts/Contacts.container';

const ContactsView = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};

export default ContactsView;
 */

import Section from '../../components/Section/Section';
import Form from '../../components/Form/Form';
import Contacts from '../../components/Contacts/Contacts';

const ContactsView = () => {
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Contacts />
      </Section>
    </>
  );
};

export default ContactsView;
