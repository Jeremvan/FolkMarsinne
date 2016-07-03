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
    canteen: {
      title: 'Cuisine du festival',
      subtitle: 'Plats chauds cuisinés sur place',
      desc: 'Située à l\'intérieur à proximité du bar, la cuisine sert des plats chauds.',
    },
  },
  en: {
    intro: {
      title: 'Catering',
      text: 'Starting Friday at 7pm',
    },
    canteen: {
      title: 'Cuisine of the festival',
      subtitle: 'Hot meals prepared prepared on site',
      desc: 'Located indoor next to the bar, the cuisine serves hot meals.',
    },
  },
  nl: {
    intro: {
      title: 'Eten',
      text: 'Vanaf vrijdag om 19u',
    },
    canteen: {
      title: 'Keuken van het festival',
      subtitle: 'Warme maaltijden bereid ter plaatse bereid',
      desc: 'Gelegen indoor naast de bar, de keuken serveert warme maaltijden.',
    },
  },
}


export default class ArtisansPage extends React.Component {

  render() {
    var strings = i18n_strings[this.props.lang] || i18n_strings['fr'];

    return (
      <div>

        <CustomTitle title={strings.intro.title}
                     desc={strings.intro.text} />

        <Card>
          <CardTitle title={strings.canteen.title}
                     subtitle={strings.canteen.subtitle} />
          <CardText>
            {strings.canteen.desc}
          </CardText>
        </Card>

      </div>
    );
  }
}
