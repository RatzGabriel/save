import client from './client';

//client module automaticall includes auth token
const register = (pushToken) =>
  client.post('/expoPushTokens', { token: pushToken });

export default {
  register,
};
