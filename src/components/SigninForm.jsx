import FormikTextInput from "./FormikTextInput";
import { Button, View, StyleSheet } from "react-native";


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
  }
});

const SigninForm = ({ onSubmit }) => {



    return (
      <View style={styles.form}>
        <FormikTextInput style={styles.textInput} name="username" placeholder="username" />
        <FormikTextInput style={styles.textInput} secureTextEntry={true} name="password" placeholder="password" />
        <Button
          title="Sign in"
          onPress={onSubmit}
          testID="submitButton"
          style={{margin: 10, padding: 10, borderRadius: 10}}
        />
      </View>
    );
  };


  export default SigninForm;