const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

module.exports = {
    new: newTicket,
    create,
   
  };

  function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
      res.render("tickets/new", {
        title: "Ticket",
        tickets,
        
      });
    });
  }
  


  function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        const ticket = new Ticket(req.body);
        ticket.flight = flight._id;
        ticket.save(function(err) {
            res.redirect(`/flights/${flight._id}/tickets/new`)
    // req.body.flight = req.params.id
    // Ticket.create(req.body, function(err, tickets) {
    //   res.redirect(`/flights/${req.params.id}`)

    // const ticket = new Ticket(req.body);
    // ticket.save(function (err) {
    //   if (err) return res.redirect("/tickets/new");
    // //   res.redirect("/tickets/new");  
    //   res.redirect(`/flights/${flight._id}`);   
    })

} )
  }