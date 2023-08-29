// File System
const fs = require('fs');

const person = async () => {
  await fs.promises.writeFile('./Folder/person.txt', 'Hello everyone 🙂');
};

person();
