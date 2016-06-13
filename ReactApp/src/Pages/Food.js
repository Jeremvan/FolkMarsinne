import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {red500, brown500} from 'material-ui/styles/colors';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import EmailOutlineIcon from 'material-ui/svg-icons/communication/mail-outline';

import CustomTitle from '../Cards/CustomTitle';

const i18n_strings = {
  fr: {
    intro: {
      title: 'Restauration',
      text: 'A partir du vendredi 19h',
    },
  },
}


export default class ArtisansPage extends React.Component {

  render() {

    var strings = i18n_strings[this.props.lang];
    return (
      <div>

        <CustomTitle title={strings.intro.title}
                     desc={strings.intro.text} />

        <Card>
          <CardTitle title="Cantine du festival"
                     subtitle="Plats chauds" />
          <CardText>
            Située à l'intérieur à proximité du bar, la cantine sert des plats
            chauds.
          </CardText>
        </Card>

      </div>
    );
  }
}
