"use strict";

var _Tasks = _interopRequireDefault(require("../../../models/Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
var createTask = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, done, projectId, newTask;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, done = _req$body.done, projectId = _req$body.projectId;
            _context.prev = 1;
            _context.next = 4;
            return _Tasks["default"].create({
              name: name,
              done: done,
              projectId: projectId
            }, {
              fields: ["name", "done", "projectId"]
            });

          case 4:
            newTask = _context.sent;

            if (newTask) {
              res.json({
                message: "Task created successfully",
                data: newTask
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log("View error", _context.t0);
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

  return function createTask(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var getTasks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var tasks;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Tasks["default"].findAll();

          case 3:
            tasks = _context2.sent;

            /* const tasks = await Project.findAll({
              attributes: ["id", "name", "priority", "description", "deliverydate"],
              order: [
                ['id', 'DESC']
              ]
            }); */
            res.json({
              data: tasks
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

  return function getTasks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var getTaskById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, projects;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Tasks["default"].findOne({
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

  return function getTaskById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var deleteTaskById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Tasks["default"].destroy({
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

  return function deleteTaskById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var updateTaskById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, _req$body2, name, done, projectId, task, updateTask;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, done = _req$body2.done, projectId = _req$body2.projectId;
            _context5.next = 4;
            return _Tasks["default"].findOne({
              attributes: ["id", "name", "done", "projectId"],
              where: {
                id: id
              }
            });

          case 4:
            task = _context5.sent;
            _context5.next = 7;
            return _Tasks["default"].update({
              name: name,
              done: done,
              projectId: projectId
            }, {
              where: {
                id: id
              }
            });

          case 7:
            updateTask = _context5.sent;
            res.json({
              message: "Project updated successfully",
              data: updateTask
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateTaskById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


var getTasksByProject = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var projectId, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectId = req.params.projectId;
            _context6.next = 3;
            return _Tasks["default"].findAll({
              attributes: ["id", "projectId", "name", "done"],
              where: {
                projectId: projectId
              }
            });

          case 3:
            tasks = _context6.sent;
            res.json({
              message: "Project tasks displayed correctly",
              data: tasks
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getTasksByProject(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------


module.exports = {
  createTask: createTask,
  getTasks: getTasks,
  getTaskById: getTaskById,
  deleteTaskById: deleteTaskById,
  updateTaskById: updateTaskById,
  getTasksByProject: getTasksByProject
};