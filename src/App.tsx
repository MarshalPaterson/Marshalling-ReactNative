/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

// import * as Marshalling from 'marshalling';
import { DemoAppController } from "../src/Controls/DemoAppController";
import { DemoAppService } from "../src/Service/DemoAppService";
// import { GetEvent } from "../src/Events/GetEvent";
// import { PostEvent } from "../src/Events/PostEvent";
import tester from './test';

// function getCustomCall() {
//   var customDispatcher = Marshalling.Marshalling.MarshallEventDispatcher.getInstance();
//   // var customEvent = new Marshalling.MarshallEvent();
//   // customDispatcher.dispatchEvent(customEvent.dispatch(DemoAppController.GET_LIST, "Just a event with txt"));
//   var customEventWithCommand = new GetEvent(DemoAppController.EVENT_CUSTOM, "some param text");
//   customEventWithCommand.data = "This is data";
//   customDispatcher.dispatchEvent(customEventWithCommand);
// }
// function getPostCall() {
//   var customDispatcher = Marshalling.Marshalling.MarshallEventDispatcher.getInstance();
//   var customEventWithCommand = new PostEvent(DemoAppController.ANOTHER_EVENT_CUSTOM, "some param text");
//   customDispatcher.dispatchEvent(customEventWithCommand);
// }

// NEED BUTTONS FOR THE ABOVE

export default class App extends Component<{}> {

  public greeter = new tester();

  componentDidMount() {
    DemoAppController.init();
    DemoAppService.init();
  }

  render() {
    return (
      <View>
        <Text >
          {this.greeter.helloWorld()}
        </Text>
      </View>
    );
  }
}