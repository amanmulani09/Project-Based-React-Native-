import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//Form Validation
import * as Yup from 'yup'
const passWordSchema = Yup.object().shape({
  PasswordLength:Yup.number().min(4,'minimum 4 digit required')
  .max(16,'maximum 16 digit').required('length is required')
})
export default function ProjectThreeApp() {
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})