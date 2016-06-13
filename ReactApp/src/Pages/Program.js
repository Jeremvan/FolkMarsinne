import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

import ProgramCard from '../Cards/Program/BasicProgramCard';
import FridayProgram from '../Cards/Program/FridayProgram';
import SaturdayProgram from '../Cards/Program/SaturdayProgram';
import SundayProgram from '../Cards/Program/SundayProgram';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};


export default class ProgramPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange (value) {
    this.setState({
      slideIndex: value,
    });
  }

  render() {
      return (
        <Card>
            <div>
              <Tabs
                onChange={::this.handleChange}
                value={this.state.slideIndex}
              >
                <Tab label="Vendredi" value={0} />
                <Tab label="Samedi" value={1} />
                <Tab label="Dimanche" value={2} />
              </Tabs>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={::this.handleChange}
              >
                <CardText>
                  <FridayProgram />
                </CardText>
                <div style={styles.slide}>
                  <SaturdayProgram />
                </div>
                <div style={styles.slide}>
                  <SundayProgram />
                </div>
              </SwipeableViews>
            </div>
        </Card>
      );
    }
  }
