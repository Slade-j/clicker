// frontend/src/components/FormField/index.js
import SignupFormPage from "../SignupFormPage";
import { mainContainer, center } from './FormField.module.css';

function FormField() {

  return (
    <div className={mainContainer}>
      <div className={center}>
        <SignupFormPage />
      </div>
    </div>
  )
}

export default FormField;
