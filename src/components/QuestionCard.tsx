import React from "react";
type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswers: any;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswers,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div>
      <p>
        Question : {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={userAnswers} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
