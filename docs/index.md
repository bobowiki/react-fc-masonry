# Masonry 组件使用文档

## 简介

`Masonry` 是一个响应式瀑布流布局组件，支持自定义列数、间距、样式等，适用于图片、卡片等内容的分栏展示。

## 快速开始

### 引入组件

```tsx | pure
import { Masonry } from './react-masonry';
```

### 基本用法

```tsx | pure
<Masonry>
  {[1,2,3,4,5,6].map(i => (
    <div key={i} style={{ background: '#eee', marginBottom: 8, height: 100 }}>
      Item {i}
    </div>
  ))}
</Masonry>
```

## Props 参数说明

| 参数名           | 类型                                      | 默认值         | 说明                                                         |
|------------------|-------------------------------------------|----------------|--------------------------------------------------------------|
| breakpointCols   | `{ [key: string]: number; default: number }` | `{default:6,...}` | 响应式断点与列数配置，支持 default 和各屏幕宽度断点           |
| columnGap        | `number`                                  | `8`            | 列间距（单位 px）                                            |
| columnClassName  | `string`                                  | `''`           | 每一列的自定义 className                                     |
| children         | `React.ReactNode[]`                       | 必填           | 需要分栏显示的内容数组                                        |
| style            | `React.CSSProperties`                     | `{}`           | 容器自定义样式                                               |
| ...rest          | `any`                                     |                | 其他透传到容器的属性                                         |

### breakpointCols 示例

```tsx | pure
<Masonry
  breakpointCols={{
    default: 4,
    1200: 3,
    800: 2,
    480: 1,
  }}
>
  {/* children */}
</Masonry>
```
当屏幕宽度小于等于 1200 时显示 3 列，小于等于 800 时显示 2 列，依此类推。

## 高级用法

- 自定义每列样式：

```typescript
<Masonry columnClassName="my-column" style={{ minHeight: 400 }}>
  {/* children */}
</Masonry>
```

- 自定义列间距：

```ts
<Masonry columnGap={16}>
  {/* children */}
</Masonry>
```
## Demo

<code src="../src/react-masonry/example/index.tsx"></code>

## 注意事项

- `children` 必须是数组，建议每个元素都设置唯一的 `key`。
- 组件会自动监听窗口大小变化，动态调整列数。
- 列宽自动均分，支持自定义容器样式。

## 常见问题

**Q: 如何让每列内容高度自适应？**  
A: 只需保证每个子元素高度自定即可，Masonry 会自动分配。

**Q: 如何兼容移动端？**  
A: 通过设置合适的 `breakpointCols`，即可实现响应式布局。

---

如需更详细的示例或遇到问题，欢迎查阅源码或反馈。需要补充更多内容请告知！
