const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {
  const { id } = await args.pullRequest.$query({ id });
  
  console.log(id)
}
