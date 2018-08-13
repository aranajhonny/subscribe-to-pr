import axios from 'axios';

const { root, repository } = program.refs

export async function init() {
  await repository.pullRequestOpened.subscribe('onPull');
}

export async function onPull({ args }) {  
  const { diffUrl } = await args.pullRequest.$query('{ diffUrl }');

  // TODO: call
  const client = axios.create({
    headers: {'Content-Type': 'Accept: application/vnd.github.diff'}
  });

  const diff = await client.get(diffUrl);
 
  const hasFile = diff.includes(path);
 
  if(hasFile){
    await args.issue.subscribe();
  }
}
