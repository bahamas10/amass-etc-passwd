var passwd = require('etc-passwd');

module.exports = amass_etc_passwd;

function amass_etc_passwd(cb) {
  var data = {};
  var errors = [];

  passwd.getUsers(passwdcb('users'));
  passwd.getGroups(passwdcb('groups'));

  var i = 0;
  function passwdcb(type) {
    return function(err, d) {
      if (err) errors.push(err);
      else data[type] = d;

      if (++i === 2) done();
    };
  }

  function done() {
    cb(errors.length ? errors : null, data);
  }
}
