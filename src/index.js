import React from "react";
import { render } from "react-dom";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import Properties from "./properties";

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2));
};

const initialValues = {
  properties: [
    { type: "text", value: "groovey" },
    { type: "number", value: "foo" },
    { type: "text", value: "faaoo", defaultValue: "bar" }
  ]
};

const App = () => (
  <div>
    <Form
      onSubmit={onSubmit}
      mutators={{
        ...arrayMutators
        // move: (args, state, utils) => {
        //   let currently = state.formState.values.properties;
        //   let fromIndex = args[0];
        //   let toIndex = args[1];

        //   let fromIndexValue = currently[fromIndex];
        //   let toIndexValue = currently[toIndex];

        //   utils.changeValue(state, "properties", value => {
        //     value[toIndex] = fromIndexValue;
        //     value[fromIndex] = toIndexValue;
        //     return value;
        //   });
        // }
      }}
      initialValues={initialValues}
      render={({
        handleSubmit,
        form: {
          mutators: { move }
        }
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Properties name="properties" move={move} />
          </form>
        );
      }}
    />
  </div>
);

render(<App />, document.getElementById("root"));
