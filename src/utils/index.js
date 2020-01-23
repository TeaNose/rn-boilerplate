import {Dimensions} from 'react-native';
import Config from 'react-native-config';
import axios from 'axios';

// common util
export const getDeviceWidth = () => Dimensions.get('window').width;

export const getDeviceHeight = () => Dimensions.get('window').height;

export const validateEmail = email => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

// services util
const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
  responseType: 'json',
  timeout: parseInt(Config.TIMEOUT, 10),
};

export const callPostApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .post(Config.API_URL.concat(url), params, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        try {
          resolve(res.data);
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

export const callGetApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    const params = {
      'api-key': Config.API_KEY,
    };

    axios
      .get(Config.API_URL.concat(url), {params, ...axiosConfig})
      .then(res => {
        try {
          resolve(res.data);
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

export const callPutApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .put(Config.API_URL.concat(url), params)
      .then(res => {
        try {
          resolve(res.data);
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};

export const callDeleteApi = (url, params, authToken) => {
  return new Promise((resolve, reject) => {
    if (authToken) {
      axios.defaults.headers.common.Authorization = authToken;
    }

    axios
      .delete(Config.API_URL.concat(url), params)
      .then(res => {
        try {
          resolve(res.data);
        } catch (error) {
          reject(error);
        }
      })
      .catch(error => reject(error));
  });
};
