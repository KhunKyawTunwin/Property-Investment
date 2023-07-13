import { SignUpForm } from "../../components";
import { SignInForm } from "../../components";

import "./authentication.css";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
