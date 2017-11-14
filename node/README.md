# NodeJS

## Introduction

### Client vs Server

### Architecture

[NodeJS](https://nodejs.org/en/)
- JavaScript runtime (runs programs on an engine / wraps an engine to run programs supported by it)
- built on V8
- uses an event-driven, non-blocking I/O model 
- lightweight and efficient
- brings one of the largest ecosystem of open source packages in the world (npm)

[V8](https://developers.google.com/v8/)
- JavaScript engine (core program, does the real work)
- Google’s
- implements ECMAScript as specified in ECMA-262
- open source 
- high-performance 
- written in C++ 
- can run standalone, or can be embedded into any C++ application
- used in Google Chrome
- runs on many platforms (Windows 7 or later, macOS 10.5+, and Linux systems that use IA-32, ARM, or MIPS processors)

### Why NodeJS?

- Event driven
- Async I/O
- [Non-blocking calls](https://www.iuliantabara.com/2015/12/nodejs-non-blocking-architecture/)
- Single-threaded
- Thousands of concurrent connections
- Great in cluster environment

## Download & Install

```bash
$ node --version
```

## Running

### From REPL

```bash
$ node

> console.log('Hello, World!')
Hello, World!
undefined
>
(To exit, press ^C again or type .exit)
>
```

### A script

```bash
$ node helloworld
Hello, World!
```

```bash
$ node count-down.js 
3
2
1
```

## Debugging

### From REPL

```bash
$ node debug count-down.js 

< Debugger listening on [::]:5858
connecting to 127.0.0.1:5858 ... ok
break in count-down.js:1
> 1 let count = process.argv[2] || 3, from = new Date().getTime(), to
  2 
  3 while (count) {
  
debug> list(10)
> 1 let count = process.argv[2] || 3, from = new Date().getTime(), to
  2 
  3 while (count) {
  4     console.log(count--)
  5 
  6     while((to = new Date().getTime()) - from < 1000); from = to
  7 }
  8 
  9 });
  
debug> sb(4)
> 1 let count = process.argv[2] || 3, from = new Date().getTime(), to
  2 
  3 while (count) {
* 4     console.log(count--)
  5 
  6     while((to = new Date().getTime()) - from < 1000); from = to
  
debug> cont
break in count-down.js:4
  2 
  3 while (count) {
> 4     console.log(count--)
  5 
  6     while((to = new Date().getTime()) - from < 1000); from = to
  
debug> exec count
3

debug> cont
< 3
break in count-down.js:4
  2 
  3 while (count) {
> 4     console.log(count--)
  5 
  6     while((to = new Date().getTime()) - from < 1000); from = to
  
debug> exec count
2

debug> cont
< 2
break in count-down.js:4
  2 
  3 while (count) {
> 4     console.log(count--)
  5 
  6     while((to = new Date().getTime()) - from < 1000); from = to
  
debug> exec count
1

debug> cont
< 1
```

### With inspect

```bash
$ node --inspect --debug-brk count-down.js 
Debugger listening on port 9229.
Warning: This is an experimental feature and could change at any time.
To start debugging, open the following URL in Chrome:
    chrome-devtools://devtools/remote/serve_file/@60cd6e859b9f557d2312f5bf532f6aec5f284980/inspector.html?experiments=true&v8only=true&ws=127.0.0.1:9229/3ce78875-3163-4b8c-9716-63f92cafa56e
Debugger attached.
3
2
1
Waiting for the debugger to disconnect...
```

### With [DevTool](https://www.npmjs.com/package/devtool)

```bash
$ npm install -g devtool

$ devtool --break count-down.js
```

## Globals

### global {}

```bash
$ node
> const hello = 'world'
undefined
> global.hello
'world'
```

### process {}

#### .cwd() & __dirname

- **.cwd()** is 'The current working directory', returns the path where node command was invoked
- **__dirname** is 'The directory of this script', references the path where the script file being runned is (is only defined within a running script)

```bash
$ node demos/cwd-dirname.js 
.cwd() /skylab/fullstack-webdev-bootcamp/topics/node
__dirname /skylab/fullstack-webdev-bootcamp/topics/node/demos

$ node

> process.cwd()
'/skylab/fullstack-webdev-bootcamp/topics/node/demos'

> __dirname
ReferenceError: __dirname is not defined
```

#### .argv

```bash
$ node process-args.js a b c
0: /node/v6.10.0/bin/node
1: /skylab/fullstack-webdev-bootcamp/topics/node/process-args.js
2: a
3: b
4: c

$ node script-args.js a b c
0: a
1: b
2: c

$ node hello Jack
Hello, Jack!
```

```bash
$ node sum-args.js 1 2 3
6

$ node sum-args.js 1.2 3.4
4.6
```

#### .env

```bash
$ node

> process.env
{ MANPATH: '<path...>/usr/share/man',
  TERM_PROGRAM: 'Apple_Terminal',
  ...
  SHELL: '/bin/bash',
  TERM: 'xterm-256color',
  ...
  PATH: '/<path-1...>/bin:/<path-2...>/bin:/<path-3...>/bin',
  NVM_NODEJS_ORG_MIRROR: 'https://nodejs.org/dist',
  PWD: '/skylab/fullstack-webdev-bootcamp/topics/node/demos',
  _system_arch: 'x86_64',
  ...
  _system_name: 'OSX',
  _: '/<path...>/.nvm/versions/node/v6.10.0/bin/node' }
  
> process.env.PATH  
'/<path-1...>/bin:/<path-2...>/bin:/<path-3...>/bin'
```

```bash  
$ export HELLO=WORLD
$ echo $HELLO
WORLD

$ node
> process.env
{ ...
  HELLO: 'WORLD',
  ...}
  
> process.env.HELLO
'WORLD'

$ unset HELLO

$ HELLO=WORLD node
> process.env.HELLO
'WORLD'

$ HELLO=WORLD node helloworld-envar.js 
WORLD
```

```bash
$ VALUES=1,2,3 node sum-envar-values.js 
6

$ VALUES=1.2,3.4 node sum-envar-values.js 
4.6
```

## [npm](https://docs.npmjs.com/getting-started/what-is-npm)

- package manager for JavaScript
- one of the world’s largest software registry

```bash
$ npm install <package-name>

$ npm install <package-name> -g (--global)
```

### [package.json](http://browsenpm.org/package.json)

```bash
$ npm init --yes
Wrote to /skylab/fullstack-webdev-bootcamp/topics/node/demos/package.json:

{
  "name": "demos",
  "version": "1.0.0",
  "description": "",
  "main": "count-down.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

```bash
$ npm install <package-name> --save

$ npm install <package-name> --save-dev
```

## Modules

### module.exports {}

### require()

```bash
$ node sum-module-require.js
```

## Core modules

### http

```bash
$ node http-server.js
```

### path

```bash
$ node file-tree.js
```

### fs

```bash
$ node list-files.js

$ node list-folders.js

$ node read-file.js
```

## Memory

```javascript

process.memoryUsage()

{
  rss: 4935680,
  heapTotal: 1826816,
  heapUsed: 650472,
  external: 49879
}
```

rss: Resident Set Size
heapTotal: Total Size of the Heap
heapUsed: Heap actually Used

heapTotal and heapUsed refer to V8's memory usage. external refers to the memory usage of C++ objects bound to JavaScript objects managed by V8.

A running program is always represented through some space allocated in memory. This space is called Resident Set. V8 uses a scheme similar to the Java Virtual Machine and divides the memory into segments:

- Code: the actual code being executed
- Stack: contains all value types (primitives like integer or Boolean) with pointers referencing objects on the heap and pointers defining the control flow of the program
- Heap: a memory segment dedicated to storing reference types like objects, strings and closures.

## [Streams](https://nodejs.org/api/stream.html)

```bash
$ node copy-file.js folder-1/helloworld.txt folder-1/folder-2/helloworld-copy.txt

$ node copy-file-streaming.js folder-1/helloworld.txt folder-1/folder-2/helloworld-copy.txt
```

```bash
$ node copy-file.js folder-1/song.mp3 folder-1/folder-2/song-copy.mp3

$ node copy-file-streaming.js folder-1/song.mp3 folder-1/folder-2/song-copy.mp3

$ node copy-file-stream-piping.js folder-1/song.mp3 folder-1/folder-2/song-copy.mp3
```

```bash
$ node copy-file.js folder-1/big-file.dat folder-1/folder-2/big-file-copy.dat

$ node copy-file-streaming.js folder-1/big-file.dat folder-1/folder-2/big-file-copy.dat

$ node copy-file-stream-piping.js folder-1/big-file.dat folder-1/folder-2/big-file-copy.dat
```

CHECK [Node.js Streams: Everything you need to know – freeCodeCamp](https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93)

PRACTICE [go on an educational stream adventure!](https://github.com/workshopper/stream-adventure)

## References

[What is the Windows equivalent of process.on('SIGINT') in node.js?](https://stackoverflow.com/questions/10021373/what-is-the-windows-equivalent-of-process-onsigint-in-node-js)



