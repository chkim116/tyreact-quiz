import React from "react";
import { AnswerObject } from "../App";
type Props = {
    questionNr: number;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    question: string;
    answers: string[];
    totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion,
}) => {
    return (
        <div>
            <p>
                Question: {questionNr} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}></p>
            <div>
                {answers.map((answer) => (
                    <div key={answer}>
                        <button
                            disabled={!!userAnswer}
                            value={answer}
                            onClick={callback}>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: answer,
                                }}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
