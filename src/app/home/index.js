import React from "react";
import { StyleSheet, View, Text, ScrollView, TouchableNativeFeedback } from "react-native";
import { Card, getTheme, COLOR } from 'react-native-material-ui';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { withTheme } from 'react-native-material-ui'
import Color from 'color';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'powderblue'
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    cards = [
        {
            value: 'Attendance'
        },
        {
            value: 'Card2'
        },
        {
            value: 'Card3'
        },
        {
            value: 'Card4'
        },
        {
            value: 'Card5'
        },
        {
            value: 'Card6'
        }
    ];

    handlePress = (evt) => {
        this.setState({
            background: this.props.theme.palette.accentColor
        })
    }

    renderCard = (item, i) => {
        const accentColor = this.props.theme.palette.accentColor;
        return (
            <Col key={i}>
                <Card style={styles.cardItem}>
                    <TouchableNativeFeedback onPress={this.handlePress} background={TouchableNativeFeedback.Ripple(COLOR.amber400, true)}>
                        <View pointerEvents="box-only" style={Object.assign({
                            backgroundColor: this.state.background
                        },styles.cardContent)}>
                                <Text>{item.value}</Text>
                        </View>
                    </TouchableNativeFeedback>
                </Card>
            </Col>
        )
    }

    renderGrids = (cols = 2, items) => {
        const numItems = items.length;
        let rows = Math.floor(numItems/cols);
        if (numItems%cols != 0) {
            rows = rows+1;
        }
        let start = 0;
        let end = cols;
        return Array.from(Array(rows)).map((row, index) => {
            const rowRender = (
                <Row key={index}>
                    {items.slice(start, end).map((item, i) => (this.renderCard(item, i)))}
                </Row>
            )
            start = start + cols;
            end = end + cols;
            return rowRender;
        })
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Grid>
                    {this.renderGrids(2, this.cards)}
                </Grid>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#fff'
    },
    cardItem: {

    },
    cardContent: {
        flex: 1,
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewPager: {
      flex: 1
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    }
  });

export default withTheme(Home);