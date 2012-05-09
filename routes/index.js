
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('layout', { title: 'Rails Hackathon 2012 in Okinawa' })
};