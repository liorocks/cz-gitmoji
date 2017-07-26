# cz-gitmoji

> Commitizen adapter formatting commit messages using emojis.


**cz-gitmoji** allows you to easily use emojis in your commits using [commitizen].

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

An [Inquirer.js] choices array:
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

## Licence

[The MIT License (MIT)](https://github.com/Landish/cz-gitmoji/blob/master/LICENSE).
