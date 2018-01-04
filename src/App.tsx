/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import * as Marshalling from "marshalling";

interface props {}

interface state {
    data: Object,
    postdata:Object,
    getdata: Object
}

export default class App extends Component<props, state> {

  public marshalling = new Marshalling.Marshall();

  constructor(props){
    super(props);
    this.state = {data: [], postdata:[], getdata:[]};
  }

  componentDidMount() {
    this.getExample();
    this.postExample();
  }

  public getExample() {
    this.marshalling.getInstance().addService('tester', 'https://jsonplaceholder.typicode.com/posts?userId=1');
    this.marshalling.getInstance().law('tester').then(
     (value) => {
        let obj = JSON.parse(String(value));
        this.setState({
          getdata: obj[0].body
        });
    },
    (reason) => {
        console.error('Something went wrong', reason);
    });
  }

  public postExample() {
    let data = JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    })
    this.marshalling.getInstance().addService('tester', 'https://jsonplaceholder.typicode.com/posts?userId=1');
    this.marshalling.getInstance().law('tester', 'POST', data).then(
     (value) => {
        let obj = JSON.parse(String(value));
        this.setState({
          postdata: obj.body
        });
    },
    (reason) => {
        console.error('Something went wrong', reason);
    });  
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.instructions}>
          {this.state.data}
          </Text>
          <Text style={styles.instructions}>
          {this.state.postdata}
          </Text>
          <Text style={styles.instructions}>
          {this.state.getdata}
          </Text>
          {/* <Button onPress={getPostCall} title="POST" color="#841584" />
        <Button onPress={getCustomCall} title="GET" color="#841584" /> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
