import PropTypes from 'prop-types';
import {
  ContactsItem,
  DeleteButton,
  ContactNumber,
  ContactName,
} from './ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactsItem key={id}>
      <ContactName>{name}:</ContactName> <ContactNumber>{number}</ContactNumber>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </ContactsItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
