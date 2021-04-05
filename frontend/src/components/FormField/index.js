// frontend/src/components/FormField/index.js
import SignupFormPage from "../SignupFormPage";
import { mainContainer, center } from './FormField.module.css';

function FormField({ form }) {
  const { Form } = form;
  return (
    <div className={mainContainer}>
      <div className={center}>
        <Form />
      </div>
    </div>
  )
}

export default FormField;
