const changeObject = {};
let dataStored = [];

function broadcast() {
  Object.keys(changeObject).forEach(k => changeObject[k]());
}

const BaseService = {
  get: () => dataStored,

  setAndBroadcast: async data => {
    dataStored = data;
    broadcast();
  },

  onChange: (key, cb) => {
    changeObject[key] = () => cb(dataStored);
  },

  deleteKey: key => {
    if (changeObject[key]) {
      delete changeObject[key];
    }
  }
};

export { BaseService };
