const jwt = require('jsonwebtoken');
const privateKey = `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNAM/SwAdYK1hV\nuPWAnAGfAnbf3EgTzWN/cd0Mpd+4zb4WXi2xfZG8l8jfFtiNxNE7Vp03ewp8zmNc\nSxfI+zOLN5pNQrp3qxvbjtvT7kZMAFN0QaQHfyb75pUwiG90obcIGqsmqrNntsYV\nz31X+7yhgSirU42l7FT2kWYeKwpERgT5kqov6D8N16QANF/g1USEokajauJstIiD\nurNaNMjJ7RjFZ0KrJLYkmcvCiJv4Of2mKe+9d0ykrHP3ylWDkAFxOEadrwes9vCz\n7NKU38u4WFqVyOY9Y1fhya9qusQSTgZmJY16xw4Nu1ocOfnusdada0WzwjcNNZoT\njXOsbGGhAgMBAAECggEAd4qppXNk1P0xnYslXcGbEGYXe6KwRRvXkVGMXPu84b7X\nwaNZcc6PVTINaEmiLck/WSLAusF89BpFxmPjksco312lFLh8k5uruvQrLAId6+Ok\nxn4gcF6tFOb4yDxHAfPrD0a91uZjh28FQ2Ki7NNWw7bVSFKInuCZCs7uhVkDu5st\nfpFkw2rGxp8y+ZKemX/SDXs0y/tLEAO0yZxUKD2TJe2AnSXNv72OcXXf71wc+/kv\nt1d27rxcNnTrfU80nVm2kGQ/RGYsLfhSFJH+HcYAAhB8HYgCY3ihMsSGWaIZBOdF\nH/4bvK7ujwkM3hp2obDK29DfojRHzwMcfbEeoFBRoQKBgQDwcwHfyOghro07f1/r\nrlYdac5ozVCHS8Z/gY6pd1a+dgmKg38B8f/4LoL9oi9dvUpTnpIJqQ8xrzri8nnR\nEJIoBYRXdggyLUn1DOn34FjtPDAInqUUmKbPWGmGkIzObu/OvkC189XnE5ozujGV\nVtfpvZgYtaCJkUZ98pA9dFccCwKBgQDaQvE7BDyoKUkOycg79CDdKyMqJ3PALWyw\nqAalzYbhTssg3L1cf9VjIfNRtWjBT6JczYHUyDuoyv4ezib43rgMel4jghNL57ez\nYVET8OUz2obCFtZvcW4094TBD3+qrBnuFN/i+gkjj5hO5xn+DCVLzh17bZKh1T/L\nCqh09qgYgwKBgQDLE+c2UWG06M7BvH+P9ysmJnG9VAK6ckZQ9GRAPtmVfO3r/cls\nJC7TNr1NaAhnPHMlEp026YE6rkum17II390BTj+K+tZLQrLe86w7vVB99UKAVTUJ\noy/nmT1u+HDj/RAu5cKTqkAzrPukypIMFk+/S3DFFcljxr3pq88lCDh2JwKBgDkY\nefJuUU/MPQhZUMAeRNqWhkRovabwOxabXeHRug8Ghay7Ee44oqGkJ/qf8h9fraGJ\nQQVgu/qT35Y/Z4KDALKC8E1poZKhszSBqKwGwG6oI8hyIPZWPfYtKdU3MLZ8/uuB\nGnBN6EYdMkKxweLrWnZSHPRE3a7oEiATUa4HOEHxAoGBAK/voA/y2KbU52WG6rd4\npTJadqnnY3uNBVb8RLCfMdyljMgUMLCkkJOHTWRU4hYaM4QGifdjjJEuU+ORciFe\n7r9dzPDYA6nB7KtgMbXOeB3AwR84rKayvlIeGGsk+uGDmLD0j2ItPuoXC3oyOupy\nKeYQmvsfILv2he9xF94JzkI/\n-----END PRIVATE KEY-----\n`;
// console.log(privateKey);
const data = {
  id: '627046f1003e6e9ed96ed128',
  teacherId: 'linh',
  teacherCertificate: {
    pk: '123',
    params: {
      roles: ['Signer'],
    },
  },
  fileHash: [
    'df5f5d06f1eb00cf87e8bc8f93fb4b6e615005711e69dcbcac703569562d339e',
  ],
  fileOriginalName: ['Gi%EF%BF%BDi%20chi%20ti%EF%BF%BDt.pdf'],
  docCount: 1,
  createdAt: '2022-05-02T21:01:47.634Z',
  expiredAt: '2022-05-03T02:01:47.634Z',
  params: {
    a: 12,
    b: '36',
  },
  salt: 'f18eacc8147b2fa258436b6b6a42d5c82275b2105d5e3cc1c8c506dd3ab11430',
};

function genTokens() {
  const token = jwt.sign(
    {exp: Math.floor(Date.now() / 1000) + 60 * 2, data},
    privateKey,
    {algorithm: 'RS256'},
  );

  console.log(token);
  return token
}

export default genTokens;
