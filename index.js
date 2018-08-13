const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {
  const { diffUrl } = await args.pullRequest.$query({ diffUrl });
  
  // fetch git diff
  // TODO: axios call
  // if diff is true
  // const isFile = diff.includes(path);
  //if(isFile){
  // await args.issue.subscribe();
  //}
}
