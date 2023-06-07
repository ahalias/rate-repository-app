import SigninForm from './SigninForm';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
    username: yup 
    .string()
    .min(8, "Username length has to be 8 or more")
    .required('Username is required'),
    password: yup
    .string()
    .min(8, "Password length has to be 8 or more")
    .required('Password is required'),
})

const SignIn = () => {

    const onSubmit = (values) => {
        console.log(values);
      };

      const initialValues = {
        username: '',
        password: '',
      };

      

  return (
    <View>
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
    </View>
  )
};



export default SignIn;