import React, { useState, useEffect } from "react";

import { AudioContext, AudioPlayer, Speech } from "expo-av";

const BritishEnglish = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const context = new AudioContext();
    const player = new AudioPlayer();

    player.setSrc(context.createMediaStreamSource(context.microphone));
    player.onended = () => {
      setIsRecording(false);
      Speech.requestPermission().then((granted) => {
        if (granted) {
          Speech.startRecognition(player.stream, (error, transcript) => {
            if (error) {
              console.error(error);
            } else {
              setText(transcript);
            }
          });
        }
      });
    };

    setAudioPlayer(player);
  }, []);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <View>
      <button onProgress={toggleRecording}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
      <Text>{text}</Text>
    </View>
  );
};

export default BritishEnglish;
