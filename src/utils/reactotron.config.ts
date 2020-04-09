import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotron = Reactotron.configure({
  name: 'rn-ts-starter',
  host: '192.168.1.136',
})
  .useReactNative()
  .use(reactotronRedux())
  .connect(); // let's connect!

export default reactotron;
