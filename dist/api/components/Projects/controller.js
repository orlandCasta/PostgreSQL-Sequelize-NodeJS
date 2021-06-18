"use strict";

var _Project = _interopRequireDefault(require("../../../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
var createProject = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, priority, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
            _context.prev = 1;
            _context.next = 4;
            return _Project["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              fields: ["name", "priority", "description", "deliverydate"]
            });

          case 4:
            newProject = _context.sent;

            if (newProject) {
              res.json({
                message: "Project created successfully",
                data: newProject
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: "Something wrong happened"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function createProject(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var getProjects = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Project["default"].findAll();

          case 3:
            projects = _context2.sent;
            res.json({
              data: projects
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: "Something wrong happened"
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getProjects(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var getProjectById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, projects;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Project["default"].findOne({
              where: {
                id: id
              }
            });

          case 3:
            projects = _context3.sent;
            res.json({
              data: projects
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getProjectById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var deleteProjectById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Project removed successfully",
              data: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProjectById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var updateProjectById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, priority, description, deliverydate, project, updateProject;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context5.next = 4;
            return _Project["default"].findOne({
              attributes: ["id", "name", "priority", "description", "deliverydate"],
              where: {
                id: id
              }
            });

          case 4:
            project = _context5.sent;
            _context5.next = 7;
            return _Project["default"].update({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              where: {
                id: id
              }
            });

          case 7:
            updateProject = _context5.sent;
            res.json({
              message: "Project updated successfully",
              data: updateProject
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateProjectById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


module.exports = {
  createProject: createProject,
  getProjects: getProjects,
  getProjectById: getProjectById,
  deleteProjectById: deleteProjectById,
  updateProjectById: updateProjectById
};