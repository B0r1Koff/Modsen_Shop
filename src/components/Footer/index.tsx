import {
  AllElementsWrapper,
  ButtonsWrapper,
  Buttons,
  EmailInput,
  Button,
  EmailInputWrapper,
  CheckBox,
  CheckBoxWrapper,
  CheckBoxText,
  ContactsWrapper,
  Text,
  Span,
  IconsWrapper,
  IconsText,
  Line,
  EmailButton,
  EmailWithArrowWrapper,
  Path,
  ErrorMessage
} from './styled';
import * as yup from "yup";
import * as emailjs from "@emailjs/browser"
import { TwitterIcon } from 'src/assets/Twitter';
import { InstagramIcon } from 'src/assets/Instagram';
import { FacebookIcon } from 'src/assets/Facebook';
import { LinkedInIcon } from 'src/assets/LinkedIn';
import { useNavigate } from 'react-router';
import { routes } from 'src/constants/routes';
import { useFormik } from 'formik';
import { ArrowIcon } from 'src/assets/Arrow';

export default function Footer() {
  const navigate = useNavigate();

  const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email')
        .required('Email is required'),
  });

  const formik = useFormik({
        initialValues:{ email: ""},
        onSubmit: values => {
            try{
                emailjs.send('service_kodnaga', 'template_x887d0g', values, 'WlxqKFoUWbFHeWzb1');
                alert("Сообщение успешно отправлено!")
                formik.resetForm()
            }catch(e){
                alert(e)
                return
            }
        },
        validationSchema: validationSchema
})

  return (
      <AllElementsWrapper>
        <ButtonsWrapper>
          <EmailInputWrapper>
            <EmailWithArrowWrapper onSubmit={formik.handleSubmit}>
              <EmailInput placeholder="Give an email, get the newsletter" name='email' onChange={formik.handleChange} value={formik.values.email}/>
              <EmailButton type='submit'>
                <ArrowIcon Path={Path}/>
              </EmailButton>
            </EmailWithArrowWrapper>
            <ErrorMessage>{formik.errors.email ? formik.errors.email : ""}</ErrorMessage>
          </EmailInputWrapper>
          <CheckBoxWrapper>
            <CheckBox type="checkbox" />
            <CheckBoxText>
              i agree to the website’s terms and conditions
            </CheckBoxText>
          </CheckBoxWrapper>
          <Buttons>
            <Button onClick={() => navigate(routes.CONTACT_US_ROUTE)}>CONTACT</Button>
            <Button>TERMS OF SERVICES</Button>
            <Button>SHIPPING AND RETURNES</Button>
          </Buttons>
        </ButtonsWrapper>
        <ContactsWrapper>
          <IconsWrapper>
            <IconsText>Follow us</IconsText>
            <Line />
            <LinkedInIcon Path={Path}/>
            <FacebookIcon Path={Path}/>
            <InstagramIcon Path={Path}/>
            <TwitterIcon Path={Path}/>
          </IconsWrapper>
          <Text>
            <Span>© 2023 Shelly.</Span> Terms of use <Span>and</Span> privacy
            policy.
          </Text>
        </ContactsWrapper>
      </AllElementsWrapper>
  );
}
