//Form Validation
import * as Yup from 'yup'

export const passWordSchema = Yup.object().shape({
  PasswordLength:Yup.number().min(4,'minimum 4 digit required')
  .max(16,'maximum 16 digit').required('length is required')
})