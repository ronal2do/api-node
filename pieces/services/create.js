var Pieces = require('./../entity/pieces');

var Service = function(req, res, next) {

    var piece = new Pieces(req.body);

    piece
        .save()
        .then(function(piece) {
           if (!piece) {
               return res.status(404)
                         .json({
                             status: false,
                             data  : {}
                         });
           }

           return res.status(200)
                     .json({
                         status: true,
                         data  : piece
                     });
        })
        .catch(function(err) {
            return res.status(500)
                      .json({
                          status: false,
                          data  : {}
                      });
        });
};

module.exports = Service;
