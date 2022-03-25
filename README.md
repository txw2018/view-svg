### view-svg

在本地起一个服务，一次性预览项目中的 svg 文件

### Getting Started

```
npm install view-svg -D
```

### Usage

在 package.json 的 script 添加 view-svg

```
  "scripts": {
      view-svg: view-svg
  }
```

### options

```
  --path <value>   svg文件目录，默认 ./src/svg

  --port <value>   启动服务端口，默认 4000
```

### example

```
  "scripts": {
      view-svg: view-svg --path=./src/svg --port=4001
  }
```

### run serve

```
npm run view-svg
```
