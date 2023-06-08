import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import { View } from 'react-native';

const styles = StyleSheet.create({
    error: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#FAA0A0',
    }
});

const TextInput = ({ style, error, ...props }) => {
    let textInputStyle = [style];
    if (error) {
        textInputStyle = [style, styles.error];
      }

  return (
    <View>
   <NativeTextInput style={textInputStyle} {...props} /> 
   </View>
  )
};

export default TextInput;