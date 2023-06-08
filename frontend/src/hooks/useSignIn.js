import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { useContext } from 'react';
import { useAuthStorage } from '../hooks/useAuthStorage';
import AuthStorageContext from '../contexts/AuthStorageContext';



const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
    const authStorage = useAuthStorage();
        const apolloClient = useApolloClient()
  
    const signIn = async ({ username, password }) => {
        

        try {
          const { data } = await mutate({
            variables: {username: username, password: password}
          });
          const token = data.authenticate.accessToken
          await authStorage.setAccessToken(token)
          apolloClient.resetStore();
          return { data }
        } catch (error) {
          console.log("error", error);
          throw error;
        }
      };
  
    return [signIn, result];
  };


  export default useSignIn;