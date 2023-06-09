import redis, { createClient, print } from 'redis';

const client = createClient()

client.on('error', err => console.log(`Redis client not connected to the server: ${err.toString()}`));

client.on('connect', () => console.log('Redis client connected to the server'));

const setNewSchool = (schoolName, value) => {
  client.SET(schoolName, value, print);
};
const displaySchoolValue = async (schoolName) => {
  console.log(await client.get(schoolName));
};

await displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
await displaySchoolValue('HolbertonSanFrancisco');
