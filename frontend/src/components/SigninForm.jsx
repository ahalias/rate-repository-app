import FormikTextInput from "./FormikTextInput";
import { Text, View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";



const styles = StyleSheet.create({
  form: {
    marginTop: 10,
    marginLeft: 10,
    margin: 'auto',
    width: 240,
    backgroundColor: 'white',

  },
  textInput: {
    width: 240,
    height: 40,
    padding: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    borderColor: 'lightgray',
    backgroundColor: '#F5F5F5'
  }, signinButton: {
    margin: 'auto', 
    padding: 10, 
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: '#FFFFFF',
  }
});

const SigninForm = ({ onSubmit }) => {



    return (
      <View style={styles.form}>
        <FormikTextInput style={styles.textInput} name="username" placeholder="username" />
        <FormikTextInput style={styles.textInput} secureTextEntry={true} name="password" placeholder="password" />
        <Pressable onPress={onSubmit} style={styles.signinButton}><Text style={styles.buttonText}>Sign in</Text></Pressable>
      </View>
    );
  };


  export default SigninForm;