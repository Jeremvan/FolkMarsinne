import React, { Component } from 'react';
import {blue100} from 'material-ui/styles/colors';
import {DayProgram} from './ProgramComponents'


const saturdayPlan = [
  {hour: '', 'groups': []},
  {hour: '11:00', 'groups':[false,
                            false,
                            {name: 'Pays de Galles', duration: 3, kind: 'learn'},
                            false]},
  {hour: '11:30', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '12:00', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '12:30', 'groups':[false,
                            {name: 'Danses de couple - Pierre Chesneau', duration: 3, kind: 'learn'},
                            true,
                            false]},
  {hour: '13:00', 'groups':[{name: 'InFluEnCeS', duration: 2, kind: 'concert'},
                            true,
                            {name: 'Mad Tom Duo (FR)', duration: 3, kind: 'bal'},
                            false]},
  {hour: '13:30', 'groups':[true,
                            true,
                            true,
                            false]},
  {hour: '14:00', 'groups':[false,
                            false,
                            true,
                            {name: 'Théâtre Mabotte', duration: 1, kind: 'theatre'}]},
  {hour: '14:30', 'groups':[false,
                            {name: 'Poke (FR)', kind: 'bal', duration: 3, kind: 'bal'},
                            false,
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '15:00', 'groups':[false,
                            true,
                            false,
                            true]},
  {hour: '15:30', 'groups':[false,
                            true,
                            false,
                            {name: 'Théâtre Mabotte', duration: 1, kind: 'theatre'}]},
  {hour: '16:00', 'groups':[{name: 'Initiation bal folk', duration: 3, kind: 'learn'},
                            false,
                            {name: 'Durif - Champeval (FR)', duration: 4, kind: 'bal'},
                            false]},
  {hour: '16:30', 'groups':[true,
                            false,
                            true,
                            {name: 'Théâtre Mabotte', duration: 1, kind: 'theatre'}]},
  {hour: '17:00', 'groups':[true,
                            false,
                            true,
                            false]},
  {hour: '17:30', 'groups':[false,
                            false,
                            true,
                            {name: 'Théâtre Mabotte', duration: 1, kind: 'theatre'}]},
  {hour: '18:00', 'groups':[false,
                            {name: 'Duo TTC (FR)', duration: 4, kind: 'bal'},
                            false,
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '18:30', 'groups':[false,
                            true,
                            false,
                            true]},
  {hour: '19:00', 'groups':[{name: 'Elles s\'y promènent', duration: 3, kind: 'concert'},
                            true,
                            false,
                            false]},
  {hour: '19:30', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '20:00', 'groups':[true,
                            false,
                            {name: 'Carte blanche à Michel Jacqmain', duration: 4, kind: 'bal'},
                            false]},
  {hour: '20:30', 'groups':[false,
                            false,
                            true,
                            {name: 'Podium libre', duration: 2, kind: 'free'}]},
  {hour: '21:00', 'groups':[false,
                            false,
                            true,
                            true]},
  {hour: '21:30', 'groups':[true,
                            true,
                            true,
                            false]},
  {hour: '22:00', 'groups':[{name: 'Väsen (SE)', duration: 3, kind: 'concert'},
                            {name: 'Beat Bouet Trio (FR)', duration: 4, kind: 'bal'},
                            false,
                            false]},
  {hour: '22:30', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '23:00', 'groups':[true,
                            true,
                            false,
                            false]},
  {hour: '23:30', 'groups':[false,
                            true,
                            false,
                            false]},
  {hour: '00:00', 'groups':[false,
                            false,
                            {name: 'Shillelagh (FR)', duration: 4, kind: 'bal'},
                            false]},
  {hour: '00:30', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '01:00', 'groups':[false,
                            false,
                            true,
                            false]},
  {hour: '01:30', 'groups':[false,
                            false,
                            true,
                            false]},
];


export default class SaturdayProgram extends React.Component {
  render() {
		return (
      <DayProgram plan={saturdayPlan} />
    );
  }
}
