import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Field } from "react-final-form";
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import withStyles from "@material-ui/core/styles/withStyles";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const styles = {
  content: {
    margin: "12px 0",
    padding: "16px 40px"
  }
};

class Property extends React.Component {
  render() {
    const { property, classes, move, index, fields } = this.props;

    return (
      <Paper className={classes.content}>
        Item {index + 1}
        <IconButton
          onClick={() => move(index, index - 1)}
          disabled={index === 0}
        >
          <ArrowUpward />
        </IconButton>
        <IconButton
          onClick={() => move(index, index + 1)}
          disabled={fields.length === index + 1}
        >
          <ArrowDownward />
        </IconButton>
        <br />
        <Field name={`${this.props.path}.type`}>
          {({ input }) => (
            <FormControl style={{ minWidth: "220px" }}>
              <InputLabel>Type</InputLabel>
              <Select {...input}>
                {["text", "number"].map((propertyType: string) => (
                  <MenuItem key={propertyType} value={propertyType}>
                    {propertyType}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Field>
        <Field name={`${this.props.path}.value`}>
          {({ input }) => (
            <TextField label="Value" margin="normal" fullWidth {...input} />
          )}
        </Field>
        {property.type === "text" && (
          <Field name={`${this.props.path}.defaultValue`}>
            {({ input }) => (
              <TextField
                label="Default value"
                margin="normal"
                fullWidth
                {...input}
              />
            )}
          </Field>
        )}
      </Paper>
    );
  }
}

export default withStyles(styles)(Property);
