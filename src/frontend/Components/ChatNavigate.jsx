import { useNavigate } from 'react-router-dom';

const useChatNavigate = () => {
  const navigate = useNavigate();

  return (obj) => {
    navigate('/Chat', { state: obj });
  };
};

export default useChatNavigate;
