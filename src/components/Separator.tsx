import * as React from 'react';
import { View, StyleSheet } from 'react-native';

interface SeparatorProps {
  marginVertical?: number;
}

const Separator: React.FC<SeparatorProps> = ({ marginVertical }) => {
  const styles = StyleSheet.create({
    separator: {
      marginVertical: marginVertical || 10, // Default margin if not provided
    },
  });

  return <View style={styles.separator} />;
};

export default Separator;
