
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Rails Hackathon 2012 in Okinawa' })
};