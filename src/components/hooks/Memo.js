import React, { useState } from "react";

export const Main = () => {
  const [title, setTitle] = useState(0);

  const onclickHandler = () => {
    setTitle(Math.random());
  }
  return (
    <div className="p-2">
      <button className="py-2 px-4 bg-gray-400" onClick={onclickHandler}>Click Me</button>
      <Header title={title}/>
      <Header title="Manoj" />
      <Header title="Kumar" />
      <Header title="Munda" />
      <Header title="Master" />
      <Header title="Shifu" />
    </div>
  );
};
export const Header = React.memo( function({ title }){
  console.log("rendering");
  return <h1>Header {title}</h1>;
});
