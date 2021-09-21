const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "/db", "/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  const result = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(result);
  return contacts;
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

listContacts().then((data) => console.log(data));
