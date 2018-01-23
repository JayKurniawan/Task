import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import DashboardScreen from '../Containers/DashboardScreen'
import InquiriesScreen from '../Containers/InquiriesScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  Dashboard: { screen: DashboardScreen },
  Inquiries: { screen: InquiriesScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Dashboard',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
