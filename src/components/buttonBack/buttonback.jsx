import { useNavigate } from 'react-router-dom';
import './buttonback.scss';

function GoBack() {
  const navigate = useNavigate();

  return (
    <>
      <section className="button-back-wrapper">
        <span className="button-back" onClick={() => navigate(-1)}>
          BACK
        </span>
      </section>
    </>
  );
}

export default GoBack;
