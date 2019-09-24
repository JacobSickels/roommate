import { database } from "../firebase";

interface House {
  uid?: string;
  name: string;
  address: string;
}

export const createHouse = (house: House) => {
  return (dispatch: any, getState: any) => {
    return database
      .ref("houses")
      .push(house)
      .then(value => {
        const userId = getState().auth.uid;

        database.ref(`users/${userId}/houses`).push({ houseId: value.key });
      });
  };
};
