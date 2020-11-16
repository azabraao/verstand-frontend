import React, { memo } from "react";
import FormFeedbackStyle from "./styles";

const FormFeedback = ({ feedback }) => {
  return <FormFeedbackStyle>{feedback}</FormFeedbackStyle>;
};

export default memo(FormFeedback);
