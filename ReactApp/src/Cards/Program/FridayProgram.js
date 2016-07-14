import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'


const fridayPlan = [
  {hour: '', 'groups': []},
  {hour: '20h', 'groups': [false,
                           {name: 'Baila Tocamos (BE) <i>bal</i>', duration: 2, kind: 'bal'},
                           false, false]},
  {hour: '21h', 'groups': [false, true, false, false]},
  {hour: '22h', 'groups': [{name: 'Duo Montanaro-Cavez (BE-FR) <i>concert</i>', duration: 2, kind: 'concert'},
                           false,
                           {name: 'Wouter Vandenabeele et Jeroen Knapen (BE) <i>bal</i>', duration: 2, kind: 'bal'},
                           false]},
  {hour: '23h', 'groups': [true, false, true, false]},
  {hour: '00h', 'groups': [false,
                           {name: 'Les Zéoles (FR) <i>bal</i>', duration: 2, kind: 'bal'},
                           false, false]},
  {hour: '01h', 'groups': [false, true, false, false]},
];


export default class FridayProgram extends React.Component {
  render() {
		return (
      <DayProgram plan={fridayPlan} lang={this.props.lang} />
    );
  }
}
