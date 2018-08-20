const projects = (parent, args, context, info) => {
  return context.db.query.projects({}, info);
}