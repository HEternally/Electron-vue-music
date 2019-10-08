# 接口响应参数

## 1、个性推荐banner

路径：@/api/banner
接口：/banner

响应参数：
```js
{
  code: 200, // 获取数据成功code
  banners: [
    {
      imageUrl: 'http://p1.music.126.net/cxB1DmMfAWFiJp9-zYkDTw==/109951164394258641.jpg', // 图片链接
      targetId: 1392990601, // ID 用于获取歌单/歌曲
      targetType: 1, // ID作用 1:歌曲； 10:歌单；3000:跳外链；
      titleColor: 'red', // banner右下角title背景颜色
      typeTitle: '独家', // banner右下角title
      url: null, // 外链，若有即点击跳转
      encodeId: '1392990601', // 跟ID同值
    }
  ]
}
```

## 2、推荐歌单

路径：@/api//personalized
接口：/personalized

响应参数：
```js
{
  code: 200,
  result: [
    {
      id: 924680166, // 歌单ID
      type: 0, // 都为零
      name: "[华语速爆新歌] 最新华语音乐推荐", // 歌单名称
      copywriter: "编辑推荐：每周二精选推荐来了！优质华语新歌不要错过~", // 歌单简介
      picUrl: "https://p2.music.126.net/OcOCiKPKh9pMHa63LipQ9A==/109951164414403119.jpg", // 歌单图片
      canDislike: false, // 
      playCount: 607730110, // 播放次数
      trackCount: 20, // 歌单歌曲数
      highQuality: false,
      alg: "featured" // 标签
    }
  ]
}
```