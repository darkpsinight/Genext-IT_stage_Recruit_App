import React from 'react';
import { ScoreContext } from '../Helpers/scoreContext';
import { Questions } from '../Helpers/QuestionBank';
import '../Quiz/Quiz.css';
import { FormService } from '../../services/formServices';

function EndScreen() {
  const [score, setScore] = React.useContext(ScoreContext);

  /* console.log('history', window.location?.search?.split('=')[1]); */
  return (
    <div className="EndScreen">
      <h1>Test finished</h1>
      <br></br>
      <h3> You scored:</h3>
      <h1 style={{ fontSize: '70px' }}>
        {score} / {Questions?.length}
      </h1>
      <br></br>
      <br></br>
      <button
        onClick={() =>
          FormService.update({
            id: window.location?.search?.split('=')[1],
            data: { score: score }
          })
          .then(() => {
            alert('Score updated');
          })
          .catch(() => {
            alert('Score did NOT update')
          })
        }
      >
        Apply for job
      </button>
    </div>
  );
}

export default EndScreen;
