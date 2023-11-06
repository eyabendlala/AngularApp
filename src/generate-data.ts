const fs = require('fs');
const faker = require('faker');

const generateData = () => {
  const data = [];

  for (let i = 1; i <= 4; i++) {
    const element = {
      id: i,
      photo: `https://picsum.photos/id/${i}/200/200.jpg`,
      author: faker.name.findName(),
      text: faker.lorem.sentence(),
    };
    data.push(element);
  }

  return data;
};

const jsonData = JSON.stringify(generateData(), null, 2);

fs.writeFileSync('data.json', jsonData);

console.log('Data generated and saved to data.json');

