import { useFormik, Form, Field } from "formik"
import * as FormStyles from "./styled"

export function ContactUsForm(){
    const formik = useFormik({
            initialValues:{ firstName: "", lastName: "", email: "", subject: "", message: ""},
            onSubmit: async values => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
            },
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <FormStyles.InputsContainer>
                <FormStyles.Input placeholder="First Name" name="firstName" type="text" onChange={formik.handleChange} value={formik.values.firstName}/>
                <FormStyles.Input placeholder="Last Name" name="lastName" type="text" onChange={formik.handleChange} value={formik.values.lastName}/>
            </FormStyles.InputsContainer>
            <FormStyles.InputsContainer>
                <FormStyles.Input placeholder="Email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/>
                <FormStyles.Input placeholder="Subject" name="subject" type="text" onChange={formik.handleChange} value={formik.values.subject}/>
            </FormStyles.InputsContainer>
            <FormStyles.ButtonContainer>
                <FormStyles.MessageInput placeholder="Message" name="message" type="text" onChange={formik.handleChange} value={formik.values.message}/>
                <FormStyles.SubmitButton type="submit">SEND</FormStyles.SubmitButton>
            </FormStyles.ButtonContainer>
        </form>
    )

    function validateEmail(value: string) {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
}