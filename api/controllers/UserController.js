/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {


  /**
   * Action blueprints:
   *    `/user/create`
   */
  create: function (req, res, next) {

    User.create(req.body, function userCreated(err, user) {
      console.log(req.body);
      if (err) {
        var createFail = ['Fail'];
        req.session.flash = {
          err: createFail
        }
        return res.redirect('/noooo');
      }

      req.session.User = user;
      res.json(user);

    });

  },


  /**
   * Action blueprints:
   *    `/user/destroy`
   */
  destroy: function (req, res) {

    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },


  /**
   * Action blueprints:
   *    `/user/update`
   */
  update: function (req, res) {

    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}


};
