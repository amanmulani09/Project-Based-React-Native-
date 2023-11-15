import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import FancyCardSelf from './components/FancyCardSelf'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'
const ProjectTwoApp = () => {
  const isPopularPlaces = true;
  return (
   <SafeAreaView>
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCard cardTitle="Trending Places"/>
      <ActionCard />
      <ContactList />
    </ScrollView>
   </SafeAreaView>
  )
}

export default ProjectTwoApp