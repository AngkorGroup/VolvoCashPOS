import AsyncStorage from '@react-native-community/async-storage';

const API_TOKEN = 'API_TOKEN';
const USER_NAME = 'USER_NAME';

export const forgetItem = (key: string) => AsyncStorage.removeItem(key);

export const setUserToken = (token: string) =>
  forgetItem(API_TOKEN).then(
    () =>
      AsyncStorage.setItem(API_TOKEN, token, (err) => {
        if (err) {
          throw err;
        }
      }),
    (err) => {
      console.log(err);
    },
  );

export const setUserName = (name: string) =>
  forgetItem(USER_NAME).then(
    () =>
      AsyncStorage.setItem(USER_NAME, name, (err) => {
        if (err) {
          throw err;
        }
      }),
    (err) => {
      console.log(err);
    },
  );

export const getUserToken = () => AsyncStorage.getItem(API_TOKEN);

export const getUserName = () => AsyncStorage.getItem(USER_NAME);
