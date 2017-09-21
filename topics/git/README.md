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

* See remotes

```bash
$ git remote -v
```

* Add remote

```bash
$ git remote add upstream <remote url>
```

* bring changes from remote to local repo

```bash
$ git fetch upstream
```

* merge changes from upstream/master to local master (master means branch "master")

```bash
$ git merge upstream/master
```

* See differences between working copy with HEAD

```bash
$ git diff
```

* See last commits

```bash
$ git log
```

* See branches

```bash
$ git branch
```

* Create new branch and switch to it

```bash
$ git checkout -b <branch name>
```

* Delete a branch

```bash
$ git branch -d <branch name>
```

