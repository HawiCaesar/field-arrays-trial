import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import Button from "@material-ui/core/Button";

import Property from "./property";

const Properties = props => (
  <FieldArray name={props.name}>
    {({ fields }) => (
      <div>
        {fields.map((path, index) => (
          <Field key={path} name={path} subscription={{ value: true }}>
            {({ input }) => (
              <Property
                property={input.value}
                path={input.name}
                move={props.move}
                index={index}
                fields={fields}
              />
            )}
          </Field>
        ))}
      </div>
    )}
  </FieldArray>
);

export default Properties;
