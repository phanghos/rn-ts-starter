import React from 'react';
import TestUtils from '../../TestUtils';
import App from 'screens/App';
import {SafeAreaView} from 'react-native';

describe('App', () => {
  const wrapper = () => TestUtils.shallowRender(<App />);

  it('SafeAreaView is rendered', () => {
    // When
    const safeAreaView = wrapper().find(SafeAreaView);

    // Then
    expect(safeAreaView.exists()).toBe(true);
  });
});
