import { useEffect, useState } from "react";
import Rodal from "rodal";

type PizzaProps = {
  score: number;
  setScore: (score: number) => void;
};

const Pizza = ({ score, setScore }: PizzaProps) => {
    
    const slices = 8; // nechta bo'lak bo'lsin
    const sliceImg = "https://i.pinimg.com/originals/75/a3/6b/75a36b61023f36dba5983c9d299409c5.png"; // bo'lak rasmi
    const [isVisible, setVisible] = useState(false);
    const [isVisibleQuestion, setVisibleQuestion] = useState(true);
    
  const [questions, setQuestions] = useState([
      {
          q: "Which country is the birthplace of pizza?",
      a: "Italy",
      completed: false,
    },
    {
        q: "How many main ingredients does Margherita pizza have?",
      a: "3 (tomato, mozzarella, basil)",
      completed: false,
    },
    {
      q: "What is the main meat ingredient in Pepperoni pizza?",
      a: "Pepperoni sausage",
      completed: false,
    },
    {
        q: "Which city is considered the 'capital of pizza'?",
        a: "Naples",
        completed: false,
    },
    {
        q: "What kind of oven is traditionally used to bake pizza?",
        a: "Wood-fired oven",
        completed: false,
    },
    {
        q: "How is pizza usually served in Italy?",
        a: "Not sliced, eaten with knife and fork",
        completed: false,
    },
    {
        q: "What are the basic ingredients for pizza dough?",
        a: "Flour, water, salt, yeast, olive oil",
        completed: false,
    },
    {
        q: "What is the most popular type of pizza?",
        a: "Margherita",
        completed: false,
    },
  ]);
  const [question, setQuestion] = useState({ q: "", a: "" });
  
  const handleClick = (i: number) => {
    setVisible(true);
    setQuestion(questions[i]);
};
const showAnswer = () => {
    // alert(`Javob: ${question.a}`);
    setVisibleQuestion(false);
};



useEffect(() => {
  if(questions.filter(item=>!item.completed).length === 0){
    alert(`Quiz finished! Your final score is ${score}`);
    setQuestions(prev => prev.map(item => ({...item, completed: false})));
    setScore(0);
  }
}, [questions, score])



  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[300px] h-[300px] rounded-full">
        {[...Array(slices)].map((_, i) => (
          <img
            key={i}
            src={sliceImg}
            alt="Pizza slice"
            className="absolute left-1/2 top-1/2 origin-bottom w-[150px] cursor-pointer"
            style={{
              transform: `rotate(${(360 / slices) * i}deg) translateY(-30px)`,
              display: questions[i].completed ? "none" : "block",
            }}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
      <Rodal visible={isVisible} onClose={() => setVisible(false)}>
        <div
          className={
            "p-4 text-center " +
            (isVisible && isVisibleQuestion ? " block" : " hidden")
          }
        >
          <h2 className="text-4xl mb-4">Question</h2>
          <p className="mb-4">{question.q}</p>
          <button
            onClick={showAnswer}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Show Answer
          </button>
        </div>

        <div
          className={
            "p-4 text-center " +
            (isVisible && !isVisibleQuestion ? " block" : " hidden")
          }
        >
          <h2 className="text-4xl mb-4">Answer</h2>
          <p className="mb-4">{question.a}</p>
          <div className="flex gap-2 justify-content-center">
            <button
              onClick={() => {
                setVisible(false);
                setVisibleQuestion(true);
                setScore(score + 125);
                setQuestions((prev) =>
                  prev.map((item) =>
                    item.q === question.q ? { ...item, completed: true } : item
                  )
                );
              }}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Correct
            </button>
            <button
              onClick={() => {
                setVisible(false);
                setVisibleQuestion(true);
                setQuestions((prev) =>
                  prev.map((item) =>
                    item.q === question.q ? { ...item, completed: true } : item
                  )
                );
              }}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Incorrect
            </button>
          </div>
        </div>
      </Rodal>
    </div>
  );
};

export default Pizza;
