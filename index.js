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
        const newContact = await addContact(name, email, phone);
        console.log('\x1B[34m Contact added!');
        console.log(newContact);
        break;
      case 'remove':
        const contactToDel = await getContactById(id);
        if (!contactToDel) {
          console.log('\x1B[33m Contact not found!');
          return;
        }
        const updatedContacts = await removeContact(id);
        console.log(`\x1B[32m Contact with id = ${id} deleted!`);
        console.table(updatedContacts);
        break;
      case 'get':
        const contactById = await getContactById(id);
        if (!contactById) {
          console.log('\x1B[33m Contact not found!');
          return;
        }
        console.log('\x1B[32m Contact found!');
        console.log(contactById);

        break;
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  } catch (error) {
    console.log(error.message);
  }
}

invokeAction(argv);
