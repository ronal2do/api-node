var Pieces = require('../../pieces/entity/pieces');
var Job = require('../../jobs/entity/jobs');

var Service = function(req, res, next) {
    var find  = {};

    if (req.params.id) {
        query = Pieces.where('job').equals(req.params.id).exec();
    }

    if (!req.params.id) {
        find = Job.find({}).exec();
    }

    query
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
