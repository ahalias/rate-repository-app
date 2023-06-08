import { StyleSheet } from "react-native";
import Text from "./Text";
import { View } from "react-native";



const styles = StyleSheet.create({
    appBarTab: {
        color: "#FFFFFF",
        margin: 'auto',

      },
});

const AppBarTab = ({text}) => {
    return (
        <View>
      <Text style={styles.appBarTab} fontWeight="bold" fontSize="heading" >{text}</Text>
      </View>
    )
    };


    export default AppBarTab;