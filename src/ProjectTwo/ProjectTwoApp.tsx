import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import FancyCardSelf from './components/FancyCardSelf'
const ProjectTwoApp = () => {
  const isPopularPlaces = true;
  return (
   <SafeAreaView>
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCard cardTitle="Trending Places"/>
      <FancyCard cardTitle="Popular Places"/>
    </ScrollView>
   </SafeAreaView>
  )
}

export default ProjectTwoApp