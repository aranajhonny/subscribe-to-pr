const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {
  const { pullRequest } = args;
  const { id } = await pullRequest.$query({ id });
}
