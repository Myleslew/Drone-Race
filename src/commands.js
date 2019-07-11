import React from 'react';
import {useEffect, useState} from 'react';
import socket from './socket';

const sendCommand = command => {
    return function() {
        console.log('The command pressed was: ', command)
        socket.emit('command', command)
    }
    
}

function useSocket() {
    const [status, updateStatus] = useState('DISCONNECTED');
    const useEffect = (() => {
      socket.on('status', updateStatus);
      return () => socket.removeListener('status');
    }, []);
    return status;
  };

  const Commands = () => (
    <div>
        <div className="ui two top attached buttons">
            <button className="ui button" onClick={sendCommand('takeoff')}>Takeoff</button> 
            <button className="ui button" onClick= {sendCommand('land')}>Land</button>   
        </div>
        
        <div className="ui center vertical basic buttons">
            <button className="ui button" onClick={sendCommand('forward 50')}>
                <i className="angle up icon"></i>
            </button>
            <button className= "ui button" onClick={sendCommand('down 50')}>
                <i className="angle down icon"></i>
            </button>
            <button className="ui button" onClick={sendCommand('left 50')}>
                <i className= "angle left icon"></i>
            </button>
            <button className="ui button" onClick={sendCommand('right 50')}>
                <i className= "angle right icon"></i>
            </button>
            <button className="ui button" onClick={sendCommand('up 50')}>
                <i className="double angle up icon"></i>
            </button>  
            <button className="ui button" onClick={sendCommand('back 50')}>
                <i className="double angle down icon"></i>
            </button>
        </div>
            
        {/* <div className="ui two bottom attached buttons">
            <button className="negative ui button" onClick= {sendCommand('emergency')}>Emergency</button>
            <button className="ui button" onClick= {sendConnection}>Connect!</button>   
        </div>    */}
        
    </div>
    
)
export default Commands;
