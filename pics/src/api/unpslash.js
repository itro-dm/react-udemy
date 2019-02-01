import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID a04f427815c5e39ccb76dce591c1ed0645c2482a35fbb9b5751095c94fd25222'
  }
});