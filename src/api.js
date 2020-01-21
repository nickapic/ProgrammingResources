import axios from 'axios';

const destructureMethod = ({ id, name, order }) => {};
export const getSubjects = () => {
  const result = axios
    .get('http://resourceshare.herokuapp.com/api/stacks')
    .then(({ data }) => data);
  return result;
};
