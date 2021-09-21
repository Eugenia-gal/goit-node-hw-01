const contactsOperations = require("./contacts");

const workWithContacts = async (type = "list", id, data) => {
  try {
    switch (type) {
      case "list":
        await contactsOperations.listContacts();
    }
  } catch (error) {
    console.log(error.message);
  }
};

workWithContacts();
