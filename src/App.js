import React from 'react'
import { ChatEngine } from 'react-chat-engine'; 
import ChatFeed from './components/ChatFeed'
import "./App.css";


const App = () => {
      return (
        <ChatEngine
          height="100vh"
          projectID="69a930bc-849e-4acf-a5d6-bbca005459f3"
          userName="Shiv"
                  userSecret="123456"
                  renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      );
}
export default App;