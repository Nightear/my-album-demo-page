import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import CFSlider from './Coverflow';
import Slider from './Slider';
import Tab from './Tab';
import LabelImg from './LabelImg';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Slider />, document.getElementById('banner'));
ReactDOM.render(<CFSlider />, document.getElementById('CFSlider'));
ReactDOM.render(<LabelImg />, document.getElementById('intro'));
ReactDOM.render(<Tab />, document.getElementById('tab'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
