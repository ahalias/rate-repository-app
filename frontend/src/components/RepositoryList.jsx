import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryList = () => {
    const { repositories } = useRepositories();


    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


const ItemSeparator = () => <View style={styles.separator} />;


  return (
    <FlatList style={{backgroundColor: '#e1e4e8'}}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default RepositoryList;