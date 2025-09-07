# mousenosidebuttons

List of gaming mice without side buttons

## Live

[https://mousenosidebuttons.raiha.rocks](https://mousenosidebuttons.raiha.rocks)

## Why

Because people keep asking for the list

## Development

### Requirements

[Deno](https://deno.land/)

### Bundle

In **src** folder
```
deno bundle --platform=browser main.ts -o bundle.js
```

### Serve

In **src** folder
```
deno run -ENR jsr:@std/http/file-server
```

## Licenses

All code files (*.ts) and HTML files (*.html) are under [Unlicense](https://unlicense.org/)

The CSS file (simple.css) is under [MIT License](https://github.com/kevquirk/simple.css-site/blob/main/LICENSE).

Icon file is combination of 🐭 and 💎 emojis that are from <a href="https://github.com/jdecked/twemoji">Twemoji</a> project. Their license is [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)