//format date-time from api
import {format} from 'date-fns';
import {vi} from 'date-fns/locale/vi';
import React, {useState, useEffect} from 'react';

import {API_URL} from '@env';

async function getFile(status) {
  let result = [];
  var axios = require('axios');
  var data = JSON.stringify({
    status: status,
    skipIndex: 0,
    limitIndex: 90,
    sortByCreated: -1,
  });

  var config = {
    method: 'post',
    url: `${API_URL}/api/sign-request/fetch-data`,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVySWQiOiJsaW5oIiwiaWF0IjoxNjUwNDQ0NzM0fQ.cAGqw-NDkSe7Xd5iyHXhRQhAY5_Bh10q6FMX0qRYfXc',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  try {
    let responseData = await axios(config);
    if (responseData.data.requests.length == 0) {
      result = [];
    } else {
      responseData.data.requests.forEach(function (element) {
        // console.log(element)
        element.fileOriginalName.forEach((name, index) => {
          let myObject = {};
          myObject.requestID = element._id;
          (myObject.createAt = format(new Date(element.createdAt), 'dd MMMM', {
            locale: vi,
          })),
            (myObject.teacherName = element.teacherId);
          myObject.status = status;
          // statusFile == '' ? selectFileFromHomeStatus : statusFile;
          myObject.name = name;
          myObject.index = index;
          result.push(myObject);
        });
      });
    }
    return result;
  } catch (error) {
    throw error;
  }
}

export default {
  getFile,
};
