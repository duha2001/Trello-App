import axios from 'axios';
import { API_PORT } from '~/utils/constants';

export const fetchBoardDetailsAPI = async (boardId) => {
  const response = await axios.get(`${API_PORT}/v1/boards/${boardId}`);
  //   Trả về kết quả của nó là data
  return response.data;
};
