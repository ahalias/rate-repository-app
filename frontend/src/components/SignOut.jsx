import { useNavigate } from 'react-router-native';
import { useAuthStorage } from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { useEffect } from 'react';




const SignOut =  () => {
    const navigate = useNavigate()
    const apolloClient = useApolloClient()

    const authStorage = useAuthStorage();

    useEffect(() => {
          authStorage.removeAccessToken();
        apolloClient.resetStore();
          navigate('/');
    
      }, [authStorage, apolloClient, navigate]);


}

export default SignOut;