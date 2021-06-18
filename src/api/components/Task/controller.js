import Tasks from "../../../models/Tasks";

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;

  try {
    let newTask = await Tasks.create(
      {
        name,
        done,
        projectId,
      },
      {
        fields: ["name", "done", "projectId"],
      }
    );
    if (newTask) {
      res.json({
        message: "Task created successfully",
        data: newTask,
      });
    }
  } catch (error) {
    console.log("View error", error);
    res.status(500).json({
      message: "Something wrong happened",
    });
  }
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    /* const tasks = await Project.findAll({
      attributes: ["id", "name", "priority", "description", "deliverydate"],
      order: [
        ['id', 'DESC']
      ]
    }); */
    res.json({
      data: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something wrong happened",
    });
  }
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const getTaskById = async (req, res) => {
  const { id } = req.params;

  const projects = await Tasks.findOne({
    where: {
      id: id,
    },
  });
  res.json({
    data: projects,
  });
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const deleteTaskById = async (req, res) => {
  const { id } = req.params;

  const deleteRowCount = await Tasks.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "Project removed successfully",
    data: deleteRowCount,
  });
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  const task = await Tasks.findOne({
    attributes: ["id", "name", "done", "projectId"],
    where: {
      id,
    },
  });

  const updateTask = await Tasks.update(
    {
      name,
      done,
      projectId,
    },
    {
      where: { id },
    }
  );
  res.json({
    message: "Project updated successfully",
    data: updateTask,
  });
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const getTasksByProject = async (req, res) => {
  const { projectId } = req.params;

  const tasks = await Tasks.findAll({
    attributes: ["id", "projectId", "name", "done"],
    where: { projectId },
  });
  res.json({
    message: "Project tasks displayed correctly",
    data: tasks,
  });
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  deleteTaskById,
  updateTaskById,
  getTasksByProject,
};
