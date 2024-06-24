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
} from './styled';
import Arrow from "../../assets/Arrow.svg"
import {ReactComponent as ArrowIcon} from "../../assets/Arrow.svg"
import {ReactComponent as LinkedInIcon} from "../../assets/LinkedIN.svg"
import {ReactComponent as FacebookIcon} from "../../assets/Facebook.svg"
import {ReactComponent as InstagramIcon} from "../../assets/Instagram.svg"
import {ReactComponent as TwitterIcon} from "../../assets/Twitter.svg"

export default function Footer() {
  return (
      <AllElementsWrapper>
        <ButtonsWrapper>
          <EmailInputWrapper>
            <EmailWithArrowWrapper>
              <EmailInput placeholder="Give an email, get the newsletter" />
              <EmailButton>
                <ArrowIcon/>
              </EmailButton>
            </EmailWithArrowWrapper>
          </EmailInputWrapper>
          <CheckBoxWrapper>
            <CheckBox type="checkbox" />
            <CheckBoxText>
              i agree to the website’s terms and conditions
            </CheckBoxText>
          </CheckBoxWrapper>
          <Buttons>
            <Button>CONTACT</Button>
            <Button>TERMS OF SERVICES</Button>
            <Button>SHIPPING AND RETURNES</Button>
          </Buttons>
        </ButtonsWrapper>
        <ContactsWrapper>
          <IconsWrapper>
            <IconsText>Follow us</IconsText>
            <Line />
            <LinkedInIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
          </IconsWrapper>
          <Text>
            <Span>© 2023 Shelly.</Span> Terms of use <Span>and</Span> privacy
            policy.
          </Text>
        </ContactsWrapper>
      </AllElementsWrapper>
  );
}
