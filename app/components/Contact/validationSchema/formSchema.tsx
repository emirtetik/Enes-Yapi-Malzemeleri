import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup.string().required('Bu alan zorunludur'),
    lastName: yup.string().required('Bu alan zorunludur'),
    email: yup.string().email('geçersiz email').required('Bu alan zorunludur'),
    text: yup.string().required('Bu alan zorunludur'),

})

export default formSchema