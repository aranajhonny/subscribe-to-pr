const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {  
  const { diff } = await args.pullRequest.$query('{ diff }');
  
  // hard-coding
  const hasFile = diff.includes('a/.travis.yml ');
  
  // fix function()
  if(hasFile){
    await args.issue.subscribe();
  }
}
