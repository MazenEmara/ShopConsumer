const axios = require('axios');

const processPendingTicket = async (message) => {
  console.log('[processPendingTicket]', message)
  await axios.post(`https://shop-api-three.vercel.app/api/pending/${message.body.matchNumber}`,{
    availability: message.body.tickets
  }).then(function(res){
      console.log("db updated")
  }).catch(function(error){
      console.log("error Pending")
      console.log(error);
  });

 
  await axios.post("https://analytics-sage-nine.vercel.app/api/add",{
    matchNumber: message.body.matchNumber,
    ticketType: message.meta.action
    });

    await axios.post("https://analytics-sage-nine.vercel.app/api/add/stats",{
    Number: 1000,
    ticketType: message.meta.action
    });

  return Promise.resolve('[processPendingTicket]')
};

const processCancelledTicket = async (message) => {
  console.log('[processCancelledTicket]', message)
  
  await axios.post(`https://shop-api-three.vercel.app/api/cancel/${message.body.matchNumber}`,{
    availability: message.body.tickets
  }).then(function(res){
      console.log("db cancel")
  }).catch(function(error){
      console.log("error Pending")
      console.log(error);
  });

  await axios.post("https://analytics-sage-nine.vercel.app/api/add",{
    matchNumber: message.body.matchNumber,
    ticketType: message.meta.action
    });

    await axios.post("https://analytics-sage-nine.vercel.app/api/add/stats",{
    Number: 1000,
    ticketType: message.meta.action
    });

    
  return Promise.resolve('[processCancelledTicket]')
};

const processReservedTicket = async (message) => {
  console.log('[processReservedTicket]', message) 
  
  await axios.post(`https://shop-api-three.vercel.app/api/reserved/${message.body.matchNumber}`,{
    availability: message.body.tickets
  }).then(function(res){
      console.log("db Reserved")
  }).catch(function(error){
      console.log("error Pending")
      console.log(error);
  });

    await axios.post("https://analytics-sage-nine.vercel.app/api/add",{
    matchNumber: message.body.matchNumber,
    ticketType: message.meta.action
    });

    await axios.post("https://analytics-sage-nine.vercel.app/api/add/stats",{
    Number: 1000,
    ticketType: message.meta.action
    });

    
  return Promise.resolve('[processReservedTicket]')
};

const processMasterlist = async (message) => {
  console.log('[processMasterlist]', message)
  await axios.post("https://shop-api-three.vercel.app/api/add",{
  masterlist: message.body.masterlist 
    })
  return Promise.resolve('[processMasterlist]')
};

module.exports = {
  processPendingTicket,
  processReservedTicket,
  processCancelledTicket//,
  //processMasterlist
};