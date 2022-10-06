# mathjs

处理js进行四则运算时出现的精度丢失问题

## 安装

```bash
npm i @liuyang0826/mathjs
```

## 用法

```ts
import { add, subtract, multiply, divide, chain } from '@liuyang0826/mathjs'

// 加
add(0.0023, 0.00000000000001) // 0.00230000000001

// 减
subtract(0.0023, 0.00000011) // 0.00229989

// 乘
multiply(0.0023, 100) // 0.23

// 除
divide(0.0023, 0.00001) // 230

// 链式调用
chain(3)
  .add(4)
  .multiply(2, 2)
  .add(2, 2)
  .done() // 32
```
