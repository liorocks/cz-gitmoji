# cz-gitmoji

> [Commitizen](https://github.com/commitizen/cz-cli) adapter for [gitmoji](https://gitmoji.carloscuesta.me/).


**cz-gitmoji** allows you to easily use emojis in your commits using [commitizen](https://github.com/commitizen/cz-cli).

```sh
// todo
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
          "name": "feature \t🌟  A new feature",
          "value": ":star2:"
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
