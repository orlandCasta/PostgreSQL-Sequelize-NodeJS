import Project from "../../../models/Project";

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const createProject = async (req, res) => {
  const { name, priority, description, deliverydate } = req.body;

  try {
    let newProject = await Project.create(
      {
        name: name,
        priority: priority,
        description: description,
        deliverydate: deliverydate,
      },
      {
        fields: ["name", "priority", "description", "deliverydate"],
      }
    );
    if (newProject) {
      res.json({
        message: "Project created successfully",
        data: newProject,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "Something wrong happened",
    });
  }
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something wrong happened",
    });
  }
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

const getProjectById = async (req, res) => {
  const { id } = req.params;

  const projects = await Project.findOne({
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

const deleteProjectById = async (req, res) => {
  const { id } = req.params;

  const deleteRowCount = await Project.destroy({
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

const updateProjectById = async (req, res) => {
  const { id } = req.params;
  const { name, priority, description, deliverydate } = req.body;

  const project = await Project.findOne({
    attributes: ["id", "name", "priority", "description", "deliverydate"],
    where: {
      id,
    },
  });

   const updateProject = await Project.update(
    {
      name,
      priority,
      description,
      deliverydate,
    },
    {
      where: { id },
    }
  );
  res.json({
    message: "Project updated successfully",
    data: updateProject,
  });
};

//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  deleteProjectById,
  updateProjectById,
};
