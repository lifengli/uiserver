import fs from 'file-system';
import path from 'path';

export class AgentConfig extends Object {}

const agent = (() => {
  let configData;
  const agentConfig = [];

  fs.readFile(path.join(__dirname, '../../public/agent/config', 'list.json'), {encoding: 'utf-8'}, (err, data) => {
    if (!err) {
      const configs = JSON.parse(data).agents;

      configs.forEach(config => {
        configData = fs.readFileSync(path.join(__dirname, '../../public/agent/config', config), {encoding: 'utf-8'});
        agentConfig.push(new AgentConfig(JSON.parse(configData)));
      });
    }
    else {
      // error handling here
      // console.log(err);
    }
  });

  return agentConfig;
})();

export {agent};
