import React from "react";

const data = [
  {
    name: "Abraham Lincoln",
    age: 56,
    saying:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta deleniti, natus sequi perspiciatis ullam?",
  },
  {
    name: "Abraham Lincoln",
    age: 55,
    saying:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem distinctio eum sapiente modi deleniti repudiandae voluptates ex sequi ullam ut.",
  },
  {
    name: "Abraham Lincoln",
    age: 54,
    saying:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum soluta deleniti, natus sequi perspiciatis ullam?",
  },
];

const FeedbackCarousals = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="overflow-hidden scroller">
        <ul className="w-max min-w-full flex gap-4 flex-nowrap py-4 animate-scroll">
          {data.map((item, index) => (
            <div
              key={index}
              className="text-white border flex max-w-[700px] items-center justify-start gap-5 bg-transparent p-4"
            >
              <h1>{item?.name}</h1>
              <h2>{item?.age}</h2>
              <h2>{item?.saying}</h2>
            </div>
          ))}

          {data.map((item, index) => (
            <div
              key={index}
              className="text-white border flex max-w-[700px] items-center justify-start gap-5 bg-transparent p-4"
            >
              <h1>{item?.name}</h1>
              <h2>{item?.age}</h2>
              <h2>{item?.saying}</h2>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackCarousals;
