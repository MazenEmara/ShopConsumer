const { startKafkaConsumer } = require('../connectors/kafka');
const express = require('express');
const app = express();

app.listen(3000, async (req, res) => {
    await startKafkaConsumer();
    console.log("Server is runing");
  });