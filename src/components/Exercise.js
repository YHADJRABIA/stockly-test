import React from "react";
import $ from "jquery";
const Exercise = ({ title, content, name, input, fcn }) => {
  // Processes input and edits result in real-time.
  const handleChange = (event) => {
    let target = event.target;
    $(`#${name}`).text(fcn(target.value));
    $(`#${name}`).parent().removeClass("hide");
    $(`[data-id=${name}]`).removeClass("hide");
    if ($(`#${name}`).is(":empty")) {
      $(`#${name}`).parent().addClass("hide");
      $(`[data-id=${name}]`).addClass("hide");
    }
  };
  return (
    <article>
      <hgroup>
        <h2>{title}</h2>
        <h3>{content}</h3>
      </hgroup>
      <div className="text-input">
        <input
          type="text"
          id="input1"
          name={name}
          placeholder={input}
          onChange={handleChange}
        />
        <label htmlFor="input1">
          <i className="fas fa-pen-fancy"></i>
        </label>
      </div>
      <i data-id={name} className="fas fa-arrow-down hide"></i>

      <div className="text-output hide">
        <h3 className="output" id={name}></h3>
      </div>
    </article>
  );
};

export default Exercise;
