import { Axios } from '../config/axios';
import { requests } from '../config/apiroutes';

export const FormService = {
  store: (data) => {
    const { title, fname, lname, email, phoneNumber, cv, coverLetter } = data;

    const formData = new FormData();
    formData.append('fname', fname);
    formData.append('lname', lname);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('coverLetter', coverLetter);
    formData.append('title', title);
    formData.append('cv', cv);

    return Axios.post(requests.formApi.store, formData)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  },
  update: ({ id, data }) => {
    return Axios.patch(requests.formApi.store + '/' + id, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
};
