import EncryptedStorage from 'react-native-encrypted-storage';
async function retrieveUserSession(private_key) {
    try {   
        const session = await EncryptedStorage.getItem(private_key);
    
        if (session !== undefined) {
          console.log(JSON.parse(session));
            // Congrats! You've just retrieved your first value!
        }
    } catch (error) {
        // There was an error on the native side
    }
}
export default {
    retrieveUserSession,
}