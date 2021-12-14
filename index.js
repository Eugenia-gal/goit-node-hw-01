const argv = require('yargs').argv;

const {
  listContacts,
  addContact,
  getContactById,
  removeContact,
} = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  try {
    switch (action) {
      case 'list':
        const contacts = await listContacts();
        console.table(contacts);
        break;

      case 'add':
        if (!name || !email || !phone) {
          console.log(
            '\x1B[33m All contact details have not been entered! Please try again.',
          );
          return;
        }
        const newContact = await addContact(name, email, phone);
        console.log(newContact);
        console.log('\x1B[34m Contact added!');
        break;

      case 'remove':
        const contactToDel = await getContactById(String(id));
        if (!contactToDel) {
          console.log('\x1B[33m Contact not found!');
          return;
        }
        const updatedContacts = await removeContact(String(id));
        console.log(`\x1B[32m Contact with id = ${id} deleted!`);
        console.table(updatedContacts);
        break;

      case 'get':
        const contactById = await getContactById(String(id));
        if (contactById) {
          console.log(contactById);
          console.log('\x1B[32m Contact found!');
          return;
        }
        console.log('\x1B[33m Contact not found!');

        break;
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  } catch (error) {
    console.log(error.message);
  }
}

invokeAction(argv);
