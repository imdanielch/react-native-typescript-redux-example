import React, { ReactNode } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Button } from '@rneui/base';

export const CounterView = ({
  count,
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  childToParent,
  incrementAmount,
}: {
  count: ReactNode;
  decrement: any;
  increment: any;
  incrementByAmount: any;
  incrementAsync: any;
  incrementIfOdd: any;
  childToParent: any;
  incrementAmount: string;
}) => {
  return (
    <View>
      <View style={styles.displayRow}>
        <Button
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonButton}
          title="-"
          onPress={decrement}
        />
        <Text style={styles.value}>{count}</Text>
        <Button
          titleStyle={styles.buttonTitle}
          buttonStyle={styles.buttonButton}
          title="+"
          onPress={increment}
        />
      </View>
      <View style={styles.incAmount}>
        <Text style={styles.incAmountText}>Increase by</Text>
        <TextInput
          style={styles.textbox}
          value={incrementAmount}
          onChangeText={childToParent}
        />
      </View>
      <View style={styles.displayRow}>
        <Button title="Add Amount" onPress={incrementByAmount} />
        <Button title="Add Async" onPress={incrementAsync} />
        <Button title="Add If Odd" onPress={incrementIfOdd} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  incAmount: {
    flexDirection: 'row',
    marginTop: 40,
    paddingLeft: 30,
    marginBottom: 20,
    backgroundColor: '#cccccc',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 60,
    padding: 20,
  },
  buttonButton: {
    justifyContent: 'center',
  },
  displayRow: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  incAmountText: {
    fontSize: 20,
  },
  value: { fontSize: 40, textAlignVertical: 'center' },
  textbox: {
    padding: 20,
    fontSize: 20,
  },
});
