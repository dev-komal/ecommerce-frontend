import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const FlashMessage = ({ message, type = 'success', ...props }) => {
  return toast(message, { type: type || 'success', ...props });
};

export default FlashMessage;
