# Q&A

## 目前支持的版本有哪些

1.19+的所有正式版

## 为什么不直接支持win10版，而去支持BDS呢
1. 因为作者不是专门学习win32反编译的，写这东西只是兴趣爱好，没有能力对UWP应用进行hook工作
2. 客户端没有符号信息，难以进行相关操作
3. Bds也适合多人游戏，也有现成的mod框架，不用重复造轮子
4. 客户端hook容易产生作弊

## 手机版能用吗
对于手机版，插件不能直接支持本地游戏，但是你可以自己组个云服务器在上面跑服务端并加载插件即可，或者加入安装了插件的多人游戏服务器

## 关闭的功能会影响性能吗

Hook自身会带来微小的性能下降，但是完全可以忽略不计，你可以认为没有影响

## 教程看不懂咋办
？