const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {
  const { diffUrl } = await args.pullRequest.$query({ diffUrl });
  // fetch git diff

  // if diff is true
  // await args.issue.subscribe();
}
