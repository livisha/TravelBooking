import * as redis from 'redis';
const client = redis.createClient({
    host:"127.0.0.1",
    port:6379,
});

// Set a value
client.set('myKey', 'myValue', (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Set:', reply);
    }
  });
  
  // Get a value
  client.get('myKey', (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Get:', reply);
    }
  });
  