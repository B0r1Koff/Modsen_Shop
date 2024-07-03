import Navbar from "src/components/Navbar"
import * as ContactUsPage from "./styled"
import Footer from "src/components/Footer"
import { ContactUsForm } from "src/components/ContactUsForm"
import { useSelector } from "react-redux"

export function ContactUs(){
    return(
        <ContactUsPage.ContactUsPageWrapper>
            <Navbar/>
            <ContactUsPage.ContentWrapper isOpened={useSelector((state: any) => state.isMenuOpened.value)}>
                <ContactUsPage.DesctopTitle>
                    Contact Us
                </ContactUsPage.DesctopTitle>
                <ContactUsPage.MobileTitle>
                    Contact
                </ContactUsPage.MobileTitle>
                <ContactUsPage.Message>
                    Say Hello send us your thoughts about our products or share
                        <br/>
                    your ideas with our Team!
                </ContactUsPage.Message>
                <ContactUsForm/>
            </ContactUsPage.ContentWrapper>
            <Footer/>
        </ContactUsPage.ContactUsPageWrapper>
    )
}