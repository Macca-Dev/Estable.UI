import { UPDATE_USER } from '../constants';

export default function updateUser({ name, value }) {
  return {
    type: UPDATE_USER,
    payload: {
      name,
      value,
    },
  };
}
