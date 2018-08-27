// Project operations
// Todo: move to a separate resolver file

const addProject = function (parent, args, context, info) {
  if (!args.name) throw new Error(`There is no name given for a project`);

  return context.db.mutation.createProject({data: { name: args.name }}, info)
};

const updateProject = function (parent, args, context, info) {
  if (!args.name) throw new Error(`There is no name in the input, so there's no such project`);

  return context.db.mutation.updateProject({ data: { name: args. name }, where: { id: args.id } }, info);
};

const deleteProject = function (parent, args, context, info) {
  if (!args.id) throw new Error(`There is no such project`);

  return context.db.mutation.deleteProject({ where: { id: args.id } }, info);
};

// Integration operations
const addIntegration = function (parent, args, context, info) {
  // TODO: add error handling
  return context.db.mutation.createIntegration({
    data: {
      project: {
        connect: {
          id: args.project
        }
      },
      type: args.type }
    }, info
  );
};

const deleteIntegration = function (parent, args, context, info) {
  if (!args.id) throw new Error(`There is no such integration`);
  // TODO: add error handling
  console.log('args delete integration', args)
  return context.db.mutation.deleteIntegration({ where: {  id: args.id } }, info );
};


module.exports = {
  addProject,
  updateProject,
  deleteProject,
  addIntegration,
  deleteIntegration
};