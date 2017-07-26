# cz-gitmoji

> [Commitizen](https://github.com/commitizen/cz-cli) adapter for [gitmoji](https://gitmoji.carloscuesta.me/).


**cz-gitmoji** allows you to easily use gitmojis in your commits using [commitizen](https://github.com/commitizen/cz-cli).

```sh
? Select the type of change you're committing:
  🎨  - :art: - Improving structure / format of the code.
  ⚡️  - :zap: - Improving performance.
  🔥  - :fire: - Removing code or files.
❯ 🐛  - :bug: - Fixing a bug.
  🚑  - :ambulance: - Critical hotfix.
  ✨  - :sparkles: - Introducing new features.
  📝  - :memo: - Writing docs.
  🚀  - :rocket: - Deploying stuff.
  💄  - :lipstick: - Updating the UI and style files.
  🎉  - :tada: - Initial commit.
  ✅  - :white_check_mark: - Adding tests.
  🔒  - :lock: - Fixing security issues.
  🍎  - :apple: - Fixing something on macOS.
  🐧  - :penguin: - Fixing something on Linux.
  🏁  - :checkered_flag: - Fixing something on Windows.
  🤖  - :robot: - Fixing something on Android.
  🍏  - :green_apple: - Fixing something on iOS.
  🔖  - :bookmark: - Releasing / Version tags.
  🚨  - :rotating_light: - Removing linter warnings.
  🚧  - :construction: - Work in progress.
  💚  - :green_heart: - Fixing CI Build.  
  ⬇️  - :arrow_down: - Downgrading dependencies.
  ⬆️  - :arrow_up: - Upgrading dependencies.
  👷  - :construction_worker: - Adding CI build system.
  📈  - :chart_with_upwards_trend: - Adding analytics or tracking code.
  🔨  - :hammer: - Refactoring code.
  ➖  - :heavy_minus_sign: - Removing a dependency.
  🐳  - :whale: - Work about Docker.    
  ➕  - :heavy_plus_sign: - Adding a dependency.
  🔧  - :wrench: - Changing configuration files.
   🌐  - :globe_with_meridians: - Internationalization and localization.
  ✏️  - :pencil2: - Fixing typos.
  💩  - :hankey: - Writing bad code that needs to be improved.
  ⏪  - :rewind: - Reverting changes.
  🔀  - :twisted_rightwards_arrows: - Merging branches.
  📦  - :package: - Updating compiled files or packages.
  👽  - :alien: - Updating code due to external API changes.
  🚚  - :truck: - Moving or renaming files.
  📄  - :page_facing_up: - Adding or updating license.
  💥  - :boom: - Introducing breaking changes.
  🍱  - :bento: - Adding or updating assets.
  👌  - :ok_hand: - Updating code due to code review changes.
  ♿️  - :wheelchair: - Improving accessibility.
  💡  - :bulb: - Documenting source code.
  🍻  - :beers: - Writing code drunkenly.
  💬  - :speech_balloon: - Updating text and literals.
  🗃  - :card_file_box: - Performing database related changes.
  🔊  - :loud_sound: - Adding logs.
  🔇  - :mute: - Removing logs.      
```

## Install

```bash
npm install --global cz-gitmoji

# set as default adapter for your projects
echo '{ "path": "cz-gitmoji" }' > ~/.czrc
```

## Usage

```sh
$ git cz
```

## Customize

You can customize things for a project by adding a configuration section in your `package.json`:

```json
{
  "config": {
    "cz-gitmoji": {}
  }
}
```

### Types

An [Inquirer.js](https://github.com/SBoudrias/Inquirer.js/) choices array:
```json
{
  "config": {
    "cz-gitmoji": {
      "types": [
        {
          "name": "bad \t💩 bad code",
          "value": ":hankey:"
        }
      ]
    }
  }
}
```

### Inspired by
- [gitmoji](https://gitmoji.carloscuesta.me/)
- [gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)
- [commitizen](https://github.com/commitizen/cz-cli)
- [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)
- [cz-emoji](https://github.com/ngryman/cz-emoji)
- [emoji-cz](https://github.com/kevin940726/emoji-cz)

## Licence

[The MIT License](https://github.com/Landish/cz-gitmoji/blob/master/LICENSE)
