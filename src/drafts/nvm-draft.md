---
path: "/blog/how-i-nvm"
title: "NVM Tips and Tricks"
date: 2020-01-31
tags: ['tags', 'for', 'post']
---

- What is NVM
- How to Install
- Managing different versions 
- Common Issues


### Problem: slow terminal. nvm might be the culprit
#### Solution: node or npm is first executed during the current terminal session. 

Wne you first install NVM
this is added to your bashrc file, or zshrc file
```
# nvm
#export NVM_DIR="$HOME/.nvm"
#[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
#[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

However, it really bogs down the terminal and it adds a long time


```zshrc
...

# nvm
export NVM_DIR="$HOME/.nvm"
 nvm_load () {
   . $NVM_DIR/nvm.sh
   . $NVM_DIR/bash_completion
 }
 alias node='unalias nvm; unalias node; unalias npm; nvm_load; node $@'
 alias npm='unalias nvm; unalias node; unalias npm; nvm_load; npm $@'
 alias nvm='unalias nvm; unalias node; unalias npm; nvm_load; nvm $@'

###########

...

```

---
# Get a list of global NPM packages


`npm list -g --depth 0`



## Upgrading NPM via NVM

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


References: 
- http://broken-by.me/lazy-load-nvm/
- https://www.keycdn.com/blog/node-version-manager