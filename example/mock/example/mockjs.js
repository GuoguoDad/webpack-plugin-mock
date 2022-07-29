/**
 * mockjs 示例
 */
module.exports = ({ mock }) => ({
  async middleware(ctx) {
    ctx.body = mock({
      code: '000000',
      data: {
        empty: '@string(0)',
        image: "@image('400x400')",
        createTime: 1563159306104,
        randomTime: '@datetime',
        todos: [
          {
            id: '1559347200000',
            createTime: 1559347200000,
            text: '朝辞白帝彩云间',
            checked: true
          },
          {
            id: '1563159306104',
            createTime: 1563159306104,
            text: '千里江陵一日还'
          },
          {
            id: '1563183292738',
            createTime: 1563183292738,
            text: '两岸猿声啼不住'
          },
          {
            id: '1563192250643',
            createTime: 1563192250643,
            text: '轻舟已过万重山'
          }
        ]
      },
      msg: '处理成功'
    });
  }
});
