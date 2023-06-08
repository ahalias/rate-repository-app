import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import { Link } from "react-router-native";
import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colorsAppBar.backgroundColor,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  item: {
    flexGrow: 0,
    padding: 5,
    marginLeft: 5,
    marginBottom: 'auto',
    marginTop: 'auto',
  }
});



const AppBar = () => {
    const getAuthentication = useQuery(GET_ME)
    if (getAuthentication.loading) return <div>loading</div>
    const authentication = getAuthentication.data.me
    console.log(authentication)
  return (
  <View style={styles.container}>
          <ScrollView horizontal>

    <View style={styles.item} >
    <Link to="/">
<AppBarTab text="Repositories"></AppBarTab>
</Link>
</View>
<View style={styles.item} >

{ authentication === null
? <Link to="/SignIn">
<AppBarTab text="Sign In"></AppBarTab>
</Link>
: <Link to="/SignOut">
<AppBarTab text="Sign Out"></AppBarTab>
</Link>
}


</View>

</ScrollView>
</View>
  )
}

export default AppBar;