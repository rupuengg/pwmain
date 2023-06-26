import axios from "axios";

export function fetchResponse(
  requestType: string = 'get', // Request Type like get, post, delete
  apiPath: string, // API Path like berth, YardBlock
  token: string | undefined, // Token for authorization
  postData: object | null = null, // Postdata if you want to post something
  isSetAuthorization: boolean = false // If you want to authorize user
): Promise<any> {
  // Set Content-Type in header
  const headers: any = {
    'Content-Type': 'application/json',
  }

  // Set Authorization in header
  if (isSetAuthorization) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  switch (requestType) {
    case 'get':
      return axios.get(apiPath, headers);
    case 'post':
      return axios.post(apiPath, postData, headers);
    case 'put':
      return axios.put(apiPath, postData, headers);
    case 'delete':
      return axios.delete(apiPath, headers);
    default:
      throw new Error(`${requestType} is mandatory.`);
  }
}