import {API_URL} from '@env';

async function viewFile(requestID, fileIndex) {
  var axios = require('axios');
  var data = JSON.stringify({
    status: '',
    skipIndex: 0,
    limitIndex: 90,
    sortByCreated: -1,
    signRequestId: "626903ebb5e6f60cac8cf1eb",
    fileIndex: 0,
  });

  var config = {
    method: 'post',
    url: "http://192.168.1.6:5000/api/sign-request/fetch-data",
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVySWQiOiJsaW5oIiwiaWF0IjoxNjUwNDQ0NzM0fQ.cAGqw-NDkSe7Xd5iyHXhRQhAY5_Bh10q6FMX0qRYfXc',
      'Content-Type': 'application/json',
    },
    data: data,
  };
    try {        
        let response = await axios(config)
        print(response);
        if(response.status != 200) {
            throw 'Failed request'
        }
        console.log(response.data.success);
        if(response.data.success == true) {
            let file = {}    
            file.success = true
            file.file = response.data.file;   
            return file;
        }
        throw 'File not found'        
    } catch(error) {
        debugger
        throw error 
    }
}
export default {
  viewFile,
};
