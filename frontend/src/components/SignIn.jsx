import SigninForm from './SigninForm';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';


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
    const [signIn] = useSignIn();
    const navigate = useNavigate()


    const onSubmit = async (values) => {
        const { username, password } = values;
    
        try {
          const { data } = await signIn({ username, password });
          console.log(data);
          navigate('/')
        } catch (e) {
          console.log(e);
        }
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