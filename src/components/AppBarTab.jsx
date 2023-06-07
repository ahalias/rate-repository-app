import { StyleSheet } from "react-native";
import Text from "./Text";



const styles = StyleSheet.create({
    appBarTab: {
        color: "#FFFFFF",
        margin: 'auto',
      },
});

const AppBarTab = ({text}) => {
    return (
      <Text style={styles.appBarTab} fontWeight="bold">{text}</Text>
    )
    };


    export default AppBarTab;