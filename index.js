'use strict';

const readPkg = require('read-pkg-up');
const truncate = require('cli-truncate');
const wrap = require('wrap-ansi');
const types = require('./types.json');

/**
 * Create inquier.js questions object trying to read `types` from the current project
 * `package.json` falling back to nice default :)
 *
 * @param {Object} res Result of the `readPkg` returned promise
 * @return {Array} Return an array of `inquier.js` questions
 * @private
 */
function createQuestions(res) {
  const config = res.pkg.config || {};
  const emojiConfig = config['cz-gitmoji'] || {};

  let choices = (emojiConfig.types || types).map(type => {
    return {
      name: `${type.emoji}  - ${type.code} - ${type.description}`,
      value: {
        emoji: type.emoji,
        name: type.name
      }
    };
  });

  return [
    {
      type: 'list',
      name: 'type',
      message: "Select the type of change you're committing:",
      choices: choices
    },
    {
      type: 'input',
      name: 'excerpt',
      message: 'Write a short description:'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a longer description:'
    },
    {
      type: 'input',
      name: 'issues',
      message: 'List any issue closed:'
    }
  ];
}

/**
 * Format the git commit message from given answers.
 *
 * @param {Object} answers provided by `inquier.js`
 * @return {String} Formatted git commit message
 */
function format(answers) {
  // build head line and limit it to 100
  const head = truncate(
    answers.type.emoji + '  ' + answers.excerpt.trim(),
    100
  );

  // wrap description at 100
  const description = wrap(answers.description, 100);

  return head + '\n\n' + description;
}

/**
 * Export an object containing a `prompter` method. This object is used by `commitizen`.
 *
 * @type {Object}
 */
module.exports = {
  prompter: function(cz, commit) {
    readPkg().then(createQuestions).then(cz.prompt).then(format).then(commit);
  }
};
