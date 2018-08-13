const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {  
  const { diff } = await args.pullRequest.$query('{ diff }');

  // TODO: path?
  const hasFile = diff.includes('a/.travis.yml ');
  
  if(hasFile){
    //await args.issue.subscribe();
  }
}
