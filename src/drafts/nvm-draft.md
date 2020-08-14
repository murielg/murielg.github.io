---
path: "/blog/nvm-"
title: "NVM Stuff"
date: 2020-01-31
tags: ['tags', 'for', 'post']
---

# node, nvm, npm pain points solved

### Problem: slow terminal

Nvm might be just be the culprit of your terminal session taking forever to start.

Wne you first install NVM, this is added to your bashrc, or zshrc file:
```
# nvm
#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

But nobody tells you that this can really bog down the terminal every time you start a new session.

#### Solution: lazy load nvm

```
# nvm
export NVM_DIR="$HOME/.nvm"
 nvm_load () {
   . $NVM_DIR/nvm.sh
   . $NVM_DIR/bash_completion
 }
 alias node='unalias nvm; unalias node; unalias npm; nvm_load; node $@'
 alias npm='unalias nvm; unalias node; unalias npm; nvm_load; npm $@'
 alias nvm='unalias nvm; unalias node; unalias npm; nvm_load; nvm $@'

```
Source: http://broken-by.me/lazy-load-nvm/

Rejoice!

---

### List global npm packages for current node version

`npm list -g --depth 0`

---

### Upgrading NPM (with NVM)

Sometimes you will see message prompting you to update NPM. `Run npm install -g npm to update!`
```bash
   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │       New minor version of npm available! 6.4.1 → 6.13.7       │
   │   Changelog: https://github.com/npm/cli/releases/tag/v6.13.7   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯

```
- navigate to nvm's node lib folder
- (replace v8.4.0 with your version)
`cd ~/.nvm/versions/node/v8.4.0/lib/`
- update npm right there
`npm install npm`
- reopen your terminal
