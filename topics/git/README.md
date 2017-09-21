Git
===

* Init a bare repo ("remote", "master")

```bash
$ git init --bare
```

* Init a local repo (to be connected to remote repo)

```bash
$ git init
```

* Add file or directory to stage

```bash
$ git add <file-or-directory>
```

* Remove file or directory from stage

```bash
$ git rm --cached <file-or-directory>
```

* Commit a the changes in stage

```bash
$ git commit -m '<a short message that describes  the commit>'
```

* Push changes from local to remote repo
```bash
$ git push
```

* Pull changes from remote to local repo

```bash
$ git pull
```

* See repo configuration

```bash
$ git config --list
```
