// import React from 'react';
// import { View, StyleSheet, TouchableOpacity } from 'react-native';
// import { Calendar as RNCalendar } from 'react-native-calendars';
// import { ChevronLeft, ChevronRight } from 'lucide-react-native'; // Supondo que você tenha a versão para React Native

// export type CalendarProps = {
//   className?: string;
//   showOutsideDays?: boolean;
//   // Adicione outras props que você deseja passar
// };

// const Calendar = ({
//   className,
//   showOutsideDays = true,
//   ...props
// }: CalendarProps) => {
//   const renderArrow = (direction: 'left' | 'right') => (
//     <TouchableOpacity>
//       {direction === 'left' ? (
//         <ChevronLeft style={styles.icon} />
//       ) : (
//         <ChevronRight style={styles.icon} />
//       )}
//     </TouchableOpacity>
//   );

//   return (
//     <View style={[styles.container, className ? { padding: 16 } : null]}>
//       <RNCalendar
//         renderArrow={renderArrow}
//         theme={{
//           monthTextColor: '#333',
//           textDayFontSize: 16,
//           textMonthFontSize: 20,
//           textDayHeaderFontSize: 14,
//           selectedDayBackgroundColor: '#007aff',
//           todayTextColor: '#007aff',
//           // Adicione outros estilos conforme necessário
//         }}
//         hideExtraDays={!showOutsideDays}
//         {...props}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
//   icon: {
//     height: 24,
//     width: 24,
//   },
// });

// Calendar.displayName = 'Calendar';

// export { Calendar };
