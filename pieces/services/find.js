var Pieces = require('./../entity/pieces');

var Service = function(req, res, next) {
    var find = {};

    if (req.params.id) {
        find = Pieces.findById(req.params.id).exec();
    }

    if (!req.params.id) {
        find = Pieces.find({}).exec();
    }

    find
        .then(function(result) {
            if (!result) {
                return res.status(404)
                          .json({
                              status: false,
                              data  : {}
                          });
            }

            return res.status(200)
                      .json(result);
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
