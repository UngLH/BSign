import EncryptedStorage from 'react-native-encrypted-storage';

async function storeUserSession(private_key) {
    try {
        await EncryptedStorage.setItem(
            private_key,
            JSON.stringify({
                age : 21,
                token : "ACCESS_TOKEN",
                username : "emeraldsanto",
            })
        );
  
        // Congrats! You've just stored your first value!
    } catch (error) {
        // There was an error on the native side
    }
  }

export default {
    storeUserSession,
}