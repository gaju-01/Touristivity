import Button from "../../UI/Button/Button";
import Form from "./TaC.module.css";
const TaC = (props) => {
  return (
    <div className={Form["dec"]}>
      <form>
        <ul>
          <li>We use cookies of your PC</li>
          <br></br>
          <li>
            The personal data including email and the phone number is not seen
            by anyone and totally protected and encrypted.
          </li>
          <br></br>
          <li>
            We have a large community and repsonisve community which in turn
            responses to your doubts re garding the website otherwise you can
            mail which is given in the last section of our website homepage
          </li>
          <br></br>
          <li>
            We reserve the right to modify or terminate the Instagram service
            for any reason, without notice at any time.
          </li>
          <br></br>
          <li>
            We reserve the right to alter these Terms of Use at any time. If the
            alterations constitute a material change to the Terms of Use, we
            will notify you via internet mail according to the preference
            expressed on your account. What constitutes a "material change" will
            be determined at our sole discretion, in good faith and using common
            sense and reasonable judgement.
          </li>
          <br></br>
          <li>
            We reserve the right to refuse service to anyone for any reason at
            any time.
          </li>
          <br></br>
          <li>
            We reserve the right to force forfeiture of any username that
            becomes inactive, violates trademark, or may mislead other users.
          </li>
          <br></br>
          <li>
            We may, but have no obligation to, remove Content and accounts
            containing Content that we determine in our sole discretion are
            unlawful, offensive, threatening, libelous, defamatory, obscene or
            otherwise objectionable or violates any party's intellectual
            property or these Terms of Use.
          </li>
          <br></br>
          <li>
            We reserve the right to reclaim usernames on behalf of businesses or
            individuals that hold legal claim or trademark on those usernames.
          </li>
          <br></br>
        </ul>
        <Button
          height="50px"
          widht="100px"
          type="Submit"
          title="I agree"
          onClick={props.onHandle}
        ></Button>
      </form>
    </div>
  );
};

export default TaC;
